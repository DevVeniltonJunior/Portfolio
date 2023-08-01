const year = new Date().getFullYear()
const mounth = new Date().getMonth()

const id = document.getElementById('idade')

const minha_idade = year - 1998

if(mounth >= 9) id.innerHTML = minha_idade
else id.innerHTML = minha_idade - 1

