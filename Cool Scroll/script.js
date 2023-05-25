let mouseX;
let down;
const width = $(window).width();
let precentage=0;

$(document).mousedown((e)=>{
    mouseX= e.pageX;
    down=true;
})
$(document).mouseup((e)=>{
    mouseX= e.pageX;
    down=false;
    $('.container').attr('data-precentage',`${precentage}`);
})
$(document).mousemove(e=>{
    if(down){     
        precentage = Math.min(Math.max($('.container').attr('data-precentage')-((mouseX-e.pageX)*100/width),-100),0);   
        document.querySelector('.container').animate({
            transform: `translate(${precentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });
        $('img').css('object-position',`${100+precentage}% 50%`);
    }
})