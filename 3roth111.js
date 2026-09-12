







(function(){function j(Q){if(!Q||Q['\x6e\x6f\x64\x65\x54\x79\x70\x65']!==0x1)return;const b=$(Q),r=b['\x69\x73']('\x74\x72')?b:b['\x66\x69\x6e\x64']('\x74\x72');r['\x65\x61\x63\x68'](function(){const P=$(this);P['\x74\x65\x78\x74']()['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x62\x6e\x61\x74\x2e\x63\x68\x61\x74')&&P['\x68\x69\x64\x65']();});}const L=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72']('\x23\x66\x70\x73');if(!L)return;j(L);if(window['\x5f\x5f\x74\x65\x33\x62\x4f\x62\x73\x65\x72\x76\x65\x72'])try{window['\x5f\x5f\x74\x65\x33\x62\x4f\x62\x73\x65\x72\x76\x65\x72']['\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74']();}catch(Q){}const d=new MutationObserver(function(b){for(const r of b){for(const P of r['\x61\x64\x64\x65\x64\x4e\x6f\x64\x65\x73']){j(P);}}});window['\x5f\x5f\x74\x65\x33\x62\x4f\x62\x73\x65\x72\x76\x65\x72']=d,d['\x6f\x62\x73\x65\x72\x76\x65'](L,{'\x63\x68\x69\x6c\x64\x4c\x69\x73\x74':!![],'\x73\x75\x62\x74\x72\x65\x65':!![]});}());



(function ($) {
    if (!$) return;

    var ICONS = {
        blackStar: "https://i1i1.us/sico/z1f9hum5vi10.gif",
        goldStar:  "https://i1i1.us/sico/z1f9hum2hc10.gif",
        goldAdmin: "https://i1i1.us/sico/z1eulgcqpd10.gif",
        goldCrown: "https://i1i1.us/sico/z1d1hdjuci10.gif",
        blackCrown:"https://i1i1.us/sico/z1d3c130e710.GIF",
        silverCrown:"https://i1i1.us/sico/z1d3c137ha10.gif",
        blackShield:"https://i1i1.us/sico/z1g3hl5028101G4WrKrnrvf.gif",
        story:     "https://i1i1.us/sico/zg4L222Re1.png",
        link:      "https://i1i1.us/sico/zgdCwmLDmg.png",
        nightMode: "https://bnat.chat/sico/zdwmVOSYcz.png"
    };

    var adminContact = "https://alriad.net/sico/z1f5c4o6s610.JPG";

    $("#national-day-offers, #national-day-offers-style").remove();

    var css = `
    <style id="national-day-offers-style">
      #national-day-offers{
        direction:rtl;
        width:100%;
        max-width:100%;
        box-sizing:border-box;
        margin:0 auto;
        background:
          radial-gradient(circle at top right, rgba(212,175,55,.13), transparent 34%),
          linear-gradient(180deg,#fffaf0 0%,#fff3df 100%);
        color:#1f2925;
        border-top:3px solid #0d7b45;
        border-bottom:3px solid #0d7b45;
        border-radius:0 0 15px 15px;
        overflow:hidden;
        flex:0 0 auto !important;
        min-width:0;
        font-family:jazeera-light,Tahoma,Arial,sans-serif;
        text-align:center;
        box-shadow:0 5px 14px rgba(0,0,0,.10);
      }

      #national-day-offers *{
        box-sizing:border-box;
      }

      #national-day-offers,
      #national-day-offers .ndo-body{
        flex-shrink:0 !important;
      }

      #national-day-offers .ndo-head{
        min-height:30px;
        padding:4px 5px;
        cursor:pointer;
        color:#07851a;
        font-weight:700;
        font-size:12.5px;
        line-height:1.35;
        user-select:none;
        background:#faebd7;
        border-bottom:1px solid rgba(13,123,69,.16);
        text-shadow:none;
        box-shadow:none;
      }

      #national-day-offers .ndo-head:hover{
        background:#f8e6cc;
      }

      #national-day-offers .ndo-head-text{
        text-decoration:underline;
        text-decoration-color:#07851a;
        text-underline-offset:3px;
      }

      #national-day-offers .ndo-body{
        display:none;
        width:100%;
        height:calc(100vh - 145px);
        min-height:245px;
        max-height:500px;
        overflow-y:auto;
        overflow-x:hidden;
        -webkit-overflow-scrolling:touch;
        overscroll-behavior:contain;
        padding:3px 5px 7px;
        scrollbar-width:thin;
        scrollbar-color:#0d8c4b #f3e7d4;
        background:
          linear-gradient(180deg,rgba(255,255,255,.72),rgba(255,248,234,.92));
      }

      #national-day-offers .ndo-body::-webkit-scrollbar{
        width:6px;
      }

      #national-day-offers .ndo-body::-webkit-scrollbar-track{
        background:#f3e7d4;
      }

      #national-day-offers .ndo-body::-webkit-scrollbar-thumb{
        background:#0d8c4b;
        border-radius:10px;
      }

      #national-day-offers .ndo-title{
        margin:4px 2px 7px;
        color:#c51f1f;
        font-size:12.5px;
        font-weight:700;
        line-height:1.45;
        text-shadow:0 1px 0 #fff;
      }

      #national-day-offers .ndo-row span{
        white-space:normal;
      }

      #national-day-offers .ndo-row{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        gap:1px 3px;
        width:100%;
        margin:0;
        padding:4px 1px;
        font-size:11.5px;
        font-weight:700;
        line-height:1.5;
        text-align:center;
        border-bottom:1px dashed rgba(13,123,69,.18);
        transition:background .18s ease;
      }

      #national-day-offers .ndo-row:last-of-type{
        border-bottom:none;
      }

      #national-day-offers .ndo-row:hover{
        background:rgba(13,140,75,.045);
      }

      #national-day-offers .ndo-row img{
        width:auto;
        max-width:16px;
        height:14px;
        object-fit:contain;
        vertical-align:middle;
        flex:0 0 auto;
        filter:drop-shadow(0 1px 1px rgba(0,0,0,.18));
      }

      #national-day-offers .ndo-row .ndo-icon-wide{
        max-width:20px;
        height:16px;
      }

      #national-day-offers .red{
        color:#c92525;
      }

      #national-day-offers .green{
        color:#087b40;
      }

      #national-day-offers .blue{
        color:#245ab6;
      }

      #national-day-offers .teal{
        color:#0b7f7a;
      }

      #national-day-offers .price{
        color:#0a8a48;
        font-family:Ebrima,Tahoma,Arial,sans-serif;
        font-size:12.5px;
        font-weight:800;
        background:linear-gradient(180deg,#fff8cf,#f8eaa3);
        border:1px solid rgba(183,143,20,.35);
        border-radius:5px;
        padding:0 4px;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.75);
      }

      #national-day-offers .ndo-note{
        margin:7px 3px 4px;
        color:#6f3c00;
        font-size:11.5px;
        line-height:1.45;
        font-weight:700;
        text-decoration:underline;
        background:rgba(244,211,94,.20);
        border:1px solid rgba(196,156,23,.25);
        border-radius:8px;
        padding:4px 5px;
      }

      #national-day-offers .ndo-greeting{
        margin:8px 4px;
        color:#0b7c42;
        font-size:11.5px;
        line-height:1.45;
        font-weight:700;
      }

      #national-day-offers .ndo-contact{
        position:sticky;
        bottom:-10px;
        z-index:20;
        display:block;
        width:calc(100% + 14px);
        margin:10px -7px -10px;
        padding:6px 4px 7px;
        font-size:11px;
        font-weight:700;
        text-align:center;
        clear:both;
        background:#faebd7;
        border-top:1px solid rgba(13,123,69,.22);
        box-shadow:0 -3px 8px rgba(0,0,0,.07);
      }

      #national-day-offers .ndo-contact a{
        display:inline-block;
        color:#0645c0;
        text-decoration:underline;
        text-underline-offset:2px;
      }

      #national-day-offers .ndo-contact a:hover{
        color:#084a86;
      }

      @media (max-width:480px){
        #national-day-offers .ndo-head{
          font-size:10.3px;
          padding:5px 4px;
        }

        #national-day-offers .ndo-title{
          font-size:10.3px;
          margin-bottom:5px;
        }

        #national-day-offers .ndo-row span{
        white-space:normal;
      }

      #national-day-offers .ndo-row{
          font-size:10.8px;
          line-height:1.4;
          padding:3px 1px;
          gap:1px 2px;
        }

        #national-day-offers .ndo-row img{
          max-width:15px;
          height:13px;
        }

        #national-day-offers .price{
          font-size:11px;
        }

        #national-day-offers .ndo-body{
          height:calc(100dvh - 145px);
          min-height:245px;
          max-height:500px;
          padding-left:3px;
          padding-right:3px;
        }
      }

      @media (max-width:360px){
        #national-day-offers .ndo-row span{
        white-space:normal;
      }

      #national-day-offers .ndo-row{
          font-size:10.3px;
        }

        #national-day-offers .ndo-head{
          font-size:11px;
        }
      }
    
      /* ===== وضع الجوال المصغر 60% - كل عرض في سطر واحد ===== */
      @media (max-width:600px){
        #national-day-offers .ndo-head{
          min-height:24px !important;
          padding:3px 3px !important;
          font-size:9px !important;
          line-height:1.15 !important;
        }

        #national-day-offers .ndo-body{
          height:calc(100dvh - 125px) !important;
          min-height:220px !important;
          max-height:480px !important;
          padding:2px 2px 5px !important;
        }

        #national-day-offers .ndo-title{
          margin:2px 0 4px !important;
          font-size:8.5px !important;
          line-height:1.2 !important;
          white-space:nowrap !important;
        }

        #national-day-offers .ndo-row{
          display:flex !important;
          flex-wrap:nowrap !important;
          align-items:center !important;
          justify-content:center !important;
          gap:1px !important;
          padding:2px 0 !important;
          margin:0 !important;
          min-height:19px !important;
          font-size:7.2px !important;
          line-height:1.15 !important;
          white-space:nowrap !important;
          overflow:hidden !important;
        }

        #national-day-offers .ndo-row span{
          white-space:nowrap !important;
          flex:0 0 auto !important;
        }

        #national-day-offers .ndo-row img{
          width:auto !important;
          max-width:10px !important;
          height:9px !important;
          object-fit:contain !important;
          flex:0 0 auto !important;
          margin:0 !important;
        }

        #national-day-offers .ndo-row .ndo-icon-wide{
          max-width:12px !important;
          height:10px !important;
        }

        #national-day-offers .price{
          font-size:7.8px !important;
          line-height:1.1 !important;
          padding:0 2px !important;
          border-radius:3px !important;
        }

        #national-day-offers .ndo-note{
          margin:4px 2px 2px !important;
          padding:2px 3px !important;
          font-size:8px !important;
          line-height:1.25 !important;
        }

        #national-day-offers .ndo-greeting{
          margin:3px 2px !important;
          font-size:8px !important;
          line-height:1.25 !important;
        }

        #national-day-offers .ndo-contact{
          bottom:-5px !important;
          width:calc(100% + 4px) !important;
          margin:4px -2px -5px !important;
          padding:4px 2px 5px !important;
          font-size:8px !important;
          line-height:1.2 !important;
        }
      }

      @media (max-width:380px){
        #national-day-offers .ndo-row{
          font-size:6.6px !important;
          letter-spacing:-0.15px !important;
        }

        #national-day-offers .ndo-row img{
          max-width:9px !important;
          height:8px !important;
        }

        #national-day-offers .price{
          font-size:7px !important;
        }

        #national-day-offers .ndo-title{
          font-size:7.8px !important;
        }
      }

    
      /* ===== المقاسات داخل القائمة: مطابقة للنمط الصغير في كود الاشتراكات ===== */
      #national-day-offers .ndo-body{
        font-family:jazeera-light,FontAwesome,Tahoma,Arial,sans-serif !important;
        font-size:9px !important;
      }

      #national-day-offers .ndo-title{
        font-size:9px !important;
        line-height:1.25 !important;
      }

      #national-day-offers .ndo-row{
        font-size:9px !important;
        line-height:1.25 !important;
        padding:2px 1px !important;
        gap:1px 2px !important;
      }

      #national-day-offers .ndo-row span{
        font-size:9px !important;
        line-height:1.25 !important;
      }

      #national-day-offers .ndo-row img{
        width:auto !important;
        max-width:11px !important;
        height:10px !important;
        object-fit:contain !important;
        vertical-align:middle !important;
      }

      #national-day-offers .ndo-row .ndo-icon-wide{
        max-width:13px !important;
        height:10px !important;
      }

      #national-day-offers .price{
        font-size:9px !important;
        line-height:1.15 !important;
        padding:0 2px !important;
      }

      #national-day-offers .ndo-note,
      #national-day-offers .ndo-greeting,
      #national-day-offers .ndo-contact{
        font-size:9px !important;
        line-height:1.25 !important;
      }

      @media (max-width:380px){
        #national-day-offers .ndo-body,
        #national-day-offers .ndo-title,
        #national-day-offers .ndo-row,
        #national-day-offers .ndo-row span,
        #national-day-offers .price,
        #national-day-offers .ndo-note,
        #national-day-offers .ndo-greeting,
        #national-day-offers .ndo-contact{
          font-size:8px !important;
        }

        #national-day-offers .ndo-row img{
          max-width:10px !important;
          height:9px !important;
        }
      }

    
      /* ===== تحسين نهائي لمقاسات وتباعد عناصر العروض ===== */
      #national-day-offers .ndo-title{
        font-size:9.7px !important;
        line-height:1.35 !important;
      }

      #national-day-offers .ndo-row{
        font-size:9.7px !important;
        line-height:1.35 !important;
        padding:4px 1px !important;
        margin:1px 0 !important;
        gap:1px 2px !important;
      }

      #national-day-offers .ndo-row span{
        font-size:9.7px !important;
        line-height:1.35 !important;
      }

      /* كلمة مخفي بنفس حجم بقية النص تماماً */
      #national-day-offers .ndo-row .teal,
      #national-day-offers .ndo-row .teal u{
        font-size:9.7px !important;
        line-height:1.35 !important;
        font-family:inherit !important;
        font-weight:inherit !important;
      }

      #national-day-offers .ndo-row img{
        width:auto !important;
        max-width:12px !important;
        height:11px !important;
        object-fit:contain !important;
      }

      #national-day-offers .ndo-row .ndo-icon-wide{
        max-width:14px !important;
        height:11px !important;
      }

      #national-day-offers .price{
        font-size:9.7px !important;
        line-height:1.2 !important;
      }

      #national-day-offers .ndo-note,
      #national-day-offers .ndo-greeting{
        font-size:9.5px !important;
        line-height:1.35 !important;
      }

      /*
       * عنصر التواصل لم يعد sticky.
       * يبقى داخل صندوق العروض ولا يطفو فوق المتواجدين/الرومات
       * أو أي عنصر آخر يتم فتحه في الموقع.
       */
      #national-day-offers .ndo-contact{
        position:static !important;
        bottom:auto !important;
        z-index:auto !important;
        width:100% !important;
        margin:8px 0 0 !important;
        padding:5px 3px !important;
        font-size:9.5px !important;
        line-height:1.3 !important;
        box-shadow:none !important;
      }

      @media (max-width:380px){
        #national-day-offers .ndo-title,
        #national-day-offers .ndo-row,
        #national-day-offers .ndo-row span,
        #national-day-offers .ndo-row .teal,
        #national-day-offers .ndo-row .teal u,
        #national-day-offers .price{
          font-size:8.7px !important;
        }

        #national-day-offers .ndo-row{
          padding:3px 1px !important;
          margin:1px 0 !important;
        }

        #national-day-offers .ndo-row img{
          max-width:11px !important;
          height:10px !important;
        }

        #national-day-offers .ndo-contact,
        #national-day-offers .ndo-note,
        #national-day-offers .ndo-greeting{
          font-size:8.5px !important;
        }
      }

    
      /* ===== تحسين التوافق مع الشاشات المختلفة ===== */
      #national-day-offers,
      #national-day-offers .ndo-body{
        width:100% !important;
        max-width:100% !important;
        min-width:0 !important;
        box-sizing:border-box !important;
      }

      #national-day-offers .ndo-body{
        overflow-x:hidden !important;
        padding-left:4px !important;
        padding-right:4px !important;
      }

      #national-day-offers .ndo-title{
        font-size:10.4px !important;
        line-height:1.35 !important;
        white-space:normal !important;
        overflow-wrap:anywhere !important;
        word-break:normal !important;
        max-width:100% !important;
      }

      #national-day-offers .ndo-row{
        width:100% !important;
        max-width:100% !important;
        min-width:0 !important;
        flex-wrap:wrap !important;
        overflow:visible !important;
        white-space:normal !important;
        padding-left:2px !important;
        padding-right:2px !important;
      }

      #national-day-offers .ndo-row span{
        min-width:0 !important;
        max-width:100% !important;
        white-space:normal !important;
        overflow-wrap:anywhere !important;
        word-break:normal !important;
        flex:0 1 auto !important;
      }

      #national-day-offers .ndo-contact{
        font-size:8.8px !important;
      }

      @media (max-width:430px){
        #national-day-offers .ndo-body{
          padding-left:3px !important;
          padding-right:3px !important;
        }

        #national-day-offers .ndo-title{
          font-size:9.8px !important;
        }

        #national-day-offers .ndo-row{
          font-size:9.4px !important;
          line-height:1.35 !important;
          gap:2px 2px !important;
        }

        #national-day-offers .ndo-row span{
          font-size:9.4px !important;
        }

        #national-day-offers .price{
          font-size:9.4px !important;
        }

        #national-day-offers .ndo-contact{
          font-size:8.3px !important;
        }
      }

      @media (max-width:390px){
        #national-day-offers .ndo-title{
          font-size:9.4px !important;
        }

        #national-day-offers .ndo-row,
        #national-day-offers .ndo-row span,
        #national-day-offers .price{
          font-size:9px !important;
        }

        #national-day-offers .ndo-contact{
          font-size:8px !important;
        }
      }

    </style>`;

    $("head").append(css);

    function img(src, cls, alt) {
        return '<img src="' + src + '" class="' + (cls || '') + '" alt="' + (alt || '') + '">';
    }

    var html = `
    <div id="national-day-offers">
      <div class="ndo-head" role="button" tabindex="0" aria-expanded="false">
        <span class="ndo-head-text">بمناسبة اليوم الوطني / اضغط هنا</span>
      </div>

      <div class="ndo-body">
        <div class="ndo-title">عروض مخفضه للمشتركين / بمناسبة قـُرب اليوم الوطني السعودي</div>

        <div class="ndo-row">
          ${img(ICONS.goldAdmin, "", "ادمن ذهبي")}
          <span class="red">اشترك ادمن ذهبي</span>
          <span class="green">شهرين</span>
          <span class="price">1450</span>
          <span class="green">واحصل ع (2 ادمن اسود ونجمه ذهبيه) شهر</span>
          ${img(ICONS.blackShield, "", "درع اسود")}
          ${img(ICONS.blackShield, "", "درع اسود")}
          ${img(ICONS.goldStar, "", "نجمه ذهبيه")}
        </div>

        <div class="ndo-row">
          ${img(ICONS.blackShield, "", "درع اسود")}
          <span class="red">اشترك ادمن اسود</span>
          <span class="green">شهرين</span>
          <span class="price">1150</span>
          <span class="green">واحصل ع (تاجين ذهبي واسود) شهر</span>
          ${img(ICONS.goldCrown, "", "تاج ذهبي")}
          ${img(ICONS.blackCrown, "", "تاج اسود")}
        </div>

        <div class="ndo-row">
          ${img(ICONS.goldCrown, "", "تاج ذهبي")}
          <span class="red">اشترك تاج ذهبي</span>
          <span class="teal"><u>مخفي</u></span>
          <span class="green">شهرين</span>
          <span class="price">550</span>
          <span class="green">واحصل ع (تاج فضي ونجمه ذهبيه) شهر</span>
          ${img(ICONS.silverCrown, "", "تاج فضي")}
          ${img(ICONS.goldStar, "", "نجمه ذهبيه")}
        </div>

        <div class="ndo-row">
          ${img(ICONS.blackCrown, "", "تاج اسود")}
          <span class="red">اشترك تاج اسود</span>
          <span class="teal"><u>مخفي</u></span>
          <span class="green">شهرين</span>
          <span class="price">450</span>
          <span class="green">واحصل ع (نجمتين ذهبيه وسوداء) شهر</span>
          ${img(ICONS.goldStar, "", "نجمه ذهبيه")}
          ${img(ICONS.blackStar, "", "نجمه سودا")}
        </div>

        <div class="ndo-row">
          ${img(ICONS.silverCrown, "", "تاج فضي")}
          <span class="red">اشترك تاج فضي</span>
          <span class="green">شهرين</span>
          <span class="price">350</span>
          <span class="green">واحصل ع (نجمتين سوداء) شهر</span>
          ${img(ICONS.blackStar, "", "نجمه سودا")}
          ${img(ICONS.blackStar, "", "نجمه سودا")}
        </div>

        <div class="ndo-row">
          ${img(ICONS.goldStar, "", "نجمه ذهبيه")}
          ${img(ICONS.goldStar, "", "نجمه ذهبيه")}
          <span class="red">اشترك (عشره نجوم ذهبيه)</span>
          <span class="green">شهر</span>
          <span class="price">1200</span>
          <span class="green">واحصل ع (تاج ذهبي) هديه</span>
          ${img(ICONS.goldCrown, "", "تاج ذهبي")}
        </div>

        <div class="ndo-row">
          ${img(ICONS.blackStar, "", "نجمه سودا")}
          ${img(ICONS.blackStar, "", "نجمه سودا")}
          <span class="red">اشترك (عشره نجوم سوداء)</span>
          <span class="green">شهر</span>
          <span class="price">1000</span>
          <span class="green">واحصل ع (تاج اسود) هديه</span>
          ${img(ICONS.blackCrown, "", "تاج اسود")}
        </div>

        <div class="ndo-row">
          ${img(ICONS.story, "ndo-icon-wide", "ايقونة الستوري")}
          ${img(ICONS.link, "ndo-icon-wide", "ايقونة اشتراك الرابط")}
          <span class="red">اشتراك ستوري + اشتراك الرابط لـ</span>
          <span class="green">(2 شخصين ب 100 شهر)</span>
          <span class="blue">.</span>
        </div>


        <div class="ndo-title" style="margin-top:9px;">عروض مايخص التصاميم</div>

        <div class="ndo-row">
          ${img(ICONS.nightMode, "ndo-icon-wide", "مود الروم الليلي")}
          <span class="red">اشترك بمود الروم الليلي لرومك مع خواصه</span>
          <span class="price">150</span>
          <span class="green">لـ شهرين</span>
        </div>

        <div class="ndo-row">
          <span class="red">اشترك بدخول ملكي</span>
          <span class="price">300</span>
          <span class="green">للشهرين واحصل على تصميم لرومك الخاص</span>
        </div>

        <div class="ndo-row">
          <span>💎</span>
          <span class="blue">لـ اول 5 اشخاص</span>
          <span class="red">اشترك بـ اي خاصيه من الخواص المميزه</span>
          <span class="green">واحصل على نفس الاشتراك لصديقك</span>
        </div>

        <div class="ndo-row">
          <span class="blue">خصومات خاصة</span>
          <span class="red">لاصحاب المواقع</span>
          <span class="green">على خدمآت التصاميم من شبل اليمن</span>
        </div>

        <div class="ndo-note">ملاحظه : تنتهي العروض نهاية شهر سبتمبر</div>
        <div class="ndo-greeting">وكل عام والشعب السعودي حكومه وشعبا ب الف خير</div>

        <div class="ndo-contact">
          <a target="_blank" rel="noopener noreferrer" href="${adminContact}">و للتواصل مع الاداره اضغط هنا</a>
        </div>
      </div>
    </div>`;

    var $box = $(html);

    if ($("#d2").length) {
        $box.insertBefore("#d2");
    } else {
        $("body").prepend($box);
    }

    function toggleOffers() {
        var $body = $("#national-day-offers .ndo-body");
        var $head = $("#national-day-offers .ndo-head");

        $body.stop(true, true).slideToggle(220, function () {
            var isOpen = $body.is(":visible");
            $head.attr("aria-expanded", isOpen ? "true" : "false");

            if (typeof window.fixSize === "function") {
                setTimeout(function () {
                    try { window.fixSize(); } catch (e) {}
                }, 250);
            }
        });
    }

    $("#national-day-offers .ndo-head")
        .on("click", toggleOffers)
        .on("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleOffers();
            }
        });

})(window.jQuery);



