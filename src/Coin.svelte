<script lang="ts">
    import Phaser from 'phaser'
    import { getScene, ArcadeCollider, ArcadePhysics, Sprite, onGameEvent } from 'svelte-phaser'
import { coins, currentLevel } from './store';

    const scene = getScene()

    export let x: number
    export let y: number
    export let onCoinCollected: () => any

    let instance: Phaser.Physics.Arcade.Sprite
    
    let velocityY: number = Phaser.Math.Between(-5, -60)
    let speedMultiplier = 1;

    if ( $currentLevel > 0 ) {
        speedMultiplier = Math.floor( 1 + (($currentLevel / 10) * 3) )
    }

    onGameEvent('step', () => {
        if (instance.y > 600) {
            onCoinCollected()
        }
    })
</script>

<Sprite bind:instance name='coin' {x} {y} scale={0.5} animation='anims/coin/default'>
    <ArcadePhysics 
        bounce={1}
        collideWorldBounds
        velocityX={Math.random() < 0.5 ? 15 : -15} 
        velocityY={velocityY} 
        gravityY={100 * speedMultiplier} 
        useDamping={true} 
        circle={{ radius: 14, offsetX: 0, offsetY: 0 }}
    />
    <ArcadeCollider with='player' overlapOnly on:collide={
        () => {
            let {x: coinX, y: coinY} = instance;
            onCoinCollected()
            let coinImpact = scene.add.sprite(
                coinX,
                coinY,
                'textures/coin-impact'
            ).setDepth( 9 )

            coinImpact.displayHeight    = 54;
            coinImpact.scaleX           = coinImpact.scaleY;

            coinImpact.play( 'anims/coin-impact' )

            scene.tweens.add({
                targets: coinImpact,
                alpha: 0,
                y: coinY - 10,
                duration: 500,
                ease: 'Power2',
                onComplete: coinImpact.destroy.bind(coinImpact)
            })
            
            coins.update((prev) => prev + Phaser.Math.RND.integerInRange(1, 3))
            scene.coinSound.play()
        }
    } />
</Sprite>