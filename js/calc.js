//Markup
var custo = document.getElementById('custo0')
custo.addEventListener('input', calc0)
var markup = document.getElementById('markup0')
markup.addEventListener('input', calc1)
var venda = document.getElementById('venda0')
venda.addEventListener('input', calc2)
var taxa = document.getElementById('taxa0')
taxa.addEventListener('keyup', outros0)
var frete = document.getElementById('frete0')
frete.addEventListener('input', outros1)
var refvenda = 0
var margem = document.getElementById('margem0')

function calc0(){
    let calculo0= parseFloat(custo.value || 0) + (parseFloat(custo.value) * parseFloat(markup.value || 0) / 100)
    venda.value = calculo0.toFixed(2)
    let calculo0b = 100 - (parseFloat(custo.value || 0) + parseFloat(frete.value || 0) + (parseFloat(venda.value || 0) * parseFloat(taxa.value|| 0) / 100)) / parseFloat(venda.value || 0) * 100
    margem.value = calculo0b.toFixed(2)
}

function calc1(){
    custo.value = parseFloat(custo.value).toFixed(2)
    let calculo1= parseFloat(custo.value || 0) + (parseFloat(custo.value) * parseFloat(markup.value || 0) / 100)
    venda.value = calculo1.toFixed(2)
    refvenda = parseFloat(venda.value)
    let calculo1b = 100 - (parseFloat(custo.value || 0) + parseFloat(frete.value || 0) + (parseFloat(venda.value || 0) * parseFloat(taxa.value|| 0) / 100)) / parseFloat(venda.value || 0) * 100
    margem.value = calculo1b.toFixed(2)
}

function calc2(){
    let calculo2 = (parseFloat(venda.value || 0) / parseFloat(custo.value || 0) - 1) *100
    markup.value = calculo2.toFixed(2)
    refvenda = parseFloat(venda.value)
    let calculo2b = 100 - (parseFloat(custo.value || 0) + parseFloat(frete.value || 0) + (parseFloat(venda.value || 0) * parseFloat(taxa.value|| 0) / 100)) / parseFloat(venda.value || 0) * 100
    margem.value = calculo2b.toFixed(2)
}

function outros0(){
    let outro0 = (parseFloat(refvenda) + parseFloat(frete.value || 0)) / ((100 - parseFloat(taxa.value || 0)) / 100) || parseFloat(refvenda)
    venda.value = outro0.toFixed(2)
    let outro0a = (parseFloat(venda.value || 0) / parseFloat(custo.value || 0) - 1) *100
    markup.value = outro0a.toFixed(2)
    let outro0b = 100 - (parseFloat(custo.value || 0) + parseFloat(frete.value || 0) + (parseFloat(venda.value || 0) * parseFloat(taxa.value|| 0) / 100)) / parseFloat(venda.value || 0) * 100
    margem.value = outro0b.toFixed(2)
}

function outros1(){
    let outro1 = (parseFloat(refvenda) + parseFloat(frete.value || 0)) / ((100 - parseFloat(taxa.value || 0)) / 100) || parseFloat(refvenda)
    venda.value = outro1.toFixed(2)
    let outro1a = (parseFloat(venda.value || 0) / parseFloat(custo.value || 0) - 1) *100
    markup.value = outro1a.toFixed(2)
    let outro1b = 100 - (parseFloat(custo.value || 0) + parseFloat(frete.value || 0) + (parseFloat(venda.value || 0) * parseFloat(taxa.value|| 0) / 100)) / parseFloat(venda.value || 0) * 100
    margem.value = outro1b.toFixed(2)
}
//Margem
var custo0 = document.getElementById('custo')
custo0.addEventListener('input', calc3)
var margem0 = document.getElementById('margem')
margem0.addEventListener('input', calc4)
var venda0 = document.getElementById('venda')
venda0.addEventListener('input', calc5)
var taxa0 = document.getElementById('taxa')
taxa0.addEventListener('keyup', outros2)
var frete0 = document.getElementById('frete')
frete0.addEventListener('input', outros3)
var refvenda0 = 0
var markup0 = document.getElementById('markup')

function calc3(){
    let calculo3= parseFloat(custo0.value|| 0) / ((parseFloat(margem0.value || 0) / 100) - 1) * -1
    venda0.value = calculo3.toFixed(2)
    let calculo4b = (parseFloat(venda0.value || 0) / parseFloat(custo0.value || 0) - 1) *100
    markup0.value = calculo4b.toFixed(2)
}

function calc4(){
    custo0.value = parseFloat(custo0.value).toFixed(2)
    let calculo4= parseFloat(custo0.value || 0) / ((parseFloat(margem0.value || 0) / 100) - 1) * -1
    venda0.value = calculo4.toFixed(2)
    let calculo4b = (parseFloat(venda0.value || 0) / parseFloat(custo0.value || 0) - 1) *100
    markup0.value = calculo4b.toFixed(2)
    refvenda0 = parseFloat(venda0.value)
}

function calc5(){
    let calculo5 = 100 - (parseFloat(custo0.value || 0) + parseFloat(frete0.value || 0) + (parseFloat(venda0.value || 0) * parseFloat(taxa0.value|| 0) / 100)) / parseFloat(venda0.value || 0) * 100
    margem0.value = calculo5.toFixed(2)
    let calculo5b = (parseFloat(venda0.value || 0) / parseFloat(custo0.value || 0) - 1) *100
    markup0.value = calculo5b.toFixed(2)
    refvenda0 = parseFloat(venda0.value)
}

function outros2(){
    let outro2 = (parseFloat(refvenda0) + parseFloat(frete0.value || 0)) / ((100 - parseFloat(taxa0.value || 0)) / 100) || parseFloat(refvenda0)
    venda0.value = outro2.toFixed(2)
    let outro2a = 100 - (parseFloat(custo0.value || 0) + parseFloat(frete0.value || 0) + (parseFloat(venda0.value || 0) * parseFloat(taxa0.value|| 0) / 100)) / parseFloat(venda0.value || 0) * 100
    margem0.value = outro2a.toFixed(2)
    let outro2b = (parseFloat(venda0.value || 0) / parseFloat(custo0.value || 0) - 1) *100
    markup0.value = outro2b.toFixed(2)
}

function outros3(){
    let outro3 = (parseFloat(refvenda0) + parseFloat(frete0.value || 0)) / ((100 - parseFloat(taxa0.value || 0)) / 100) || parseFloat(refvenda0)
    venda0.value = outro3.toFixed(2)
    let outro3a = 100 - (parseFloat(custo0.value || 0) + parseFloat(frete0.value || 0) + (parseFloat(venda0.value || 0) * parseFloat(taxa0.value|| 0) / 100)) / parseFloat(venda0.value || 0) * 100
    margem0.value = outro3a.toFixed(2)
    let outro3b = (parseFloat(venda0.value || 0) / parseFloat(custo0.value || 0) - 1) *100
    markup0.value = outro3b.toFixed(2)
}