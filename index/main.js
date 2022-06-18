window.onload = function(){
    var img = document.querySelectorAll('.img') //图片
    // img[0].id = 'h' console.log(img[0].id); 此操作可以添加id
    var left = document.querySelector('.left') //左边按钮
    var right = document.querySelector('.right') // 右边按钮
    var buttons = document.querySelector('.navDiv').children //导航点

    // 设置一组数组，用来保存id
    idArr = ['first','second','right','left','left','last']

    // 设置图片索引
    var index = 0

    initialize()

    // 设置定时器，图片自动轮播
    var timer = setInterval(next,3000)
    
    // 给导航点添加点击事件
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',() => {
            clearInterval(timer)
            timer = null
            // 进行判断当前索引与点击的导航点，如果索引大于点击，更换前面图片，反之
            if(index > i){
                let x = index -i
                while(x--){
                    prev()
                }
            }
            else if (index < i) {
                let x = i - index 
                while(x--){
                    next()
                }
            }
        })
        buttons[i].addEventListener('mouseout',()=>{
            if (timer === null) {
                timer = setInterval(next,3000) 
            }
        })
        buttons[i].addEventListener('touchend',()=>{
            if (timer === null) {
               timer = setInterval(next,3000) 
            }
        })
    }

    // 给按钮箭头绑定点击事件
    left.addEventListener('click',prev)
    // 当鼠标放到箭头时，定时器关闭
    left.addEventListener('mouseover',()=>{
        clearInterval(timer)
        timer = null
    })
    // 当鼠标离开时，定时器开启
    left.addEventListener('mouseout',()=>{
       timer=setInterval(next,3000)
    })
    right.addEventListener('click',next)
    right.addEventListener('mouseover',()=>{
        clearInterval(timer)
        timer = null
    })
    right.addEventListener('mouseout',()=>{
       timer=setInterval(next,3000)
    })

    // 创建一个函数切换图片
    // 上一张
    function prev() {
        // 在最后添加最前的，并将这个删掉
        idArr.push(idArr.shift())
        initialize()
        if(index === 0){
            index = buttons.length - 1
        }else{
            index--
        }
        clearColor()
    }
    // 下一张
    function next() {
        // 与上面相反，删掉最后并把它加到最前
        idArr.unshift(idArr.pop())
        initialize()
        if(index === buttons.length - 1){
            index = 0
        }else{
            index++
        }
        clearColor()
    }

    // 让导航点跟着一起动
    function clearColor(){
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = 'silver'
        }
        buttons[index].style.backgroundColor = "rgba(109, 148, 255, 0.789)"
    }

    // 创建一个函数用来初始化图片
    function initialize() {
        for (let i = 0; i < img.length; i++) {
            img[i].id = idArr[i]
        }
    }

    var friendsCards = document.querySelector('.friendscard').children
    for (let i = 0; i < friendsCards.length; i++) {
        // friendsCards[i].style.left= i*50+"px" 
        
    }
}