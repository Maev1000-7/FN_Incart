// Вторая версия, теперь в массив из 6 символов запихивается одиночка 
// на случайный индекс.   Больше не надо указывать размер массива

// А поиск производится одним циклом, но внутри обновляется счетчик, так что
// не совсем o(n), но уже проще 

function generateArr() {

    let arr = [1, 2, 3, 1, 2, 3];
    
    let randomIndex = Math.round(Math.random() * arr.length);

    let newElement = 4; 

    arr.splice(randomIndex, 0, newElement);  // аргументы метода splice: позиция куда пихаем, сколько элементов надо удалить, что пихаем
    
    return arr;
}



function detective() {

    let arr = generateArr();

    for (let i = 1; i < arr.length; i++) {
        if (arr[0] == arr[i]) {
            arr.splice(i, 1);
            arr.splice(0, 1);
        }
            
    }
    
    let lonelyNum = arr[0];
   
    return lonelyNum;
}



function find() {
    let start = performance.now();
    let lonelyNum = detective();
    let duration = Math.round(performance.now() - start);
    return {lonelyNum, duration} ;
}


function lonely(){
    
    let {lonelyNum, duration} = find()

    lonelyNumHtml.textContent = 'Одинокий элемент массива: '+ lonelyNum;

    document.getElementById('timeL').textContent = duration + ' мс'
}



// Старье с вложенным циклом 

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 arr.splice(j, 1);
//                 arr.splice(i, 1);
//                 i--; 
//                 break;
//             }
//         }
//     }
//     let lonelyNum = arr[0]
//     return lonelyNum;
// }