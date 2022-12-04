// array contenente lista spesa
const list = [`pane`,`latte`,`cioccolata`,`soda`,`prosciutto`,`carne`,`pollo`]

const listContainer = document.querySelector(`shopping-list`);

// ciclo while
let i = 0;

while (i < list.length) {

    console.log(list[i]);

    // visualizzo in video con create element

    // let listItem = document.createElement(`li`);
    // listItem.innerHTML = item;
    // listContainer.append(listItem);

    i++;

};