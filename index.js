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
