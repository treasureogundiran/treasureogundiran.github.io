let btnLinks = document.querySelectorAll(".btn")
btnLinks.forEach(btnLink => {
    btnLink.addEventListener('mouseover', (e)=>{
        let text = e.target.innerText
        e.target.innerText = `<${text}/>`;
    });
    btnLink.addEventListener('mouseout', (e)=>{
        let text = e.target.innerText;
        e.target.innerText = text.replace('<','').replace('>','').replace('/','');
    });
})

let nameInput = document.querySelector(".name-input")
let emailInput = document.querySelector(".email-input")
let messageInput = document.querySelector(".message-input")
let form = document.querySelector("#form-control")

form.addEventListener('submit', onSubmit);
function onSubmit(){
    console.log("Form submitted!");
}

async function clearForm(){
    await onSubmit();
    form.reset();
}