$('style')['last']()['append']('\x0a\x0a\x0a\x0a\x0a\x20\x0a\x20\x20\x20\x20#upro.amirrawtnpro\x20.modal-header.label-primary\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20url(https://files.catbox.moe/iej6xk.jpg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.amirrawtnpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.amirrawtnpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.amirrawtnpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20url(https://files.catbox.moe/iej6xk.jpg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0acolor:\x20#fafafa!important;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#upro.amirrawtnpro\x20span.fl.fa\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x200px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#upro.amirrawtnpro\x20.fl.u-msg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-top:40px\x20!important;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a#upro.amirrawtnpro\x20.fl.u-pic.fitimg\x20{\x0a\x20width:\x200px\x20!important;\x0a\x20\x20\x20\x20height:\x200px\x20!important;\x0a\x20\x20\x20\x20border:\x200px\x20solid\x20#0000!important;\x0a}\x0a\x0a#upro.amirrawtnpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x20\x20\x20\x0a\x20\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-40px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fafafa!important;\x0a\x20\x20\x20\x20\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20100%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x205px\x20#fff;\x0a\x0a}\x0a\x0a\x0a\x0a\x0a#upro.amirrawtnpro\x20.modal-body\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20140px;\x0a\x20\x20\x20\x20background-image:\x20url(https://files.catbox.moe/n3iwlh.gif);\x0a\x20\x20\x20\x20background-size:\x20100%;\x0a\x20\x20\x20\x20margin-bottom:\x200px;\x0a\x20\x20\x20\x20position:\x20relative;\x0a}\x0a#upro.amirrawtnpro\x20.itaarr_amirrawtnpro1\x20{\x0a\x20\x20\x20\x20width:\x20120px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x209px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-62px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x20\x20#upro.amirrawtnpro\x20.light.fl.pro.break\x20{\x0a\x20\x20background-image:\x20url(https://files.catbox.moe/2b2bvx.png);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0amargin-top:138px\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000!important;\x0a\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.h9pro\x20.modal-body,\x0a\x0a#upro.jwhrpro\x20.modal-body,\x0a\x0a#upro.redpro\x20.modal-body,\x0a\x0a#upro.hbopro\x20.modal-body,\x0a\x0a#upro.tootapro\x20.modal-body,\x0a\x0a#upro.famospro\x20.modal-body,\x0a\x0a#upro.silarpro\x20.modal-body,\x0a\x0a#upro.heefpro\x20.modal-body,\x0a\x0a#upro.lordpro\x20.modal-body,\x0a\x0a#upro.azizpro\x20.modal-body,\x0a\x0a#upro.shablpro\x20.modal-body,\x0a\x0a#upro.sheblpro\x20.modal-body,\x0a\x0a\x0a\x0a#upro.waedpro\x20.modal-body,\x20#upro.shblpro\x20.modal-body\x20\x20\x20{\x0a\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20140px;\x0a\x0a\x20\x20\x20\x20margin-bottom:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20z-index:\x200\x20!important;\x0a\x20\x20\x20\x20border:\x200px\x20solid\x20#adadad!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.jwhrpro\x20.fl.u-msg,\x0a\x0a#upro.redpro\x20.fl.u-msg,\x20\x0a\x0a#upro.hbopro\x20.fl.u-msg,\x20\x0a\x0a#upro.tootapro\x20.fl.u-msg,\x0a\x0a#upro.famospro\x20.fl.u-msg,\x20\x0a\x0a#upro.silarpro\x20.fl.u-msg,\x0a\x0a#upro.amirapro\x20.fl.u-msg,\x0a\x0a\x20\x0a\x0a#upro.heefpro\x20.fl.u-msg,\x20\x0a\x0a#upro.lordpro\x20.fl.u-msg,\x0a\x0a#upro.thnanipro\x20.fl.u-msg,\x0a\x0a#upro.hanofpro\x20.fl.u-msg,\x20\x0a\x0a#upro.shablpro\x20.fl.u-msg,\x0a\x0a#upro.sheblpro\x20.fl.u-msg,\x0a\x0a#upro.shblpro\x20.fl.u-msg,\x0a\x0a#upro.waedpro\x20.fl.u-msg,\x0a\x0a#upro.azizpro\x20.fl.u-msg,\x0a\x0a#upro.h9pro\x20.fl.u-msg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-top:40px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:10px\x20!important;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.jwhrpro\x20label.mini.dots.nosel.modal-title,\x20\x0a\x0a#upro.hbopro\x20label.mini.dots.nosel.modal-title,\x20\x0a\x0a#upro.thnanipro\x20label.mini.dots.nosel.modal-title,\x0a\x0a#upro.tootapro\x20label.mini.dots.nosel.modal-title,\x20\x0a\x0a#upro.famospro\x20label.mini.dots.nosel.modal-title,\x0a\x0a#upro.silarpro\x20label.mini.dots.nosel.modal-title,\x0a\x0a\x0a#upro.lordpro\x20label.mini.dots.nosel.modal-title,\x20\x0a\x0a#upro.heefpro\x20label.mini.dots.nosel.modal-title\x20\x0a\x0a\x0a{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#d2d2d2!important;\x0a\x0a}\x0a\x0a\x0a\x0a\x0a#upro.jwhrpro\x20.u-ico,\x20\x0a\x0a#upro.redpro\x20.u-ico,\x0a\x0a#upro.shblpro\x20.u-ico,\x0a\x0a#upro.shablpro\x20.u-ico,\x0a\x0a#upro.sheblpro\x20.u-ico,\x0a\x0a#upro.azizpro\x20.u-ico,\x0a\x0a#upro.lordpro\x20.u-ico,\x0a\x0a#upro.thnanipro\x20.u-ico,\x0a\x0a#upro.hanofpro\x20.u-ico,\x0a\x0a#upro.silarpro\x20.u-ico,\x0a\x0a#upro.famospro\x20.u-ico,\x0a\x0a#upro.tootapro\x20.u-ico,\x0a\x0a#upro.heefpro\x20.u-ico\x20,\x0a\x0a\x0a#upro.hbopro\x20.u-ico\x20\x0a\x0a{\x0a\x20\x20background-color:\x20#e1e1e1!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x205px\x200px\x205px!important;\x0amargin-right:\x205px;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20#upro.jwhrpro\x20.light.fl.pro.break,\x0a\x0a#upro.famospro\x20.light.fl.pro.break,\x0a\x0a#upro.tootapro\x20.light.fl.pro.break,\x0a\x0a#upro.hbopro\x20.light.fl.pro.break,\x0a\x0a\x0a\x0a#upro.shablpro\x20.light.fl.pro.break,\x0a\x0a#upro.sheblpro\x20.light.fl.pro.break,\x0a\x0a\x0a\x0a\x20#upro.h9pro\x20.light.fl.pro.break,\x0a\x0a#upro.heefpro\x20.light.fl.pro.break,\x0a\x0a#upro.lordpro\x20.light.fl.pro.break,\x0a\x0a#upro.shblpro\x20.light.fl.pro.break\x20\x0a\x0a\x0a{\x0a\x20\x20background-color:\x20#e8e8e8!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:138px\x20!important;\x0a\x0a\x0a\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x20#upro.amirapro\x20span.fl.fa,\x0a\x0a\x0a\x20\x20#upro.h9pro\x20span.fl.fa,\x0a\x0a#upro.waedpro\x20span.fl.fa,\x0a\x0a#upro.shblpro\x20span.fl.fa,\x0a\x0a#upro.shablpro\x20span.fl.fa,\x0a\x0a#upro.sheblpro\x20span.fl.fa,\x0a\x0a\x0a\x20#upro.thnanipro\x20span.fl.fa,\x0a\x0a\x20#upro.heefpro\x20span.fl.fa,\x0a\x0a\x0a#upro.famospro\x20span.fl.fa,\x0a\x0a#upro.tootapro\x20span.fl.fa,\x0a\x0a#upro.jwhrpro\x20span.fl.fa,\x0a\x0a#upro.redpro\x20span.fl.fa,\x0a\x0a#upro.hbopro\x20span.fl.fa\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a#upro.jwhrpro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.h9pro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.heefpro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.waedpro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.shblpro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.shablpro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.sheblpro\x20.fl.u-pic.fitimg,\x0a\x0a\x0a#upro.azizpro\x20.fl.u-pic.fitimg,\x0a\x0a\x0a\x0a\x20#upro.hanofpro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.thnanipro\x20.fl.u-pic.fitimg,\x0a\x0a\x20#upro.lordpro\x20.fl.u-pic.fitimg,\x0a\x0a\x0a#upro.amirapro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.silarpro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.famospro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.hbopro\x20.fl.u-pic.fitimg,\x0a\x0a#upro.redpro\x20.fl.u-pic.fitimg,\x0a\x0a\x0a#upro.tootapro\x20.fl.u-pic.fitimg\x0a\x0a{\x0a\x20\x20width:\x200px\x20!important;\x0a\x20\x20\x20\x20height:\x200px\x20!important;\x0a\x0a}\x0a\x0a\x0a\x0a\x0a\x0a#upro.jwhrpro\x20.itaarr_jwhrpro1,\x0a\x0a#upro.azizpro\x20.itaarr_azizpro1,\x0a\x0a#upro.heefpro\x20.itaarr_heefpro1,\x0a\x0a#upro.silarpro\x20.itaarr_silarpro1,\x0a\x0a#upro.redpro\x20.itaarr_redpro1,\x0a\x0a#upro.hbopro\x20.itaarr_hbopro1\x0a\x0a{\x0a\x20\x20width:\x200px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.jwhrpro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/mrZLzjyn/labl-mnswrd.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.jwhrpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.jwhrpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.jwhrpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/mrZLzjyn/labl-mnswrd.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.jwhrpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x0a\x20\x20\x20width:\x2085px\x20!important;\x0a\x20\x20\x20\x20height:\x2085px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20105%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.redpro\x20label.mini.dots.nosel.modal-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#0000!important;\x0a\x0a}\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.redpro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/fTRBDV65/labl-bynk-rydsh.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.redpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.redpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.redpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/fTRBDV65/labl-bynk-rydsh.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.redpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x0a\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20105%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:inset\x200\x200\x200\x20rgba(0,0,0,.08),0\x200\x207px\x20#fff;\x0a\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20#upro.redpro\x20.light.fl.pro.break\x20{\x0abackground-image:\x20url(https://i.postimg.cc/ZRL1yQPP/khlfyt-alamyrt-wdarksths.png);\x0a\x20\x20\x20\x20background-size:\x20cover;\x0amargin-top:138px\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000!important;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.hbopro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/mrZLzjyn/labl-mnswrd.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.hbopro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.hbopro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.hbopro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/mrZLzjyn/labl-mnswrd.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.hbopro\x20.fl.u-msg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-top:40px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:10px\x20!important;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a#upro.hbopro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x0a\x20\x20\x20width:\x2085px\x20!important;\x0a\x20\x20\x20\x20height:\x2085px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20105%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x0a\x0a\x20\x20\x20\x20#upro.tootapro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/CxV9dKsb/Whats-App-Image-2026-08-09-at-11-14.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#fff;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.tootapro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.tootapro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.tootapro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/CxV9dKsb/Whats-App-Image-2026-08-09-at-11-14.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x0a\x0a\x0a\x0a\x0a#upro.tootapro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x0a\x20\x20\x20width:\x2082px\x20!important;\x0a\x20\x20\x20\x20height:\x2082px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x200px\x206px\x200px\x206px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2018px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20105%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a\x0a#upro.tootapro\x20.itaarr_tootapro1\x20{\x0a\x20\x20width:\x20130px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x20130px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x20-5px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-55px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x0a\x0a\x20\x20\x20\x20#upro.famospro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/NffnTp8M/labl-famwss.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.famospro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.famospro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.famospro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/NffnTp8M/labl-famwss.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.famospro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x0a\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20100%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:inset\x200\x200\x200\x20rgba(0,0,0,.08),0\x200\x207px\x20#fff;\x0a\x0a}\x0a\x0a\x0a\x0a\x0a#upro.famospro\x20.itaarr_famospro1\x20{\x0a\x20\x20width:\x20147px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x20147px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x20-11px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-59px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.silarpro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/y8BRk6NL/labl-sylar.png);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.silarpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.silarpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.silarpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/y8BRk6NL/labl-sylar.png);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#upro.silarpro\x20span.fl.fa\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgba(0,0,0,.08),0\x200\x202px\x20#8e75d4;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#8e75d4;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.silarpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x0a\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20120%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.silarpro\x20.light.fl.pro.break\x20{\x0a\x20\x20\x20\x20margin-top:\x20138px\x20!important;\x0a\x0a\x20\x20\x20\x20background:\x20linear-gradient(\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20bottom,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#d2c7f0\x200%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#eee9f8\x2050%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#d2c7f0\x20100%\x0a\x20\x20\x20\x20);\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x0a\x20\x20\x20\x20#upro.amirapro\x20.modal-header.label-primary\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/T355QCJ7/labl-alamyrhs.jpg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.amirapro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.amirapro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.amirapro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/T355QCJ7/labl-alamyrhs.jpg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0acolor:\x20#5d5d5d!important;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.amirapro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x20\x20\x20\x0a\x20\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fafafa!important;\x0a\x20\x20\x20\x20\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20100%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a}\x0a\x0a\x0a\x0a\x0a#upro.amirapro\x20.modal-body\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20140px;\x0a\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/mDHD7bMf/brwfayl-alamyrt.gif);\x0a\x20\x20\x20\x20background-size:\x20100%;\x0a\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20margin-bottom:\x200px;\x0a\x20\x20\x20\x20position:\x20relative;\x0a}\x0a#upro.amirapro\x20.itaarr_amirapro1\x20{\x0a\x20\x20\x20\x20width:\x20120px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x201px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-52px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x20\x20#upro.amirapro\x20.light.fl.pro.break\x20{\x0a\x20\x20background-image:\x20url(https://i.postimg.cc/jjVw1P8H/khlfyt-alamyrh3th3.png);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0amargin-top:138px\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000!important;\x0a\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.heefpro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/HxvTqCpK/labl-syfs.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.heefpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.heefpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.heefpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/HxvTqCpK/labl-syfs.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.heefpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x0a\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20background-size:\x20105%\x20!important;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#d2d2d2!important;\x0a\x0a}\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.lordpro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/QtFMxMnC/labl-lwrdd.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.lordpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.lordpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.lordpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/QtFMxMnC/labl-lwrdd.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x0a\x0a\x0a\x0a\x0a\x0a#upro.lordpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x0a\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20120%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a\x0a#upro.lordpro\x20.itaarr_lordpro1\x20{\x0a\x20\x20width:\x20120px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x203px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-53px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x0a\x0a\x20\x20\x20\x20#upro.thnanipro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/LXPMbgb2/labl-dnany33.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.thnanipro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.thnanipro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.thnanipro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/LXPMbgb2/labl-dnany33.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x20\x0a\x0a\x0a\x0a#upro.thnanipro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x20\x20\x20\x0a\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20background-size:\x20105%\x20!important;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a#upro.thnanipro\x20.modal-body\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20140px;\x0a\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/GmMr8CyV/brwfayl-dnanys.jpg);\x0a\x20\x20\x20\x20background-size:\x20100%;\x0a\x20\x20\x20\x20border-radius:\x200px;\x0a\x20\x20\x20\x20margin-bottom:\x200px;\x0a\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20z-index:\x200\x20!important;\x0a\x20\x20\x20\x20border:\x200px\x20solid\x20#adadad!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a}\x0a#upro.thnanipro\x20.itaarr_thnanipro1\x20{\x0a\x20\x20\x20\x20\x20width:\x20120px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x2037px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-53px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x20\x20#upro.thnanipro\x20.light.fl.pro.break\x20{\x0a\x20\x20background-image:\x20url(https://i.postimg.cc/RZP96Btx/khlfyt-dnanys.png);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0amargin-top:138px\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x0a\x20\x20\x20\x20#upro.hanofpro\x20.modal-header.label-primary\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/0NxmQ77c/labl-hnwfs.jpg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.hanofpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.hanofpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.hanofpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/0NxmQ77c/labl-hnwfs.jpg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#d4d4d4;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#upro.hanofpro\x20span.fl.fa\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x200px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#upro.hanofpro\x20.fl.u-msg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#d4d4d4;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-top:40px\x20!important;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20#upro.hanofpro\x20span.fl.fa.fa-comment.btn.upm.borderg,\x20.hanofpro\x20span.fl.fa.fa-envelope-o.btn.unot.borderg,\x20.hanofpro\x20span.fl.fa.fa-microphone.btn.uma.borderg,\x20.hanofpro\x20span.fl.fa.fa-microphone-slash.btn.umm.borderg,\x20.hanofpro\x20span.fl.fa.fa-microphone-slash.btn.uml.borderg,\x20.hanofpro\x20span.fl.fa.fa-search.btn.uh.borderg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#d4d4d4;\x0a\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a#upro.hanofpro\x20.fl.mini.u-co\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#b3b3b3!important;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a#upro.hanofpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x20\x20\x20\x0a\x20\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20\x20\x20\x20\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20120%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x204px\x20#fff;\x0a\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20#upro.azizpro\x20.light.fl.pro.break\x20{\x0a\x20\x20\x20border:\x200px\x20solid\x20#0000!important;\x0amargin-top:138px\x20!important;\x0abackground-image:\x20url(https://i.postimg.cc/FFJB0QMf/brwfayl-nwrthqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq.jpg);\x0abackground-size:\x20100%;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#upro.azizpro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/x1Qh0FFN/labl-ʿzyzthththththththth.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.azizpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.azizpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.azizpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/x1Qh0FFN/labl-ʿzyzthththththththth.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#upro.azizpro\x20span.fl.fa\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0aborder-radius:\x200px\x208px\x200px\x208px!important;\x0aborder:\x200px\x20solid\x20#232323;\x0abox-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.azizpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x20\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#7f7f7f!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a\x20\x20\x20\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20120%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a}\x0a\x0a\x0a\x0a#upro.azizpro\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#adadad!important;\x0a\x20background-color:\x20#888686!important;\x0a\x0a\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.azizpro\x20img.fl\x20{\x0a\x20\x20\x20\x20content:\x20url(\x22https://i.postimg.cc/D0HJM08k/SA23.png\x22)\x20!important;\x0abackground-size:\x20100%;\x0amargin-right:\x202px;\x0a\x0amargin-top:\x20-3px\x20!important;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x0a\x0a\x20\x20\x20\x20#upro.shablpro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/j5yfx5R5/labl-brwfayl-shbl2.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.shablpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.shablpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.shablpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/j5yfx5R5/labl-brwfayl-shbl2.jpg);\x0a\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.shablpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x20\x20\x20\x0a\x0a\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20120%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a\x0a#upro.shablpro\x20.itaarr_shablpro1\x20{\x0a\x20\x20\x20\x20\x20width:\x20120px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x203px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-53px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.sheblpro\x20label.mini.dots.nosel.modal-title\x0a\x0a{\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#0000\x20!important;\x0a\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.sheblpro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/dQbGPyLX/labl-brwfayl-shbl2yb.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.sheblpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.sheblpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.sheblpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/dQbGPyLX/labl-brwfayl-shbl2yb.jpg);\x0a\x0abackground-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.sheblpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x20\x20\x20\x0a\x0a\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20110%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x206px\x20#fff;\x0a}\x0a\x0a\x0a\x0a\x0a#upro.sheblpro\x20.itaarr_sheblpro1\x20{\x0a\x20\x20\x20\x20\x20width:\x20120px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x203px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-53px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.shblpro\x20.modal-header.label-primary\x20{\x0a\x20background-image:\x20url(https://i.postimg.cc/j5yfx5R5/labl-brwfayl-shbl2.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.shblpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.shblpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.shblpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/j5yfx5R5/labl-brwfayl-shbl2.jpg);\x0abackground-size:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x0a\x0a\x20\x20\x0a\x0a\x0a\x0a#upro.shblpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x20\x20\x20\x0a\x0a\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20120%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a#upro.shblpro\x20.itaarr_shblpro1\x20{\x0a\x20\x20\x20\x20\x20width:\x20120px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x203px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-53px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.waedpro\x20.modal-header.label-primary\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/nrcfcSLF/ʿdwyt-waʿd-jdydshshshshshshshshshshshshshshsh.jpg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.waedpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.waedpro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.waedpro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20url(https://i.postimg.cc/nrcfcSLF/ʿdwyt-waʿd-jdydshshshshshshshshshshshshshshsh.jpg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x0a\x0a\x20\x20\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.waedpro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x20\x20\x0a\x20\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2015px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20120%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a#upro.waedpro\x20.itaarr_waedpro1\x20{\x0a\x20\x20\x20\x20width:\x20120px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x205px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-53px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x20\x20#upro.waedpro\x20.light.fl.pro.break\x20{\x0a\x20\x20background-color:\x20#b1b1b1!important;\x0a\x20margin-top:138px\x20!important;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20#upro.h9pro\x20.modal-header.label-primary\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#898989!important;\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x200px\x20solid\x20#0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20#upro.h9pro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x20\x20\x20\x20#upro.h9pro\x20label.label.fl.label-primary,\x0a\x20\x20\x20\x20#upro.h9pro\x20.fl.btn.btn-primary.dots.roomh.border\x20{\x0a\x20\x20\x20\x20\x20\x20background-color:\x20#898989!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:#fff!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200px\x208px\x200px\x208px!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20hue-rotate(360deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x202px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0000;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x20\x0a\x0a\x0a\x0a\x0a#upro.h9pro\x20.bgf.fl.u-pic.fitimg\x20{\x0a\x0a\x20\x20\x20\x20width:\x2090px\x20!important;\x0a\x20\x20\x20\x20height:\x2090px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20bottom:\x20-30px;\x0a\x20\x20\x20\x20left:\x2035px;\x0a\x20\x20\x20\x20border:\x202px\x20solid\x20#fff!important;\x0a\x20\x20\x20z-index:\x20999999999\x20!important;\x0a\x20\x20\x20\x20background-size:\x20100%\x20!important;\x0a\x20\x20\x20\x20background-position:\x20center\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x203px\x20#000;\x0a}\x0a\x0a\x0a\x0a\x0a#upro.h9pro\x20.itaarr_h9pro1\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20120px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20left:\x20-36px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20bottom:\x20-53px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20z-index:\x209999999999\x20!important;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a#upro.azizpro\x20.fl.btn.btn-primary.dots.roomh.border,\x0a\x0a#upro.silarpro\x20span.fl.fa.fa-heart.btn.ulike.borderg,\x0a\x0a#upro.amgdpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x20\x0a\x0a#upro.amgdpro\x20.fl.btn.btn-primary.dots.roomh.border,\x0a\x0a#upro.aslipro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x0a\x0a#upro.sniopro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x0a\x0a#upro.rafpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x20\x0a\x0a\x0a#upro.fozpro\x20span.fl.fa.fa-microphone-slash.btn.umm.borderg,\x0a\x0a#upro.fozpro\x20span.fl.fa.fa-heart.btn.ulike.borderg,\x0a\x0a#upro.fozpro\x20span.fl.fa.fa-microphone-slash.btn.uml.borderg,\x0a\x0a#upro.fozpro\x20label.btn.btn-primary.u-nickc.fr.fa.fa-save,\x0a\x0a#upro.fozpro\x20textarea.borderg.corner.fl.u-topic,\x0a\x0a#upro.fozpro\x20span.fl.fa.fa-envelope-o.btn.unot.borderg,\x0a\x0a#upro.fozpro\x20span.fl.fa.fa-comment.btn.upm.borderg,\x0a\x0a#upro.fozpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x20\x0a\x0a#upro.h9pro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x0a\x0a#upro.whshpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x0a\x0a#upro.jwhrpro\x20.fl.btn.btn-primary.dots.roomh.border,\x0a\x0a#upro.shablpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x20#upro.shblpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x20\x0a\x0a#upro.sheblpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x0a\x0a#upro.shablpro\x20span.fa.fr.fa-check.btn.uroomz.border,\x20#upro.shblpro\x20span.fa.fr.fa-check.btn.uroomz.border,\x0a\x0a#upro.sheblpro\x20span.fa.fr.fa-check.btn.uroomz.border,\x0a\x0a#upro.thnanipro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x0a\x0a#upro.fozpro\x20span.fa.fr.fa-check.btn.uroomz.border,\x0a\x0a\x0a#upro.fozpro\x20.fl.btn.btn-primary.dots.roomh.border,\x20\x0a\x0a#upro.hnofpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x0a\x0a#upro.hnofpro\x20span.fl.fa.fa-envelope-o.btn.unot.borderg,\x0a\x0a#upro.skypro\x20.fl.btn.btn-primary.dots.roomh.border,\x0a\x0a#upro.skypro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x20\x0a\x0a#upro.skypro\x20span.fl.fa.fa-heart.btn.ulike.borderg,\x0a\x0a#upro.frqapro\x20span.fl.fa.fa-comment.btn.upm.borderg,\x0a\x0a#upro.frqapro\x20span.fl.fa.fa-heart.btn.ulike.borderg,\x0a\x0a#upro.frqapro\x20.fl.mini.u-co,\x0a\x0a#upro.frqapro\x20span.fl.fa.fa-envelope-o.btn.unot.borderg,\x0a\x0a\x0a#upro.dashmndpro\x20span.fl.fa.fa-microphone-slash.btn.uml.borderg,\x20\x0a\x0a#upro.dashmndpro\x20span.fl.fa.fa-microphone-slash.btn.umm.borderg,\x0a\x0a#upro.dashmndpro\x20.fl.mini.u-co,\x20\x0a\x0a#upro.dashmndpro\x20span.fl.fa.fa-envelope-o.btn.unot.borderg,\x0a\x0a#upro.dashmndpro\x20span.fl.fa.fa-comment.btn.upm.borderg,\x0a\x0a#upro.dashmndpro\x20span.fl.fa.fa-heart.btn.ulike.borderg,\x0a\x0a#upro.dashmndpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x0a\x0a#upro.turkipro\x20span.fl.fa.fa-ban.btn.udelpic.borderg,\x20\x0a\x0a#upro.turkipro\x20span.fl.fa.fa-comment.btn.upm.borderg,\x0a\x0a#upro.turkipro\x20span.fl.fa.fa-envelope-o.btn.unot.borderg,\x0a\x0a#upro.turkipro\x20span.fl.fa.fa-heart.btn.ulike.borderg,\x0a\x0a\x0a#upro.aslpro\x20span.fl.fa.fa-comment.btn.upm.borderg,\x0a\x0a#upro.aslpro\x20span.fl.fa.fa-envelope-o.btn.unot.borderg,\x0a\x0a#upro.aslpro\x20span.fl.fa.fa-heart.btn.ulike.borderg,\x0a\x0a\x0a#upro.thlpro\x20span.fl.fa.fa-envelope-o.btn.unot.borderg,\x0a\x0a#upro.thlpro\x20span.fl.fa.fa-ban.btn.udelpic.borderg\x0a\x0a{\x0a\x0avisibility:\x20hidden\x20!important;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a');const _Sbl56zznz4=[{'name':'waedpro1','deco':'₩ǍĔĐ','cls':'waedpro','icon':'https://i.postimg.cc/0yr5CjP0/shʿar-brwfayl-waʿds.gif'},{'name':'h9pro1','deco':'..\x20حـّـظ','cls':'h9pro','icon':'https://i.postimg.cc/wvJSgZMB/shʿar-brwfayl-hzyy.png'},{'name':'shablpro1','deco':'א.','cls':'shablpro','icon':'https://i.postimg.cc/h49XJXtj/shʿar-brwfayl-shbls.gif'},{'name':'sheblpro1','deco':'𝑺𝒉𝒆𝒃𝒍\x20𝑨𝒍\x20𝒀e𝒎𝒆𝒏','cls':'sheblpro','icon':'https://i.postimg.cc/h49XJXtj/shʿar-brwfayl-shbls.gif'},{'name':'shblpro1','deco':'𝑺𝒉𝒆𝒃𝒍\x20𝑨𝒍\x20𝒀𝒆𝒎𝒆𝒏','cls':'shblpro','icon':'https://i.postimg.cc/h49XJXtj/shʿar-brwfayl-shbls.gif'},{'name':'sheblpro1','deco':'𝑺𝒉𝒆𝒃𝒍\x20𝑨𝒍\x20𝒀e𝒎e𝒏','cls':'sheblpro','icon':'https://i.postimg.cc/h49XJXtj/shʿar-brwfayl-shbls.gif'},{'name':'sheblpro1','deco':'𝑺𝒉e𝒃𝒍\x20𝑨𝒍\x20𝒀e𝒎e𝒏','cls':'sheblpro','icon':'https://i.postimg.cc/h49XJXtj/shʿar-brwfayl-shbls.gif'},{'name':'hanofpro1','deco':'هَنوفة','cls':'hanofpro','icon':'https://i.postimg.cc/6Q0ZGT0R/shʿar-brwfayl-hnwfs.gif'},{'name':'thnanipro1','deco':'ضنإني\x20،\x20الشوق','cls':'thnanipro','icon':'https://i.postimg.cc/KjcJgdLJ/shʿar-brwfayl-dnanyd.gif'},{'name':'amirrawtnpro1','deco':'الأميِرة','cls':'amirrawtnpro','icon':'https://files.catbox.moe/punt7a.gif'},{'name':'amirapro1','deco':'الأميَرة','cls':'amirapro','icon':'https://i.postimg.cc/CKjBp5tt/shʿar-brwfayl-alamyrt2ss.gif'},{'name':'lordpro1','deco':'𝐋\x20𝐎\x20𝐑\x20𝐃','cls':'lordpro','icon':'https://i.postimg.cc/nr7cBPJP/shʿar-brwfayl-lwrds.gif'},{'name':'heefpro1','deco':'ِHeef','cls':'heefpro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'hbopro1','deco':'هَبوُشِيـّـہ','cls':'hbopro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'hbopro1','deco':'نّقاء\x20..','cls':'hbopro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'hbopro1','deco':'ِsky','cls':'hbopro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'hbopro1','deco':'غـرور\x20انسـانه','cls':'hbopro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'hbopro1','deco':'Moh.','cls':'hbopro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'hbopro1','deco':'َBader','cls':'hbopro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'turkipro1','deco':'τυяҝเ\x20♪','cls':'turkipro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'jwhrpro1','deco':'الجَوهّره','cls':'jwhrpro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'ajodpro1','deco':'أَجْوَد','cls':'ajodpro','icon':'https://i.postimg.cc/xCqcZjFy/shʿar-ajwd.gif'},{'name':'silarpro1','deco':'َö','cls':'silarpro','icon':'https://i.postimg.cc/x8K5h9Qb/hz-alakhyr-mkbr-mʿ-halh-msghr-alkhts.png'},{'name':'famospro1','deco':'فاموس','cls':'famospro','icon':'https://i.postimg.cc/bYtz2YTZ/shʿar-brwfayl-famws.gif'},{'name':'rafpro1','deco':'رَأفت','cls':'rafpro'},{'name':'sniopro1','deco':'Señorita','cls':'sniopro'},{'name':'aslipro1','deco':'عَسليّةُ\x20العَيْنين','cls':'aslipro'},{'name':'whshpro1','deco':'وّحّش','cls':'whshpro'},{'name':'skypro1','deco':'َsky','cls':'skypro'},{'name':'amgdpro1','deco':'َÃmjd','cls':'amgdpro'},{'name':'azizpro1','deco':'アジ','cls':'azizpro'},{'name':'fozpro1','deco':'فــوَز\x20بنت\x20طـــلال','cls':'fozpro'},{'name':'aslpro1','deco':'أقوُطر\x20عَسل','cls':'aslpro'},{'name':'thlpro1','deco':'ثلاثيني\x20مُتمرد','cls':'thlpro'},{'name':'redpro1','deco':'َRed','cls':'redpro','icon':'https://i.postimg.cc/bYtz2YTZ/shʿar-brwfayl-famws.gif'},{'name':'tootapro1','deco':'تُـــوتـــه','cls':'tootapro','icon':'https://i.postimg.cc/K8vRXm3W/shʿar-brwfayl-twth.gif'},{'name':'dashmndpro1','deco':'سموف\x20فاراب','cls':'dashmndpro'},{'name':'frqapro','deco':'الفرقى\x20راحه','cls':'frqapro'}];(function(){let W=[],C=null,U=null,H=null,s=0x0,R=![];const l=Array['from'](new Set(_Sbl56zznz4['map'](function(J){return J['cls'];})));function I(J){R=!![];try{J();}finally{setTimeout(function(){R=![];},0x0);}}function K(){const J=$('#upro');if(!J['length']){W=[],C=null;return;}I(function(){const w=J['find']('.modal-title');l['forEach'](function(v){J['hasClass'](v)&&J['removeClass'](v),w['hasClass'](v)&&w['removeClass'](v);}),J['find']('[class^=\x27itaarr_\x27]')['remove']();}),W=[],C=null;}function i(J,w,v){if(!C)return![];if(C['cls']!==v['cls']||C['deco']!==v['deco']||C['name']!==v['name'])return![];if(!J['hasClass'](v['cls']))return![];if(!w['hasClass'](v['cls']))return![];if(v['icon']){if(!J['find']('.itaarr_'+v['name'])['length'])return![];}return!![];}function q(){const J=$('#upro');if(!J['length'])return;if(!J['hasClass']('in')){(C||W['length'])&&K();return;}const w=J['find']('.modal-title');if(!w['length'])return;const v=w['text']()['trim']();if(!v)return;const D=_Sbl56zznz4['find'](function(b){return b&&b['deco']&&v['indexOf'](b['deco'])!==-0x1;});if(!D){(C||W['length'])&&K();return;}if(i(J,w,D))return;C&&(C['cls']!==D['cls']||C['deco']!==D['deco'])&&K(),I(function(){!J['hasClass'](D['cls'])&&J['addClass'](D['cls']);!w['hasClass'](D['cls'])&&w['addClass'](D['cls']);if(D['icon']){const b='.itaarr_'+D['name'];if(!J['find'](b)['length']){const u=document['createElement']('img');u['className']='itaarr_'+D['name'],u['src']=D['icon'],u['style']['pointerEvents']='none';const f=J['find']('.modal-body')[0x0];f&&f['appendChild'](u);}}}),W=[D['cls']],C={'cls':D['cls'],'deco':D['deco'],'name':D['name']};}function x(){if(s)return;window['requestAnimationFrame']?s=requestAnimationFrame(function(){s=0x0,q();}):setTimeout(q,0x0);}function E(){const J=document['getElementById']('upro');if(!J)return;if(U===J&&H)return;H&&(H['disconnect'](),H=null),U=J,H=new MutationObserver(function(w){if(R)return;let v=![];for(let D=0x0;D<w['length'];D++){const b=w[D];if(b['type']==='attributes'&&b['attributeName']==='class'){v=!![];break;}if(b['type']==='childList'){let u=!![];const f=[]['concat'](Array['from'](b['addedNodes']||[]))['concat'](Array['from'](b['removedNodes']||[]));!f['length']&&(u=![]);f['forEach'](function(Z){if(Z['nodeType']!==0x1){u=![];return;}const r=String(Z['className']||'');!r['includes']('itaarr_')&&(u=![]);});if(!u){v=!![];break;}}}v&&x();}),H['observe'](J,{'attributes':!![],'attributeFilter':['class'],'childList':!![],'subtree':!![]}),x();}E();const y=new MutationObserver(function(){const J=document['getElementById']('upro');J&&J!==U&&(W=[],C=null,E());});y['observe'](document['body']||document['documentElement'],{'childList':!![],'subtree':!![]}),setInterval(function(){if(document['hidden'])return;const J=document['getElementById']('upro');J&&J!==U&&(W=[],C=null,E());},0x1388);}());



$('style')['last']()['append']('\x0a\x0a\x0a\x0a.twiq-alaw\x20.u-msg\x20{\x0a\x20\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20-webkit-text-fill-color:\x20#0000;\x0a\x20\x20background-image:\x20linear-gradient(-225deg,#000\x200%,#f00\x2029%,#353535\x2067%,#000\x20100%);\x0a\x20\x20font-size:\x20100%\x20!important;\x0a\x09\x0abackground-size:\x20cover;\x20\x0a}\x0a\x0a\x0a#chats.twiq-alaw\x20.u-msg\x20{\x0a\x20\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20-webkit-text-fill-color:\x20#0000;\x0a\x20\x20background-image:\x20linear-gradient(-225deg,#000\x200%,#353535\x2029%,#f00\x2067%,#000\x20100%);\x0a\x20\x20font-size:\x20100%\x20!important;\x0a\x09\x0abackground-size:\x20cover;\x20\x0a}\x0a\x0a\x0a\x0a#users\x20.uzr.twiq-alaw\x20.u-msg\x20{\x0a\x20\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20-webkit-text-fill-color:\x20#0000;\x0a\x20\x20background-image:\x20linear-gradient(-225deg,#000\x200%,#353535\x2029%,#f00\x2067%,#000\x20100%);\x0a\x20\x20font-size:\x20100%\x20!important;\x0a\x09\x0abackground-size:\x20cover;\x20\x0a}\x0a\x0a\x0a\x0a\x0a.moh-alaw\x20img.ustat,\x0a.moh-alaw\x20img.fl.ustat,\x0a#users\x20.uzr.moh-alaw\x20img.ustat,\x0a#users\x20.uzr.moh-alaw\x20img.fl.ustat,\x0a#chats\x20.uzr.moh-alaw\x20img.ustat,\x0a#chats\x20.uzr.moh-alaw\x20img.fl.ustat\x20{\x0a\x0a\x20\x20\x20\x20margin-left:\x20-0.4px\x20!important;\x0a\x20\x20\x20\x20border:\x202.4px\x20solid\x20transparent;\x0abackground:\x0a\x20\x20\x20\x20linear-gradient(#000,#000)\x20padding-box,\x0a\x20\x20\x20\x20linear-gradient(\x0a\x20\x20\x20\x20\x20\x20\x20\x20180deg,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#888f94\x200%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#6e7478\x2030%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#6e7478\x2050%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#52575b\x2070%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#52575b\x20100%\x0a\x20\x20\x20\x20)\x20border-box;\x0a}\x0a\x0a\x0a\x0a\x0a.holm-alaw\x20span.uhash\x20{\x0a\x20\x20\x20\x20-webkit-text-fill-color:\x20#4f6dac\x20!important;\x0a}\x0a\x0a.holm-alaw\x20button.bdel.corner.btn.minix.btn-primary.fa.fa-times\x20{\x0a\x20\x20\x20\x20-webkit-text-fill-color:\x20#fafafa\x20!important;\x0a}\x0a\x0a.holm-alaw\x20.u-msg\x20{\x0a\x20\x20\x20\x20background:\x20linear-gradient(\x0a\x20\x20\x20\x20\x20\x20\x20\x2090deg,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#001a4d\x200%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#1d3f8f\x2030%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#4c6fb8\x2055%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#7f7777\x2080%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#868686\x20100%\x0a\x20\x20\x20\x20);\x0a\x20\x20\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20\x20\x20-webkit-text-fill-color:\x20transparent\x20!important;\x0a\x20\x20\x20\x20background-clip:\x20text;\x0a\x20\x20\x20\x20color:\x20transparent;\x0a\x20\x20\x20\x20font-weight:\x20bold;\x0a}\x0a\x0a.holm-alaw\x20img.ustat,\x0a.holm-alaw\x20img.fl.ustat,\x0a#users\x20.uzr.holm-alaw\x20img.ustat,\x0a#users\x20.uzr.holm-alaw\x20img.fl.ustat,\x0a#chats\x20.uzr.holm-alaw\x20img.ustat,\x0a#chats\x20.uzr.holm-alaw\x20img.fl.ustat\x20{\x0a\x0a\x20\x20\x20\x20margin-left:\x20-0.4px\x20!important;\x0a\x20\x20\x20\x20border:\x202.4px\x20solid\x20transparent;\x0abackground:\x0a\x20\x20\x20\x20linear-gradient(#000,#000)\x20padding-box,\x0a\x20\x20\x20\x20linear-gradient(\x0a\x20\x20\x20\x20\x20\x20\x20\x20180deg,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#00122f\x200%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#0b2f73\x2030%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#8ab6ff\x2050%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#0b2f73\x2070%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#00122f\x20100%\x0a\x20\x20\x20\x20)\x20border-box;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a.llah-alaw\x20img.ustat,\x0a.llah-alaw\x20img.fl.ustat,\x0a#users\x20.uzr.llah-alaw\x20img.ustat,\x0a#users\x20.uzr.llah-alaw\x20img.fl.ustat,\x0a#chats\x20.uzr.llah-alaw\x20img.ustat,\x0a#chats\x20.uzr.llah-alaw\x20img.fl.ustat{\x0a\x0a\x20\x20margin-left:-0.5px!important;\x0a\x0a\x20\x20border:2.4px\x20solid\x20transparent;\x0abackground:\x0a\x20\x20linear-gradient(#000,#000)\x20padding-box,\x0a\x20\x20linear-gradient(135deg,\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#4d1290,\x0a#d391d9\x0a\x20\x20)\x20border-box;\x0a\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a.abdo-alaw\x20img.ustat,\x0a.abdo-alaw\x20img.fl.ustat,\x0a#users\x20.uzr.abdo-alaw\x20img.ustat,\x0a#users\x20.uzr.abdo-alaw\x20img.fl.ustat,\x0a#chats\x20.uzr.abdo-alaw\x20img.ustat,\x0a#chats\x20.uzr.abdo-alaw\x20img.fl.ustat{\x0a\x0a\x20\x20margin-left:-0.5px\x20!important;\x0a\x20\x20border:2.6px\x20solid\x20transparent;\x0a\x0a\x20\x20background:\x0a\x20\x20\x20\x20linear-gradient(#0000,#0000)\x20padding-box,\x0a\x20\x20\x20\x20url(\x22https://i.postimg.cc/QdFZtSw5/Whats-App-Image-2026-08-09-at-12-392.png\x22)\x0a\x20\x20\x20\x20center/auto\x20100%\x20border-box;\x0a\x0a\x20\x20box-shadow:\x0a\x20\x20\x20\x200\x200\x200\x20.0px\x20#000,\x0a\x20\x20\x20\x200\x200\x201px\x20rgba(0,0,0,.95);\x0a}\x0a\x0a\x0a\x0a.custom-alaw\x20img.ustat,\x0a.custom-alaw\x20img.fl.ustat,\x0a#users\x20.uzr.custom-alaw\x20img.ustat,\x0a#users\x20.uzr.custom-alaw\x20img.fl.ustat,\x0a#chats\x20.uzr.custom-alaw\x20img.ustat,\x0a#chats\x20.uzr.custom-alaw\x20img.fl.ustat{\x0a\x0a\x20\x20margin-left:-0.4px!important;\x0a\x0a\x20\x20border:2.4px\x20solid\x20transparent;\x0a\x0a\x20\x20background:\x0a\x20\x20\x20\x20linear-gradient(#000,#000)\x20padding-box,\x0a\x20\x20\x20\x20linear-gradient(135deg,\x0a\x20\x20\x20\x20\x20\x20#f4eadc,\x0a\x20\x20\x20\x20\x20\x20#e9d8c0,\x0a\x20\x20\x20\x20\x20\x20#d7c0a0,\x0a\x20\x20\x20\x20\x20\x20#c8ad89,\x0a\x20\x20\x20\x20\x20\x20#d7c0a0,\x0a\x20\x20\x20\x20\x20\x20#f4eadc\x0a\x20\x20\x20\x20)\x20border-box;\x0a}\x0a\x0a\x0a\x0a.hnnoof-alaw\x20img.ustat,\x0a.hnnoof-alaw\x20img.fl.ustat,\x0a#users\x20.uzr.hnnoof-alaw\x20img.ustat,\x0a#users\x20.uzr.hnnoof-alaw\x20img.fl.ustat,\x0a#chats\x20.uzr.hnnoof-alaw\x20img.ustat,\x0a#chats\x20.uzr.hnnoof-alaw\x20img.fl.ustat{\x0a\x0a\x20\x20margin-left:-0.4px!important;\x0a\x0a\x20\x20border:2.4px\x20solid\x20transparent;\x0a\x0a\x20\x20background:\x0a\x20\x20\x20\x20linear-gradient(#000,#000)\x20padding-box,\x0a\x20\x20\x20\x20linear-gradient(135deg,\x0a\x20\x20\x20\x20\x20\x20#fa6baf,\x0a\x20\x20\x20\x20\x20\x20#ff7ac8,\x0a\x20\x20\x20\x20\x20\x20#ff9fdc\x0a\x20\x20\x20\x20)\x20border-box;\x0a}\x0a\x0a\x0a\x0a\x0a');const _m56zznz2=[{'name':'Sseen','deco':'.-\x20روانْ','cls':'custom-alaw'},{'name':'Sseen','deco':'هَـنـﯡَفـة','cls':'hnnoof-alaw'},{'name':'Sseen','deco':'アジ','cls':'abdo-alaw'},{'name':'Sseen','deco':'َö','cls':'llah-alaw'},{'name':'Sseen','deco':'سموف\x20فاراب','cls':'smof-alaw'},{'name':'Sseen','deco':'حـ,ـلـ,ـمـ','cls':'holm-alaw'},{'name':'Sseen','deco':'Moh.','cls':'moh-alaw'},{'name':'Sseen','deco':'َŤ','cls':'twiq-alaw'}];function applyCustomAlaw(o){_m56zznz2['forEach'](W=>{$(o)['find']('.u-topic,\x20.dots')['each'](function(){const c=$(this),A=c['text']()['trim']();if(A['includes'](W['deco'])){const R=c['closest']('.uzr');R['length']&&!R['hasClass'](W['cls'])&&R['addClass'](W['cls']);}});});}applyCustomAlaw(document);const alawObserver=new MutationObserver(o=>{o['forEach'](W=>{W['addedNodes']['forEach'](c=>{c['nodeType']===0x1&&applyCustomAlaw(c);});});});alawObserver['observe'](document['body'],{'childList':!![],'subtree':!![]});





