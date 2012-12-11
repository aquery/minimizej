$(function(){
	$(".entry").each(function() {
  		$.get($(this).attr("href"), function(data, textStatus, jqXHR) {
      		var image = $(data).find(".img_thumb");
			$(".entry > .noload:first").append(image).toggleClass("noload");
		});
	});
});