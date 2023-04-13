const content = document.querySelector('[data-shrink="yes"]');


const span = document.querySelector('[data-shrink="yes"] span')

span.classList.add('aparecer')

setInterval(function(){
    content.classList.toggle('shrink')
},5000)


setInterval(function(){
    span.classList.toggle('aparecer')
}, 5100)