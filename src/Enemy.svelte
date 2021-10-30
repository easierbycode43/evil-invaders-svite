<script lang="ts">
  import Phaser from 'phaser'
  import { Sprite, ArcadePhysics, ArcadeCollider } from 'svelte-phaser'

  export let animation: any
  export let x: number
  export let y: number
  export let velocityX: number
  export let onDie: () => any
</script>

<Sprite name="enemy" {x} {y} animation={animation}>
  <ArcadePhysics {velocityX} collideWorldBounds />
  <ArcadeCollider with="playerBullet" overlapOnly on:collide={onDie} />
</Sprite>
