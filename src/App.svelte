<script>
  import Phaser from 'phaser'
  import { Game, Scene, Text, Spawner } from 'svelte-phaser'
  import LoadingBar from './LoadingBar.svelte'
  import Background from './Background.svelte'
  import Player from './Player.svelte'
  import Enemies from './Enemies.svelte'
  import UI from './UI.svelte'
  import { lives } from './store'

  let game

  $: window.game = game

  function preload(scene) {
    scene.load.image('textures/starfield', 'assets/star-bg-0.png')
    scene.load.spritesheet('textures/enemy', 'assets/invader-gold.png', {
      frameWidth: 79,
      frameHeight: 66,
    })
    scene.load.spritesheet('textures/enemy/particles', 'assets/invader-gold-particles.png', {
      frameWidth: 3,
      frameHeight: 3
    })
    scene.load.spritesheet('textures/explosion', 'assets/explode.png', {
      frameWidth: 128,
      frameHeight: 128,
    })
    scene.load.spritesheet('textures/ufo', 'assets/ufo.png', {
      frameWidth: 32,
      frameHeight: 30
    })
    scene.load.spritesheet('textures/ufo/explosion', 'assets/ufo-explosion.png', {
        frameWidth: 32,
        frameHeight: 30
    })
    scene.load.image('textures/player', 'assets/ship.png')
    scene.load.spritesheet('textures/player/bullet', 'assets/sperm.png', {
      frameWidth: 6,
      frameHeight: 22
    })
    scene.load.image('textures/enemy/bullet', 'assets/enemy-bullet.png')
  }

  function create(scene) {
    scene.anims.create({
      key: 'anims/enemy/fly',
      frames: scene.anims.generateFrameNumbers('textures/enemy'),
      frameRate: 10,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/enemy/explosion',
      frames: scene.anims.generateFrameNumbers('textures/explosion'),
      frameRate: 24,
    })
    scene.anims.create({
      key: 'anims/bullet/default',
      frames: scene.anims.generateFrameNumbers('textures/player/bullet'),
      frameRate: 20,
      repeat: -1
    })
    scene.anims.create({
      key: 'anims/enemyBullet/default',
      frames: [{key: 'textures/enemy/bullet', frame: 0}],
      frameRate: 20,
      repeat: -1
    })
    scene.anims.create({
      key: 'anims/ufo/explosion',
      frames: scene.anims.generateFrameNumbers('textures/ufo/explosion'),
      frameRate: 30
    })
    scene.anims.create({
      key: 'anims/ufo/fly',
      frames: scene.anims.generateFrameNumbers('textures/ufo'),
      frameRate: 4,
      repeat: -1,
    })
  }
</script>

<Game
  bind:instance={game}
  width={800}
  height={600}
  physics={{ default: 'arcade' }}
  scale={{ mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }}
  render={{ pixelArt: true }}
>
  <Scene key="main" {preload} {create} let:progress>
    <slot slot="loading">
      <LoadingBar x={400} y={300} {progress} />
    </slot>

    <Spawner>
      <Background />
      <Enemies />
      {#if $lives > 0}
        <Player x={300} y={500} />
      {/if}
      <UI />
    </Spawner>
  </Scene>
</Game>

<style>
  :global(body) {
    margin: 0;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
