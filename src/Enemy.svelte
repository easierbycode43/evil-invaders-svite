<script lang="ts">
  import Phaser from 'phaser';
  import { getScene, Sprite, ArcadePhysics, ArcadeCollider } from 'svelte-phaser'
import Coin from './Coin.svelte';

  const scene = getScene()

  export let animation: any
  export let x: number
  export let y: number
  export let velocityX: number
  export let onDie: () => any

  let instance: Phaser.Physics.Arcade.Sprite

  let destroyed = false

  let emitter: any

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
</script>

{#if destroyed}
  <Coin x={instance.x} y={instance.y} onCoinCollected={() => {
    onDie()
  }} />
{:else}
<Sprite bind:instance name="enemy" {x} {y} animation={animation}>
  <ArcadePhysics {velocityX} collideWorldBounds />
  <ArcadeCollider with="playerBullet" overlapOnly on:collide={
    () => {
      destroyed = true;

      // emitter explode if enemy.animation == 'anims/ufo/fly'
      (animation == 'anims/enemy/fly') && emitter.explode(100, instance.x, instance.y)

      // onDie()
    }
  } />
</Sprite>
{/if}