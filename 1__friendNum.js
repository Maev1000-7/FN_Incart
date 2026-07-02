function sumOfDivisors(n) {
    
    let sum = 1;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            sum += i;
            let pair = n / i;
            if (pair != i) sum += pair; 
        }
    }
    return sum;
}


function friendCheck(limit) {
    let pairs = [];
    
    // Представим что мы уже знаем число a, тогда:
    for (let a = 2; a < limit; a++) {
        
        // Чтобы не было второго цикла с поиском числа B, предположим что мы нашли его уже 
        let b = sumOfDivisors(a);
        let sumb = sumOfDivisors(b)

        // Чтобы не было дублей, мы будем смотреть чтобы второе число всегда было больше первого 
        // Ну и перепроверим правильно ли мы предположили

        if (b > a && sumb == a)
            pairs.push([a, b]);
    }
    return pairs;
}



// Функция которая запустит расчет и посчитает время  

function calculate (limit){
    let start = performance.now();
    let pairs = friendCheck(limit)
    let duration = Math.round(performance.now() - start);
    return {pairs, duration}
}


function main(){
    
    
// ====================================================================
    
    let limit = 10000;  // чтобы не разбираться что такое readline, в программе нужно менять переменную limit
                        
// ====================================================================
    

let {pairs, duration} = calculate(limit)

    if (pairs.length != 0)
        console.log(pairs.map(p => p[0] + ' и ' + p[1]).join('\n'));
    else
        console.log('Пар не найденно');
    console.log('Время выполнения: ' + duration + ' мс');
}

main();
