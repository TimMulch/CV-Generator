//
// █▀▄▀█ █░░█ █░░ █▀▀ █░░█
// █░▀░█ █░░█ █░░ █░░ █▀▀█
// ▀░░░▀ ░▀▀▀ ▀▀▀ ▀▀▀ ▀░░▀
// HeroJS
// Github: https://github.com/TimMulch
//

window.onscroll = function () {
	scrollTop = window.pageYOffset || document.scrollTop || 0;
    scaleHeroVideo(scrollTop);
};

var vid = document.querySelector(".hero-container"),
	scrollTop = 0,
	initialWidth = vid.clientWidth,
	initialHeight = vid.clientHeight,
	finalWidth = Math.min(1250, window.innerWidth - 80),
	finalHeight = document.querySelector(".content-hero").clientHeight + 300,
	vidHeight = initialHeight - 40;

var scaleHeroVideo = function (offset) {
	var scrollPercent = Math.min(offset / vidHeight, 1);
	var currentWidth = Math.floor(
		scrollPercent * (finalWidth - initialWidth) + initialWidth
	);
	var currentHeight = Math.floor(
		scrollPercent * (finalHeight - initialHeight) + initialHeight
	);

	vid.style.width = currentWidth + "px";
	vid.style.height = currentHeight + "px";
};

$(window).scroll(function(){
    $(".scrollDownIndicator").css("opacity", 1 - $(window).scrollTop() / 250);
});

var modalWindow = document.getElementById("pageModal");
var modalButton = document.getElementById("hero-button");
var modalDestroy = document.getElementById("modalClose")[0];

modalButton.onclick = function() {
    modalWindow.style.display = "block";
}

modalClose.onclick = function() {
    modalWindow.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
  }
}

$(function() {
    $('.content-grid-button').click(function(e) {
        e.preventDefault();
        var destination = this.href;
        $('body').fadeOut(500, function() {
            window.location = destination;
        });
    });
    return false;
});

var initialSrc = "dependencies/img/logo_white.svg";
var scrollSrc = "dependencies/img/logo_dark.svg";

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 500)
       $("#page_logo").attr("src", scrollSrc);
    else
       $("#page_logo").attr("src", initialSrc);
 });
 
 function resizeHeaderOnScroll() {
     const distanceY = window.pageYOffset || document.documentElement.scrollTop,
     shrinkOn = 500,
     headerEl = document.getElementById('page_logo');
     
     if (distanceY > shrinkOn) {
       headerEl.classList.add("smaller");
     } else {
       headerEl.classList.remove("smaller");
     }
 }
   
 window.addEventListener('scroll', resizeHeaderOnScroll);