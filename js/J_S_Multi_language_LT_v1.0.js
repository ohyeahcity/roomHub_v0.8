//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 1.0 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字
//主要功能5 : 使用DOM方法，依照語系更換對應的Image

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======
function chg_lang(lang_index){

        forceChangeLangSetCookie();
        auto_chg_lang(lang_index);
}



// 切換語系
function auto_chg_lang(lang_index){

      //寫入Cookie
      setCookie('lang_code',lang_index,'365');
      var xck= getCookie('lang_code');
			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);
      //根據語系更改圖片
      changeImageByLang(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();





		}



    // 設定cookie 並將 forceChangeLang_index 值填上1,cookie一小時後失效
    function   forceChangeLangSetCookie(){
      //寫入Cookie
      setCookie('forceChangeLang_index',1,'0.1');
      var xcka= getCookie('forceChangeLang_index');

    }

//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;


}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}


// 根據lang_index更換IMG標籤圖片

function changeImageByLang(lang_index){

  // 圖片路徑 請自行更換，不夠用也可以自己新增
  console.log("change image function start now");
  var tw_img1_src="images/img_uservoice_grandpa.jpg";
  var eng_img1_src="images/img_uservoice_grandpa_eng.jpg";

  // var jp_img1_src="images/pcstick_banner_v2_0808.jpg";

  var tw_img2_src="images/img_uservoice_sister.jpg";
  var eng_img2_src="images/img_uservoice_sister_eng.jpg";

  var tw_img3_src="images/img_uservoice_ma.jpg";
  var eng_img3_src="images/img_uservoice_ma_eng.jpg";

  var tw_img4_src="images/how_it_works.jpg";
  var eng_img4_src="images/how_it_works_eng.jpg";


  //var tw_img3_src="images/slider_example_3_tw.jpg";
  //var eng_img3_src="images/slider_example_3_eng.jpg";
  //var jp_img3_src="images/slider_example_3_jp.jpg";

  switch (lang_index) {
    case 0:
        document.getElementById('lang_user_grandpa').src=tw_img1_src;
        document.getElementById('lang_user_sister').src=tw_img2_src;
        document.getElementById('lang_user_ma').src=tw_img3_src;
        document.getElementById('lang_worksimg').src=tw_img4_src;
        console.log("change image to CHT version");
      break;
    case 1:
        document.getElementById('lang_user_grandpa').src=eng_img1_src;
        document.getElementById('lang_user_sister').src=eng_img2_src;
        document.getElementById('lang_user_ma').src=eng_img3_src;
        document.getElementById('lang_worksimg').src=eng_img4_src;
        console.log("change image to ENG version");
      break;
    case 2:
        // document.getElementById('slideshowImage1').src=jp_img1_src;
     
        console.log("change image to JP version");
      break;
    default:

  }


}



