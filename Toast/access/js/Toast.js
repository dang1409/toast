const successBtn = document.querySelector('.btn--success')
const errorBtn = document.querySelector('.btn--error') 

successBtn.onclick = function() {
    showSuccess()
}

errorBtn.onclick = function() {
    showError()
}

const Toast = function ({
    type ='',
    title = '',
    description = '',
    duration = 5000,
}) {
    const toast = document.getElementById('Toast');
    const main = document.createElement('div');

    const autoRemove = setTimeout(function() {
        toast.removeChild(main)
    },duration + 1000)

  


    const icons = {
        success: "fa-sharp fa-solid fa-circle-check",
        error: "fa-solid fa-circle-exclamation"
    }
    const icon = icons[type]
    const delayTime = duration / 1000
    console.log(delayTime)
    main.classList.add('Toast',`Toast--${type}`)
    main.style.animation = `sideFromOutside ease .3s, fadeOut linear 3s ${delayTime}s forwards`;

    main.onclick = function(e) {
        console.log(e.target)
        if(e.target.closest('.Toast__close')) {
                toast.removeChild(main);
                clearTimeout(autoRemove)
        }
    }

    main.innerHTML = `
        <div class="Toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="Toast__body">
            <h4 class="title">${title}</h4>
            <p class="decripsion">${description}</p>
        </div>
        <div class="Toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
     `
    toast.appendChild(main)
}

const showSuccess = function() {
    Toast({
        type: 'success',
        title: 'Success',
        description: 'Kết mối thành công tới máy chủ',
        duration: 5000
    })
}

const showError = function() {
    Toast({
        type: 'error',
        title: 'Error',
        description: 'Kết mối tới máy chủ thất bại',
        duration: 5000
    })
}