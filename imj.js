$(function(){
  $(".entry").each(function() {
	  $.get($(this).attr("href"), function(data) {
      var image = $(data).find(".img_thumb");
		  $("." + $(this).attr("class") + " > .tmb").append(image);
    });
  });
});