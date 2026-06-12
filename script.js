// Ищем делители, тут даже для меня ничего нового

function sumOfDivisors(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum;
}


// Уже знакомые нам GEBID который читает лимит и мне повезло в JS есть 
// встроенная функция подсчета времени выполнения 

function CIF_limit() {
    let limit = parseInt(document.getElementById('limit').value);

    // метод now, объекта perfomance, возращает время (насколько долго была
    // открыта страница браузера) в мс с точностью до 4 знака после запятой. 

    
    let start = performance.now();
    let suma, sumb;

    // Думал воспользоваться структурами и поизучать историю с ООП, но пока 
    // работает массив с массивами решил не трогать
    
    let arr = [];

    // Самая сложная часть этой программы, чтобы не было дублей [A B] [B A] мы просто 
    // не будем искать то что было до i и чтобы не было пар [A A][B B] будем искать cо сдвигом
    // на 1 

    for (let i = 0; i < limit; i++) {
        suma = sumOfDivisors(i);
        for (let j = i + 1; j < limit; j++) {
            if (suma == j){
                sumb = sumOfDivisors(j);
                if (sumb == i) {
                    
                    // Жобавляем эллемент в конец, вместо структуры используем массив из двух эллементов
                    arr.push([i, j]);
                }
            }
        }
    }
    
    // То же самое что сверху только теперь онимаем от нового времени прошлое, чтобы время было в мс
    // округляем. Причем делаем это по людски 1.5 = 2,  1.4 = 1
    
    let duration = Math.round(performance.now()-start);

    // map это метод который проходит по каждому эллементу массива и преобразует его так 
    // как указанно после символа =>, при этом он создает новый массив не меняя оригинальный

    // В нашем случае массив пар цифр привращается в массив строк, после чего преобразуется в одну строку где
    // каждый эллемент записан с новой строки.     
    if (arr.length != 0) {
        document.getElementById('pairs').textContent = arr.map(p => p[0] + ' и ' + p[1]).join('\n');
    }
    else{
        document.getElementById('pairs').textContent = 'Пар не найденно'; 
    }
    
    document.getElementById('time').textContent = duration + ' мс';
}







// // буду писать заметки по JS прямо здесь

// function checkIsFriend(){

//     // Переменные тут сначала объявляются строками, parseInt чтобы не было казуса
//     // parseInt возращает либо число либо NaN, даже "100500kjsjndfkl" он разберет как 100500
//     // Document это объект через который мы получаем доступ к HTML
    
//     // Метод объекта document - GEBId, возращает объект - html элемент (в данном
//     // случае input) с указанным в атрибутах id
//     // 

//     // .value это свойство HTML ЭЛЕМЕНТА который хранит в себе цифру, текст.
    

//     let a = parseInt(document.getElementById('a').value); // gebid
//     let b = parseInt(document.getElementById('b').value);

//     if (a <= 0 || b <= 0) {

//         // .textContent хранит в себе то что написанно между тегами

//         document.getElementById('result').textContent = "Числа должны быть положительными"
//     }

//     // NaN - не число, но при этом его значение относится к числовому типу, 
//     // parseInt возращает NaN если пользователь ввел букву или ничего не ввел
    
//     // IsNan это встроенная функция которая проверяет "Не NaN ли переменна?" 

//     // || - или, повторение - мать учения 

//     else if (isNaN(a) || isNaN(b)) {
//         document.getElementById('result').textContent = "Введите оба числа"
//     }

//     else {
//         let suma = 0, sumb = 0;

//         for (let i = 1; i < a; i++) {
//             if (a % i == 0) 
//                 suma += i;
//         }
        
//         for (let i = 1; i < b; i++) {
//             if (b % i == 0) 
//                 sumb += i;
//         }

//         if (suma == b && sumb == a) {
//         document.getElementById('result').textContent = "друг"; 
//         } 
        
//         else {
//         document.getElementById('result').textContent = "недруг";
//         }
//     }
// }


