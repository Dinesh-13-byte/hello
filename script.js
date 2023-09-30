let hellobt=document.querySelector('button');
hellobt.addEventListener('click',inputmsg);


function inputmsg(){
    let name=prompt('ENter your name')
    hellobt.textContent=("hello ! "+name);
}
