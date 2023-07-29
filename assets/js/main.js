window.addEventListener('load', (ev) => {
    alert('click on the box!');
    let box = document.getElementById('box')
    let msgBox = document.getElementById('msg-box')
    let prev = document.getElementById('prev')
    let next = document.getElementById('next')
    let close = document.getElementById('close')
    let msg = document.getElementById('msg')
    let messages = [
        "Took a little time to prepare this since you're unable to come online, click &RightArrow; on the right to continue.", 
        "𝗃𝗎𝗌𝗍 𝖺 𝗊𝗎𝗂𝖼𝗄 𝗇𝗈𝗍𝖾 𝗍𝗈 𝗅𝖾𝗍 𝗒𝗈𝗎 𝗄𝗇𝗈𝗐 𝗍𝗁𝖺𝗍 𝗒𝗈𝗎'𝗋𝖾 𝗂𝗇 𝗆𝗒 𝗍𝗁𝗈𝗎𝗀𝗁𝗍𝗌. 𝖲𝗍𝖺𝗒 𝗌𝗍𝗋𝗈𝗇𝗀.", 
        "𝖳𝖺𝗄𝖾 𝖾𝖺𝖼𝗁 𝖽𝖺𝗒 𝖺𝗌 𝗂𝗍 𝖼𝗈𝗆𝖾𝗌 𝖺𝗇𝖽 𝖿𝗈𝖼𝗎𝗌 𝗈𝗇 𝗍𝗁𝖾 𝗅𝗂𝗍𝗍𝗅𝖾 𝗏𝗂𝖼𝗍𝗈𝗋𝗂𝖾𝗌. 𝖯𝗋𝗈𝗀𝗋𝖾𝗌𝗌 𝗆𝗂𝗀𝗁𝗍 𝖻𝖾 𝗌𝗅𝗈𝗐, 𝖻𝗎𝗍 𝖾𝗏𝖾𝗋𝗒 𝗌𝗍𝖾𝗉 𝖼𝗈𝗎𝗇𝗍𝗌.",
        "𝖲𝖾𝗇𝖽𝗂𝗇𝗀 𝗒𝗈𝗎 𝖺 𝗏𝗂𝗋𝗍𝗎𝖺𝗅 𝗁𝗎𝗀 𝖺𝗇𝖽 𝗅𝗈𝗍𝗌 𝗈𝖿 𝗅𝗈𝗏𝖾, Dattebayo!", 
        "𝖳𝗁𝗂𝗇𝗄𝗂𝗇𝗀 𝗈𝖿 𝗒𝗈𝗎 𝖽𝗎𝗋𝗂𝗇𝗀 𝗍𝗁𝗂𝗌 𝗍𝗂𝗆𝖾 𝖺𝗇𝖽 𝗉𝗋𝖺𝗒𝗂𝗇𝗀 𝖿𝗈𝗋 𝖺 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅 𝗌𝗎𝗋𝗀𝖾𝗋𝗒 𝖺𝗇𝖽 𝖺 𝗊𝗎𝗂𝖼𝗄 𝗋𝖾𝖼𝗈𝗏𝖾𝗋𝗒.",
        "𝖱𝖾𝗆𝖾𝗆𝖻𝖾𝗋, 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗌𝗍𝗋𝗈𝗇𝗀 𝖺𝗇𝖽 𝗋𝖾𝗌𝗂𝗅𝗂𝖾𝗇𝗍. 𝖳𝗁𝗂𝗌 𝗌𝗎𝗋𝗀𝖾𝗋𝗒 𝗂𝗌 𝗃𝗎𝗌𝗍 𝖺 𝗌𝗍𝖾𝗉 𝗍𝗈𝗐𝖺𝗋𝖽𝗌 𝖺 𝗁𝖾𝖺𝗅𝗍𝗁𝗂𝖾𝗋 𝗒𝗈𝗎.", 
        "𝖪𝖾𝖾𝗉 𝗒𝗈𝗎𝗋 𝗌𝗉𝗂𝗋𝗂𝗍𝗌 𝗁𝗂𝗀𝗁 𝖺𝗇𝖽 𝗒𝗈𝗎𝗋 𝗆𝗂𝗇𝖽 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾", 
        "𝖲𝖾𝗇𝖽𝗂𝗇𝗀 𝗁𝖾𝖺𝗅𝗂𝗇𝗀 𝖾𝗇𝖾𝗋𝗀𝗒 𝗒𝗈𝗎𝗋 𝗐𝖺𝗒. 𝖲𝗍𝖺𝗒 𝗌𝗍𝗋𝗈𝗇𝗀, 𝗌𝗍𝖺𝗒 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾, 𝖺𝗇𝖽 𝗄𝗇𝗈𝗐 𝗍𝗁𝖺𝗍 𝖻𝖾𝗍𝗍𝖾𝗋 𝖽𝖺𝗒𝗌 𝖺𝗋𝖾 𝖺𝗁𝖾𝖺𝖽.",    
        "𝖪𝖾𝖾𝗉 𝗍𝗁𝖺𝗍 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗌𝗉𝗂𝗋𝗂𝗍 𝖺𝗅𝗂𝗏𝖾, 𝖺𝗇𝖽 𝗋𝖾𝗆𝖾𝗆𝖻𝖾𝗋 that I've always got your back. Hoping the surgery is sucessfull 𝖺𝗇𝖽 wishing you 𝖻𝗋𝗂𝗀𝗁𝗍𝖾𝗋 𝖽𝖺𝗒𝗌 𝖺𝗁𝖾𝖺𝖽.", 
        "Tbh, you're one of the strongest people I know, just know that you can and will get through this."
    ]
    let count = messages.length
    let index = 0

    console.log(count)
    msg.innerHTML = messages[index]

    let BTS = new Audio()
    BTS.src = "./assets/audio/BTS.mp3"
    

    prev.addEventListener('click', (ev) => {
        if(count > 0 && index > 0) {
            index--
            msg.innerHTML = messages[index]
        }
    })

    next.addEventListener('click', (ev) => {
        if(count > 0 && index <= count - 2) {
            index++
            msg.innerHTML = messages[index]
        }
    })

    box.addEventListener('click', (ev) => {
        msgBox.style.scale = '1'
        box.src = "./assets/images/charity.gif"
        BTS.play()
    })

    close.addEventListener('click', (ev) => {
        msgBox.style.scale = '0'
    })
})