import * as Phaser from "phaser";

const groundLevel = 470;
const baseObstacleVelocity = -400;
const obstacleConfigs = [
  {
    x: 60,
    y: 40,
  },
  {
    x: 100,
    y: 20,
  },
  {
    x: 60,
    y: 40,
    height: 100,
  },
];

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default class Runner extends Phaser.Scene {
  gameState: "firstStart" | "running" | "over" = "firstStart";
  rect1: Phaser.GameObjects.Rectangle;
  physicsGroup: Phaser.Physics.Arcade.Group;
  ground: Phaser.GameObjects.Rectangle;
  layerObstacles: Phaser.Physics.Arcade.Group;
  startPlayTime: number;
  highScore: number;
  currentScore: number;
  highScoreText: Phaser.GameObjects.Text;
  currentScoreText: Phaser.GameObjects.Text;
  flyingObstaclesGroup: Phaser.Physics.Arcade.Group;
  layerDecoration: Phaser.GameObjects.Group;
  layerBuildingBack: Phaser.GameObjects.Group;
  layerBuildingFront: Phaser.GameObjects.Group;
  layerGroundPhysics: Phaser.Physics.Arcade.Group;
  layerPlayer: Phaser.Physics.Arcade.Group;
  layerRoad: Phaser.Physics.Arcade.Group;
  startButton: Phaser.GameObjects.Image;
  interactButton: Phaser.GameObjects.Image;
  player: any;

  constructor() {
    super("Runner");
    this.startPlayTime = 0;
    this.highScore = +localStorage.getItem("highScore") ?? 0;
    this.currentScore = 0;
  }

  preload() {
    this.load.image("background", "assets/background.png");
    for (let i = 1; i <= 8; i++) {
      this.load.image(`building_${i}`, `assets/building_${i}.png`);
      this.load.image(`building_bg_${i}`, `assets/building_bg_${i}.png`);
    }
    this.load.image("decoration_bomb_atom", "assets/decoration_bomb_atom.png");
    this.load.image("decoration_ultraman", "assets/decoration_ultraman.png");
    this.load.image("decoration_godzilla", "assets/decoration_godzilla.png");
    this.load.image("decoration_ufo", "assets/decoration_ufo.png");
    this.load.image("road", "assets/road.png");

    this.load.image("obstacle_barrel", "assets/obstacle_barrel.png");
    this.load.image("obstacle_barricade", "assets/obstacle_barricade.png");
    this.load.image("obstacle_puddle", "assets/obstacle_puddle.png");
    this.load.image("obstacle_drone", "assets/obstacle_drone.png");

    this.load.image("btn_play", "assets/btn_play.png");
    this.load.image("btn_retry", "assets/btn_retry.png");

    this.load.spritesheet("player", "assets/player.png", {
      frameWidth: 72.75,
      frameHeight: 36.23,
    });
  }

  create() {
    this.physics.pause();
    this.add.image(800, 300, "background");
    this.add.rectangle(0, groundLevel, 1600, 300, 0x350c19).setOrigin(0, 0);

    this.layerDecoration = this.physics.add.group({
      allowGravity: false,
      immovable: true,
      velocityX: -30,
      frictionX: 0,
    });

    this.layerBuildingBack = this.physics.add.group({
      allowGravity: false,
      immovable: true,
      velocityX: -50,
      frictionX: 0,
    });
    this.layerBuildingFront = this.physics.add.group({
      allowGravity: false,
      immovable: true,
      velocityX: -100,
      frictionX: 0,
    });
    this.layerRoad = this.physics.add.group({
      allowGravity: false,
      immovable: true,
      velocityX: baseObstacleVelocity,
      frictionX: 0,
    });
    this.layerRoad.create(0, groundLevel, "road").setOrigin(0, 0.3).setDepth(4);

    this.layerObstacles = this.physics.add.group({
      allowGravity: false,
      immovable: true,
      velocityX: baseObstacleVelocity,
      frictionX: 0,
    });
    this.layerGroundPhysics = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });
    this.layerPlayer = this.physics.add.group({
      allowGravity: true,
    });

    this.createPlayButton();

    this.physics.world.gravity.y = 4000;

    this.highScoreText = this.add
      .text(1320, 15, `HI ${this.highScore.toString().padStart(7, "0")}`, {
        fontFamily: "'Press Start 2P'",
        fontSize: "20px",
        color: "#c1c1c1",
      })
      .setOrigin(1, 0)
      .setDepth(100);
    this.currentScoreText = this.add
      .text(1500, 15, "0".padStart(7, "0"), {
        fontFamily: "'Press Start 2P'",
        fontSize: "20px",
        color: "#fff",
      })
      .setOrigin(1, 0)
      .setDepth(100);

    [
      {
        key: "idle",
        frames: [22].map((i) => ({
          key: "player",
          frame: i,
        })),
        frameRate: 10,
        repeat: 0,
      },
      {
        key: "run",
        frames: [3, 7, 11, 15, 19, 23, 27, 31].map((i) => ({
          key: "player",
          frame: i,
        })),
        frameRate: 30,
        repeat: -1,
      },
      {
        key: "getUp",
        frames: [22, 18, 14, 10, 6, 2].map((i) => ({
          key: "player",
          frame: i,
        })),
        frameRate: 10,
        repeat: 0,
      },
      {
        key: "jump",
        frames: [28, 32, 36, 40, 44, 48, 0, 4, 8, 12, 16, 20, 24].map((i) => ({
          key: "player",
          frame: i,
        })),
        frameRate: 17,
        repeat: 0,
      },
    ].forEach((animConfig) => {
      this.anims.create(animConfig);
    });
    this.player = this.layerPlayer
      .create(125, groundLevel + 10, "player")
      .setOrigin(0, 1)
      .setDepth(10)
      .play("idle");
    this.player.body.setSize(62, 32);

    this.ground = this.add
      .rectangle(0, groundLevel + 10, 1600, 20, 0x00ff00, 0)
      .setOrigin(0, 0);

    this.layerGroundPhysics.add(this.ground);
    this.physics.add.collider(this.player, this.ground);
    this.physics.add.collider(this.player, this.layerObstacles, () =>
      this.gameOver()
    );

    const playerJump = () => {
      if (this.gameState === "firstStart" || this.gameState === "over") {
        this.startGame();
      }
      if (this.gameState === "running" && this.player.body.touching.down) {
        this.player.body.setVelocityY(-1300);
        this.player.play("jump").chain("run");
      }
    };

    this.input.keyboard.on("keydown-SPACE", playerJump);
    this.input.keyboard.on("keydown-UP", playerJump);
  }

  startGame() {
    const run = () => {
      this.player.play("run");
      //reset scene
      this.startPlayTime = this.scene.scene.time.now;
      this.layerObstacles.clear(true, true);
      this.currentScore = 0;

      //reset player
      this.player.body.setVelocityY(0);
      this.player.body.setVelocityX(0);
      this.player.setPosition(125, groundLevel + 10);

      this.gameState = "running";
      this.physics.resume();
    };

    this.interactButton.destroy();
    if (this.gameState === "firstStart") {
      this.player.play("getUp").once("animationcomplete", () => {
        run();
      });
    } else {
      run();
    }
  }

  gameOver() {
    this.player.stop().stop();
    this.gameState = "over";
    this.highScore = Math.max(this.highScore, this.currentScore);
    localStorage.setItem("highScore", this.highScore.toString());
    this.highScoreText.setText(
      `HI ${this.highScore.toString().padStart(7, "0")}`
    );
    this.layerObstacles.defaults.setVelocityX = baseObstacleVelocity;
    this.layerObstacles.setVelocityX(baseObstacleVelocity);
    this.layerRoad.defaults.setVelocityX = baseObstacleVelocity;
    this.layerRoad.setVelocityX(baseObstacleVelocity);
    this.createPlayButton(true);
  }

  createPlayButton(isRetry?: boolean) {
    this.interactButton = this.add
      .image(800, 300, isRetry ? "btn_retry" : "btn_play")
      .setDepth(100)
      .setInteractive({
        useHandCursor: true,
      })
      .on("pointerdown", () => {
        this.startGame();
      })
      .on("pointerover", () => {
        this.add.tween({
          targets: this.interactButton,
          scaleX: 1.1,
          scaleY: 1.1,
          duration: 100,
          ease: "Linear",
        });
      })
      .on("pointerout", () => {
        this.add.tween({
          targets: this.interactButton,
          scaleX: 1,
          scaleY: 1,
          duration: 100,
          ease: "Linear",
        });
      });
  }

  spawnDecoration(x) {
    const decorations = [
      "decoration_bomb_atom",
      "decoration_ultraman",
      "decoration_godzilla",
      "decoration_ufo",
    ];
    this.layerDecoration
      .create(x, groundLevel, decorations[randomInt(0, 3)])
      .setOrigin(0, 1)
      .setDepth(1).nextDecoration = randomInt(1000, 1700);
  }

  spawnBuildingBack(x) {
    const nextBuildingWidth = randomInt(-10, 50);
    const nextBuilding = this.layerBuildingBack
      .create(x, groundLevel - 20, `building_bg_${randomInt(1, 8)}`)
      .setOrigin(0, 1)
      .setDepth(2);
    this.layerBuildingBack.add(
      this.add
        .rectangle(
          x + nextBuilding.width - 5,
          groundLevel - 20,
          nextBuildingWidth + 10,
          randomInt(50, 70),
          0x751f36
        )
        .setOrigin(0, 1)
        .setDepth(2)
    );
  }

  spawnBuildingFront(x) {
    const nextBuildingWidth = randomInt(-10, 50);
    const nextBuilding = this.layerBuildingFront
      .create(x, groundLevel - 6, `building_${randomInt(1, 8)}`)
      .setOrigin(0, 1)
      .setDepth(3);
    this.layerBuildingFront.add(
      this.add
        .rectangle(
          x + nextBuilding.width - 5,
          groundLevel - 6,
          nextBuildingWidth + 10,
          randomInt(50, 70),
          0x29142a
        )
        .setOrigin(0, 1)
        .setDepth(3)
    );
  }

  spawnRoad(x) {
    this.layerRoad.create(x, groundLevel, `road`).setOrigin(0, 0.3).setDepth(4);
  }

  spawnObstacle(x) {
    const obstacleType = randomInt(1, 4);
    let obstacle = null;
    switch (obstacleType) {
      case 1:
        obstacle = this.add.image(x, groundLevel + 42, "obstacle_barrel");
        this.layerObstacles.add(obstacle);
        obstacle.body.setSize(63, 50);
        obstacle.body.setOffset(0, 0);
        obstacle.setOrigin(0, 1);

        break;
      case 2:
        obstacle = this.add.image(x, groundLevel + 17, "obstacle_barricade");
        this.layerObstacles.add(obstacle);
        obstacle.body.setSize(57, 65);
        obstacle.body.setOffset(0, 5);

        break;
      case 3:
        obstacle = this.add.image(x, groundLevel + 19, "obstacle_puddle");
        this.layerObstacles.add(obstacle);
        obstacle.body.setOffset(0, 5);
        break;
      case 4:
        obstacle = this.add.image(
          x,
          groundLevel - randomInt(5, 100),
          "obstacle_drone"
        );
        this.layerObstacles.add(obstacle);
        obstacle.body.setSize(66, 28);
        obstacle.body.setOffset(0, 0);
        break;
    }
    obstacle.setOrigin(0, 1).setDepth(5);
    obstacle.nextObstacle = randomInt(200, 600);
  }

  update(time, delta) {
    const layerDecorationLast = this.layerDecoration.getLast(true);
    if (layerDecorationLast) {
      if (
        layerDecorationLast.nextDecoration +
          layerDecorationLast.x +
          layerDecorationLast.width <
        1700
      ) {
        this.spawnDecoration(
          layerDecorationLast.nextDecoration +
            layerDecorationLast.x +
            layerDecorationLast.width
        );
      }
    } else {
      this.spawnDecoration(randomInt(1000, 2000));
    }

    // spawn building back
    const buildingBackLast = this.layerBuildingBack.getLast(true);
    if (buildingBackLast) {
      if (buildingBackLast.x + buildingBackLast.width < 1700) {
        this.spawnBuildingBack(buildingBackLast.x + buildingBackLast.width - 5);
      }
    } else {
      this.spawnBuildingBack(0);
    }

    // spawn building front
    const buildingFrontLast = this.layerBuildingFront.getLast(true);
    if (buildingFrontLast) {
      if (buildingFrontLast.x + buildingFrontLast.width < 1700) {
        this.spawnBuildingFront(
          buildingFrontLast.x + buildingFrontLast.width - 5
        );
      }
    } else {
      this.spawnBuildingFront(0);
    }

    // spawn obstacle
    const obstacleLast = this.layerObstacles.getLast(true);
    if (obstacleLast) {
      if (
        obstacleLast.nextObstacle + obstacleLast.x + obstacleLast.width <
        1700
      ) {
        this.spawnObstacle(
          obstacleLast.nextObstacle + obstacleLast.x + obstacleLast.width
        );
      }
    } else {
      this.spawnObstacle(1900);
    }

    //spawn road
    const roadLast = this.layerRoad.getLast(true);
    if (roadLast) {
      if (roadLast.x + roadLast.width < 1700) {
        this.spawnRoad(roadLast.x + roadLast.width);
      }
    }

    if (
      this.gameState === "running" &&
      time - this.startPlayTime > 15000 &&
      time - this.startPlayTime < 55000
    ) {
      this.layerObstacles.defaults.setVelocityX =
        baseObstacleVelocity - ((time - this.startPlayTime - 10000) / 1000) * 2;
      this.layerObstacles.setVelocityX(
        this.layerObstacles.defaults.setVelocityX
      );
      this.layerRoad.defaults.setVelocityX =
        this.layerObstacles.defaults.setVelocityX;
      this.layerRoad.setVelocityX(this.layerObstacles.defaults.setVelocityX);
    }
    if (this.gameState === "running") {
      this.currentScore = Math.floor((time - this.startPlayTime) / 100);
      this.currentScoreText.setText(
        `${this.currentScore.toString().padStart(7, "0")}`
      );
    }

    //delete building if it's out of the screen
    const firstBuildingBack = this.layerBuildingBack.getFirst(true);
    if (
      firstBuildingBack &&
      firstBuildingBack.x + firstBuildingBack.width < 0
    ) {
      firstBuildingBack.destroy();
    }
    const firstBuildingFront = this.layerBuildingFront.getFirst(true);
    if (
      firstBuildingFront &&
      firstBuildingFront.x + firstBuildingFront.width < 0
    ) {
      firstBuildingFront.destroy();
    }

    //delete obstacle if it's out of the screen
    const firstObstacle = this.layerObstacles.getFirst(true);
    if (firstObstacle && firstObstacle.x + firstObstacle.width < -100) {
      firstObstacle.destroy();
    }

    //delete road if it's out of the screen
    const firstRoad = this.layerRoad.getFirst(true);
    if (firstRoad && firstRoad.x + firstRoad.width < -100) {
      firstRoad.destroy();
    }

    if (this.gameState === "over") {
      this.physics.pause();
    }
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "#fff",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1600,
    height: 600,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: Runner,
};

const game = new Phaser.Game(config);
