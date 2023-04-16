$("style").last().append(`
    #upro.Shbl .light.fl.pro.break {
        background-image: url(https://up6.cc/2023/02/167554753102281.png);
        background-size: 100%;
    }
`);

$("style").last().append(`
    #upro.mospro .light.fl.pro.break {
        background-image: url(https://up6.cc/2023/04/168099326986554.png);
        background-size: 100%;
    }
`);

const _Sbl56zznz4 = [
    { name: "Shbl1", deco: "א", cls: "Shbl", icon: "https://up6.cc/2023/03/167839668797841.gif"},
	{ name: "mospro1", deco: "W", cls: "mospro", icon: "https://up6.cc/2023/03/16798612360531.png"}
];

setInterval(() => {
    if(myid != null){
        _Sbl56zznz4.forEach(item => {
            const user = $("#upro .modal-title:contains('"+item.deco+"') .fl");
            if(user && user.length && !user.hasClass(item.cls)) {
                user.addClass(item.cls).closest("#upro").addClass(item.cls).find("div.fl.bgf").html('<img class="itar" style="margin-top: -48px; height: 285px !important;" src="'+item.icon+'">');
            } 
            if(!user || !user.length || !$("#upro").hasClass("in")) {
                $("#upro").removeClass(item.cls).find("img.itar").remove();
            }
        });
    }
}, 10);
