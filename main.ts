let nombre1 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        nombre1 = Math.randomRange(1, 50)
        basic.showNumber(nombre1)
        basic.pause(500)
        // Vérifier si le nombre est pair
        if (nombre1 % 2 == 0) {
            // Nombre pair : smiley heureux
            basic.showIcon(IconNames.Happy)
        } else {
            // Nombre impair : smiley triste
            basic.showIcon(IconNames.Sad)
        }
        basic.pause(1000)
        basic.clearScreen()
    }
})
