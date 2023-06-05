
$(document).mousemove(e=>{
        let mouseX=e.clientX;
        let mouseY=e.clientY;
        console.log('bbbb');
        document.querySelector('.blob').animate({
                left:`${mouseX}px`,
                top:`${mouseY}px`
        },{duration: 3000, fill:'forwards'});
        
        $('.blob').css({
                
        })
})