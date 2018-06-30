// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height, width, color;

function makeGrid(h, w) {
	$('tr').remove();
	for (let i =1; i <= h; i++){
		$('#pixelCanvas').append('<tr id=tRow' + i +'></tr>');
		for (let j =1; j <= w; j++){
			$('#tRow'+i).append('<td></td>');
		}
	}
	$('td').click(function colorCell(){
		color = $('#colorPicker').val();
		if($(this).attr('style')){
			$(this).removeAttr('style')
		}else{
			$(this).attr('style','background-color:'+ color);
		}
	});
}

$('#sizePicker').submit(function(event) {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height,width);
});


