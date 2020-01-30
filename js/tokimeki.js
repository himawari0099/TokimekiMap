$(function(){
    var photoPosList = [];
    $('.mapPos').each(function(){
        var elemPos = Math.floor($(this).offset().top-400);
        photoPosList.push(elemPos);
        
        // var windowHeight = $(window).height();
        // if (scroll > elemPos - windowHeight + 200){
        //     $(this).addClass('scrollin');
        // }
    });
    console.log(photoPosList);
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        // コピーしてmap01を他のに変える
        if($('.map01').hasClass('jsHide')){
            if(scroll > photoPosList[0]){
                console.log($('.map01'));
                $('.map01').removeClass('jsHide');
                $('.map01').addClass('ls-popUp');
                console.log("イベントの発火01");
            }
        }
        if($('.map02').hasClass('jsHide')){
            if(scroll > photoPosList[1]){
                $('.map02').removeClass('jsHide');
                $('.map02').addClass('ls-popUp');
                console.log("イベントの発火02");
            }
        }
        if($('.woman').hasClass('jsHide')){
            if(scroll > photoPosList[2]){
                $('.woman').removeClass('jsHide');
                $('.woman').addClass('ls-popUp');
                console.log("イベントの発火03");
            }
        }
        if($('.woman02').hasClass('jsHide')){
            if(scroll > photoPosList[3]){
                $('.woman02').removeClass('jsHide');
                $('.woman02').addClass('ls-popUp');
                console.log("イベントの発火04");
            }
        }
        if($('.map03').hasClass('jsHide')){
            if(scroll > photoPosList[4]){
                $('.map03').removeClass('jsHide');
                $('.map03').addClass('ls-popUp');
                console.log("イベントの発火05");
            }
        }
        if($('.iphone01').hasClass('jsHide')){
            if(scroll > photoPosList[5]){
                $('.iphone01').removeClass('jsHide');
                $('.iphone01').addClass('ls-popUp');
                console.log("イベントの発火06");
            }
        }

        

    });
});