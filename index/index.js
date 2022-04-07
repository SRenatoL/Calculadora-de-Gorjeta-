let tips = document.getElementById('tipscontent')
let runner = 0

class bill {
    constructor(value, percentage, people) {
        this.value = value
        this.percentage = percentage / 100
        this.people = people
    }
    firstcheck() {
        let checkvalue = isNaN(this.value)
        let checkperc = isNaN(this.percentage)
        let checkpeople = isNaN(this.people)

        switch (checkvalue, checkperc, checkpeople) {
            case checkvalue == false || this.value == undefined:
                alert("Digite um valor de conta valido!")
                break
            case checkperc == false || this.percentage == undefined:
                alert("Digite um valor de porcentagem valido!")
                break
            case checkpeople == false || this.people == undefined:
                alert("Digite uma quantidade de pessoas valido!")
                break
            default:
                this.calc()
                break
        }
    }
    calc() {
        if (runner == 0) {
            runner++
            var answer = (this.value * (this.percentage / 100)).toFixed(2)
            var division = (answer / this.people).toFixed(2)
            let text = document.createElement('div')
            text.id = "textcontent"
            if (this.people > 1) {
                text.innerHTML = `<p><mark id="M01" class="Marker"> Valor da conta:</mark> ${this.value}</p>  <p><mark id="M02" class="Marker">Porcentagem:</mark> ${this.percentage}</p>  <p><mark id="M03" class="Marker">Valor da Gorjeta:</mark> ${answer}</p>
                <p><mark id="M04" class="Marker">Pessoas:</mark> ${this.people}</p>  <p><mark id="M05" class="Marker">Valor por pessoa:</mark> ${division}</p>`
                tips.appendChild(text)
            } else {
                text.innerHTML = `<p><mark id="M01" class="Marker"> Valor da conta:</mark> ${this.value}</p>  <p><mark id="M02" class="Marker">Porcentagem:</mark> ${this.percentage}</p>  <p><mark id="M03" class="Marker">Valor da Gorjeta:</mark> ${answer}</p>`
                tips.appendChild(text)
            }
        } else {
            alert("Apague os dados antes de prosseguir !")
        }

    }
}


function runtime() {
    var account = document.querySelector('input[class="Value"]').value
    var perc = document.querySelector('input[class="Percent"]').value
    var people = document.querySelector('input[class="People"]').value

    let values = new bill(account, perc, people)
    values.firstcheck()
}
function resetdata() {
    if (runner == 0) {
        alert("Sem dados a serem apagados")
    } else {
        let erase = document.getElementById('textcontent')
        tips.removeChild(erase)
        runner = 0
    }
}
