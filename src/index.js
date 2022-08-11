import './style.css';

const myArray = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'clean house',
    completed: false,
    index: 0,
  },
];

const container = document.querySelector('.container');

const div = document.createElement('div');
div.className = 'heading';
container.appendChild(div);
const h1 = document.createElement('h1');
h1.textContent = 'Today\'s To Do';
div.appendChild(h1);
const icon = document.createElement('i');
icon.className = 'fa-solid fa-rotate';
div.appendChild(icon);
const input = document.createElement('input');
input.placeholder = 'Add to your list.....';
container.appendChild(input);

myArray.forEach((item, index) => {
  const list = document.querySelector('.list-item');
  const div1 = document.createElement('div');
  div1.className = 'list';
  list.appendChild(div1);
  const span = document.createElement('span');
  span.innerHTML = '&#9744;';
  div1.appendChild(span);
  const paragraph = document.createElement('p');
  paragraph.textContent = myArray[index].description;
  div1.appendChild(paragraph);
  const icons = document.createElement('i');
  icons.className = 'fa-solid fa-ellipsis-vertical';
  div1.appendChild(icons);
});

const div2 = document.createElement('div');
document.querySelector('.list-item').appendChild(div2);
const button = document.createElement('button');
button.className = 'btn';
button.textContent = 'Clear all completed';
div2.appendChild(button);
