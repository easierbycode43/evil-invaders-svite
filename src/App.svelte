<script lang='ts'>
  import Phaser from 'phaser'
  import phaserJuice from '../public/phaserJuicePlugin.min.js'
  import { Game, Scene, Sprite, Spawner, Text } from 'svelte-phaser'
  import LoadingBar from './LoadingBar.svelte'
  import Background from './Background.svelte'
  import Player from './Player.svelte'
  import Enemies from './Enemies.svelte'
  import UI from './UI.svelte'
  import { currentLevel, gamepad, lives, sceneRestarting } from './store'

  let game
  let menu

  let gameStarted = false

  $: window.game = game
  $: window.menu = menu

  $: window.ding = $gamepad

  function preload(scene: Phaser.Scene) {
    scene.load.audio('audio/coin', 'assets/coin.mp3')
    scene.load.image('textures/copyright', 'assets/logo-dark.png')
    scene.load.image('textures/logo', 'assets/RonaGun-logo.png')
    scene.load.image('textures/starfield', 'assets/star-bg-0.png')
    scene.load.spritesheet('textures/coin', 'assets/coin.png', {
      frameWidth: 54,
      frameHeight: 54,
    })
    scene.load.spritesheet(
      'textures/coin-impact',
      'assets/coin-impact.png',
      {
          "frameWidth": 20,
          "frameHeight": 16
      }
    )
    scene.load.spritesheet('textures/enemy', 'assets/invader-gold.png', {
      frameWidth: 79,
      frameHeight: 66,
    })
    scene.load.spritesheet('textures/enemy-silver', 'assets/invader-silver.png', {
      frameWidth: 77,
      frameHeight: 63,
    })
    scene.load.spritesheet('textures/enemy/particles', 'assets/invader-gold-particles.png', {
      frameWidth: 3,
      frameHeight: 3
    })
    scene.load.spritesheet('textures/enemy-silver/particles', 'assets/invader-silver-particles.png', {
      frameWidth: 3,
      frameHeight: 3
    })
    scene.load.spritesheet('textures/explosion', 'assets/explode.png', {
      frameWidth: 128,
      frameHeight: 128,
    })
    scene.load.spritesheet('textures/flirty-girl', 'assets/flirty-gold-girl.png', {
      frameWidth: 31,
      frameHeight: 40,
    })
    scene.load.spritesheet('textures/flirty-girl/particles', 'assets/flirty-girl-particles.png', {
      frameWidth: 15,
      frameHeight: 29,
    })
    scene.load.spritesheet('textures/fly-brain', 'assets/fly-brain-32x32.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
    scene.load.spritesheet('textures/headphone-invader', 'assets/headphone-invader.png', {
      frameWidth: 300,
      frameHeight: 300
    })
    scene.load.spritesheet('textures/kiss-bullet', 'assets/kiss-bullet.png', {
      frameWidth: 25,
      frameHeight: 21,
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

  function create(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'anims/coin-impact',
      frames: scene.anims.generateFrameNumbers('textures/coin-impact'),
      // frameRate: 30,
      duration: 500,
      hideOnComplete: true
    })
    scene.anims.create({
      key: 'anims/enemy/fly',
      frames: scene.anims.generateFrameNumbers('textures/enemy'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/enemySilver/fly',
      frames: scene.anims.generateFrameNumbers('textures/enemy-silver'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/enemy/explosion',
      frames: scene.anims.generateFrameNumbers('textures/explosion'),
      frameRate: 24,
    })
    scene.anims.create({
      key: 'anims/enemy-silver/explosion',
      frames: scene.anims.generateFrameNumbers('textures/explosion'),
      frameRate: 24,
    })
    scene.anims.create({
      key: 'anims/fly-brain/explosion',
      frames: scene.anims.generateFrameNumbers('textures/explosion'),
      frameRate: 24,
    })
    scene.anims.create({
      key: 'anims/flyBrain/fly',
      frames: scene.anims.generateFrameNumbers('textures/fly-brain'),
      frameRate: 6,
      repeat: -1,
    })
    scene.anims.create({
      key: 'anims/bullet/default',
      frames: scene.anims.generateFrameNumbers('textures/player/bullet'),
      frameRate: 20,
      repeat: -1
    })
    scene.anims.create({
      key: 'anims/coin/default',
      frames: scene.anims.generateFrameNumbers('textures/coin'),
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
      key: 'anims/flirtyGirl/default',
      frames: [
        {key: 'textures/flirty-girl', frame: 0},
        {key: 'textures/flirty-girl', frame: 1}
      ],
      frameRate: 6,
      repeat: -1
    })
    scene.anims.create({
      key: 'anims/flirtyGirl/attack',
      frames: [
        {key: 'textures/flirty-girl', frame: 1},
        {key: 'textures/flirty-girl', frame: 2},
        {key: 'textures/flirty-girl', frame: 3},
        {key: 'textures/flirty-girl', frame: 4},
        {key: 'textures/flirty-girl', frame: 3},
        {key: 'textures/flirty-girl', frame: 4},
        {key: 'textures/flirty-girl', frame: 1}
      ],
      frameRate: 6
    })
    scene.anims.create({
      key: 'anims/kissBullet/default',
      frames: scene.anims.generateFrameNumbers('textures/kiss-bullet'),
      frameRate: 6,
      repeat: -1
    })
    scene.anims.create({
      key: 'anims/player/explosion',
      frames: scene.anims.generateFrameNumbers('textures/explosion'),
      frameRate: 24,
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

    scene.coinSound = scene.sound.add( 'audio/coin' )

    // set collisions on all edges of world except bottom
    scene.physics.world.setBoundsCollision(true, true, true, false)

    if ( scene.scene.settings.data['currentLevel'] ) {
      $currentLevel = scene.scene.settings.data['currentLevel']

      let levelText = scene.add.text( 800 / 2, -100, `Level ${$currentLevel + 1}`).setDepth( 30 )

      scene.physics.world.enableBody( levelText )

      scene.time.addEvent({
        delay: 250,
        callback: () => levelText.body.setVelocityY( 125 )
      })

      scene.time.addEvent({
        delay: 10000,
        callback: () => levelText.destroy()
      })
    }

    scene.input.gamepad.once('down', ( pad ) => {
        $gamepad = pad;
    })

    sceneRestarting.set( false )
  }


  let logo: Phaser.GameObjects.Sprite
  let upgradeShipText: Phaser.GameObjects.Text

  function createMenu(scene: Phaser.Scene) {
    
    let {height, width} = scene.scale
    
    // descends in over 3s
    let headphoneInvader = scene.add.sprite(width / 2, -300, 'textures/headphone-invader');
    headphoneInvader.blendMode = Phaser.BlendModes.ADD;
    // headphoneInvader.blendMode = Phaser.BlendModes.SCREEN;
    headphoneInvader.anims.create({
      key: 'anims/headphone-invader/default',
      frames: scene.anims.generateFrameNumbers('textures/headphone-invader', {
        start: 4,
        end: 8
      }),
      frameRate: 6,
      repeat: -1
    })
    headphoneInvader.play( 'anims/headphone-invader/default' )
    
    
    // create(scene)

    scene.input.on('pointerdown', () => {
      gameStarted = true
    })

    scene.copyright = scene.add.sprite(0, 0, 'textures/copyright').setOrigin(0),
    scene.copyright.x = (800 - scene.copyright.width) / 2,
    scene.copyright.y = 600,
    scene.copyright.blendMode = Phaser.BlendModes.ADD;

    var e = new TimelineMax({
			onComplete: function() {},
			onCompleteScope: this
		});

		scene.time.addEvent({
      delay: 250,
      callback: () => {
        e.to(headphoneInvader, 3, {
          y: height / 2,
          ease: Quint.easeOut,
        }, "+=0.0")
        e.addCallback(() => {
          scene.juice.pulse( headphoneInvader )
          scene.juice.flipX( headphoneInvader )
          scene.juice.wobble( headphoneInvader )
        }, "-=0.1", null, this),
        e.to(scene.copyright, 2, {
          y: 600 - scene.copyright.height - 6,
          ease: Quint.easeOut
        }, "+=0.0"),
        e.addCallback(function() {}, "-=0.1", null, this),
        e.to(logo, .9, {
          y: 75,
          ease: Quint.easeIn
        }, "-=0.8"),
        e.to(logo, .9, {
          scaleX: 1,
          scaleY: 1,
          ease: Quint.easeIn
        }, "-=0.9")
        e.to(upgradeShipText, 1.4, {
          scaleX: 2,
          scaleY: 2,
          ease: Quint.easeIn
        }, "-=0.7")
      }
    })
  }
</script>

{#if gameStarted}
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
    
    {#if !$sceneRestarting}
    <Spawner>
      <Background />
      <Enemies />
      {#if $lives > 0}
        <Player x={300} y={500} />
      {/if}
      <UI />
    </Spawner>
    {/if}
  </Scene>
</Game>
{:else}
<Game
  bind:instance={menu}
  width={800}
  height={600}
  scale={{ mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }}
  render={{ pixelArt: true }}
  physics={{ default: 'arcade' }}
  plugins={{ scene: [{ key: 'phaserJuice', plugin: phaserJuice, mapping: 'juice' }] }}
>
  <Scene key="menu" {preload} create={createMenu} let:progress>
    <slot slot="loading">
      <LoadingBar x={400} y={300} {progress} />
    </slot>

    <Background />

    <Sprite 
      bind:instance={logo}
      scale={2}
      texture='textures/logo' 
      originX={0} 
      originY={0} 
      x={(800 - 537) / 2}
      y={-124}
    />

    <Text 
      bind:instance={upgradeShipText}
      align='center'
      scaleX={-1}
      scaleY={0}
      originX={0} 
      originY={0} 
      x={(800 - 390) / 2}
      y={500}
      fontSize='18px'
      text='>  UPGRADE SHIP  <'
    />
  </Scene>
</Game>
{/if}
<style>
  :global(body) {
    background-color: black;
    cursor: none;
    margin: 0;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
