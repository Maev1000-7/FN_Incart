
function checkWidth() {
    
    const box = document.querySelector('.text_box');
    const left = document.querySelector('.p_left');
    const right = document.querySelector('.p_right');


    const boxWidth = box.offsetWidth;

    // какой то из отступов не входит в offsetWidth, по 2 пикселя на каждого
    const totalWidth = left.offsetWidth + right.offsetWidth + 4; 
    
    if (totalWidth > boxWidth) {
        
        box.style.flexDirection = 'column';
        box.style.alignItems = 'center';
        
        left.style.textAlign = 'center';
        
        right.style.textAlign = 'center';
    
    } else {
        
        box.style.flexDirection = 'row';
        box.style.alignItems = 'stretch';
        
        left.style.textAlign = 'left';
        
        right.style.textAlign = 'right';
    }
}

function layout(ass) {

    let friendNumBox = document.querySelector('.friendNumAssignment');
    let lonelyNumBox = document.querySelector('.lonelyNumAssignment');
    let layoutBox = document.querySelector('.layoutAssignment');

    if (ass == 1) {
        friendNumBox.style.display = 'block';

        lonelyNumBox.style.display = 'none';
        layoutBox.style.display = 'none';
        
    }
    
    if (ass == 2) {
        lonelyNumBox.style.display = 'block';
        
        friendNumBox.style.display = 'none';
        layoutBox.style.display = 'none';
    }

    if (ass == 3) {
        layoutBox.style.display = 'flex';
        
        friendNumBox.style.display = 'none';
        lonelyNumBox.style.display = 'none';

        // говорим браузеру чтобы тот следил за изменением окна, и использовал функцию 
        window.addEventListener('resize', checkWidth);


        // чтобы отработало сразу после нажатия кнопки
        checkWidth();

    }
}




