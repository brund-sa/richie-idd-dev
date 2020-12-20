/*============================================================


================== Google Translate 


==============================================================*/

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
  }

  function triggerHtmlEvent(element, eventName) {
    var event;
    if (document.createEvent) {
      event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, true);
      element.dispatchEvent(event);
    } else {
      event = document.createEventObject();
      event.eventType = eventName;
      element.fireEvent('on' + event.eventType, event);
    }
  }

  jQuery('.lang-select').click(function() {
    var theLang = jQuery(this).attr('data-lang');
    jQuery('.goog-te-combo').val(theLang);

    //alert(jQuery(this).attr('href'));
    window.location = jQuery(this).attr('href');
    location.reload();

  });


  /*============================================================


================== Music Player


==============================================================*/
  var pause = document.querySelector('.pause');
  var play = document.querySelector('.play');
  var btn = document.querySelector('#app');
  var myMusic= document.getElementById("music");
  var musicPlay = document.getElementById('play-music');
  var musicPause = document.getElementById('pause-music');


  musicPlay.addEventListener('click', () => {
        musicPlay.style.display = "none";
        musicPause.style.display = "block"
        music.play();
  });

  musicPause.addEventListener('click', () => {
    musicPlay.style.display = "block";
        musicPause.style.display = "none"
        music.pause();
});



 /*============================================================


================== Disable Right Click


==============================================================*/


  var message="Please do not download the images.";
        
  function clickIE6(){
  
  if (event.button==2){
  
  
  return false;
  
  }
  
  }
  
  function clickNS4(e){
  
  if (document.layers||document.getElementById&&!document.all){
  
  if (e.which==2||e.which==3){
  
  return false;
  
  }
  
  }
  
  }
  
  if (document.layers){
  
  document.captureEvents(Event.MOUSEDOWN);
  
  document.onmousedown=clickNS4;
  
  }
  
  else if (document.all&&!document.getElementById){
  
  document.onmousedown=clickIE6;
  
  }
  
  document.oncontextmenu=new Function("return false")

/* ===============================================

 ================================================ */

   
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
    });