let hellobt=document.querySelector('button');
hellobt.addEventListener('click',inputmsg);


function inputmsg(){
    let name=prompt('Enter your name')
    hellobt.textContent=("Fuck you ! "+name);
}
