<script lang="ts">
    import Phaser from 'phaser'
    import { getScene, ArcadeCollider, ArcadePhysics, Sprite, onGameEvent } from 'svelte-phaser'
import { coins } from './store';

    const scene = getScene()

    export let x: number
    export let y: number
    export let onCoinCollected: () => any

    let instance: Phaser.Physics.Arcade.Sprite
    
    let velocityY: number = 40

    onGameEvent('step', () => {
        if (instance.y > 600) {
            onCoinCollected()
        }
    })
</script>

<Sprite bind:instance name='coin' {x} {y} scale={0.5} animation='anims/coin/default'>
    <ArcadePhysics {velocityY} />
    <ArcadeCollider with='player' overlapOnly on:collide={
        () => {
            onCoinCollected()
            coins.update((prev) => prev + Phaser.Math.RND.integerInRange(1, 3))
            scene.coinSound.play()
        }
    } />
</Sprite>