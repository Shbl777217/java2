

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
          <span class="price">150 ريال</span>
          <span class="green">لـ شهرين</span>
        </div>

        <div class="ndo-row">
          <span class="red">اشترك بالدخول ملكي</span>
          <span class="price">300</span>
          <span class="green">للشهرين واحصل على تصميم لرومك الخاص</span>
        </div>

        <div class="ndo-row">
          <span>💎</span>
          <span class="red">لـ اول 5 اشخاص اشترك بـ اي خاصيه من الخواص المميزه</span>
          <span class="green">واحصل على نفس الاشتراك لصديقك</span>
        </div>

        <div class="ndo-row">
          <span class="red">خصومات خاصة لاصحاب المواقع</span>
          <span class="green">بخدمآت التصميم عند شبل اليمن</span>
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


