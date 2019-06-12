const time = document.querySelector('#time'),
greeting = document.querySelector('#greeting'),
name = document.querySelector('#name'),
focus = document.querySelector('#focus');


function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return(parseInt(n, 10)<10 ? '0' : '') + n;
}

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Доброе Утро, ';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = 'Добрый День, ';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundImage = "url('./img/night.jpg')";
        greeting.textContent = 'Добрый Вечер, ';
        document.body.style.color = "#fff";
    }
}

function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Введите Имя]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if(e.type === 'keypress') {
        if(e.keyCode == 13) {
            if(name.innerText !== '') {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
            } else {
                e.preventDefault();
                name.innerText = '[Введите Имя]';
            }
        }
    } else {
        if(name.innerText !== '') {
        localStorage.setItem('name', e.target.innerText);
        } else {
            name.innerText = '[Введите Имя]';
        }
    }
}

function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.keyCode == 13) {
            if(focus.innerText !== '') {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
            } else {
                e.preventDefault();
                focus.innerText = '[Введите Цель]';
            }
        }
    } else {
        if(focus.innerText !== '') {
        localStorage.setItem('focus', e.target.innerText);
        } else {
            focus.innerText = '[Введите Цель]';
        }
    }
}

function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Введите Цель]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

name.addEventListener('click', ()=> {
    name.innerText = ' ';
});
focus.addEventListener('click', ()=> {
    focus.innerText = ' ';
});

showTime();
setBgGreet();
getName();
getFocus();

