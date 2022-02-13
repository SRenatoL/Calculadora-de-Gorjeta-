    let account = document.querySelector('input#account').value
    let perc = document.querySelector('input#perc').value
    let people = document.querySelector('input#people').value

    var runner = 0

    //caso exista um dado sem ser salvo ou apagado o runner impede das operações continuarem 
    function runtime(){
        if (runner == 0){
            //evita que os inputs estejam vazios ou zerados
            switch (account, perc, people){
                case "":
                    alert('[ERRO] \n Algum campo esta vazio \n Preencha-os antes de prosseguir')
                break
                default:
                    tipsdata()
                break
            }
        }else{
            alert('[ERRO] Termine a operação atual')
        }
    }

    //div onde sera enviada as informações dos inputs
    let tips = document.querySelector('div#tipdata')

    //pega os dados enviados pelos inputs, faz os calculos e retorna as informações para o usuario 
    function tipsdata() {
        runner = 1
        var accountform = parseInt(account)
        var percform = parseInt(perc)
        var peopleform = parseInt(people)
        var answer = (accountform * (percform / 100))
        var division = (answer/peopleform)

        let text = document.createElement('p')
        text.id = 'Infos'
        text.innerText = `Valor da conta: ${accountform} \n Porcentagem: ${percform} \n Valor da Gorjeta: ${answer} \n Pessoas: ${peopleform} \n Valor por pessoa ${division}`
        
        tips.appendChild(text)
    }