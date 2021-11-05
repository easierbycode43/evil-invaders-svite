<script lang="ts">
  import Phaser from 'phaser'
  import { onMount } from 'svelte'
  import { ArcadePhysics, getScene, getSpawner } from 'svelte-phaser'
  import { score, gameStatus, enemiesDefeated, sceneRestarting, currentLevel } from './store'

  import Enemy from './Enemy.svelte'
  import Bullet from './Bullet.svelte'
import { clearObjects } from './clearObjects';

  const scene = getScene()
  const { spawn } = getSpawner()

  let enemies: Array<{ x: number; y: number; key: number, animation: any }> = []
  let enemyVelocityX = 40
  let speedMultiplier = 1;

  // gradually increase velocityX by level
  // until it reaches 4x at level 40
  // let speedMultiplier = ($currentLevel / 40) * 3
  if ( $currentLevel > 0 ) {
    speedMultiplier = 1 + (($currentLevel / 10) * 3)
  }

  enemyVelocityX *= speedMultiplier

  let enemyY = 0

  // descend every 3 seconds
  const timerConfig = {
    callback: () => {
      if ($gameStatus === 'playing') {
        enemyY += 16;

        const enemies = scene.children.list.filter(
          (child) => child.name === 'enemy'
        )

        if ( enemies.length <= 20 && moveTimer.delay == 3500 ) {
          let newTimerConfig = {
            callback: timerConfig.callback,
            loop: true,
            delay: 1000
          }

          moveTimer.reset( newTimerConfig )
        }

        if ( enemies.length <= 10 && moveTimer.delay == 1000 ) {
          let newTimerConfig = {
            callback: timerConfig.callback,
            loop: true,
            delay: 500
          }

          moveTimer.reset( newTimerConfig )
        }
      }
    },
    loop: true,
    delay: 3500,
  }
  const moveTimer = scene.time.addEvent(timerConfig)

  // shoot bullet at player every 2 seconds from random enemy
  const enemyShootTimer = scene.time.addEvent({
    callback: () => {

      if ( $sceneRestarting )  return;

      if ($gameStatus === 'playing') {
        const player = scene.children.getByName(
          'player'
        ) as Phaser.Physics.Arcade.Sprite
        const enemies = scene.children.list.filter(
          (child) => child.name === 'enemy'
        )

        // get the gameobject reference of a random enemy
        const enemy = enemies[
          Phaser.Math.RND.integerInRange(0, enemies.length - 1)
        ] as Phaser.Physics.Arcade.Sprite

        if (player && enemy) {
          // get angle from enemy to player
          const angle =
            (Math.atan2(player.y - enemy.y, player.x - enemy.x) * 180) / Math.PI

          const velocity = scene.physics.velocityFromAngle(angle, 180)

          if ( enemy.texture.key == 'textures/flirty-girl' ) {
            enemy && enemy.once('animationcomplete-anims/flirtyGirl/attack', () => {
              spawn(Bullet, {
                name: 'flirtyGirlBullet',
                texture: 'textures/kiss-bullet',
                target: 'player',
                x: enemy.x,
                y: enemy.y,
                velocityX: velocity.x,
                velocityY: velocity.y,
              })

              enemy.play( 'anims/flirtyGirl/default' )
            })

            enemy.play( 'anims/flirtyGirl/attack' )
          
          } else {
            spawn(Bullet, {
              name: 'enemyBullet',
              texture: 'textures/enemy/bullet',
              target: 'player',
              x: enemy.x,
              y: enemy.y,
              velocityX: velocity.x,
              velocityY: velocity.y,
            })
          }
        }
      }
    },
    loop: true,
    delay: Math.floor( 2000 / speedMultiplier )
  })

  // cleanup timers
  onMount(() => () => {
    moveTimer.destroy()
    enemyShootTimer.destroy()
  })


  // TODO: load enemies for current level
  let currentLevelEnemies = [
    // level 1
    [ 'anims/enemy/fly', 'anims/flirtyGirl/default' ],
    
    // level 2
    [ 'anims/enemySilver/fly', 'anims/ufo/fly' ],

    // level 3
    [ 'anims/ufo/fly', 'anims/ufo/fly' ],

    // level 4
    [ 'anims/flirtyGirl/default', 'anims/flirtyGirl/default' ],

    // level 5
    [ 'anims/enemySilver/fly', 'anims/enemy/fly' ],

    // level 6
    [ 'anims/flyBrain/fly', 'anims/flirtyGirl/default' ],
  ]


  // create enemies on game start or reset
  $: if ($gameStatus === 'playing') {

    let enemyAnims = currentLevelEnemies[ $currentLevel ] ? currentLevelEnemies[ $currentLevel ] : currentLevelEnemies[ 0 ];

    moveTimer.reset(timerConfig)
    enemyY = 0

    enemies = Array.from({ length: 40 }).map((_, index) => {
      const columns = 10
      const column = index % columns
      const row = Math.floor(index / columns)

      return {
        x: column * 52,
        y: row * 41,
        // we add Date.now() so that all keys are changed between game resets
        // (if you're curious, remove Date.now() and see what happens when you reset the game)
        key: index + Date.now(),
        animation: (index % 2 == 0) ? enemyAnims[0] : enemyAnims[1]
      }
    })
  }

  // player wins
  $: if (enemies.length === 0) {

    $sceneRestarting = true
    
    // enemiesDefeated.set(true)

    // kill sprites and their tweens
    clearObjects( scene );

    // launch next level
    scene.scene.restart({ currentLevel: $currentLevel + 1 })
  }
</script>

{#each enemies as enemy (enemy.key)}
  <Enemy
    animation={enemy.animation}
    x={100 + enemy.x}
    y={70 + enemy.y + enemyY}
    velocityX={$gameStatus === 'playing' ? enemyVelocityX : 0}
    onDie={( points = 100 ) => {
      enemies = enemies.filter((e) => e !== enemy)
      score.update((prev) => prev + points)
    }}
  >
  </Enemy>
{/each}
