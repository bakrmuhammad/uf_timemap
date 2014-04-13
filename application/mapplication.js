//Javascript out the Map
/*DOM notes
-body
	|-.window
	|	|-.map
	|	|	|-.button
	|	|-.sidebar (repeated)
	|	|	|-img
	|	|	|-text
	|	|-.timeline
	|		|-span
	|		|	-.time1
	|		|-span
	|		|	-.time2
	|		|-span
	|			-.time3
	|-footer

*/


$(document).ready(function(){
	timeLine();
	sideBar();
});

//switches button sets to correlate w/timestamps
function timeLine(){
    //REWORK WITH switch() 
    $('.timeline').change(function(){
        var currentTime = $('.timeline option:selected').val();
        
        if ( currentTime == 'time1'  ){
            //$(' a.dot[time="timeone"]').show(1000);
        }else{
            $('a.dot[time="'+currentTime+'"]').show(0);
            $('a.dot[time!="'+currentTime+'"]').hide(0);
        };
        
    });
    /*
    var currentTime = $('.timeline span .selected').class();
        
    if( $('#map_container a.dot').attr('time') == currentTime{
        $('#map_container a.dot').slideDown(1000)
    }else{
        $('#map_container a.dot').slideUp(0)
    }; */
};



function sideBar(){
    $('a.dot').on('click', function(){
        
        // alert( $(this).attr('location') );
        // audio html5 plugin

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');
        
        var selected = $('a.dot.selected').attr('location');
		var location = '.sidebar .location' + $(this).attr('location');
		var htmlCode = $(location).html();

        $('.sidebar').fadeOut(500, function(){
			$(this).show(htmlCode);
			$(this).fadeIn(500);
		});

	});
	
};

/*hover on buttons (tooltip?)
function buttonTip(){
	
};

*/
