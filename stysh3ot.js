



(function () {
    'use strict';

    function startQamarStyle() {

        var root = document.getElementById('tlogins');
        if (!root) return;

        var oldStyle = document.getElementById('sh-qamar-style');
        if (oldStyle) oldStyle.remove();

        var oldBox = document.getElementById('sh-qamar-loginbox');
        if (oldBox) {
            while (oldBox.firstChild) {
                oldBox.parentNode.insertBefore(oldBox.firstChild, oldBox);
            }
            oldBox.remove();
        }

        var links = root.querySelector('#btns-wrap');
        var marquee = root.querySelector('.marquee-wrap');

        var ali = root.querySelector('center #ALI');
        var aliCenter = ali ? ali.parentElement : null;

        if (links && marquee) {
            root.insertBefore(links, marquee);
        }

        if (aliCenter && marquee) {
            root.insertBefore(aliCenter, marquee);
        }

        var tabs = root.querySelector('ul.th-login-tabs');
        var content = root.querySelector('.th-login-content');

        var card = document.getElementById('qamar-login-card-v2');

        if (!card && tabs && content) {

            card = document.createElement('div');
            card.id = 'qamar-login-card-v2';

            tabs.parentNode.insertBefore(card, tabs);

            card.appendChild(tabs);
            card.appendChild(content);
        }

        var status = document.getElementById('loginstat');

        if (card && status && status.parentElement !== card) {
            card.appendChild(status);
        }

        var count = document.getElementById('s1');

        if (count && count.parentElement) {
            count.parentElement.classList.add('qamar-online-bar');
        }

        if (!document.getElementById('qamar-style-v2')) {

            var css = document.createElement('style');
            css.id = 'qamar-style-v2';

            css.textContent = `

body.bgm > .center-block.dad {
    width:100% !important;
    max-width:394px !important;
    height:100% !important;
    margin:0 auto !important;
    padding:0 !important;
}

#tlogins {
    display:flex !important;
    flex-direction:column !important;

    width:100% !important;
    max-width:390px !important;

    height:100% !important;
    min-height:100% !important;

    margin:0 !important;
    padding:0 !important;

    border-radius:0 !important;
    box-sizing:border-box !important;
    overflow:hidden !important;
}

#tlogins > .th-login-topbar {
    flex:0 0 auto !important;

    width:100% !important;
    min-height:36px !important;

    margin:0 !important;
    padding:6px !important;

    border-radius:0 !important;
    box-sizing:border-box !important;

    align-items:center !important;
}

#tlogins .th-login-logo {
    width:24px !important;
    height:24px !important;

    margin:0 3px !important;
    border-radius:0 !important;
}

#tlogins .th-login-topbar h1 {
    margin:0 !important;
    padding:0 5px !important;

    height:24px !important;
    line-height:24px !important;

    font-size:15px !important;

    white-space:nowrap !important;
    overflow:hidden !important;
    text-overflow:ellipsis !important;
}

#tlogins .th-login-topbar .fa-refresh {
    display:block !important;
    visibility:visible !important;

    width:39px !important;
    height:27px !important;

    margin:-2px 0 0 !important;
    padding:4px 7px !important;

    transform:none !important;
    border-radius:5px !important;
}

#tlogins > .th-login-banner-slot {
    flex:0 0 auto !important;

    display:block !important;
    float:none !important;
    clear:both !important;

    width:100% !important;
    height:auto !important;

    margin:0 !important;
    padding:0 !important;

    overflow:hidden !important;
}

#tlogins > .th-login-banner-slot img {
    display:block !important;
    float:none !important;

    width:100% !important;
    height:auto !important;

    max-height:200px !important;

    margin:0 !important;
    padding:0 !important;

    object-fit:fill !important;
}

#btns-wrap {
    flex:0 0 auto !important;

    width:100% !important;

    margin:0 !important;
    padding:5px 5px 2px !important;

    box-sizing:border-box !important;
}

#login-btn-holder {
    display:grid !important;

    grid-template-columns:
        repeat(4,minmax(0,1fr)) !important;

    gap:4px !important;

    width:100% !important;

    margin:0 !important;
    padding:0 !important;
}

#login-btn-holder .login-btn-holder__btn {

    display:flex !important;

    justify-content:center !important;
    align-items:center !important;

    width:100% !important;
    min-width:0 !important;

    height:37px !important;

    margin:0 !important;
    padding:3px 2px !important;

    border-radius:6px !important;

    box-sizing:border-box !important;

    font-size:12px !important;
    line-height:18px !important;

    white-space:nowrap !important;
    overflow:hidden !important;
}

#tlogins > center {
    flex:0 0 auto !important;

    display:block !important;

    width:100% !important;

    margin:0 !important;
    padding:2px 5px 5px !important;

    box-sizing:border-box !important;
}

#tlogins > center > #ALI {

    display:grid !important;

    grid-template-columns:
        repeat(4,minmax(0,1fr)) !important;

    gap:4px !important;

    width:100% !important;

    margin:0 !important;
    padding:0 !important;
}

#tlogins > center > #ALI > a {

    display:flex !important;

    justify-content:center !important;
    align-items:center !important;

    width:100% !important;
    max-width:none !important;
    min-width:0 !important;

    height:34px !important;

    margin:0 !important;
    padding:3px !important;

    border-radius:6px !important;

    box-sizing:border-box !important;

    font-size:12px !important;

    white-space:nowrap !important;
    overflow:hidden !important;
    text-overflow:ellipsis !important;
}

#tlogins > .marquee-wrap {

    flex:0 0 auto !important;

    display:block !important;

    width:100% !important;
    height:30px !important;

    margin:0 !important;
    padding:4px 5px !important;

    border-radius:0 !important;

    box-sizing:border-box !important;

    line-height:21px !important;
}

#tlogins > .marquee-wrap marquee {

    display:block !important;

    width:100% !important;
    height:22px !important;

    margin:0 !important;
    padding:0 !important;
}

#qamar-login-card-v2 {

    position:relative !important;

    flex:0 0 auto !important;

    width:95% !important;

    margin:39px auto 7px !important;
    padding:0 !important;

    background:var(--hi-light,#fafafa) !important;

    border:1px solid var(--bt-primary) !important;

    border-radius:9px !important;

    box-shadow:
        0 1px 2px rgba(0,0,0,.25),
        0 3px 8px rgba(0,0,0,.35) !important;

    box-sizing:border-box !important;

    overflow:visible !important;
}

#qamar-login-card-v2 > #loginstat {

    position:absolute !important;

    display:block !important;

    z-index:50 !important;

    top:-36px !important;
    left:-1px !important;

    width:auto !important;
    min-width:52px !important;

    height:30px !important;

    margin:0 !important;
    padding:4px 8px !important;

    box-sizing:border-box !important;

    border-radius:4px 4px 0 0 !important;

    line-height:20px !important;

    font-size:11px !important;

    transform:none !important;
}

#qamar-login-card-v2 .th-login-tabs {

    float:none !important;

    display:flex !important;

    direction:ltr !important;

    width:100% !important;
    height:60px !important;

    margin:0 !important;
    padding:8px !important;

    border:0 !important;
    border-radius:9px 9px 0 0 !important;

    background:var(--hi-light,#fafafa) !important;

    box-sizing:border-box !important;

    overflow:hidden !important;
}

#qamar-login-card-v2 .th-login-tabs > li {

    float:none !important;

    display:block !important;

    flex:1 1 33.333% !important;

    width:33.333% !important;
    height:44px !important;

    margin:0 !important;
    padding:0 3px !important;

    border:0 !important;

    box-sizing:border-box !important;

    background:transparent !important;
}

#qamar-login-card-v2 .th-login-tabs > li > a {

    display:flex !important;

    justify-content:center !important;
    align-items:center !important;

    width:100% !important;
    height:43px !important;

    margin:0 !important;
    padding:4px 3px !important;

    box-sizing:border-box !important;

    border:0 !important;

    border-radius:6px !important;

    background:var(--bt-primary) !important;

    color:#fff !important;

    font-size:13px !important;

    line-height:18px !important;

    text-align:center !important;

    white-space:nowrap !important;

    transform:none !important;
}

#qamar-login-card-v2
.th-login-tabs > li > a:before {

    float:none !important;

    display:inline-block !important;

    width:auto !important;

    margin:0 5px !important;
    padding:0 !important;

    background:none !important;

    -webkit-background-clip:initial !important;
    -webkit-text-fill-color:currentColor !important;

    color:currentColor !important;

    transform:none !important;
}

#qamar-login-card-v2 .th-login-content {

    float:none !important;

    display:block !important;

    width:100% !important;
    height:94px !important;

    margin:0 !important;
    padding:11px 12px !important;

    box-sizing:border-box !important;

    border:0 !important;

    border-top:
        1px solid var(--bt-primary) !important;

    border-radius:0 0 9px 9px !important;

    background:var(--hi-light,#fafafa) !important;

    box-shadow:none !important;

    overflow:hidden !important;
}

#qamar-login-card-v2 #l1,
#qamar-login-card-v2 #l2,
#qamar-login-card-v2 #l3 {

    float:none !important;

    width:100% !important;
    height:70px !important;

    min-height:70px !important;

    margin:0 !important;
    padding:0 !important;

    border:0 !important;

    border-radius:0 !important;

    box-sizing:border-box !important;
}

#qamar-login-card-v2 .th-login-pane.active {
    display:block !important;
}

#qamar-login-card-v2 .th-login-pane:not(.active) {
    display:none !important;
}

#qamar-login-card-v2 form {

    float:none !important;

    position:relative !important;

    width:100% !important;
    height:70px !important;

    margin:0 !important;
    padding:0 !important;

    border:0 !important;

    box-sizing:border-box !important;

    direction:ltr !important;
}

#qamar-login-card-v2 #l1 form {

    display:grid !important;

    grid-template-columns:
        minmax(0,1fr) 58px !important;

    grid-template-rows:36px !important;

    gap:6px !important;

    align-content:start !important;
}

#qamar-login-card-v2 #l1 #u1 {

    grid-column:1 !important;
    grid-row:1 !important;

    float:none !important;

    width:100% !important;
    height:36px !important;

    margin:0 !important;
    padding:4px 7px !important;

    box-sizing:border-box !important;

    border-radius:2px !important;

    text-align:right !important;
    direction:rtl !important;

    transform:none !important;
}

#qamar-login-card-v2 #l1 .th-login-btn {

    grid-column:2 !important;
    grid-row:1 !important;

    float:none !important;

    width:58px !important;
    min-width:58px !important;

    height:36px !important;

    margin:0 !important;
    padding:3px !important;

    border-radius:4px !important;

    box-sizing:border-box !important;

    transform:none !important;
}

#qamar-login-card-v2 #l2 form,
#qamar-login-card-v2 #l3 form {

    display:grid !important;

    grid-template-columns:
        minmax(0,1fr) 59px 32px !important;

    grid-template-rows:
        32px 32px !important;

    column-gap:6px !important;
    row-gap:5px !important;

    align-content:start !important;
}

#qamar-login-card-v2 #u2,
#qamar-login-card-v2 #u3 {

    grid-column:1 !important;
    grid-row:1 !important;
}

#qamar-login-card-v2 #pass1,
#qamar-login-card-v2 #pass2 {

    grid-column:1 !important;
    grid-row:2 !important;
}

#qamar-login-card-v2 #u2,
#qamar-login-card-v2 #u3,
#qamar-login-card-v2 #pass1,
#qamar-login-card-v2 #pass2 {

    float:none !important;

    display:block !important;

    width:100% !important;
    height:32px !important;

    margin:0 !important;
    padding:3px 6px !important;

    box-sizing:border-box !important;

    border-radius:2px !important;

    text-align:right !important;
    direction:rtl !important;

    transform:none !important;
}

#qamar-login-card-v2 #l2 .th-login-btn {

    grid-column:2 !important;
    grid-row:2 !important;

    float:none !important;

    display:block !important;

    width:59px !important;
    min-width:59px !important;

    height:32px !important;

    margin:0 !important;
    padding:3px !important;

    box-sizing:border-box !important;

    border-radius:4px !important;

    transform:none !important;
}

#qamar-login-card-v2 #l3 .th-login-btn {

    grid-column:2 / 4 !important;
    grid-row:2 !important;

    float:none !important;

    display:block !important;

    width:100% !important;

    min-width:0 !important;

    height:32px !important;

    margin:0 !important;
    padding:3px !important;

    box-sizing:border-box !important;

    border-radius:4px !important;

    transform:none !important;
}

#qamar-login-card-v2 .th-stealth-btn {

    grid-column:3 !important;
    grid-row:2 !important;

    float:none !important;

    position:static !important;

    display:flex !important;

    justify-content:center !important;
    align-items:center !important;

    width:32px !important;
    height:32px !important;

    margin:0 !important;
    padding:0 !important;

    border-radius:4px !important;

    box-sizing:border-box !important;

    transform:none !important;
}

#qamar-login-card-v2 #stealth {
    display:none !important;
}

#tlogins .qamar-online-bar {

    position:relative !important;

    flex:0 0 auto !important;

    float:none !important;

    display:flex !important;

    justify-content:center !important;
    align-items:center !important;

    width:100% !important;
    height:31px !important;

    margin:0 !important;
    padding:0 !important;

    border-radius:0 !important;

    box-sizing:border-box !important;

    text-align:center !important;
}

#tlogins .qamar-online-bar:after {

    content:attr(title);

    display:block !important;

    margin:auto !important;

    padding:0 !important;

    font-size:13px !important;

    line-height:31px !important;
}

#tlogins .qamar-online-bar #s1 {

    position:absolute !important;

    left:0 !important;
    right:auto !important;
    top:0 !important;

    float:none !important;

    display:flex !important;

    justify-content:center !important;
    align-items:center !important;

    width:auto !important;
    min-width:52px !important;

    height:31px !important;

    margin:0 !important;
    padding:4px 8px !important;

    border-radius:0 5px 0 0 !important;

    box-sizing:border-box !important;

    transform:none !important;

    font-size:13px !important;
}

#tlogins #lonline {

    flex:1 1 auto !important;

    float:none !important;

    width:100% !important;
    height:auto !important;

    min-height:0 !important;

    margin:0 !important;
    padding:2px 3px !important;

    box-sizing:border-box !important;

    outline:0 !important;

    overflow-x:hidden !important;
    overflow-y:auto !important;
}

#tlogins #lonline .uhtml {

    float:none !important;

    position:relative !important;

    display:flex !important;

    align-items:center !important;

    width:99% !important;

    min-height:55px !important;

    margin:0 auto 3px !important;

    padding:2px 3px !important;

    box-sizing:border-box !important;

    border-radius:8px !important;

    border:1px solid rgba(0,0,0,.10) !important;

    box-shadow:none !important;

    overflow:hidden !important;
}

#tlogins #lonline .th-uhtml-main {

    float:none !important;

    display:flex !important;

    flex:1 1 auto !important;

    align-items:center !important;

    min-width:0 !important;
}

#tlogins #lonline .fitimg.u-pic {

    flex:0 0 42px !important;

    min-width:42px !important;
    width:42px !important;
    max-width:42px !important;

    min-height:42px !important;
    height:42px !important;
    max-height:42px !important;

    margin:2px 5px !important;

    border-radius:3px !important;

    transform:none !important;
}

#tlogins #lonline .th-uhtml-body {

    min-width:0 !important;

    margin:0 !important;
    padding:0 3px !important;
}

#tlogins #lonline .th-uhtml-topic-row {

    min-height:20px !important;

    margin:0 !important;

    align-items:center !important;
}

#tlogins #lonline .th-uhtml-topic {

    font-size:13px !important;
    line-height:18px !important;
}

#tlogins #lonline .th-uhtml-msg {

    width:100% !important;

    margin:1px 0 0 !important;
    padding:0 2px !important;

    font-size:11px !important;
    line-height:17px !important;

    text-align:center !important;
}

#tlogins #lonline .th-uhtml-side {

    float:none !important;

    flex:0 0 20px !important;

    width:20px !important;
    min-width:20px !important;

    margin:0 2px !important;
}

#tlogins #lonline .th-uhtml-side .co {

    width:15px !important;
    height:12px !important;

    margin:0 !important;

    border-radius:1px !important;

    transform:none !important;
}

#tlogins #lonline::-webkit-scrollbar {
    width:5px !important;
}

#tlogins #lonline::-webkit-scrollbar-thumb {

    background:var(--bt-primary) !important;

    border-radius:20px !important;
}

#tlogins #lonline::-webkit-scrollbar-track {
    background:transparent !important;
}

#qamar-login-card-v2 span.btn.fr.fa.fa-eye {
    transform:none !important;
}

#tlogins .fa.fa-user.label.badgex.label-success {
    transform:none !important;
}

#qamar-login-card-v2 ul.nav.nav-tabs > li > a {
    margin-right:0 !important;
}

#qamar-login-card-v2 ul.nav.nav-tabs > li {
    margin:0 !important;
}

#qamar-login-card-v2 div#l1,
#qamar-login-card-v2 div#l2,
#qamar-login-card-v2 div#l3 {
    margin-top:0 !important;
    margin-bottom:0 !important;
}

@media (max-width:380px) {

    #tlogins {
        max-width:100% !important;
    }

    #login-btn-holder .login-btn-holder__btn,
    #tlogins > center > #ALI > a {
        font-size:11px !important;
    }

    #qamar-login-card-v2
    .th-login-tabs > li > a {
        font-size:12px !important;
    }
}

`;

            document.head.appendChild(css);
        }
    }

    function boot() {

        startQamarStyle();

        setTimeout(startQamarStyle, 300);
        setTimeout(startQamarStyle, 1000);
        setTimeout(startQamarStyle, 2000);
    }

    if (document.readyState === 'loading') {

        document.addEventListener(
            'DOMContentLoaded',
            boot,
            { once:true }
        );

    } else {

        boot();
    }

})();

