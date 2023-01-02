const btn = document.querySelector('.btn')
const paragraph = document.querySelector('.doco')
console.log(btn)
btn.addEventListener('click', ()=> paragraph.classList.toggle('show'))
function show(){
 btn.innerText == 'Раскрыть' ?  btn.innerText = 'Скрыть' : btn.innerText = 'Раскрыть' 
}
