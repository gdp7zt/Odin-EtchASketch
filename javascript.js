const container = document.querySelector(".container");

let width = 16;
createSquares();

const widthButton = document.querySelector('.button');
widthButton.addEventListener('click', () =>{
    do{
        width = prompt("How many squares wide would you like to make the box?");
    } while (width <= 0 || width > 100)
    removeSquares();
    createSquares();
});

function removeSquares(){
    const removal2 = document.querySelectorAll(".down");
    removal2.forEach(element2 => {
        element2.remove();
    });
    const removal = document.querySelectorAll(".across");
    removal.forEach(element => {
        element.remove();
    });
}
function createSquares(){
    for(let i = 0; i < width; i++){
        const div = document.createElement('div');
        for (let j = 0; j < width; j++){
            const div2 = document.createElement('div');
            div2.classList.add('down');
            div.appendChild(div2);
        }
        div.classList.add('across');
        container.appendChild(div);
    }
    const boxes = document.getElementsByClassName("down");
    for (let i = 0; i < boxes.length; i++){
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        boxes[i].addEventListener("mouseover", () => {
            boxes[i].style.backgroundColor = "#" + randomColor;
        });
    }
}