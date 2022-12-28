

$("style").last().append(`

#users .uzr.mosos img.ustat {
      width: 0px !important;
      border-radius: 100px;
      height: 0px;
     
      
    }

#users .uzr.mosos .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 9px !important;
  height: 52px !important;
  margin-left: 12px!important;
  z-index: 0 !important;
margin-bottom: 9px !important;
}

#users .uzr.mosos .u-msg {
	text-align: center;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
 background-image: url(https://up6.cc/2022/12/167226515511691.gif);
  padding: 0px !important;
  font-size: 89% !important;
	margin-bottom: 6px !important;
background-size: cover;

}





#users .uzr.mosos {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 4px;
  background-image: 
  background-size: cover;
  border: 1px solid #fff;
background-image: linear-gradient(-225deg, rgb(255, 192, 0) 0%, rgba(255, 255, 0, 0.01) 8%, rgba(255, 255, 0, 0.01) 92%, rgb(255, 192, 0) 100%);
    
}

#users .uzr.mosos .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}

#users .uzr.mosos .d-flex.fl {
  padding-right: 0px !important;
}

#users .uzr.mosos .u-topic {
  margin-left: 5px;
}

#users .uzr.mosos .My_star {
 width: 72px;
height: 72px;
margin-top: -10px;
cursor: pointer;
margin-left: -10px;
}




`);

var l_itv1=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itv1);
        $("#users .uzr:contains('موسوس.')").addClass('mosos');
        $("#users .uzr.mosos .fitimg.u-pic").append('<img class="My_star" title="طاري" src="https://up6.cc/2022/12/167209273598672.png">');
     
        $("div#users .uzr:contains('موسوس.')").click(function(){
        $("#movon").show();
        
        $('#movon').addClass('mosos');
      
        
    
          
		  
        
        
       $("#ifr_mov").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 20000);


