const eyeForm = document.querySelectorAll(".eye-form");
const eyeBlind = document.querySelectorAll(".eye-blind")
const iris = document.querySelectorAll(".iris");
const eyeChat = document.querySelector(".eye h3");
const btn = document.querySelectorAll(".btn");
const input = document.querySelectorAll("input");


document.querySelector(".container").style = "height : "+window.innerHeight+"px;";

btn[0].addEventListener('click', function(){
    step4();
});

input.forEach((item, key)=>{
    if(key == 0){
        item.addEventListener('focus', function(){
            step1();
            eyeChat.style = "opacity:0";            
        });
    }else if(key == 1){
        item.addEventListener('focus', function(){
            step2();
            eyeChat.style = "opacity:0.8";
            if(input[0].value != '')
                eyeChat.textContent = "Oh, alors tu t'appelle comme ça . . .";
            else
                eyeChat.textContent = "Hey, Tu n'as pas donné ton nom !";
        });

        item.addEventListener('keyup', function(e){
            if(item.value != ''){
                iris.forEach((element)=>{
                    eyeChat.style = "opacity:0.8";
                    eyeChat.textContent = "Vas y je regarde pas.";
                    element.style = "transform:translate(0, -100px);"
                });
                /*eyeBlind.forEach((element)=>{
                    element.style = "transform:translate(0, -300px);";
                });*/
            }else{
                iris.forEach((element)=>{
                    eyeChat.style = "opacity:0";
                    element.style = "transform:translate(0, 100px);"
                });
                /*eyeBlind.forEach((element)=>{
                    element.style = "transform:translate(0, 0);";
                });*/
            }
        });
    }
});

function init(){
    eyeForm.forEach((item)=>{
        item.classList.add("disable");
        item.classList.remove("active");
    });
}

function step1(){
    init();
    //
    eyeForm[0].classList.add("active");
    eyeForm[0].classList.remove("disable");
    //
    iris.forEach((item)=>{
        item.style = "transform: translate(-80px, -5px);";
    });
}

function step2(){
    init();
    //
    eyeForm[2].classList.add("active");
    eyeForm[2].classList.remove("disable");
    //
    iris.forEach((item)=>{
        item.style = "transform: translate(0, 80px);";
    });
}

function step3(){
    init();
    //
    eyeForm[1].classList.add("active");
    eyeForm[1].classList.remove("disable");
    //
    iris.forEach((item)=>{
        item.style = "transform: translate(80px, 5px);";
    });
}

function step4(){
    init();
    //
    iris.forEach((item)=>{
        item.style = "transform: translate(0, 0);";
    });
}

step1();