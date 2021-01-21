import string from './css.js'

const player ={
    id : undefined,
    n : 1,
    time : 100,
    ui:{
        demo1:document.querySelector('#demo1'),
        demo2:document.querySelector('#demo2')
    },
    init:()=>{//初始化
        player.ui.demo1.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.play()
        player.bindEvents()
    },
    events:{
        '#btnPause':'pause',//在声明函数时不能使用函数内的函数，先把pause变成字符串
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    bindEvents:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]//[value]让字符串value变成方法
            }
        }
    },
    run : ()=>{
        player.n += 1
        if(player.n>string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo1.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
    },
    play : () =>{
        player.id = setInterval(player.run,player.time)
    },
    pause : () =>{
        window.clearInterval(player.id)
    },
    slow : () =>{
        player.pause()
        player.time=300;
        player.play()
    },
    normal : ()=>{
        player.pause()
        player.time=100;
        player.play()
    },
    fast: ()=>{
        player.pause()
        player.time=0;
        player.play()
    }
}
player.init()

