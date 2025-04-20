let flag = 1
const menu = document.getElementById('menu')
function fun(x){
    if(flag % 2){
        x.children[1].style.transform='translateX(200px)'
        x.children[0].style.transform='rotate(45deg)'
        x.children[2].style.transform='rotate(-45deg)'
        menu.style.left='0px'
           

    }
    else{
        x.children[1].style.transform='translateX(0px)'
        x.children[0].style.transform='rotate(0deg)'
        x.children[2].style.transform='rotate(-0deg)'
        menu.style.left='-350px'
    }
    flag++
}