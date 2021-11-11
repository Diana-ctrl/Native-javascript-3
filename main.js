//Событие
// Генерируется объект со сведениями о произошедшем событии
// Вызывается функция обработчик
// Объект со сведениями о произошедшем событии в качестве параметра передается в обработчик

// const sml = document.getElementById("small")
// const mdm = document.getElementById("medium")
// const big = document.getElementById("big")

// // const onClickHandler = (event) => {
// //     alert(event.currentTarget.id);
// // }
// // const onClickHandler = (event) => {
// //     if(event.target.tagName === "BUTTON"){
// //         alert(e.target.name)
// //     }
// // }
// const onClickHandler = (event) => {
//     e.stopPropagation()
//     console.log(event.currentTarget.id)
// }

// // sml.onclick = onClickHandler; //не передаем вызов функции
// // sml.onclick = null; // отмена действия обработчика
// const hey = () => alert('Hey!');
// sml.addEventListener('click', () => alert('Hello!')); //лучший способ задания обработчика 
// sml.addEventListener('click', hey);
// sml.removeEventListener('click', hey); //снять обработчик события(убрать)

// sml.addEventListener('click', onClickHandler);
// mdm.addEventListener('click', onClickHandler);
// big.addEventListener('click', onClickHandler);

//e.target => элемент, который сгенерировал событие(первфй получил клик)
//e.currentTarget => элемент, который вызвал обработчик в процессе всплытия



//4 занятие
// const todoListID_1 = '23ir-67nb'
// const todoListID_2 = '23ir-67nb'
// const todoLists = [
//     {
//         id: todoListID_1,
//         title: 'What to learn',
//         filter: 'all',
//     },
//     {
//         id: todoListID_2,
//         title: 'What to buy',
//         filter: 'all',
//     }
// ]


// let tasks = {
//     [todoListID_1]: [
//         { id: '45ld', title: 'HTML', isDone: true },
//         { id: 'fdd', title: 'React', isDone: false },
//         { id: 'fdfd', title: 'CSS', isDone: true }
//     ],
//     [todoListID_2]: [
//         { id: '45ld', title: 'Meat', isDone: true },
//         { id: 'fdd', title: 'Milk', isDone: false },
//         { id: 'fdfd', title: 'Bread', isDone: true }
//     ]
// }

// console.log(tasks[todoListID_1].filter(t=> t.id !== '45ld'))
// console.log({...tasks, [todoListID_1]: tasks[todoListID_1].filter(t=> t.id !== '45ld')});


// //reduce
// let numbers = [1, 2, 3, 4, 5]

// console.log(numbers.reduce((acc, el) => acc + el, 3))


// let students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];

// students.reduce((acc, el) => acc + el.scores, 0)

// students.reduce((acc, el) => {
//     if(el.scores >= 100) {
//         acc.push(el)
//     }
//     return acc;
// }, [])

// students.reduce((acc, el) => {
//     if(el.name === 'Nick') {
//         let copyNick = {...el, isMarried: true};
//         acc.push(copyNick)
//     }
//     acc.push(el);
//     return acc;
// }, [])


//занятие 5

// const arr = [1, 56, 790, 10, 45];
// //bubble sort
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
        // if (arr[i] > arr[i + 1]) {
        //     let temp = arr[i + 1];
        //     arr[i + 1] = arr[i];
        //     arr[i] = temp;
        // }
        //         if (arr[i] > arr[j]) {
        //             [arr[i], arr[j]] = [arr[j], arr[i]];
        //         }
        //     }
        // }
        // console.log(arr);

        //ДЗ - написать сортировку без мутации массива

        // const names = ["Bob", "Alex", "Nick", "Donald", "Joe", "999", "!alex", "Юрий", "!юрий"];
        // console.log(names.sort());
        // const num = [1, 3, 580, 456, 190]
        // console.log(num.sort());

        //compare function

        // const compFn = (a, b) => {
        //     if (a > b ) {
        //         return 1;
        //     } else {
        //         return -2;
        //     }

        // }
        // const compFn = (a, b) => a - b;
        // console.log(num.sort((a, b) => b - a).reverse());


        const students = [
            {
                name: "Bob",
                age: 22,
                isMarried: true,
                scores: 95
            },
            {
                name: "Alex",
                age: 23,
                isMarried: true,
                scores: 89
            },
            {
                name: "alex",
                age: 23,
                isMarried: true,
                scores: 89
            },
            {
                name: "Helge",
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
                scores: 121
            }
        ];

        console.log (students
            .sort((a, b) => a.scores - b.scores)
            .reverse()
        );
console.log(students.sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1))