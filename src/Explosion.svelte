<script lang="ts">
  import { Sprite } from 'svelte-phaser'

  export let x: number
  export let y: number
  export let animation: string = "anims/enemy/explosion"
</script>

<Sprite
  {x}
  {y}
  depth={30}
  animation={animation}
  scale={animation == "anims/ufo/explosion" ? 1 : 0.75}
  on:animationcomplete
/>
