// SMOOTH SCROLL
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
});
// NAV TOGGLE
$('.nav-toggle-menu-mob').click(function(e){
    e.preventDefault();
    var $this = $(this),
        mobMenu = $('.side-bar'),
        mobOver = $('.mob-menu-overlay');
          mobMenu.addClass('mob-open');
          mobOver.addClass('overlay-open');
});
$('.mob-menu-overlay').click(function(e){
  e.preventDefault();
  var $this = $(this),
      mobMenu = $('.side-bar'),
      mobOver = $('.mob-menu-overlay');
        mobMenu.removeClass('mob-open');
        mobOver.removeClass('overlay-open');
});
$('.close-icon').click(function(e){
  e.preventDefault();
  var $this = $(this),
      mobMenu = $('.side-bar'),
      mobOver = $('.mob-menu-overlay');
        mobMenu.removeClass('mob-open');
        mobOver.removeClass('overlay-open');
});
$('.nav-link').click(function(e){
  e.preventDefault();
  var $this = $(this),
      mobMenu = $('.side-bar'),
      mobOver = $('.mob-menu-overlay');
        mobMenu.removeClass('mob-open');
        mobOver.removeClass('overlay-open');
});
// SCROLL TO TOP 
$(window).scroll(function(){
  if($(this).scrollTop() > 300) {
      $(".auto-scroll-to-top").addClass("visible");                    
  } else {
      $(".auto-scroll-to-top").removeClass("visible");
  }        
});
  
$(".auto-scroll-to-top").click(function(){
  $("html, body").animate({scrollTop: 0}, 600);
});
// FLICKITY
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
$('.slider-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
// MODAL
$('#mns-btn').click(function(e){
    e.preventDefault();
    var modMns = $('.mns'),
        modOver = $('.mod-overlay');
    modMns.addClass('mod-show');
    modOver.addClass('overlay-open');
});
$('#skoop-btn').click(function(e){
    e.preventDefault();
    var modSkoop = $('.skoop'),
        modOver = $('.mod-overlay');
    modSkoop.addClass('mod-show');
    modOver.addClass('overlay-open');
});
$('#payless-btn').click(function(e){
    e.preventDefault();
    var modPay = $('.payless'),
        modOver = $('.mod-overlay');
    modPay.addClass('mod-show');
    modOver.addClass('overlay-open');
});
$('#bbar-btn').click(function(e){
    e.preventDefault();
    var modBar = $('.bbar'),
        modOver = $('.mod-overlay');
    modBar.addClass('mod-show');
    modOver.addClass('overlay-open');
});
$('#lush-btn').click(function(e){
    e.preventDefault();
    var modLush = $('.lush'),
        modOver = $('.mod-overlay');
    modLush.addClass('mod-show');
    modOver.addClass('overlay-open');
});
$('#mm-btn').click(function(e){
    e.preventDefault();
    var modMm = $('.mm'),
        modOver = $('.mod-overlay');
    modMm.addClass('mod-show');
    modOver.addClass('overlay-open');
});
// MODAL OVERLAY
$('.mod-overlay').click(function(e){
  e.preventDefault();
    var modStore = $('.store'),
        modOver = $('.mod-overlay');
  modStore.removeClass('mod-show');
  modOver.removeClass('overlay-open');
});
// ANIMATIONS
$( document ).ready(function() {
    new WOW().init();
});
$(':header, p, a, span').addClass('wow fadeInUp');