(function () {
    'use strict';

    function SH_FINAL_MATCH() {
        var root = document.getElementById('tlogins');
        if (!root) return;

        var card = document.getElementById('qamar-login-card-v2');
        var marquee = root.querySelector('.marquee-wrap');
        var status = document.getElementById('loginstat');
        var count = document.getElementById('s1');
        var cop = root.querySelector('.cop');

        if (marquee && status && status.parentElement !== marquee) {
            marquee.insertBefore(status, marquee.firstChild);
        }

        if (count && count.parentElement) {
            count.parentElement.classList.add('qamar-online-bar');
        }

        if (card && cop && card.nextElementSibling !== cop) {
            card.insertAdjacentElement('afterend', cop);
        }

        if (document.getElementById('sh-final-qamar-css')) return;

        var st = document.createElement('style');
        st.id = 'sh-final-qamar-css';

        st.textContent = `

#tlogins > .th-login-banner-slot{

    overflow:hidden!important;
}

#tlogins > .th-login-banner-slot > img{
    width:100%!important;

    object-fit:fill!important;
}

#tlogins > .marquee-wrap{
    position:relative!important;
    display:block!important;
    width:100%!important;
    height:31px!important;
    min-height:31px!important;
    margin:0!important;
    padding:4px 5px 4px 66px!important;
    box-sizing:border-box!important;
    border-radius:0!important;
}

#tlogins > .marquee-wrap marquee{
    width:100%!important;
    height:22px!important;
    line-height:22px!important;
}

#tlogins > .marquee-wrap > #loginstat{
    position:absolute!important;
    left:0!important;
    top:0!important;
    z-index:20!important;

    display:flex!important;
    justify-content:center!important;
    align-items:center!important;

    width:auto!important;
    min-width:58px!important;
    height:31px!important;

    margin:0!important;
    padding:3px 7px!important;

    border-radius:0!important;
    transform:none!important;

    font-size:11px!important;
    line-height:22px!important;
}

#tlogins #qamar-login-card-v2{
    width:95%!important;
    margin:7px auto 7px!important;
    border-radius:9px!important;
    overflow:hidden!important;
}

#tlogins #qamar-login-card-v2 .th-login-tabs{
    width:100%!important;
    height:60px!important;
    margin:0!important;
    padding:8px!important;
}

#tlogins #qamar-login-card-v2 .th-login-tabs > li{
    height:43px!important;
    margin:0!important;
    padding:0 3px!important;
}

#tlogins #qamar-login-card-v2 .th-login-tabs > li > a{
    width:100%!important;
    height:42px!important;
    margin:0!important;
    padding:5px 2px!important;
    transform:none!important;
}

#tlogins #qamar-login-card-v2 .th-login-content{
    width:100%!important;
    height:95px!important;

    margin:0!important;
    padding:11px 12px!important;

    box-sizing:border-box!important;
    overflow:hidden!important;
}

#tlogins #qamar-login-card-v2 #l1,
#tlogins #qamar-login-card-v2 #l2,
#tlogins #qamar-login-card-v2 #l3{
    width:100%!important;
    height:72px!important;

    margin:0!important;
    padding:0!important;

    border:0!important;
}

#tlogins #qamar-login-card-v2 form{
    position:relative!important;

    display:block!important;

    width:100%!important;
    height:72px!important;

    margin:0!important;
    padding:0!important;

    direction:ltr!important;
}

#tlogins #qamar-login-card-v2 #l1 input#u1{
    position:absolute!important;

    left:0!important;
    top:0!important;

    float:none!important;

    width:57%!important;
    max-width:none!important;
    height:36px!important;

    margin:0!important;
    padding:4px 7px!important;

    box-sizing:border-box!important;

    text-align:right!important;
    direction:rtl!important;

    transform:none!important;
}

#tlogins #qamar-login-card-v2 #l1 button.th-login-btn{
    position:absolute!important;

    left:calc(57% + 7px)!important;
    top:0!important;

    float:none!important;

    width:50px!important;
    min-width:50px!important;
    height:36px!important;

    margin:0!important;
    padding:3px!important;

    transform:none!important;
}

#tlogins #qamar-login-card-v2 #l2 input#u2{
    position:absolute!important;

    left:0!important;
    top:0!important;

    float:none!important;

    width:57%!important;
    max-width:none!important;
    height:32px!important;

    margin:0!important;
    padding:3px 7px!important;

    box-sizing:border-box!important;

    text-align:right!important;
    direction:rtl!important;

    transform:none!important;
}

#tlogins #qamar-login-card-v2 #l2 input#pass1{
    position:absolute!important;

    left:0!important;
    top:37px!important;

    float:none!important;

    width:57%!important;
    max-width:none!important;
    height:32px!important;

    margin:0!important;
    padding:3px 7px!important;

    box-sizing:border-box!important;

    text-align:right!important;
    direction:rtl!important;

    transform:none!important;
}

#tlogins #qamar-login-card-v2 #l2 button.th-login-btn{
    position:absolute!important;

    left:calc(57% + 7px)!important;
    top:37px!important;

    float:none!important;

    width:50px!important;
    min-width:50px!important;
    height:32px!important;

    margin:0!important;
    padding:3px!important;

    transform:none!important;
}

#tlogins #qamar-login-card-v2 #l2 .th-stealth-btn{
    position:absolute!important;

    right:0!important;
    left:auto!important;
    top:37px!important;

    float:none!important;

    display:flex!important;
    justify-content:center!important;
    align-items:center!important;

    width:34px!important;
    height:32px!important;

    margin:0!important;
    padding:0!important;

    transform:none!important;
}

#tlogins #qamar-login-card-v2 #l3 input#u3{
    position:absolute!important;

    left:0!important;
    top:0!important;

    float:none!important;

    width:57%!important;
    max-width:none!important;
    height:32px!important;

    margin:0!important;
    padding:3px 7px!important;

    text-align:right!important;
    direction:rtl!important;

    transform:none!important;
}

#tlogins #qamar-login-card-v2 #l3 input#pass2{
    position:absolute!important;

    left:0!important;
    top:37px!important;

    float:none!important;

    width:57%!important;
    max-width:none!important;
    height:32px!important;

    margin:0!important;
    padding:3px 7px!important;

    text-align:right!important;
    direction:rtl!important;

    transform:none!important;
}

#tlogins #qamar-login-card-v2 #l3 button.th-login-btn{
    position:absolute!important;

    left:calc(57% + 7px)!important;
    top:37px!important;

    float:none!important;

    width:70px!important;
    min-width:70px!important;
    height:32px!important;

    margin:0!important;

    transform:none!important;
}

#tlogins .cop{
    display:block!important;
    visibility:visible!important;

    float:none!important;

    width:100%!important;
    height:21px!important;

    margin:0!important;
    padding:2px 6px!important;

    box-sizing:border-box!important;

    position:relative!important;

    text-align:right!important;
    line-height:16px!important;

    font-size:9px!important;

    z-index:1!important;
}

#tlogins .qamar-online-bar{
    position:relative!important;

    float:none!important;

    display:flex!important;
    justify-content:center!important;
    align-items:center!important;

    width:100%!important;
    height:31px!important;

    margin:0!important;
    padding:0!important;

    border-radius:0!important;

    box-sizing:border-box!important;
}

#tlogins .qamar-online-bar #s1{
    position:static!important;

    float:none!important;

    display:flex!important;
    justify-content:center!important;
    align-items:center!important;

    width:auto!important;
    min-width:55px!important;
    height:31px!important;

    margin:0 4px!important;
    padding:3px 7px!important;

    transform:none!important;

    border-radius:4px 0 4px 0!important;

    order:1!important;
}

#tlogins .qamar-online-bar:after{
    content:attr(title)!important;

    position:static!important;

    display:inline-block!important;

    width:auto!important;

    margin:0 4px!important;
    padding:0!important;

    line-height:31px!important;
    font-size:13px!important;

    order:2!important;
}

#tlogins #lonline{
    padding:2px 3px!important;
}

#tlogins #lonline .uhtml{
    width:99%!important;
    min-height:58px!important;

    margin:0 auto 2px!important;
    padding:2px 3px!important;

    border-radius:7px!important;
}

#tlogins #lonline .fitimg.u-pic{
    min-width:43px!important;
    width:43px!important;
    max-width:43px!important;

    min-height:43px!important;
    height:43px!important;
    max-height:43px!important;

    margin:2px 5px!important;

    border-radius:3px!important;
}

#tlogins #lonline .th-uhtml-topic{
    font-size:13px!important;
}

#tlogins #lonline .th-uhtml-msg{
    font-size:11px!important;
    line-height:17px!important;
}

#tlogins #qamar-login-card-v2 input{
    max-width:none!important;
}

#tlogins #qamar-login-card-v2 span.btn.fr.fa.fa-eye{
    transform:none!important;
}

#tlogins .fa.fa-user.label.badgex.label-success{
    transform:none!important;
}

`;

        document.body.appendChild(st);
    }

    function boot() {
        SH_FINAL_MATCH();

        [300, 1100, 2200, 3500].forEach(function (t) {
            setTimeout(SH_FINAL_MATCH, t);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once:true });
    } else {
        boot();
    }

})();

