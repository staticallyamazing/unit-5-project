enum ActionKind {
    Walking,
    Idle,
    Jumping,
    newWalk
}
namespace SpriteKind {
    export const Ghost = SpriteKind.create()
    export const CharacterOption = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    badMystery()
    if (levels == 0) {
        tiles.placeOnTile(ghostEnemy, tiles.getTileLocation(4, 15))
    }
    if (levels == 1) {
        tiles.placeOnTile(ghostEnemy, location)
    }
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
})
// #8
function badMystery () {
    randomIntMysteryBad = randint(0, 3)
    resetPositionX = 20
    resetPositionY = 235
    ghostVelocityX = 50
    music.play(music.createSoundEffect(WaveShape.Square, 241, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    if (randomIntMysteryBad == 0) {
        ghostEnemy = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        ghostEnemy.setBounceOnWall(true)
        ghostEnemy.setVelocity(ghostVelocityX, 0)
    }
    if (randomIntMysteryBad == 1) {
        ghostEnemy = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        ghostEnemy.setBounceOnWall(true)
        ghostEnemy.setVelocity(ghostVelocityX, 0)
    }
    if (randomIntMysteryBad == 3) {
        ghostEnemy = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        ghostEnemy.setBounceOnWall(true)
        ghostEnemy.setVelocity(ghostVelocityX, 0)
    }
    if (randomIntMysteryBad == 2) {
        Smith.setPosition(resetPositionX, resetPositionY)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    mysteryBlock()
    if (randomIntMysteryGood == 0) {
        tiles.placeOnTile(coin, location)
    }
    if (randomIntMysteryGood == 1) {
        tiles.placeOnTile(appleGood, location)
    }
})
// #9 (check the on A button, #13
function mysteryBlock () {
    randomIntMysteryGood = randint(0, 1)
    music.play(music.randomizeSound(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear)), music.PlaybackMode.InBackground)
    if (randomIntMysteryGood == 0) {
        coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        coin,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
    }
    if (randomIntMysteryGood == 1) {
        appleGood = sprites.create(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        appleGood,
        [img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `,img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            . . . e 2 2 2 2 2 2 4 5 5 . . . 
            . . . 2 2 2 2 2 2 2 2 4 4 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . e 2 2 2 2 2 2 2 2 2 . . . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `,img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            . . . e 2 2 2 2 2 2 4 5 5 . . . 
            . . . 2 2 2 2 2 2 2 2 4 4 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `,img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            . . . e 2 2 2 2 2 2 4 5 5 . . . 
            . . . 2 2 2 2 2 2 2 2 4 4 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `],
        100,
        false
        )
    }
}
// #4, #9, #14
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numberOfJumps < numberOfJumpsAllowed) {
        numberOfJumps += 1
        Smith.vy = vy
        if (setCharacterImage == 1) {
            animation.runImageAnimation(
            Smith,
            [img`
                . . . f f f f f . . . . . . . . 
                . . f 8 8 8 8 8 f f f . . . . . 
                . . f 8 8 8 8 8 8 8 8 f . . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 8 f . . 
                . . f 8 8 8 8 f f f f 8 8 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d f d d e e f . . 
                . f e e d d d d f d d e f . . . 
                . . f e e e e e d d d f f . . . 
                . . . . f 8 8 8 8 8 8 8 8 f . . 
                . . . f 8 8 8 8 8 8 8 8 8 f . . 
                . . . f d f 6 6 f 6 6 f d d f . 
                . . . f f f 6 6 f 6 6 f f f . . 
                . . . . f f 6 6 . 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 8 8 8 8 8 f f f . . . . . 
                . . f 8 8 8 8 8 8 8 8 f . . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 8 f . . 
                . . f 8 8 8 8 f f f f 8 8 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d f d d e e f . . 
                . f e e d d d d f d d e f . . . 
                . . f e e e e e d d d f f . . . 
                . . . . f 8 8 8 8 8 8 8 8 f . . 
                . . . f 8 8 8 8 8 8 8 8 8 f . . 
                . . . f d f 6 6 f 6 6 f d d f . 
                . . . f f f 6 6 f 6 6 f f f . . 
                . . . . f f 6 6 . 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 8 8 8 8 8 f f f . . . . . 
                . . f 8 8 8 8 8 8 8 8 f . . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 8 f . . 
                . . f 8 8 8 8 f f f f 8 8 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d 2 d d e e f . . 
                . f e e d d d 1 2 d d e f f f . 
                . . f e e e e e d d d f f d d f 
                . . . . f 8 8 8 8 8 8 8 8 f f . 
                . . . f 8 8 8 8 8 8 8 8 8 f . . 
                . . . f d f 8 8 8 8 8 8 f . . . 
                . . . f f f 6 6 f 6 6 f . . . . 
                . . . . f f 6 6 f 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 8 8 8 8 8 f f f . . . . . 
                . . f 8 8 8 8 8 8 8 8 f . . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 8 f . . 
                . . f 8 8 8 8 f f f f 8 8 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d 2 d d e e f . . 
                . f e e d d d d 2 d d e f f f . 
                . . f e e e e e d d d f f d d f 
                . f d d f 8 8 8 8 8 8 8 8 f f . 
                . . f f 8 8 8 8 8 8 8 8 8 f . . 
                . . . . f f 8 8 8 8 8 8 f . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 8 8 8 8 8 f f f . . . . . 
                . . f 8 8 8 8 8 8 8 8 f . . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 8 f . . 
                . . f 8 8 8 8 f f f f 8 8 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d 2 d d e e f . . 
                . f e e d d d 1 2 d d e f f f . 
                . . f e e e e e d d d f f d d f 
                . f d d f 8 8 8 8 8 8 8 8 f f . 
                . . f f 8 8 8 8 8 8 8 8 8 f . . 
                . . . . f f 8 8 8 8 8 8 f . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 8 8 8 8 8 f f f . . . . . 
                . . f 8 8 8 8 8 8 8 8 f . . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 8 f . . 
                . . f 8 8 8 8 f f f f 8 8 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d f d d e e f . . 
                . f e e d d d d f d d e f . . . 
                . . f e e e e e d d d f f . . . 
                . . . . f 8 8 8 8 8 8 8 8 f . . 
                . . . f 8 8 8 8 8 8 8 8 8 f . . 
                . . . f d f 6 6 f 6 6 f d d f . 
                . . . f f f 6 6 f 6 6 f f f . . 
                . . . . f f 6 6 . 6 6 f . . . . 
                `],
            100,
            false
            )
        }
        if (setCharacterImage == 2) {
            animation.runImageAnimation(
            Smith,
            [img`
                . . . f f f f f . . . . . . . . 
                . . f 7 7 7 7 7 f f f . . . . . 
                . . f 7 7 7 7 7 7 7 7 f . . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 7 f . . 
                . . f 7 7 7 7 f f f f 7 7 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d f d d e e f . . 
                . f e e d d d d f d d e f . . . 
                . . f e e e e e d d d f f . . . 
                . . . . f 7 7 7 7 7 7 7 7 f . . 
                . . . f 7 7 7 7 7 7 7 7 7 f . . 
                . . . f d f 6 6 f 6 6 f d d f . 
                . . . f f f 6 6 f 6 6 f f f . . 
                . . . . f f 6 6 . 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 7 7 7 7 7 f f f . . . . . 
                . . f 7 7 7 7 7 7 7 7 f . . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 7 f . . 
                . . f 7 7 7 7 f f f f 7 7 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d f d d e e f . . 
                . f e e d d d d f d d e f . . . 
                . . f e e e e e d d d f f . . . 
                . . . . f 7 7 7 7 7 7 7 7 f . . 
                . . . f 7 7 7 7 7 7 7 7 7 f . . 
                . . . f d f 6 6 f 6 6 f d d f . 
                . . . f f f 6 6 f 6 6 f f f . . 
                . . . . f f 6 6 . 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 7 7 7 7 7 f f f . . . . . 
                . . f 7 7 7 7 7 7 7 7 f . . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 7 f . . 
                . . f 7 7 7 7 f f f f 7 7 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d 2 d d e e f . . 
                . f e e d d d d 2 d d e f f f . 
                . . f e e e e e d d d f f d d f 
                . . . . f 7 7 7 7 7 7 7 7 f f . 
                . . . f 7 7 7 7 7 7 7 7 7 f . . 
                . . . f d f 7 7 7 7 7 7 f . . . 
                . . . f f f 6 6 f 6 6 f . . . . 
                . . . . f f 6 6 f 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 7 7 7 7 7 f f f . . . . . 
                . . f 7 7 7 7 7 7 7 7 f . . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 7 f . . 
                . . f 7 7 7 7 f f f f 7 7 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d 2 d d e e f . . 
                . f e e d d d d 2 d d e f f f . 
                . . f e e e e e d d d f f d d f 
                . f d d f 7 7 7 7 7 7 7 7 f f . 
                . . f f 7 7 7 7 7 7 7 7 7 f . . 
                . . . . f f 7 7 7 7 7 7 f . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 7 7 7 7 7 f f f . . . . . 
                . . f 7 7 7 7 7 7 7 7 f . . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 7 f . . 
                . . f 7 7 7 7 f f f f 7 7 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d 2 d d e e f . . 
                . f e e d d d d 2 d d e f f f . 
                . . f e e e e e d d d f f d d f 
                . f d d f 7 7 7 7 7 7 7 7 f f . 
                . . f f 7 7 7 7 7 7 7 7 7 f . . 
                . . . . f f 7 7 7 7 7 7 f . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 7 7 7 7 7 f f f . . . . . 
                . . f 7 7 7 7 7 7 7 7 f . . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 7 f . . 
                . . f 7 7 7 7 f f f f 7 7 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d f d d e e f . . 
                . f e e d d d d f d d e f . . . 
                . . f e e e e e d d d f f . . . 
                . . . . f 7 7 7 7 7 7 7 7 f . . 
                . . . f 7 7 7 7 7 7 7 7 7 f . . 
                . . . f d f 6 6 f 6 6 f d d f . 
                . . . f f f 6 6 f 6 6 f f f . . 
                . . . . f f 6 6 . 6 6 f . . . . 
                `],
            100,
            false
            )
        }
        if (setCharacterImage == 3) {
            animation.runImageAnimation(
            Smith,
            [img`
                . . . f f f f f . . . . . . . . 
                . . f 9 9 9 9 9 f f f . . . . . 
                . . f 9 9 9 9 9 9 9 9 f . . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 9 f . . 
                . . f 9 9 9 9 f f f f 9 9 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d f d d e e f . . 
                . f e e d d d d f d d e f . . . 
                . . f e e e e e d d d f f . . . 
                . . . . f 9 9 9 9 9 9 9 9 f . . 
                . . . f 9 9 9 9 9 9 9 9 9 f . . 
                . . . f d f 6 6 f 6 6 f d d f . 
                . . . f f f 6 6 f 6 6 f f f . . 
                . . . . f f 6 6 . 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 9 9 9 9 9 f f f . . . . . 
                . . f 9 9 9 9 9 9 9 9 f . . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 9 f . . 
                . . f 9 9 9 9 f f f f 9 9 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d f d d e e f . . 
                . f e e d d d d f d d e f . . . 
                . . f e e e e e d d d f f . . . 
                . . . . f 9 9 9 9 9 9 9 9 f . . 
                . . . f 9 9 9 9 9 9 9 9 9 f . . 
                . . . f d f 6 6 f 6 6 f d d f . 
                . . . f f f 6 6 f 6 6 f f f . . 
                . . . . f f 6 6 . 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 9 9 9 9 9 f f f . . . . . 
                . . f 9 9 9 9 9 9 9 9 f . . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 9 f . . 
                . . f 9 9 9 9 f f f f 9 9 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d 2 d d e e f . . 
                . f e e d d d d 2 d d e f f f . 
                . . f e e e e e d d d f f d d f 
                . . . . f 9 9 9 9 9 9 9 9 f f . 
                . . . f 9 9 9 9 9 9 9 9 9 f . . 
                . . . f d f 9 9 9 9 9 9 f . . . 
                . . . f f f 6 6 f 6 6 f . . . . 
                . . . . f f 6 6 f 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 9 9 9 9 9 f f f . . . . . 
                . . f 9 9 9 9 9 9 9 9 f . . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 9 f . . 
                . . f 9 9 9 9 f f f f 9 9 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d 2 d d e e f . . 
                . f e e d d d d 2 d d e f f f . 
                . . f e e e e e d d d f f d d f 
                . f d d f 9 9 9 9 9 9 9 9 f f . 
                . . f f 9 9 9 9 9 9 9 9 9 f . . 
                . . . . f f 9 9 9 9 9 9 f . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 9 9 9 9 9 f f f . . . . . 
                . . f 9 9 9 9 9 9 9 9 f . . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 9 f . . 
                . . f 9 9 9 9 f f f f 9 9 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d 2 d d e e f . . 
                . f e e d d d d 2 d d e f f f . 
                . . f e e e e e d d d f f d d f 
                . f d d f 9 9 9 9 9 9 9 9 f f . 
                . . f f 9 9 9 9 9 9 9 9 9 f . . 
                . . . . f f 9 9 9 9 9 9 f . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                . . . . . f 6 6 f 6 6 f . . . . 
                `,img`
                . . . f f f f f . . . . . . . . 
                . . f 9 9 9 9 9 f f f . . . . . 
                . . f 9 9 9 9 9 9 9 9 f . . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 f . . . 
                . . f 9 9 9 9 9 9 9 9 9 9 f . . 
                . . f 9 9 9 9 f f f f 9 9 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e d d e d f d d e e f . . 
                . f e e d d d d f d d e f . . . 
                . . f e e e e e d d d f f . . . 
                . . . . f 9 9 9 9 9 9 9 9 f . . 
                . . . f 9 9 9 9 9 9 9 9 9 f . . 
                . . . f d f 6 6 f 6 6 f d d f . 
                . . . f f f 6 6 f 6 6 f f f . . 
                . . . . f f 6 6 . 6 6 f . . . . 
                `],
            100,
            false
            )
        }
        music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
    }
})
// #4
function playerSpriteStuffDetailsPlayersSpriteIsGenElseWhere () {
    vy = -100
    ay = 150
    scene.cameraFollowSprite(Smith)
    controller.moveSprite(Smith, 25, 0)
    Smith.ay = ay
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.placeOnTile(Smith, value)
    }
    info.setLife(2)
    info.setScore(0)
    numberOfJumps = 0
}
// #2
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    setCharacterImage = game.askForNumber("1 is Blue, 2 is Green, 3 is Aqua  ")
    levels += 1
    tileMap()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    levels = 1
    tileMap()
    playerSpriteStuffDetailsPlayersSpriteIsGenElseWhere()
    invisibleSprites()
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
})
// #10, 
function characterImages (characterImageNumber: number) {
    if (characterImageNumber == 1) {
        Smith.setImage(img`
            . . . f f f f f . . . . . . . . 
            . . f 8 8 8 8 8 f f f . . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 8 f . . . 
            . . f 8 8 8 8 8 8 8 8 8 f . . . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . f 8 8 8 8 f f f f 8 8 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e d d e d f d d e e f . . 
            . f e e d d d d f d d e f . . . 
            . . f e e e e e d d d f f . . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . f 8 8 8 8 8 8 8 8 8 f . . 
            . . . f d f 6 6 f 6 6 f d d f . 
            . . . f f f 6 6 f 6 6 f f f . . 
            . . . . f f 6 6 . 6 6 f . . . . 
            `)
    }
    if (characterImageNumber == 2) {
        Smith.setImage(img`
            . . . f f f f f . . . . . . . . 
            . . f 7 7 7 7 7 f f f . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 f f f f 7 7 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e d d e d f d d e e f . . 
            . f e e d d d d f d d e f . . . 
            . . f e e e e e d d d f f . . . 
            . . . . f 7 7 7 7 7 7 7 7 f . . 
            . . . f 7 7 7 7 7 7 7 7 7 f . . 
            . . . f d f 6 6 f 6 6 f d d f . 
            . . . f f f 6 6 f 6 6 f f f . . 
            . . . . f f 6 6 . 6 6 f . . . . 
            `)
    }
    if (characterImageNumber == 3) {
        Smith.setImage(img`
            . . . f f f f f . . . . . . . . 
            . . f 9 9 9 9 9 f f f . . . . . 
            . . f 9 9 9 9 9 9 9 9 f . . . . 
            . . f 9 9 9 9 9 9 9 9 9 f . . . 
            . . f 9 9 9 9 9 9 9 9 9 f . . . 
            . . f 9 9 9 9 9 9 9 9 9 9 f . . 
            . . f 9 9 9 9 f f f f 9 9 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e d d e d f d d e e f . . 
            . f e e d d d d f d d e f . . . 
            . . f e e e e e d d d f f . . . 
            . . . . f 9 9 9 9 9 9 9 9 f . . 
            . . . f 9 9 9 9 9 9 9 9 9 f . . 
            . . . f d f 6 6 f 6 6 f d d f . 
            . . . f f f 6 6 f 6 6 f f f . . 
            . . . . f f 6 6 . 6 6 f . . . . 
            `)
    }
    return characterImageNumber
}
// #1. #3, #6, #5, #11, #15, #17
function tileMap () {
    if (levels == -1) {
        tiles.setCurrentTilemap(tilemap`level9`)
        game.splash("Just reset")
        numberOfJumpsAllowed = 2
    }
    if (levels == 0) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        tiles.setCurrentTilemap(tilemap`level11`)
        numberOfJumpsAllowed = 0
        ghostTellsControllerButtons = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Ghost)
        ghostTellsControllerButtons.sayText("A button(Not the key)/Spacebar is jump, you can't jump in here. You can double jump, A key moves you to the left, D moves you right. These are your character options. Run over the flag when you are ready, its in the far right corner. ", 15000, true)
        characterOption1 = sprites.create(img`
            . . . f f f f f . . . . . . . . 
            . . f 8 8 8 8 8 f f f . . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 8 f . . . 
            . . f 8 8 8 8 8 8 8 8 8 f . . . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . f 8 8 8 8 f f f f 8 8 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e d d e d f d d e e f . . 
            . f e e d d d d f d d e f . . . 
            . . f e e e e e d d d f f . . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . f 8 8 8 8 8 8 8 8 8 f . . 
            . . . f d f 6 6 f 6 6 f d d f . 
            . . . f f f 6 6 f 6 6 f f f . . 
            . . . . f f 6 6 . 6 6 f . . . . 
            `, SpriteKind.CharacterOption)
        characterOption2 = sprites.create(img`
            . . . f f f f f . . . . . . . . 
            . . f 7 7 7 7 7 f f f . . . . . 
            . . f 7 7 7 7 7 7 7 7 f . . . . 
            . . f 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 f f f f 7 7 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e d d e d f d d e e f . . 
            . f e e d d d d f d d e f . . . 
            . . f e e e e e d d d f f . . . 
            . . . . f 7 7 7 7 7 7 7 7 f . . 
            . . . f 7 7 7 7 7 7 7 7 7 f . . 
            . . . f d f 6 6 f 6 6 f d d f . 
            . . . f f f 6 6 f 6 6 f f f . . 
            . . . . f f 6 6 . 6 6 f . . . . 
            `, SpriteKind.CharacterOption)
        characterOption3 = sprites.create(img`
            . . . f f f f f . . . . . . . . 
            . . f 9 9 9 9 9 f f f . . . . . 
            . . f 9 9 9 9 9 9 9 9 f . . . . 
            . . f 9 9 9 9 9 9 9 9 9 f . . . 
            . . f 9 9 9 9 9 9 9 9 9 f . . . 
            . . f 9 9 9 9 9 9 9 9 9 9 f . . 
            . . f 9 9 9 9 f f f f 9 9 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e d d e d f d d e e f . . 
            . f e e d d d d f d d e f . . . 
            . . f e e e e e d d d f f . . . 
            . . . . f 9 9 9 9 9 9 9 9 f . . 
            . . . f 9 9 9 9 9 9 9 9 9 f . . 
            . . . f d f 6 6 f 6 6 f d d f . 
            . . . f f f 6 6 f 6 6 f f f . . 
            . . . . f f 6 6 . 6 6 f . . . . 
            `, SpriteKind.CharacterOption)
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            tiles.placeOnTile(ghostTellsControllerButtons, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            tiles.placeOnTile(characterOption1, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.placeOnTile(characterOption2, value)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            tiles.placeOnTile(characterOption3, value)
        }
    }
    if (levels == 1) {
        characterImages(setCharacterImage)
        console.log(setCharacterImage)
        tiles.setCurrentTilemap(tilemap`level1`)
        for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
            tiles.placeOnTile(Smith, value)
        }
        invisibleSprites()
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        numberOfJumpsAllowed = 2
        sprites.destroyAllSpritesOfKind(SpriteKind.CharacterOption)
    }
    if (difficulty == 2) {
        levels = -1
    }
    if (levels == 2) {
        tiles.setCurrentTilemap(tilemap`level8`)
        for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
            tiles.placeOnTile(Smith, value)
        }
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        sprites.destroyAllSpritesOfKind(SpriteKind.Ghost)
        ghostLevel2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Ghost)
        ghostLevel2.setPosition(50, 200)
        ghostLevel2.sayText("This will be more difficult, Careful Invisible Tiles...", 5000, false)
    }
    if (levels == 3) {
        game.gameOver(true)
    }
}
function playerGenLevel0 () {
    Smith = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.setVelocity(0, -50)
    sprites.destroy(otherSprite, effects.rings, 100)
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Square, 241, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    randomLifeFromFood = randint(0, 1)
    if (randomLifeFromFood == 0) {
        Smith.sayText("Unlucky, I didn't get an extra life...", 1000, false)
    }
    if (randomLifeFromFood == 1) {
        Smith.sayText("I got an extra life!", 1000, false)
        info.changeLifeBy(1)
    }
})
function invisibleSprites () {
    invisibleWarningMiddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ghost)
    invisibleWarningMiddle.setPosition(50, 200)
    invisibleWarningMiddle.sayText("1 Step Back 2 Forward, Beware Red Crates", 5000, false)
    invisibleWarningMiddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ghost)
    invisibleWarningMiddle.setPosition(150, 200)
    invisibleWarningMiddle.sayText("Beware invisible tiles.", 8000, false)
}
// #7
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.vy > otherSprite.vy) {
        sprites.destroy(otherSprite, effects.fire, 500)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    } else {
        sprites.destroy(otherSprite, effects.fire, 500)
        info.changeLifeBy(-1)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
    }
})
// #16, #18
let invisibleWarningMiddle: Sprite = null
let randomLifeFromFood = 0
let ghostLevel2: Sprite = null
let characterOption3: Sprite = null
let characterOption2: Sprite = null
let characterOption1: Sprite = null
let ghostTellsControllerButtons: Sprite = null
let ay = 0
let setCharacterImage = 0
let vy = 0
let numberOfJumpsAllowed = 0
let numberOfJumps = 0
let appleGood: Sprite = null
let coin: Sprite = null
let randomIntMysteryGood = 0
let Smith: Sprite = null
let ghostVelocityX = 0
let resetPositionY = 0
let resetPositionX = 0
let randomIntMysteryBad = 0
let ghostEnemy: Sprite = null
let difficulty = 0
let levels = 0
levels = 0
let name = game.askForString("Name", 5)
difficulty = game.askForNumber("Hard is 1, Baby is 2 Repeat this forever this is a choice. ")
while (difficulty < 1 || difficulty > 2) {
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    difficulty = game.askForNumber("This is a choice, your choice. ")
}
tileMap()
playerGenLevel0()
playerSpriteStuffDetailsPlayersSpriteIsGenElseWhere()
game.onUpdate(function () {
    if (Smith.vy == 0) {
        numberOfJumps = 0
    }
})
