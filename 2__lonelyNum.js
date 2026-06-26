function generateArr() {

    let arr = [1, 2, 3, 1, 2, 3];
    
    let randomIndex = Math.round(Math.random() * arr.length);

    let newElement = 4; 

    arr.splice(randomIndex, 0, newElement);  // аргументы метода splice: позиция куда пихаем, сколько элементов надо удалить, что пихаем
    
    return arr;
}



function detective() {

    let arr = generateArr();
    let lonelyNum = 0;

    for (let i = 0; i < arr.length; i++) {
        lonelyNum = lonelyNum ^ arr[i];     // ^ это побитовый XOR
    }
   
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





