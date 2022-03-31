class bill{
    constructor(value, percentage, people){
        this.value = value
        this.percentage = percentage/100
        this.people = people
    }
    firstcheck(){
        let checkvalue = isNaN(this.value)
        let checkperc = isNaN(this.percentage)

        switch (checkvalue, checkperc){
           case checkvalue == false || this.value == undefined:
                alert("Digite um valor de conta valido!")
           break
           default:
                alert("É um numero")
                alert(this.value)
            break
        }
        
       alert(checkvalue)
    } 
}

var account = parseFloat(document.getElementById('account').value)
var perc = parseFloat(document.getElementById('perc').value)
var people = parseFloat(document.getElementById('people').value)

function runtime(){
    alert("Buh")
    let values = new bill(account, perc, people)
    values.firstcheck()
}
function resetdata(){
    alert("Buh2")
}