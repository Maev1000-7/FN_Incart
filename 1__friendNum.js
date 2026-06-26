// Делители можно искать парами
// Возьмём n = 28. Делители: 1, 2, 4, 7, 14, 28. 
// 1 × 28 = 28
// 2 × 14 = 28
// 4 × 7  = 28

// все малые части пар найдем до корня из n, остальные прибавим после, поделив число на i 
// на вопрос почему именно до корня, то вот формула d = n/d -> d*d = n -> d = scrt(n)


function sumOfDivisors(n) {
    
    // Немного костыльно но попробую объяснить, в сумме собственных делителей всегда есть
    // 1, поэтому начнем не c нулевой суммы
    
    let sum = 1;

    // если мы начнем цикл с i = 1 то на моменте n / i в итоговую сумму попадет n, чего 
    // нам не надо, поэтому начинаем с i = 2

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            sum += i;
            let pair = n / i;
            if (pair != i) sum += pair; 
        }
    }
    return sum;
}



// в первой версии b sumb расчитывались по миллиону раз и break не особо помог в ускорении, 
// потому что зачастую нужно число и так уже в конце всех расчетов стоит. 

// надо было сделать так чтобы расчеты проводились за одну итерацию цикла

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



// С DOM теперь работает только CIF_limit

function CIF_limit(){
    let limit = parseInt(document.getElementById('limit').value);
    
    let {pairs, duration} = calculate(limit)

    // чтобы GEBID не заломлял код, DOM эллементы стоит сохранять в переменные 
    let pairsHtml = document.getElementById('pairs');

    if (pairs.length != 0)
        
        // Важно не забыть передеделать тег p в pre иначе форматирование не применится 
        // Либо писать код в html, тут кому как удобнее
        pairsHtml.textContent = pairs.map(p => p[0] + ' и ' + p[1]).join('\n');
    else
        pairsHtml.textContent = 'Пар не найденно'

    document.getElementById('time').textContent = duration + ' мс'
}
