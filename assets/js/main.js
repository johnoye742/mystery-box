window.addEventListener('load', (ev) => {
    alert('click on the box!');
    let box = document.getElementById('box')
    let msgBox = document.getElementById('msg-box')
    let prev = document.getElementById('prev')
    let next = document.getElementById('next')
    let msg = document.getElementById('msg')
    let messages = ["You are special", "you are loved"]
    let count = messages.length
    let index = 0

    msg.innerHTML = messages[index]

    prev.addEventListener('click', (ev) => {
        if(count > 0 && index > 0) {
            index--
            msg.innerHTML = messages[index]
        }
    })

    next.addEventListener('click', (ev) => {
        if(count > 0 && index <= count) {
            index++
            msg.innerHTML = messages[index]
        }
    })

    box.addEventListener('click', (ev) => {
        msgBox.style.scale = '1'
        box.src = "./assets/charity.gif"
    })
})