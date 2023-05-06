$('.rotate').click(e=>{

    if($('.rotate').attr('data-clicked')=='false'){
        $('.login').css('transform','translateZ(1px) rotateY(180deg)');
        $('.register').css('transform','translateZ(-1px) rotateY(360deg)');
        $('.rotate').attr('data-clicked','true');
    }else{
        $('.login').css('transform','translateZ(1px) rotateY(0deg)');
        $('.register').css('transform','translateZ(-1px) rotateY(180deg)');
        $('.rotate').attr('data-clicked','false');
    }
})
