new Vue({
    el: '#app',
    data: {
        translate: true,
        burger: false,
        fleet: [
        {
        name: 'Boeing 737-800',
        value: 3,
        image: 'img/v5FRr6GnYio.jpg'
    },
    {
        name: 'Airbus A320',
        value: 1,
        image: 'img/wQQix-r8Juc.jpg'
    },
    {
        name: 'Airbus A321-200',
        value: 3,
        image: 'img/v5FRr6GnYio.jpg' // 
    },
    {
        name: 'Airbus A321NEO',
        value: 6,
        image: 'img/wQQix-r8Juc.jpg' // 
    },
    {
        name: 'Airbus A350-900',
        value: 2,
        image: 'img/v5FRr6GnYio.jpg' // 
    },
  {
        name: 'Boeing 777-300ER',
        value: 1,
        image: 'img/wQQix-r8Juc.jpg' // 
    },
],
currentFleet: 0
    },
    methods: {
        translateDocument() {
            this.translate = true
        },
        changeFleet(type){
        if(type){ 
        this.currentFleet == 5 ? false : this.currentFleet++
        } 
        else { 
          this.currentFleet === 0 ? false : this.currentFleet--
         }
        }
    }
})

const btn = document.querySelector('.btn')
const paragraph = document.querySelector('.doco')
console.log(btn)
btn.addEventListener('click', ()=> paragraph.classList.toggle('show'))
function show(){
 btn.innerText == 'More' ?  btn.innerText = 'Hide' : btn.innerText = 'More' 
}