(function () {
    'use strict';

    function SH_PREMIUM_CLEAN_V3() {
        if (document.getElementById('sh-premium-clean-v3')) return;

        var st = document.createElement('style');
        st.id = 'sh-premium-clean-v3';
        st.textContent = `

#tlogins {
    background:#fff !important;
}

#tlogins > .th-login-topbar {
    position:relative !important;
    z-index:5 !important;
    box-shadow:
        0 3px 10px rgba(0,0,0,.13),
        inset 0 1px 0 rgba(255,255,255,.24),
        inset 0 -1px 0 rgba(0,0,0,.08) !important;
    overflow:hidden !important;
}

#tlogins > .th-login-topbar:before {
    content:'' !important;
    position:absolute !important;
    top:0 !important;
    left:8% !important;
    width:48% !important;
    height:1px !important;
    background:linear-gradient(90deg, transparent, rgba(255,255,255,.78), transparent) !important;
    pointer-events:none !important;
}

#tlogins > .th-login-topbar:after {
    content:'' !important;
    position:absolute !important;
    left:0 !important;
    right:0 !important;
    bottom:0 !important;
    height:1px !important;
    background:rgba(0,0,0,.10) !important;
    pointer-events:none !important;
}

#tlogins .th-login-logo {
    border-radius:5px !important;
    border:1px solid rgba(255,255,255,.38) !important;
    box-shadow:0 2px 7px rgba(0,0,0,.20) !important;
}

#tlogins .th-login-topbar h1 {
    font-weight:800 !important;
    letter-spacing:.12px !important;
    text-shadow:0 1px 1px rgba(0,0,0,.15) !important;
}

#tlogins .th-login-topbar .fa-refresh {
    border:1px solid rgba(255,255,255,.22) !important;
    box-shadow:
        0 2px 7px rgba(0,0,0,.16),
        inset 0 1px 0 rgba(255,255,255,.30) !important;
    transition:transform .18s ease, filter .18s ease !important;
}

#tlogins .th-login-topbar .fa-refresh:hover {
    transform:rotate(12deg) !important;
    filter:brightness(1.08) !important;
}

#tlogins > .th-login-banner-slot {
    position:relative !important;
    background:#fff !important;
    box-shadow:0 3px 10px rgba(0,0,0,.08) !important;
}

#tlogins > .th-login-banner-slot:after {
    content:'' !important;
    position:absolute !important;
    left:0 !important;
    right:0 !important;
    bottom:0 !important;
    height:18px !important;
    background:linear-gradient(180deg, transparent, rgba(0,0,0,.08)) !important;
    pointer-events:none !important;
}

#login-btn-holder .login-btn-holder__btn,
#tlogins > center > #ALI > a {
    position:relative !important;
    overflow:hidden !important;
    border:1px solid rgba(255,255,255,.22) !important;
    font-weight:700 !important;
    text-shadow:0 1px 1px rgba(0,0,0,.16) !important;
    box-shadow:
        0 3px 8px rgba(0,0,0,.16),
        inset 0 1px 0 rgba(255,255,255,.32),
        inset 0 -1px 0 rgba(0,0,0,.08) !important;
    transition:transform .16s ease, filter .16s ease, box-shadow .16s ease !important;
}

#login-btn-holder .login-btn-holder__btn:after,
#tlogins > center > #ALI > a:after {
    content:'' !important;
    position:absolute !important;
    top:1px !important;
    left:7px !important;
    right:7px !important;
    height:1px !important;
    background:rgba(255,255,255,.52) !important;
    opacity:.75 !important;
    pointer-events:none !important;
}

#login-btn-holder .login-btn-holder__btn:hover,
#tlogins > center > #ALI > a:hover {
    transform:translateY(-1px) !important;
    filter:brightness(1.08) saturate(1.06) !important;
    box-shadow:
        0 5px 12px rgba(0,0,0,.20),
        inset 0 1px 0 rgba(255,255,255,.38) !important;
}

#tlogins > .marquee-wrap {
    position:relative !important;
    border-top:1px solid rgba(255,255,255,.20) !important;
    border-bottom:1px solid rgba(0,0,0,.09) !important;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.16) !important;
}

#tlogins > .marquee-wrap > #loginstat {
    font-weight:800 !important;
    box-shadow:
        2px 0 8px rgba(0,0,0,.12),
        inset 0 1px 0 rgba(255,255,255,.24) !important;
}

#tlogins #qamar-login-card-v2 {
    position:relative !important;
    background:#fff !important;
    border:1px solid var(--bt-primary) !important;
    border-radius:10px !important;
    box-shadow:
        0 10px 24px rgba(0,0,0,.15),
        0 2px 6px rgba(0,0,0,.10),
        inset 0 1px 0 rgba(255,255,255,1) !important;
    overflow:hidden !important;
}

#tlogins #qamar-login-card-v2:before {
    content:'' !important;
    position:absolute !important;
    z-index:4 !important;
    top:0 !important;
    left:11% !important;
    right:11% !important;
    height:2px !important;
    background:linear-gradient(90deg, transparent, rgba(255,255,255,.95), transparent) !important;
    pointer-events:none !important;
}

#tlogins #qamar-login-card-v2:after {
    content:'' !important;
    position:absolute !important;
    z-index:4 !important;
    left:16px !important;
    right:16px !important;
    bottom:0 !important;
    height:1px !important;
    background:linear-gradient(90deg, transparent, var(--bt-primary), transparent) !important;
    opacity:.35 !important;
    pointer-events:none !important;
}

#tlogins #qamar-login-card-v2 .th-login-tabs,
#tlogins #qamar-login-card-v2 .th-login-content {
    background:#fff !important;
}

#tlogins #qamar-login-card-v2 .th-login-tabs {
    position:relative !important;
    border-bottom:1px solid rgba(0,0,0,.06) !important;
}

#tlogins #qamar-login-card-v2 .th-login-tabs > li > a {
    position:relative !important;
    overflow:hidden !important;
    font-weight:800 !important;
    border:1px solid rgba(255,255,255,.22) !important;
    text-shadow:0 1px 1px rgba(0,0,0,.15) !important;
    box-shadow:
        0 3px 8px rgba(0,0,0,.15),
        inset 0 1px 0 rgba(255,255,255,.30) !important;
    transition:transform .16s ease, filter .16s ease, box-shadow .16s ease !important;
}

#tlogins #qamar-login-card-v2 .th-login-tabs > li > a:after {
    content:'' !important;
    position:absolute !important;
    left:22% !important;
    right:22% !important;
    bottom:3px !important;
    height:2px !important;
    border-radius:10px !important;
    background:rgba(255,255,255,.70) !important;
    opacity:.45 !important;
    pointer-events:none !important;
}

#tlogins #qamar-login-card-v2 .th-login-tabs > li.active > a,
#tlogins #qamar-login-card-v2 .th-login-tabs > li > a[aria-selected="true"] {
    filter:brightness(1.09) saturate(1.08) !important;
    transform:translateY(-1px) !important;
    box-shadow:
        0 5px 12px rgba(0,0,0,.21),
        inset 0 1px 0 rgba(255,255,255,.38),
        inset 0 -2px 0 rgba(0,0,0,.09) !important;
}

#tlogins #qamar-login-card-v2 input[type="text"],
#tlogins #qamar-login-card-v2 input[type="password"],
#tlogins #qamar-login-card-v2 input:not([type]) {
    background:#fff !important;
    border:1px solid rgba(0,0,0,.17) !important;
    border-radius:5px !important;
    box-shadow:
        inset 0 1px 2px rgba(0,0,0,.045),
        0 1px 3px rgba(0,0,0,.055) !important;
    outline:none !important;
    transition:border-color .16s ease, box-shadow .16s ease !important;
}

#tlogins #qamar-login-card-v2 input[type="text"]:focus,
#tlogins #qamar-login-card-v2 input[type="password"]:focus,
#tlogins #qamar-login-card-v2 input:not([type]):focus {
    background:#fff !important;
    border-color:var(--bt-primary) !important;
    box-shadow:
        0 0 0 2px rgba(255,255,255,1),
        0 0 0 3px var(--bt-primary),
        0 4px 10px rgba(0,0,0,.11) !important;
}

#tlogins #qamar-login-card-v2 input::placeholder {
    opacity:.62 !important;
}

#tlogins #qamar-login-card-v2 button.th-login-btn,
#tlogins #qamar-login-card-v2 .th-stealth-btn {
    border:1px solid rgba(255,255,255,.23) !important;
    font-weight:800 !important;
    text-shadow:0 1px 1px rgba(0,0,0,.15) !important;
    box-shadow:
        0 3px 8px rgba(0,0,0,.18),
        inset 0 1px 0 rgba(255,255,255,.32),
        inset 0 -1px 0 rgba(0,0,0,.08) !important;
    transition:transform .16s ease, filter .16s ease, box-shadow .16s ease !important;
}

#tlogins #qamar-login-card-v2 button.th-login-btn:hover,
#tlogins #qamar-login-card-v2 .th-stealth-btn:hover {
    transform:translateY(-1px) !important;
    filter:brightness(1.08) saturate(1.06) !important;
    box-shadow:
        0 5px 12px rgba(0,0,0,.22),
        inset 0 1px 0 rgba(255,255,255,.38) !important;
}

#tlogins .qamar-online-bar {
    position:relative !important;
    border-top:1px solid rgba(255,255,255,.19) !important;
    border-bottom:1px solid rgba(0,0,0,.08) !important;
    box-shadow:
        0 2px 7px rgba(0,0,0,.10),
        inset 0 1px 0 rgba(255,255,255,.18) !important;
}

#tlogins .qamar-online-bar #s1 {
    font-weight:900 !important;
    border:1px solid rgba(255,255,255,.18) !important;
    box-shadow:
        0 2px 7px rgba(0,0,0,.15),
        inset 0 1px 0 rgba(255,255,255,.28) !important;
}

#tlogins #lonline {
    background:#fff !important;
}

#tlogins #lonline .uhtml {
    position:relative !important;
    background:#fff !important;
    border:1px solid rgba(0,0,0,.09) !important;
    border-right:3px solid var(--bt-primary) !important;
    border-radius:8px !important;
    box-shadow:
        0 2px 6px rgba(0,0,0,.07),
        inset 0 1px 0 rgba(255,255,255,1) !important;
    transition:transform .15s ease, box-shadow .15s ease, border-color .15s ease !important;
}

#tlogins #lonline .uhtml:after {
    content:'' !important;
    position:absolute !important;
    top:0 !important;
    right:0 !important;
    width:36% !important;
    height:1px !important;
    background:linear-gradient(90deg, transparent, var(--bt-primary)) !important;
    opacity:.35 !important;
    pointer-events:none !important;
}

#tlogins #lonline .uhtml:hover {
    transform:translateY(-1px) !important;
    border-color:rgba(0,0,0,.13) !important;
    border-right-color:var(--bt-primary) !important;
    box-shadow:
        0 5px 12px rgba(0,0,0,.11),
        inset 0 1px 0 rgba(255,255,255,1) !important;
}

#tlogins #lonline .fitimg.u-pic {
    border-radius:6px !important;
    border:2px solid #fff !important;
    outline:1px solid rgba(0,0,0,.09) !important;
    box-shadow:0 3px 8px rgba(0,0,0,.18) !important;
}

#tlogins #lonline .th-uhtml-topic {
    font-weight:800 !important;
}

#tlogins #lonline .th-uhtml-msg {
    opacity:.80 !important;
}

#tlogins .cop {
    background:#fff !important;
    opacity:.88 !important;
    border-top:1px solid rgba(0,0,0,.05) !important;
}

#tlogins #lonline::-webkit-scrollbar {
    width:6px !important;
}

#tlogins #lonline::-webkit-scrollbar-track {
    background:#fff !important;
}

#tlogins #lonline::-webkit-scrollbar-thumb {
    background:var(--bt-primary) !important;
    border:1px solid #fff !important;
    border-radius:20px !important;
    box-shadow:0 1px 3px rgba(0,0,0,.14) !important;
}

@media (hover:none), (max-width:380px) {
    #login-btn-holder .login-btn-holder__btn:hover,
    #tlogins > center > #ALI > a:hover,
    #tlogins #qamar-login-card-v2 .th-login-tabs > li.active > a,
    #tlogins #qamar-login-card-v2 button.th-login-btn:hover,
    #tlogins #qamar-login-card-v2 .th-stealth-btn:hover,
    #tlogins #lonline .uhtml:hover {
        transform:none !important;
    }
}

@media (prefers-reduced-motion: reduce) {
    #tlogins *,
    #tlogins *:before,
    #tlogins *:after {
        transition:none !important;
        animation:none !important;
    }
}
`;

        document.body.appendChild(st);
    }

    function bootPremiumV3() {
        SH_PREMIUM_CLEAN_V3();
        [350, 1100, 2200, 3500].forEach(function (t) {
            setTimeout(SH_PREMIUM_CLEAN_V3, t);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootPremiumV3, { once:true });
    } else {
        bootPremiumV3();
    }
})();

$(`
<style>

#room .u-pic,
#room .fitimg.u-pic,
#room img.u-pic,
#users .u-pic,
#users .fitimg.u-pic,
#users img.u-pic,
#chats .u-pic,
#chats .fitimg.u-pic,
#chats img.u-pic,
#wall .u-pic,
#wall .fitimg.u-pic,
#wall img.u-pic,
#dpnl .u-pic,
#dpnl .fitimg.u-pic,
#dpnl img.u-pic {
    border-radius: 4px !important;
    border: 2px solid #fff !important;
    box-shadow: 0 1px 4px rgba(90, 90, 90, .28) !important;
    overflow: hidden !important;
    transform: none !important;
}

#room div.u-pic,
#users div.u-pic,
#chats div.u-pic,
#wall div.u-pic,
#dpnl div.u-pic {
    border-radius: 4px !important;
    border: 2px solid #fff !important;
    box-shadow: 0 1px 4px rgba(90, 90, 90, .28) !important;
    overflow: hidden !important;
    background-clip: padding-box !important;
    transform: none !important;
}

</style>`).insertBefore('body');





