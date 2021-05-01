const text = document.querySelectorAll('.container .user .text');
const pic = document.querySelectorAll('.container .user .picture .picture__img');

const btns = document.querySelectorAll('.container .user .picture .buttons .btn')


btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        text.forEach((txt)=>{
            txt.classList.toggle('add');
        });

        pic.forEach((pc)=>{
            pc.classList.toggle('add');
        })

    })
})