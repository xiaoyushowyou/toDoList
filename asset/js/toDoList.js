// $("ls").click(function() {
// 	if ($(this).css("color") == "rgb(125,125,125)") {
// 		console.log("This is gray")
// 	}

// 	$(this).css({
// 		color: "gray",
// 		textDecrolation: "line-through"
// 	});
// });


$("ul").on("click", "li", function(){
	$(this).toggleClass("Completed")
});

$("ul").on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
})

$("input[type ='text']").keypress(function(event) {
	/* Act on the event */
	if (event.which == 13) {
		var newText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+newText+"</li>");
	}
});