




const _mad24znz2 = [
    {name: "بيذ", room: "182cc191b39xc62707b4xgmpmaq", icon: "https://up6.cc/2023/01/167494118448631.gif"}
];

setInterval(() => {

    _mad24znz2.forEach(item => {
        const usrs = $("#users .uzr:contains('"+item.name+"')");
        const isUserOnline = !!usrs.length;
        if(!isUserOnline && item.toggled) {
            item.toggled = false;
            return;
        }
        if(isUserOnline && item.room == myroom && !item.toggled) {
            const avatar = usrs.find(".u-pic").css("background-image").replace('url("', "").replace('")', "");
            item.toggled = true;
            const royal_html = $(body).append("<div><img class='ro_te3b_img' style='position: absolute; top: 11%; left: -290px; border-radius: 50%' width='60' height='60' src='"+avatar+"' /><img class='ro_te3b_img' style='position: absolute; top: 10%; left: -200px; border-radius: 0%' width='205' height='83' src='"+item.icon+"' /></div>");
            royal_html.find("img:nth-child(1)").animate({left: '50px'}, 400, function() {
              const el = $(this);
                setTimeout(function() {
                  if(el.hasClass("ro_te3b_img")) {
                    el.animate({left: '-290px'}, 400, function() {
                      el.remove();
                    });
                  }
                }, 3000);
            });
            royal_html.find("img:nth-child(2)").animate({left: '40px'}, 400, function() {
              const el = $(this);
              setTimeout(function() {
                if(el.hasClass("ro_te3b_img")) {
                  el.animate({left: '-310px'}, 400, function() {
                    el.remove();
                  });
                }
              }, 3000);
            });
        }
  });

}, 100);







