const wrap = document.querySelector(".wrap");
const form = document.querySelector(".form");
const container = document.querySelector(".container");
const input = document.querySelector(".form-control");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector(".btn");

input.addEventListener('keyup', function(e){
    const usernameText = username.value;
    const passwordText = password.value;

    if(usernameText != '' && passwordText != ''){
        btn.attributes.removeNamedItem('disabled');
    }else{
        btn.attributes.setNamedItem('disabled');
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    const usernameText = username.value;
    const passwordText = password.value;

    if(usernameText != '' && passwordText != ''){
        wrap.classList.add("down");
        container.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);
    }else{
        btn.attributes.setNamedItem('disabled');
    }
});

btn.addEventListener('mouseover', function(e){
    const usernameText = username.value;
    const passwordText = password.value;

    if(usernameText == '' || passwordText == ''){
        if(btn.parentElement.classList.contains('justify-end')){
            btn.parentElement.classList.remove('justify-end');
            btn.parentElement.classList.add('justify-start');
        }
        else if(btn.parentElement.classList.contains('justify-start')){
            btn.parentElement.classList.remove('justify-start');
            btn.parentElement.classList.add('justify-end');
        }
    }
});