// нужен массив из кучи дублей в котором есть один беспризорник
// Массив заполняем от 0 до того что скажет пользователь, а потом 
// пихаем туда в случайное место 1 число

function generateArr(limit) {
    
    limit /= 2; 
    
    let arr = [];

    for (let i = 0; i < limit; i++)
        arr[i] = i;
    
    // ... вставляет массив поэлементно
    arr.push(...arr);

    // Рандом умеет только от 0 до 1 гадать, умножим на длинну массива тк нам нужен случайный индекс

    let randomIndex = Math.round(Math.random() * arr.length);

    let newElement = 100500; // пока представим что элементы дальше 100499 не идут

    arr.splice(randomIndex, 0, newElement);  // аргументы метода splice: позиция куда пихаем, сколько элементов надо удалить, что пихаем
    
    return arr;
}


function detective(limit) {

    let arr = generateArr(limit);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                arr.splice(i, 1);
                i--; 
                break;
            }
        }
    }
    let lonelyNum = arr[0]
    return lonelyNum;
}

function find(limit){
    let start = performance.now();
    let lonelyNum = detective(limit);
    let duration = Math.round(performance.now() - start);
    return {lonelyNum, duration} ;
}


function lonely(){
    let limit = parseInt(document.getElementById('halfArray').value);
    let {lonelyNum, duration} = find(limit)


    lonelyNumHtml.textContent = 'Одинокий элемент массива: '+ lonelyNum;


    document.getElementById('timeL').textContent = duration + ' мс'
}
 

