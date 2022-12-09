let title = document.querySelector('#title');

let container = document.createElement('div');
document.body.appendChild(container);
let text = document.createElement('span');

container.appendChild(text);
text.textContent = 'Текст внутри контейнера';

let button = document.createElement('button');
document.body.appendChild(button);
button.textContent = 'Применить';

container.addEventListener('click', function(){
    title.style.textTransform = 'UpperCase';
})

button.addEventListener('click', function(){
    let element = document.createElement('div');
    document.body.appendChild(element);
    element.textContent = 'Блок создан при клике на кнопку';
    element.addEventListener('click', function(){
        this.style.color = 'red';
        this.style.paddingTop = '20px'
    })
})