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



//4 занятие
const todoListID_1 = '23ir-67nb'
const todoListID_2 = '23ir-67nb'
const todoLists = [
    {
        id: todoListID_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListID_2,
        title: 'What to buy',
        filter: 'all',
    }
]


let tasks = {
    [todoListID_1]: [
        { id: '45ld', title: 'HTML', isDone: true },
        { id: 'fdd', title: 'React', isDone: false },
        { id: 'fdfd', title: 'CSS', isDone: true }
    ],
    [todoListID_2]: [
        { id: '45ld', title: 'Meat', isDone: true },
        { id: 'fdd', title: 'Milk', isDone: false },
        { id: 'fdfd', title: 'Bread', isDone: true }
    ]
}

console.log(tasks[todoListID_1].filter(t=> t.id !== '45ld'))
console.log({...tasks, [todoListID_1]: tasks[todoListID_1].filter(t=> t.id !== '45ld')});


//reduce
let numbers = [1, 2, 3, 4, 5]

console.log(numbers.reduce((acc, el) => acc + el, 3))


let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

students.reduce((acc, el) => acc + el.scores, 0)

students.reduce((acc, el) => {
    if(el.scores >= 100) {
        acc.push(el)
    }
    return acc;
}, [])

students.reduce((acc, el) => {
    if(el.name === 'Nick') {
        let copyNick = {...el, isMarried: true};
        acc.push(copyNick)
    }
    acc.push(el);
    return acc;
}, [])
