// Array para armazenar os carros selecionados (Máximo de 2)
let carArr = [];

// 1. Classe Car e seu construtor completo
class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

// Função auxiliar que varre o array para descobrir se o carro já está lá dentro
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome === carClass.nome)
            return i;
    }
    return -1; 
}

// Gerencia a marcação e desmarcação dos checkboxes
function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       
        if(el.checked){
            // Se o usuário tentar marcar um terceiro carro, bloqueia e desmarca o checkbox
            if(carArr.length >= 2) {
                alert("Você só pode selecionar no máximo 2 veículos para a comparação.");
                el.checked = false;
                return;
            }
            // Adiciona o objeto carro na nossa lista de comparação
            carArr.push(carClass);
            
        } else {
            // Se o usuário desmarcar, descobrimos a posição dele na lista
            let posicao = GetCarArrPosition(carArr, carClass);
            if(posicao !== -1) {
                carArr.splice(posicao, 1);
            }
        } 
    } else {
        throw "You need set a Car Class";
    }
}

// Abre a janela flutuante de comparação
function ShowCompare() {
    // Se houver menos de 2 carros, exibe o alerta obrigatório
    if(carArr.length < 2) {
        alert("É necessário escolher dois veículos para realizar a comparação.");
        return;
    }

    UpdateCompareTable(); // Atualiza os dados antes de mostrar
    document.getElementById("compare").style.display = "block"; 
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

// Injeta dinamicamente os dados de cada carro nas respectivas células da tabela
function UpdateCompareTable() {
    // Identifica os dois carros salvos no array
    const carro0 = carArr[0];
    const carro1 = carArr[1];

    // Injeção de dados do Primeiro Carro (Índice 0)
    document.getElementById("compare_image_0").innerHTML = `<img src="${carro0.image}" width="150" style="display:block; margin:auto;">`;
    document.getElementById("compare_modelo_0").innerText = carro0.nome;
    document.getElementById("compare_alturacacamba_0").innerText = carro0.alturaCacamba;
    document.getElementById("compare_alturaveiculo_0").innerText = carro0.alturaVeiculo;
    document.getElementById("compare_alturasolo_0").innerText = carro0.alturaSolo;
    document.getElementById("compare_capacidadecarga_0").innerText = carro0.capacidadeCarga;
    document.getElementById("compare_motor_0").innerText = carro0.motor;
    document.getElementById("compare_potencia_0").innerText = carro0.potencia;
    document.getElementById("compare_volumecacamba_0").innerText = carro0.volumeCacamba;
    document.getElementById("compare_roda_0").innerText = carro0.roda;
    document.getElementById("compare_preco_0").innerText = `R$ ${carro0.preco.toLocaleString('pt-BR')}`;

    // Injeção de dados do Segundo Carro (Índice 1)
    document.getElementById("compare_image_1").innerHTML = `<img src="${carro1.image}" width="150" style="display:block; margin:auto;">`;
    document.getElementById("compare_modelo_1").innerText = carro1.nome;
    document.getElementById("compare_alturacacamba_1").innerText = carro1.alturaCacamba;
    document.getElementById("compare_alturaveiculo_1").innerText = carro1.alturaVeiculo;
    document.getElementById("compare_alturasolo_1").innerText = carro1.alturaSolo;
    document.getElementById("compare_capacidadecarga_1").innerText = carro1.capacidadeCarga;
    document.getElementById("compare_motor_1").innerText = carro1.motor;
    document.getElementById("compare_potencia_1").innerText = carro1.potencia;
    document.getElementById("compare_volumecacamba_1").innerText = carro1.volumeCacamba;
    document.getElementById("compare_roda_1").innerText = carro1.roda;
    document.getElementById("compare_preco_1").innerText = `R$ ${carro1.preco.toLocaleString('pt-BR')}`;
}