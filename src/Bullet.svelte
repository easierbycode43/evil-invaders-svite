<script lang="ts">
  import { onMount } from 'svelte'
  import {
    Sprite,
    ArcadePhysics,
    ArcadeCollider,
    getScene,
  } from 'svelte-phaser'
  import Explosion from './Explosion.svelte'

  export let name: string
  export let target: string
  export let texture: string
  export let depth = 10
  export let x: number
  export let y: number
  export let velocityX = 0
  export let velocityY = 0
  export let onDestroy: () => any

  let instance: Phaser.Physics.Arcade.Sprite
  let destroyed = false
  let destroyedEnemyType: string
  let destroyedPosition: { x: number; y: number }
  let explosionAnimation: string

  const scene = getScene()

  let destroyTimer = scene.time.addEvent({
    callback: () => {
      if (!destroyed) {
        onDestroy()
      }
    },
    delay: 3000,
  })

  onMount(() => () => destroyTimer.destroy())
</script>

{#if destroyed}
  <Explosion
    animation={explosionAnimation}
    x={destroyedPosition.x}
    y={destroyedPosition.y - 32}
    on:animationcomplete={() => onDestroy()}
  />
{:else}
  <Sprite  
    animation={name === 'enemyBullet' ? 'anims/enemyBullet/default' : name === 'flirtyGirlBullet' ? 'anims/kissBullet/default' : 'anims/bullet/default'} 
    bind:instance 
    {depth} 
    {name} 
    {texture} 
    {x} 
    {y}
    scale={name === 'flirtyGirlBullet' ? 0.5 : 1}
  >
    <ArcadeCollider
      with={target}
      overlapOnly
      on:collide={(e) => {
        
        destroyedEnemyType = e.detail.other.texture.key

        if ( destroyedEnemyType === 'textures/flirty-girl' )  return onDestroy();

        destroyed = true
        explosionAnimation = destroyedEnemyType.replace( 'textures', 'anims' ) + '/explosion'
        destroyedPosition = { x: instance.x, y: instance.y }
      }}
    />
    <ArcadePhysics {velocityY} {velocityX} />
  </Sprite>
{/if}
