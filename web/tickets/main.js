$(function () {
		
	function afficherResa () {
	$('#nbResa').html(resa);
	}
	
	var resa = 2;
	afficherResa();
	$('#minus .fa').css('opacity', 1);
		
	$('#plus').on('click',function ()
	{
		resa++;
		afficherResa();
		$('#minus .fa').css('opacity', 1);	
	});
	
	$('#minus').on('click',function ()
	{
		if (resa > 2) {		
		resa--;
		afficherResa();
		$('#minus .fa').css('opacity', 1);
		}
		else 
		{
			resa = 2
			afficherResa();
			$('#minus .fa').css('opacity', 0.5);
		}	
	});
	
});