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

    $('a.time').on('click', function() {
	
        //$('a.times').removeClass('selected2');
		//$(this).addClass('selected2');
        
		var time ='.dot#' + $(this).attr('time');
        var htmlDots = $(time).html();
        //alert(htmlDots);
        //alert(time);
        
       $('#map_container .start').fadeOut(1000, function(){
            $(this).html(htmlDots);
			$(this).fadeIn(500);
        });	
	});  
};


function sideBar(){    
    
    $('a.start').on('click', function(){
        
        //alert( $(this).attr('location') );

		$('a.start').removeClass('selected');
		$(this).addClass('selected');
        
        //var selected = $('a.dot.selected').attr('location');
		var location = '.location#' + $(this).attr('location');
		var htmlCode = $(location).html();
        
        //debugging
        //alert(location);
        //alert (htmlCode);
        
        //function adds info on click. FINALLY WORKS 
        $('.sidebar .location_detail').fadeOut(500, function(){
            $(this).html(htmlCode);
			$(this).fadeIn(500);
		});

	});
	
};
