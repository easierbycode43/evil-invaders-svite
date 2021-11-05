<script lang="ts">
  import Phaser from 'phaser'
  import {
    Sprite,
    ArcadePhysics,
    ArcadeCollider,
    getScene,
    getSpawner,
    onGameEvent,
  } from 'svelte-phaser'
  import Bullet from './Bullet.svelte'
  import { gamepad, lives } from './store'

  export let x: number
  export let y: number
  export let instance: Phaser.Physics.Arcade.Sprite = undefined

  const { spawn } = getSpawner()
  const scene = getScene()
  const X_SPEED = 200
  const keys = {
    left: scene.input.keyboard.addKey('left'),
    right: scene.input.keyboard.addKey('right'),
    up: scene.input.keyboard.addKey('up'),
    shoot: scene.input.keyboard.addKey('SPACE'),
  }

  let velocityX = 0

  // handle key inputs
  onGameEvent('step', () => {
    if ($gamepad.left || keys.left.isDown) {
      velocityX = -X_SPEED
    } else if ($gamepad.right || keys.right.isDown) {
      velocityX = X_SPEED
    } else {
      velocityX = 0
    }

    if ($gamepad.A || Phaser.Input.Keyboard.JustDown(keys.shoot)) {
      spawn(Bullet, {
        name: 'playerBullet',
        texture: 'textures/player/bullet',
        target: 'enemy',
        depth: 10,
        x: instance.x,
        y: instance.y - 8,
        velocityY: -250,
      })
    }
  })
</script>

<Sprite
  bind:instance
  depth={10}
  name="player"
  texture="textures/player"
  {x}
  {y}
>
  <ArcadeCollider
    with={['enemy', 'enemyBullet', 'flirtyGirlBullet']}
    overlapOnly
    on:collide={(e) => {

      if ( e.detail.self.alpha < 1 )  return;

      if ( e.detail.other.name === 'enemy' ) {

        instance.setAlpha( 0.5 )

        let {x: instanceX, y: instanceY} = instance
        let explosion = scene.add.sprite(instanceX, instanceY, '__DEFAULT')
        explosion.anims.create({
          key: 'default',
          frames: scene.anims.generateFrameNumbers('textures/explosion'),
          frameRate: 24
        })
        explosion.on('animationcomplete-default', () => {
          explosion.destroy()

          scene.time.addEvent({
            delay: 1000,
            callback: () => instance.setAlpha( 1 )
          })
        })
        explosion.play( 'default' )
      }

      lives.update((prev) => prev - 1)
    }}
  />
  <ArcadePhysics {velocityX} collideWorldBounds />
</Sprite>
