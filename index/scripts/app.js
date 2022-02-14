//caso exista um dado sem ser salvo ou apagado o runner impede das operações continuarem 
var runner = 0

//div onde sera enviada as informações dos inputs
let tips = document.getElementById('tipdata')



function runtime() {

    var account = parseFloat(document.getElementById('account').value)
    var perc = parseFloat(document.getElementById('perc').value)
    var people = parseFloat(document.getElementById('people').value)


    if(runner === 0){
        roll(account, perc, people)
        runner = 1
    }else{
        reroll(account, perc, people)
        runner =0
    }
}

function reroll(account, perc, people) {
    let oldtext = document.getElementById('Infos')
    tips.removeChild(oldtext)
    roll(account, perc, people)
}
//evita que os dados sejam envidas em branco
function roll(account, perc, people) {


    switch (account, perc, people) {
        case "":
            alert('[ERRO] \n Algum campo esta vazio \n Preencha-os antes de prosseguir')
            break
        case NaN:
            alert('[ERRO] \n Algum campo esta vazio \n Preencha-os antes de prosseguir')
            break
        default:
            tipsdata(account, perc, people)
            break
    }

    //pega os dados enviados pelos inputs e retorna as informações para o usuario 
    function tipsdata(account, perc, people) {

        
        var answer = (account * (perc / 100))
        var division = (answer / people)
        var text = document.createElement('p')
        text.id = 'Infos'
        if (people > 1) {
            text.innerText = `Valor da conta: ${account} \n Porcentagem: ${perc} \n Valor da Gorjeta: ${answer} \n Pessoas: ${people} \n Valor por pessoa ${division}`
            tips.appendChild(text)
        } else {
            text.innerText = `Valor da conta: ${account} \n Porcentagem: ${perc} \n Valor da Gorjeta: ${answer}`
            tips.appendChild(text)
        }
    }
}