<script lang="ts">
  import Phaser from 'phaser';
  import { getScene, onArcadePhysicsEvent, onGameEvent, Sprite, ArcadePhysics, ArcadeCollider } from 'svelte-phaser'
import Coin from './Coin.svelte';

  const scene = getScene()

  export let animation: any
  export let x: number
  export let y: number
  export let velocityX: number
  export let onDie: ( score?: number ) => any

  let instance: Phaser.Physics.Arcade.Sprite

  let destroyed = false

  let emitter: any
  let emitterFlirtyGirl: any
  let emitterFlirtyGirl2: any

  // enemy explosion particle emitter
  let particles = scene.add.particles(
    'textures/enemy/particles'
  )

  emitter = particles.createEmitter({
    frequency: -1,
    blendMode   : Phaser.BlendModes.ADD,
    gravityY: 600,
    alpha: {
      start: 1,
      end: 0,
      ease: "Cubic.easeIn"
    },
    lifespan: 500,
    angle: {
      min: -180,
      max: 180
    },
    speed: {
      min: 0,
      max: 2400
    },
    scale: {
      min: 0.4,
      max: 0.6
    },
    frame: [...Array(3).keys()]
  })


  let particlesFlirtyGirl = scene.add.particles(
    'textures/flirty-girl/particles'
  )

  emitterFlirtyGirl = particlesFlirtyGirl.createEmitter({
    frequency: -1,
    blendMode   : Phaser.BlendModes.ADD,
    gravityY: 600,
    alpha: {
      start: 1,
      end: 0,
      ease: "Cubic.easeIn"
    },
    lifespan: 500,
    angle: {
      min: -180,
      max: 180
    },
    speed: {
      min: 0,
      max: 600
    },
    frame: [0]
  })

  emitterFlirtyGirl2 = particlesFlirtyGirl.createEmitter({
    frequency: -1,
    blendMode   : Phaser.BlendModes.ADD,
    gravityY: 600,
    alpha: {
      start: 1,
      end: 0,
      ease: "Cubic.easeIn"
    },
    lifespan: 500,
    angle: {
      min: -180,
      max: 180
    },
    speed: {
      min: 0,
      max: 600
    },
    frame: [1]
  })

  onGameEvent('step', () => {
      if (instance.y > 600) {
          onDie( 0 )
      }
  })
</script>

{#if destroyed}
  <Coin x={instance.x} y={instance.y} onCoinCollected={() => {
    onDie()
  }} />
{:else}
<Sprite bind:instance name="enemy" {x} {y} animation={animation}>
  <ArcadePhysics width={animation == 'anims/enemy/fly' ? 33 : 26} height={animation == 'anims/enemy/fly' ? 24 : 24} offsetX={animation == 'anims/enemy/fly' ? 23 : 4} offsetY={animation == 'anims/enemy/fly' ? 21 : 15}  {velocityX} bounce={1} collideWorldBounds />
  <ArcadeCollider with="playerBullet" overlapOnly on:collide={
    () => {
      destroyed = true;

      (animation == 'anims/enemy/fly') && emitter.explode(100, instance.x, instance.y);

      (animation == 'anims/flirtyGirl/default' || animation == 'anims/flirtyGirl/attack') && emitterFlirtyGirl.explode(1, instance.x, instance.y) && emitterFlirtyGirl2.explode(1, instance.x, instance.y);
    }
  } />
</Sprite>
{/if}