// буду писать заметки по JS прямо здесь

function checkIsFriend(){

    // Переменные тут сначала объявляются строками, parseInt чтобы не было казуса
    // parseInt возращает либо число либо NaN, даже "100500kjsjndfkl" он разберет как 100500
    // Document это объект через который мы получаем доступ к HTML
    
    // Метод объекта document - GEBId, возращает объект - html элемент (в данном
    // случае input) с указанным в атрибутах id
    // 

    // .value это свойство HTML ЭЛЕМЕНТА который хранит в себе цифру, текст.
    

    let a = parseInt(document.getElementById('a').value); // gebid
    let b = parseInt(document.getElementById('b').value);

    if (a <= 0 || b <= 0) {

        // .textContent хранит в себе то что написанно между тегами

        document.getElementById('result').textContent = "Числа должны быть положительными"
    }

    // NaN - не число, но при этом его значение относится к числовому типу, 
    // parseInt возращает NaN если пользователь ввел букву или ничего не ввел
    
    // IsNan это встроенная функция которая проверяет "Не NaN ли переменна?" 

    // || - или, повторение - мать учения 

    else if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').textContent = "Введите оба числа"
    }

    else {
        let suma = 0, sumb = 0;

        for (let i = 1; i < a; i++) {
            if (a % i == 0) 
                suma += i;
        }
        
        for (let i = 1; i < b; i++) {
            if (b % i == 0) 
                sumb += i;
        }

        if (suma == b && sumb == a) {
        document.getElementById('result').textContent = "друг"; 
        } 
        
        else {
        document.getElementById('result').textContent = "недруг";
        }
    }
}