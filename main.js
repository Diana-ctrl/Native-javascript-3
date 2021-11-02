//Событие
// Генерируется объект со сведениями о произошедшем событии
// Вызывается функция обработчик
// Объект со сведениями о произошедшем событии в качестве параметра передается в обработчик

const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")

// const onClickHandler = (event) => {
//     alert(event.currentTarget.id);
// }
// const onClickHandler = (event) => {
//     if(event.target.tagName === "BUTTON"){
//         alert(e.target.name)
//     }
// }
const onClickHandler = (event) => {
    e.stopPropagation()
    console.log(event.currentTarget.id)
    }
}

// // sml.onclick = onClickHandler; //не передаем вызов функции
// // sml.onclick = null; // отмена действия обработчика
// const hey = () => alert('Hey!');
// sml.addEventListener('click', () => alert('Hello!')); //лучший способ задания обработчика 
// sml.addEventListener('click', hey);
// sml.removeEventListener('click', hey); //снять обработчик события(убрать)

sml.addEventListener('click', onClickHandler);
// mdm.addEventListener('click', onClickHandler);
// big.addEventListener('click', onClickHandler);

//e.target => элемент, который сгенерировал событие(первфй получил клик)
//e.currentTarget => элемент, который вызвал обработчик в процессе всплытия