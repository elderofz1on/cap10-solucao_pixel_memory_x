function novo_desafio () {
    basic.clearScreen()
    for (let x = 0; x <= 4; x++) {
        led.plotBrightness(x, 2, 40)
    }
    falha_x = randint(0, 3) + 1
    led.unplot(falha_x, 2)
}
input.onButtonPressed(Button.A, function () {
    if (!(iniciado)) {
        iniciado = true
        executar_funcoes()
    }
})
function verificar_resultado () {
    if (pressionado_x == falha_x) {
        pressionado_x = 0
        game.addScore(1)
        basic.pause(1000)
        velocidade += -20
        executar_funcoes()
    } else {
        basic.pause(1000)
        solucao_desafio()
        basic.pause(1000)
        game.gameOver()
    }
}
function iniciar_movimento () {
    for (let x = 0; x <= 4; x++) {
        copiax = x
        led.plotBrightness(x, 2, 40)
        basic.pause(velocidade)
    }
}
function contagem_regressiva () {
    basic.pause(1000)
    for (let indice = 0; indice <= 2; indice++) {
        basic.showNumber(3 - indice)
    }
    basic.clearScreen()
}
function solucao_desafio () {
    basic.clearScreen()
    for (let indice = 0; indice <= 4; indice++) {
        led.plotBrightness(indice, 2, 255)
    }
    led.unplot(falha_x, 2)
}
input.onButtonPressed(Button.B, function () {
    if (iniciado) {
        pressionado_x = copiax
        led.unplot(pressionado_x, 2)
    }
})
function executar_funcoes () {
    novo_desafio()
    contagem_regressiva()
    iniciar_movimento()
    verificar_resultado()
}
let copiax = 0
let pressionado_x = 0
let falha_x = 0
let velocidade = 0
let iniciado = false
iniciado = false
velocidade = 500
game.setScore(0)
basic.showArrow(ArrowNames.West)
