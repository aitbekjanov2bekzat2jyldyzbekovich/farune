let conteiner = document.querySelector('.conteiner')
let btn = document.querySelector('.spin')
let number = Math.ceil(Math.random() * 1001) + 360
let status = false

btn.onclick = function () {
    if (status === false) {
        conteiner.style.transform = `rotate(${number}deg)`
        number += Math.ceil(Math.random() * 1001) + 360
        status = true
        setTimeout(() => {
            status = false
        }, 4000);
    }

}

