$(`<style>.nosel.d-flex.room.r1855450005axfb4bc25-x-rsknis .label-primary {background-color: transparent !important;etter-spacing: 1px;-webkit-text-fill-color: #ffffff;padding: 0px !important;border-radius: 0px 15px 15px 15px !important;}

.nosel.d-flex.room.r1855450005axfb4bc25-x-rsknis .corner.fa.fa-user.label.uc.fa-microphone.label-danger {background-color: transparent;letter-spacing: 1px;-webkit-text-fill-color: #ffffff;padding: 0px !important;border-radius: 50px !important;background-color: #transparent;}


    .nosel.d-flex.room.r1855450005axfb4bc25-x-rsknis.bord {border-inline: 4px solid #484848 !important;}
    .nosel.d-flex.room.r1855450005axfb4bc25-x-rsknis {
    border-radius: 0px 15px 15px 15px;
    display: inline-block;
    background-image: url(https://up6.cc/2022/12/167234955497291.gif);
	background-size: 100%;
	padding: 5px !important;
    }
    .nosel.d-flex.room.r1855450005axfb4bc25-x-rsknis .dots.mini.u-msg {
    text-align: center;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;-webkit-text-fill-color: transparent;animation: textclip 1s linear infinite;display: inline-block;
    }
    .nosel.d-flex.room.r1855450005axfb4bc25-x-rsknis .fitimg.u-pic.borderg{border-radius: 100px ;border: 2px solid #ffffff;letter-spacing: 1px;background-size: 108% 108%;-webkit-text-fill-color: white;
	margin-bottom: 15% !important;
	margin-right: 5% !important;}
    .nosel.d-flex.room.r1855450005axfb4bc25-x-rsknis .u-topic.dots {
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 20px !important;
    font-style: normal;
    font-family: sans-serif;
	
    color: transparent !important;
    background-size: 100% 100%;
    margin-top: -2px;
    margin-left: 5px;}
    @keyframes textclip {to {background-position: 200% center;}}</style>`).insertBefore('body');

    var rid='1855450005axfb4bc25-x-rsknis';





$("style:eq(0)").append(`#d2 .roomh[onclick="rjoin('${rid}')"]{border: 0px solid #0000;background-image: linear-gradient(-225deg, #000 0%, #e4b691 29%, #cba586 67%, #000 100%);

background-size: 220% auto;animation: textclip 5s linear infinite;border-radius: 50px !important;background-color: #000 !important;
}`);
$("style:eq(0)").append(`#upro .roomh[onclick="rjoin('${rid}')"]{border: 0px solid #0000;background-image: linear-gradient(-225deg, #000 0%, #e4b691 29%, #cba586 67%, #000 100%);
background-size: 220% auto;animation: textclip 5s linear infinite;border-radius: 50px !important;background-color: #000 !important;
}`);

    
    
    
    
    
    $("style").last().append(`
    
    
    #users.arb1 .inroom.uzr .fitimg.u-pic {
      border-radius: 100px ;
   border: 1px solid #9b6b3c;
	
	box-shadow: 0px 0px 1px 1px #9b6b3c;
    width: 50px;
  
    }

    #d2.arb2 .uzr .fitimg.u-pic{
    border: 2px solid #9b6b3c ;
        
        --angle: 0deg;
        border-radius: 100px ;
        background-color: #e3e3e3;
       
       
    ;}
   
    
    
    

    

   

`);


    
         
         
    var roomarbtest = false;
    
    setInterval(function () {
        if (myroom == '1855450005axfb4bc25-x-rsknis') {
            if (roomarbtest == false) {
                roomarbtest = true;
              $('#users').addClass('arb1');
                $('#d2').addClass('arb2');
                $('#mic').addClass('arb3');
                $('#settings').addClass('arb4');
                $('#rooms').addClass('arb4');
                $('#d0').addClass('arb');
                $('#chats').addClass('arb5');
                $('#d2bc').addClass('arb6');
				$('#users').addClass('stl1');
				$('#dpnl').addClass('arb7');
				$('#dpnl').addClass('arb9');
            }
        } else {
            if (roomarbtest == true) {
                roomarbtest = false;
                $("#users").removeClass('arb1');
                $("#d2").removeClass('arb2');
                $('#mic').removeClass('arb3');
                $('#settings').removeClass('arb4');
                $('#rooms').removeClass('arb4');
                $('#d0').removeClass('arb');
                $('#chats').removeClass('arb5');
                $('#d2bc').removeClass('arb6');
				$('#users').removeClass('stl1');
				$('#dpnl').removeClass('arb7');
				$('#dpnl').removeClass('arb9');
            } 
        } 
    }, 10);
  
