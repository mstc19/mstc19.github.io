var audio = new Audio('holdmedown.mp3');
var splashNotClosed = true;

function closeSplash() {
    $(".button-container").hide();
    $(".next-container").show();
    audio.pause();
}

function startSplash() {
    console.log("ya");

    audio.play();
    setTimeout(function () {
        if (splashNotClosed) {
            $("#close_splash").fadeOut();
        }
    }, 14000);
    var newlayout = '<div class="sp-container" id="splash_container"><img class="sp-img one" src="assets/img/kualalumpur.jpg"><img class="sp-img two" src="assets/img/img1.jpg"><img class="sp-img three" src="assets/img/img2.jpg"><img class="sp-img four" src="assets/img/topglove.jpg"><img class="sp-img five" src="assets/img/team.png"><div class="sp-content"><div class="close-modal" id="close_splash" onclick="closeSplash()"><div class="lr"><div class="rl"></div></div></div><div class="sp-globe"></div><h2 class="frame-1" data-text="THIS AUTUMN">THIS AUTUMN</h2><h2 class="frame-2" data-text="17 AUGUST 2019">17 AUGUST 2019</h2><h2 class="frame-3" data-text="TOP GLOVE GRAND BALLROOM">TOP GLOVE GRAND BALLROOM</h2><h2 class="frame-4" data-text="WE\'RE BACK">WE\'RE BACK</h2><h2 class="frame-5"><span>MSTC </span><span>2019<br></span><span>PARADIGM</span></h2><a class="sp-circle-link" onclick="closeSplash()">GO</a></div></div>';

    $(".button-container").html(newlayout);

}



$(document).ready(function () {

    if ($(window).width() < 1150) {
        closeSplash();
    }



})
