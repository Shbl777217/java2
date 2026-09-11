

(function () {
    function addRoomsAlert() {
        var rooms = document.getElementById("rooms");
        if (!rooms) return;

        if (rooms.querySelector("#rooms-alert-bar")) return;

        if (!document.getElementById("rooms-alert-style")) {
            var style = document.createElement("style");
            style.id = "rooms-alert-style";
            style.textContent =
                "#rooms-alert-bar{" +
                    "position:relative;" +
                    "width:100%;" +
                    "height:38px;" +
                    "min-height:38px;" +
                    "overflow:hidden;" +
                    "box-sizing:border-box;" +
                    "background:#8f1028;" +
                    "border-top:1px solid rgba(255,255,255,.15);" +
                    "border-bottom:1px solid rgba(255,255,255,.25);" +
                    "z-index:9999;" +
                "}" +
                "#rooms-alert-text{" +
                    "position:absolute;" +
                    "top:0;" +
                    "left:0;" +
                    "height:38px;" +
                    "line-height:38px;" +
                    "white-space:nowrap;" +
                    "direction:rtl;" +
                    "color:#fff;" +
                    "font-size:15px;" +
                    "font-weight:bold;" +
                    "pointer-events:none;" +
                    "animation:roomsAlertMove 14s linear infinite;" +
                    "will-change:transform;" +
                "}" +
                "@keyframes roomsAlertMove{" +
                    "0%{left:0;transform:translateX(-100%);}" +
                    "100%{left:100%;transform:translateX(0);}" +
                "}";

            document.head.appendChild(style);
        }

        var bar = document.createElement("div");
        bar.id = "rooms-alert-bar";

        var text = document.createElement("div");
        text.id = "rooms-alert-text";
        text.textContent =
            "اعزائنا مشتركي تصاميم الرومات حدثت مشكله بسيطه في موقع رفع بنرات الرومات سيتم حل الموضوع ب اقرب وقت / نتمنا لكم افضل الاوقات ..";

        bar.appendChild(text);
        rooms.insertBefore(bar, rooms.firstChild);
    }

    function start() {
        addRoomsAlert();

        var observer = new MutationObserver(function () {
            addRoomsAlert();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();



$(document)['ready'](function(){function g(){const U=new MutationObserver(function(){const G=$('#rooms'),B=G['find']('.nosel.label-primary.fl.bgg'),m=G['find']('.nosel.d-flex.room.r19e84e54a92x7d9db431-x-2ct3a1'),H=G['find']('.nosel.d-flex.room.r1a0827e147fx58b58596-xszrok2');if(G['length']&&B['length']&&m['length']){m['prev']()[0x0]!==B[0x0]&&B['after'](m);let a=m['next']('#trend-label');!a['length']&&(a=$('<div\x20class=\x22label\x20label-primary\x22>-..\x20تـرند\x20الرومـات\x20..-</div>')['attr']('id','trend-label'),m['after'](a)),H['length']&&a['length']&&(H['prev']()[0x0]!==a[0x0]&&a['after'](H));}});U['observe'](document['body'],{'childList':!![],'subtree':!![]});}$('<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20#trend-label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x206px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20url(\x27https://i.postimg.cc/YjBKNPTr/Whats-App-Video-2026-08-19-at-1011.gif\x27)\x20no-repeat\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#rooms\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20</style>')['appendTo']('head'),g();});
