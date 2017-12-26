window.onload = function(){

    var ul = document.querySelector('.friend-list'),
        lis = ul.children;
    var dialog = document.querySelector('.dialog'),
        dialogH = dialog.offsetHeight;
    var winh = document.documentElement.clientHeight || document.body.clientHeight,
        footer = document.querySelector('.footer').offsetHeight;

    for(var i=0;i<lis.length;i++){
        var time,x,y,movex =0,movey;
        lis[i].addEventListener('touchstart',function(e){
            var touch = e.touches[0];
            time = new Date()*1;
            x = touch.clientX;
            y = touch.clientY;
           // console.log(time);
        },false);
        lis[i].addEventListener('touchmove',function(e){
            var touch = e.touches[0];
            movex = touch.clientX;
            movey = touch.clientY;
        })
        lis[i].addEventListener('touchend',function(){
            num = new Date()*1 - time;
            movex = movex ? movex : x;
            movey = movey ? movey : y;
            console.log(dialogH);
            var top = winh - movey - footer;
           if( Math.abs(movex - x) < 10 && Math.abs(movey - y) < 10 && num>500){
                dialog.style.visibility = 'visible';
                dialog.style.top = movey +'px';
                if(top < dialogH){
                    dialog.style.transform = 'translateY(-100%)';
                }else{
                    dialog.style.transform = 'translateY(0)';
                }
                
           }
        })
    }
}