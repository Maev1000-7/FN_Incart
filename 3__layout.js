
function checkWidth() {
    
    const box = document.querySelector('.text_box');
    const left = document.querySelector('.p_left');
    const right = document.querySelector('.p_right');

    const boxWidth = box.getBoundingClientRect().width;

    const totalWidth = left.getBoundingClientRect().width + right.getBoundingClientRect().width + 60; // + margin
    
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

window.addEventListener('resize', checkWidth);
checkWidth();



