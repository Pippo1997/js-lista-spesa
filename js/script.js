// array contenente lista spesa
const list = [`pane`,`latte`,`cioccolata`,`soda`,`prosciutto`,`carne`,`pollo`]

const listContainer = document.querySelector(`.shopping-list`);

// ciclo while
let i = 0;

let element = ``;

while (i < list.length) {

    let item = list[i];

    let element = `<li class="list-item">${item}</li>`;
    
    listContainer.innerHTML += element;

    i++;

};
