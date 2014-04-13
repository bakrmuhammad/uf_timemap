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
        
        //alert(currentTime);
        
        /*if (currentTime === 'time1') {
            $('a.dot[time="time1"]').show(0);
            $('a.three a.two').hide(0);
        } else if( currentTime === 'time2') {
            $('a.dot[time="time2"]').show(0);
            $('a.three a.one').hide(0);
        } else if ( currentTime === 'time3') {
            $('a.dot[time="time3"]').show(0);
            $('a.one a.two').hide(0);
        } else{
            $('a.dot[time="time2"]').show(0);
            $('a.three a.two').hide(0);
        };*/
        
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
        
        //alert( $(this).attr('location') );
        // audio html5 plugin

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');
        
        //var selected = $('a.dot.selected').attr('location');
		var location = '.location#' + $(this).attr('location');
		var htmlCode = $(location).html();
        //alert (htmlCode);

        $('.sidebar .location_detail').fadeOut(500, function(){
			$('.sidebar .location_detail').prepend(htmlCode);
			$(this).fadeIn(500);
		});

	});
	
};

/*hover on buttons (tooltip?)
function buttonTip(){
	
};

*/
