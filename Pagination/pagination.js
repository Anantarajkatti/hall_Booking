const newElement = document.createElement('div');

// Optionally, you can set attributes for the element
newElement.setAttribute('id', 'myElement');
newElement.setAttribute('class', 'someClass');

// You can also set other properties of the element
newElement.textContent = 'This is a new element';

// Finally, you can append the new element to an existing element in the DOM
const parentElement = document.getElementById('container');
parentElement.appendChild(newElement);