const te3b_pm_itar_users = [
    {dec: "W", cls: "itar_shbl ", icon: "https://up6.cc/2023/02/167614624696911.png"},
    {dec: "א", cls: "itar_shbl ", icon: "https://up6.cc/2023/02/167614624696911.png"}
];

setInterval(() => {
    te3b_pm_itar_users.forEach(function(user) {
        const p_msg = $("#d2 .uzr:contains('"+user.dec+"').mm");
        if(p_msg.length) {
            p_msg.each(function(index, el) {
                if($(el).hasClass("te3b_pm_itar")) return;
                $(el).addClass("te3b_pm_itar");
                $(el).find(".fitimg.u-pic").append('<img style="max-width: 62px; margin-top: -5px; margin-left: -4px;" class="itar_shbl" title="اطاري" src="'+user.icon+'">');
            });
        }
    });    
}, 1000);

$("style").last().append(`
    #d2 .uzr.te3b_pm_itar .fitimg.u-pic {
        border-radius: 100px !important; 
    }
    #d2 .uzr.te3b_pm_itar .u-msg.break {
        border-radius: 100px !important;
    }
    #d2 .te3b_pm_itar .uzr.break{
        background-color: #000 !important;
    }
    #d2 .uzr.te3b_pm_itar .itar_shbl  {
        width: 89px;
        height: 89px;
        margin-top: -40px;
        cursor: pointer;
        margin-left: -45px;
    }
`);
