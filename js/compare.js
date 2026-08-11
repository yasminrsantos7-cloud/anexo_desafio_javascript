//car
let carArr = [];

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

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(el.checked && carArr.length>=2){
        alert("Tu só me pode marcar 2 carros ao mesmo tempo");
        el.checked = false;
        return;
    }

    if(el.checked){
        carArr.push(carClass);
    }else{
        const index = GetCarArrPosition(carArr,carClass);
        if(index!==-1){
            carArr.splice(index,1);
        }
    }
    
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {

    const compare0 = carArr[0];
    const compare1 = carArr[1];
    function setInnerById(id, value) {
        var el = document.getElementById(id);
        if (el) el.innerHTML = value;
    }

    setInnerById('compare_image_0', '<img src="' + compare0.image + '">');
    setInnerById('compare_image_1', '<img src="' + compare1.image + '">');

    setInnerById('compare_modelo_0', compare0.nome);
    setInnerById('compare_modelo_1', compare1.nome);

    setInnerById('compare_alturacacamba_0', compare0.alturaCacamba);
    setInnerById('compare_alturacacamba_1', compare1.alturaCacamba);

    setInnerById('compare_alturaveiculo_0', compare0.alturaVeiculo);
    setInnerById('compare_alturaveiculo_1', compare1.alturaVeiculo);

    setInnerById('compare_alturasolo_0', compare0.alturaSolo);
    setInnerById('compare_alturasolo_1', compare1.alturaSolo);

    setInnerById('compare_capacidadecarga_0', compare0.capacidadeCarga);
    setInnerById('compare_capacidadecarga_1', compare1.capacidadeCarga);

    setInnerById('compare_motor_0', compare0.motor);
    setInnerById('compare_motor_1', compare1.motor);

    setInnerById('compare_potencia_0', compare0.potencia);
    setInnerById('compare_potencia_1', compare1.potencia);

    setInnerById('compare_volumecacamba_0', compare0.volumeCacamba);
    setInnerById('compare_volumecacamba_1', compare1.volumeCacamba);

    setInnerById('compare_roda_0', compare0.roda);
    setInnerById('compare_roda_1', compare1.roda);

    setInnerById('compare_preco_0', compare0.preco);
    setInnerById('compare_preco_1', compare1.preco);

}