// 根據語系更改所有文字
function changeAllNavBarUIWording(arr,lang_index){

  document.getElementById('lang_title').innerHTML = arr[lang_index].lang_title;
  document.getElementById('lang_nav_feature').innerHTML = arr[lang_index].lang_nav_feature;
  document.getElementById('lang_nav_contact').innerHTML = arr[lang_index].lang_nav_contact;
  document.getElementById('lang_nav_download').innerHTML = arr[lang_index].lang_nav_download;
  document.getElementById('lang_nav_faq').innerHTML = arr[lang_index].lang_nav_faq;

  document.getElementById('lang_navch').innerHTML = arr[lang_index].lang_navch;
  document.getElementById('lang_naven').innerHTML = arr[lang_index].lang_naven;

  document.getElementById('lang_bannertitle').innerHTML = arr[lang_index].lang_bannertitle;
  // document.getElementById('lang_bannertext_a').innerHTML = arr[lang_index].lang_bannertext_a;
  document.getElementById('lang_bannerdownload').innerHTML = arr[lang_index].lang_bannerdownload;

  document.getElementById('lang_featuretitle').innerHTML = arr[lang_index].lang_featuretitle;
  document.getElementById('lang_featurecont').innerHTML = arr[lang_index].lang_featurecont;

  document.getElementById('lang_featureicon01').innerHTML = arr[lang_index].lang_featureicon01;
  document.getElementById('lang_featureicon01_cont').innerHTML = arr[lang_index].lang_featureicon01_cont;

  document.getElementById('lang_featureicon02').innerHTML = arr[lang_index].lang_featureicon02;
  document.getElementById('lang_featureicon02_cont').innerHTML = arr[lang_index].lang_featureicon02_cont;

  document.getElementById('lang_featureicon03').innerHTML = arr[lang_index].lang_featureicon03;
  document.getElementById('lang_featureicon03_cont').innerHTML = arr[lang_index].lang_featureicon03_cont;

  document.getElementById('lang_featureicon04').innerHTML = arr[lang_index].lang_featureicon04;
  document.getElementById('lang_featureicon04_cont').innerHTML = arr[lang_index].lang_featureicon04_cont;

  document.getElementById('lang_cftitle').innerHTML = arr[lang_index].lang_cftitle;
  document.getElementById('lang_cfcont').innerHTML = arr[lang_index].lang_cfcont;

  document.getElementById('lang_worktitle').innerHTML = arr[lang_index].lang_worktitle;

  document.getElementById('lang_opiniontitle').innerHTML = arr[lang_index].lang_opiniontitle;

  document.getElementById('lang_scheduletitle01').innerHTML = arr[lang_index].lang_scheduletitle01;
  document.getElementById('lang_scheduletitle02').innerHTML = arr[lang_index].lang_scheduletitle02;

  document.getElementById('lang_scheduletitle02_cont01').innerHTML = arr[lang_index].lang_scheduletitle02_cont01;
  // document.getElementById('lang_scheduletitle02_cont02').innerHTML = arr[lang_index].lang_scheduletitle02_cont02;

  document.getElementById('lang_scheduletitle03').innerHTML = arr[lang_index].lang_scheduletitle03;
  // document.getElementById('lang_scheduletitle03_1').innerHTML = arr[lang_index].lang_scheduletitle03_1;
  document.getElementById('lang_scheduletitle03_cont').innerHTML = arr[lang_index].lang_scheduletitle03_cont;



  document.getElementById('lang_order').innerHTML = arr[lang_index].lang_order;
  document.getElementById('lang_order_cont').innerHTML = arr[lang_index].lang_order_cont;  
  document.getElementById('lang_order_app').innerHTML = arr[lang_index].lang_order_app;

  document.getElementById('lang_contact').innerHTML = arr[lang_index].lang_contact;
  document.getElementById('lang_contact_cont').innerHTML = arr[lang_index].lang_contact_cont;
  document.getElementById('lang_contact_send').innerHTML = arr[lang_index].lang_contact_send;

  document.getElementById('lang_footer').innerHTML = arr[lang_index].lang_footer;


 

  return;
}





function detectUserLang(){


    var IsforceChangeLang_index= getCookie('forceChangeLang_index');
    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();

  if (IsforceChangeLang_index!=1){
    switch (currentBrowserLang) {
      case "zh-tw":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-cn":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-hk":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "ja":
            auto_chg_lang(2);
            autolang_index=2;
        break;

      default:
            auto_chg_lang(1);
            autolang_index=1;
        break;
    }

    setCookie('lang_code',autolang_index,'365');

  } else {
    var Previous_Lang_index= getCookie('lang_code');
    auto_chg_lang(Previous_Lang_index);
  }
}


//設定cookie的function
function setCookie(cookieName, cookieValue, exdays) {
  if (document.cookie.indexOf(cookieName) >= 0) {
    var expD = new Date();
    expD.setTime(expD.getTime() + (-1*24*60*60*1000));
    var uexpires = "expires="+expD.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + uexpires+"; "+ 'path=/';
  }
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + "; " + expires+"; "+ 'path=/';
}

// 讀取cookie
function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}



//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL - PC Stick網站";
Multi_Lang_Title[1]="Welcome to EQL - PC Stick";
Multi_Lang_Title[2]="EQLへようこそ - PC Stick";


//=====文字儲存區 END======
