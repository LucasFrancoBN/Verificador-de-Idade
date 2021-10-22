//Verificar a idade da pessoa a partir do ano de nascimento
// Dependendo da idade, colocar uma das fotos que está na pasta assets
// Dependendo do gênero, colocar uma foto de mulher ou de um homem

let date = new Date ();
let year = date.getFullYear();
let yearBir = document.getElementById("yearB");
let age = "";
let sex = document.getElementsByClassName("sex");
let result = document.getElementById("result");

function verification(){

    if(ageVeri() == "old" && sexVeri() == "male") {
        result.innerHTML = `<p>Identificamos um idoso de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/homem-i.png" alt="">`
    } 
    else if(ageVeri() == "adult" && sexVeri() == "male") {
        result.innerHTML = `<p>Identificamos um homem de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/homem-a.png" alt="">`
    } 
    else if (ageVeri() == "adolescent" && sexVeri() == "male") {
        result.innerHTML = `<p>Identificamos um adolescente de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/homem-at.png" alt="">`
    } 
    else if (ageVeri() == "child" && sexVeri() == "male") {
        result.innerHTML = `<p>Identificamos um menino de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/homem-j.png" alt="">`
    } 
    else if (ageVeri() == "kid" && sexVeri() == "male") {
        result.innerHTML = `<p>Identificamos um criança de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/homem-c.png" alt="">`
    }
    else if (ageVeri() == "baby" && sexVeri() == "male") {
        result.innerHTML = `<p>Identificamos um recém nascido de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/homem-rn.png" alt="">`
    }
    else if (ageVeri() == "old" && sexVeri() == "fem") {
        result.innerHTML = `<p>Identificamos uma idosa de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/mulher-i.png" alt="">`
    }
    else if (ageVeri() == "adult" && sexVeri() == "fem") {
        result.innerHTML = `<p>Identificamos uma mulher adulta de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/mulher-a.png" alt="">`
    }
    else if (ageVeri() == "adolescent" && sexVeri() == "fem") {
        result.innerHTML = `<p>Identificamos uma adolescente de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/mulher-at.png" alt="">`
    }
    else if (ageVeri() == "child" && sexVeri() == "fem") {
        result.innerHTML = `<p>Identificamos uma menina de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/mulher-j.png" alt="">`
    } 
    else if (ageVeri() == "kid" && sexVeri() == "fem") {
        result.innerHTML = `<p>Identificamos uma criança de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/mulher-c.png" alt="">`
    }
    else if (ageVeri() == "baby" && sexVeri() == "fem") {
        result.innerHTML = `<p>Identificamos um recém nascido de ${age} anos</p>`
        result.innerHTML += `<img src="./assets/mulher-rn.png" alt="">`
    }
    else if (ageVeri() == "Erro") {
        result.innerHTML = `<p>Identificamos um Erro. Por favor, coloque um ano de nascimento válido</p>`
        window.alert("Você colocou um ano de nascimento inválido. Por favor coloque um ano válido")
    }
    
}

function calc (y1, y2) {
    y1 = Number(year);
    y2 = Number(yearBir.value)

    return age = (y1 - y2)
}

function ageVeri() {
    if(calc() > 100 || calc() < 0){
       return "Erro"
    }
    else if(calc() <= 100 && calc() >= 60) {
        return "old";
    } else if (calc() < 60 && calc() >= 18) {
        return "adult";
    } else if (calc() < 18 && calc() >= 13) {
        return "adolescent";
    } else if (calc() <= 12 && calc() >= 6) {
        return "child";
    } else if (calc () <= 5 && calc() > 2) {
        return "kid";
    } else {
        return "baby";
    }
}

function sexVeri() {
    if (sex[0].checked) {
        return "male";
    } else if (sex[1].checked) {
        return "fem";
    }

}

