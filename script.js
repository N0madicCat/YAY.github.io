function reloadpage() {
    window.location.reload(false);
}

$("#customimage").keyup(function() {
  $(".cover").css("background-Image", "url(" + $("#customimage").val() + ")");
});

$("#customimage").on('keyup', function(e) {
  var ccType = $(this).val();
  if (ccType == "") {
    $('.cover').css('background-image', 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/531144/tloz_breath_of_the_wild_game_cover_by_gmivan-dav83o9.jpg)');
  }
})

$(document).ready(function(){
  $.adaptiveBackground.run();
});