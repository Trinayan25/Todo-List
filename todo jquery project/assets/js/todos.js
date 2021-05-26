$("ul").on("click", "li",function()
{

	$(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event)
{

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//this stops it from bubbling it to other lis and uis
	event.stopPropagation();

}); 

$("input[type ='text'").keypress(function(event)
{
	if(event.which === 13)  //13 is the number of enter
	 {
	 	var todoText = $(this).val(); 
	 	$(this).val("");
	 	 //extracting the value from input
	 	// creating a new li and apending it to li
	 	//we have to use on because it will listen to all potential listeners
	 	$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
	}

});