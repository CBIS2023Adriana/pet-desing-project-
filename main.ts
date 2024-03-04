let health = 10
basic.showLeds(`
    . # # # .
    . . # . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    if (health > 8) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
