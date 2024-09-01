function addvisor(valor) {  
    document.getElementById('visor').value += valor
}
function limpar(){
    document.getElementById('visor').value = '';
}
function calcular() {
        const resultado = eval(document.getElementById('visor').value);
        document.getElementById('visor').value = resultado;
}