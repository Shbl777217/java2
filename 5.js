


(function ($) {
    if (!$) return;

    $("#design-a, #subscriptions-menu-style").remove();

    var css = `
    <style id="subscriptions-menu-style">
      #design-a{
        direction:rtl;
        position:static;
        width:100%;
        max-width:100%;
        box-sizing:border-box;
        background-color:#ffe0b6;
        color:#105873;
        border-bottom:3px solid #105873;
        border-top:3px solid #6b5f5f;
        padding-bottom:2px;
        border-radius:0 0 15px 15px;
        text-align:center;
        overflow:hidden;
        font-family:jazeera-light,Tahoma,Arial,sans-serif;
      }

      #design-a *{ box-sizing:border-box; }

      #design-a .subscriptions-head{
        min-height:30px;
        padding:4px 5px;
        cursor:pointer;
        color:#105873;
        font-size:12.5px;
        font-weight:700;
        line-height:1.35;
        user-select:none;
      }

      #design-a .subscriptions-head-text{
        text-decoration:underline;
        text-underline-offset:3px;
      }

      #spanan{
        display:none;
        width:100%;
        padding:3px 5px 7px;
        color:red;
        text-align:center;
        font-family:jazeera-light,FontAwesome,Tahoma,Arial,sans-serif;
      }

      #spanan .subscriptions-title{
        margin:4px 2px 7px;
        color:#000080;
        font-size:12.5px;
        font-weight:700;
        line-height:1.45;
      }

      #spanan .subscription-row{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        gap:1px 3px;
        width:100%;
        margin:0;
        padding:4px 1px;
        color:#105873;
        font-size:11.5px;
        font-weight:700;
        line-height:1.5;
        text-align:center;
        border-bottom:1px dashed rgba(16,88,115,.18);
      }

      #spanan .subscription-row img{
        width:auto;
        max-width:16px;
        height:14px;
        object-fit:contain;
        vertical-align:middle;
        flex:0 0 auto;
        filter:drop-shadow(0 1px 1px rgba(0,0,0,.18));
      }

      #spanan .subscription-number{
        flex:0 0 auto;
        padding-left:2px;
        color:#105873;
      }

      #spanan .subscription-note{
        margin:7px 3px 4px;
        padding:4px 5px;
        color:#6f3c00;
        font-size:11.5px;
        line-height:1.45;
        font-weight:700;
      }

      #spanan .subscription-contact{
        margin:8px 3px 3px;
        font-size:11px;
        font-weight:700;
        line-height:1.4;
      }

      #spanan .subscription-contact a{
        color:#0645c0;
        text-decoration:underline;
      }

      @media (max-width:600px){
        #design-a .subscriptions-head{
          min-height:24px !important;
          padding:3px 3px !important;
          font-size:9px !important;
          line-height:1.15 !important;
        }

        #spanan{
          padding:2px 2px 5px !important;
        }

        #spanan .subscriptions-title{
          margin:2px 0 4px !important;
          font-size:8.5px !important;
          line-height:1.2 !important;
          white-space:nowrap !important;
        }

        #spanan .subscription-row{
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

        #spanan .subscription-row span{
          white-space:nowrap !important;
          flex:0 0 auto !important;
        }

        #spanan .subscription-row img{
          width:auto !important;
          max-width:10px !important;
          height:9px !important;
          object-fit:contain !important;
          flex:0 0 auto !important;
          margin:0 !important;
        }

        #spanan .subscription-note{
          margin:4px 2px 2px !important;
          padding:2px 3px !important;
          font-size:8px !important;
          line-height:1.25 !important;
        }

        #spanan .subscription-contact{
          margin:4px 2px 2px !important;
          font-size:8px !important;
          line-height:1.2 !important;
        }
      }

      @media (max-width:380px){
        #spanan .subscription-row{
          font-size:6.6px !important;
          letter-spacing:-0.15px !important;
        }

        #spanan .subscription-row img{
          max-width:9px !important;
          height:8px !important;
        }

        #spanan .subscriptions-title{
          font-size:7.8px !important;
        }
      }
    </style>`;

    $("head").append(css);

    var html = `
      <div id="design-a">
        <div class="subscriptions-head" role="button" tabindex="0" aria-expanded="false">
          <span id="sultan" class="sultan11 subscriptions-head-text">الاشتراكــات</span>
        </div>

        <div id="spanan">
          <div class="subscriptions-title">اشتراكات الشات</div>

          <div class="subscription-row">
            <span class="subscription-number">- 1</span>
            <span>تاج ذهبي بخاصية ( المخفي ) + ( سوبر فضي هديه ) بـ 600 ريال لمدة : شهرين</span>
            <img src="https://www.te3b.com/sico/z1d1hdjuci10.gif" alt="تاج ذهبي">
          </div>

          <div class="subscription-row">
            <span class="subscription-number">- 2</span>
            <span>تاج اسود ملكي بخاصية ( المخفي ) بـ 500 ريال لمدة : شهرين</span>
            <img src="https://www.te3b.com/sico/z1d3c130e710.GIF" alt="تاج اسود">
          </div>

          <div class="subscription-row">
            <span class="subscription-number">- 3</span>
            <span>تاج فضي بـ 400 ريال لمدة : شهرين</span>
            <img src="https://www.te3b.com/sico/z1d3c137ha10.gif" alt="تاج فضي">
          </div>

          <div class="subscription-row">
            <span class="subscription-number">- 4</span>
            <span>نجمه ذهبيه بـ 300 ريال لمدة : شهرين</span>
            <img src="https://www.te3b.com/s1.gif" alt="نجمه ذهبيه">
          </div>

          <div class="subscription-row">
            <span class="subscription-number">- 5</span>
            <span>نجمه سوداء بـ 150 ريال لمدة : شهر</span>
            <img src="https://www.te3b.com/s2.gif" alt="نجمه سوداء">
          </div>

          <div class="subscription-row">
            <span class="subscription-number">- 6</span>
            <span>نجمه فضيه بـ 100 ريال لمدة : شهر</span>
            <img src="https://www.te3b.com/s3.gif" alt="نجمه فضيه">
          </div>

          <div class="subscription-note">ومن اراد بنر لـ اسمه بـ 100 ريال مع التصميم ولمدة شهر</div>

          <div class="subscription-contact">
            <a target="_blank" rel="noopener noreferrer" href="https://www.te3b.com/sico/z1f5c4o6s610.JPG">وللتواصل مع الاداره اضغط هنا</a>
          </div>
        </div>
      </div>`;

    var $box = $(html);

    if ($("#d2").length) {
        $box.insertBefore("#d2");
    } else {
        $("body").prepend($box);
    }

    function toggleSubscriptions() {
        var $body = $("#spanan");
        var $head = $("#design-a .subscriptions-head");

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

    $("#design-a .subscriptions-head")
      .on("click", toggleSubscriptions)
      .on("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleSubscriptions();
          }
      });

})(window.jQuery);

