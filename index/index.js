//caso exista um dado sem ser salvo ou apagado o runner impede das operações continuarem 
var runner = 0

//div onde sera enviada as informações dos inputs
let tips = document.getElementById('tipdata')


function runtime() {

    var account = parseFloat(document.getElementById('account').value)
    var perc = parseFloat(document.getElementById('perc').value)
    var people = parseFloat(document.getElementById('people').value)

    if (runner === 0) {
        check(account, perc, people)

    } else {
        rollagain(account, perc, people)
    }
}
//evita que os dados sejam envidas em branco
function check(account, perc, people) {
    
    let checkaccount = isNaN(account)

    let checkperc = isNaN(perc)

    let checkpeople = isNaN(people)

    if (checkaccount == false && checkperc == false && checkpeople == false) {
        tipsdata(account, perc, people)
        runner = 1

    } else {
        alert('[ERRO] \n Algum campo esta vazio \n Preencha-os antes de prosseguir')
    }
}


//pega os dados enviados pelos inputs e retorna as informações para o usuario 
function tipsdata(account, perc, people) {


    var answer = (account * (perc / 100)).toFixed(2)
    var division = (answer / people).toFixed(2)
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

function resetdata() {
    if(runner === 0){
        alert('[ERRO] \n Sem dados para apagar')
    }else{
        let erase = document.getElementById('Infos')
        tips.removeChild(erase)
        runner = 0
    }
}

function rollagain(account, perc, people) {
    resetdata()
    check(account, perc, people)
}

