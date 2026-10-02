


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
