let tips = document.getElementById('tipscontent')
let runner = 0
let checked = 0
let old = []

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

        alert(checkvalue)
        alert(this.value)
        alert(typeof(this.value))
        

        switch (checkvalue, checkperc, checkpeople) {
            case checkvalue === true:
                alert("Digite um valor de conta valido!")
                break
            case checkperc == true:
                alert("Digite um valor de porcentagem valido!")
                break
            case checkpeople == true:
                alert("Digite uma quantidade de pessoas valido!")
                break
            default:
                this.calc()
                break
        }
    } NewCheck() {

        var newAccount = document.querySelector('input[class="Value"]').value
        var newPerc = document.querySelector('input[class="Percent"]').value
        var newPeople = document.querySelector('input[class="People"]').value

        let checkA = newAccount != old[0]
        let checkPerc = newPerc != old[1]
        let checkPeop = newPeople != old[2]

        switch (checkA, checkPerc, checkPeop) {
            case checkA == false:
                alert("Apague ou Modifique os dados para prosseguir")
                break
            case checkPerc == false:
                alert("Apague ou Modifique os dados para prosseguir")
                break
            case checkPeop == false:
                alert("Apague ou Modifique os dados para prosseguir")
                break
            default:
                resetdata()
                runtime()
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



