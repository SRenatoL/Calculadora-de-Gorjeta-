let tips = document.getElementById('tipscontent')
let runner = 0
let checked = 0
let old = []

function runtime() {

    var account = parseInt(document.querySelector('input[class="Value"]').value)
    var perc = parseInt(document.querySelector('input[class="Percent"]').value)
    var people = parseInt(document.querySelector('input[class="People"]').value
    )
    let values = new bill(account, perc, people)
    values.firstcheck()
}
function resetdata() {
    if (runner == 0) {
        alert("Sem dados a serem apagados")
    } else {
        old.slice(0, 3)
        let erase = document.getElementById('textcontent')
        tips.removeChild(erase)
        runner = 0
    }
}

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

        if (checkvalue == true || this.value === 0) {
            alert("Digite um valor de conta valido!")
        } else if (checkperc == true || this.percentage === 0) {
            alert("Digite um valor de porcentagem valido!")
        } else if (checkpeople == true || this.people === 0) {
            alert("Digite um numero de pessoas valido!")
        } else {
            this.calc()
        }

    } NewCheck() {

        var newAccount = parseInt(document.querySelector('input[class="Value"]').value)
        var newPerc = parseInt(document.querySelector('input[class="Percent"]').value)
        var newPeople = parseInt(document.querySelector('input[class="People"]').value)

        let checkA = newAccount !== old[0]
        let checkPerc = newPerc !== old[1]
        let checkPeop = newPeople !== old[2]

        switch (checkA, checkPerc, checkPeop) {
            case true:
                resetdata()
                runtime()
                break
            default:
                alert("Apague ou Modifique os dados para prosseguir")
                break
        }
    }

    calc() {
        if (runner == 0) {
            runner++
            var answer = (this.value * this.percentage).toFixed(2)
            var division = (answer / this.people).toFixed(2)
            let text = document.createElement('div')
            text.id = "textcontent"
            if (this.people > 1) {
                text.innerHTML = `<p><mark id="M01" class="Marker"> Valor da conta:</mark> ${this.value}</p>  <p><mark id="M02" class="Marker">Porcentagem:</mark> ${this.percentage}</p>  <p><mark id="M03" class="Marker">Valor da Gorjeta:</mark> ${answer}</p>
                <p><mark id="M04" class="Marker">Pessoas:</mark> ${this.people}</p>  <p><mark id="M05" class="Marker">Valor por pessoa:</mark> ${division}</p>`
                old = [this.value, this.percentage, this.people]
                tips.appendChild(text)

            } else {
                text.innerHTML = `<p><mark id="M01" class="Marker"> Valor da conta:</mark> ${this.value}</p>  <p><mark id="M02" class="Marker">Porcentagem:</mark> ${this.percentage}</p>  <p><mark id="M03" class="Marker">Valor da Gorjeta:</mark> ${answer}</p>`
                tips.appendChild(text)
                old = [this.value, this.percentage, this.people]
            }
        } else {
            this.NewCheck()
        }
    }

}

