
    var runner = 0

    //caso exista um dado sem ser salvo ou apagado o runner impede das operações continuarem 
    function runtime(){
        if (runner != 1){

        let account = parseFloat(document.getElementById('account').value)
        let perc = parseFloat(document.getElementById('perc').value)
        let people = parseFloat(document.getElementById('people').value)

        alert(account, perc, people)
            //evita que os inputs estejam vazios ou zerados
             switch (account, perc, people){
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
        }else{
            alert('[ERRO] Termine a operação atual')
        }
    }

    //div onde sera enviada as informações dos inputs
    let tips = document.querySelector('div#tipdata')

    //pega os dados enviados pelos inputs e retorna as informações para o usuario 
    function tipsdata(account, perc, people) {
        runner = 1

        var answer = (account * (perc / 100))
        var division = (answer/people)

        let text = document.createElement('p')
        text.id = 'Infos'
        text.innerText = `Valor da conta: ${account} \n Porcentagem: ${perc} \n Valor da Gorjeta: ${answer} \n Pessoas: ${people} \n Valor por pessoa ${division}`
        
        tips.appendChild(text)
    }
