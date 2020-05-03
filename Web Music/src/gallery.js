/*Testing*/
document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;
function startplayer() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}
$('#play').on('click', function() {
    document.getElementById('player').play();
});

$('#pause').on('click', function() {
    document.getElementById('player').pause();
});

$('#player').on('timeupdate', function() {
    $('#seekbar').attr("value", this.currentTime / this.duration);
});
function play_aud() 
{
	if (player.paused) 
	{
		player.play();
	}
 	else
 		player.pause();

 
}
function stop_aud() 
{
 player.pause();
 player.currentTime = 0;
}
function change_vol()
{
 var video = document.getElementById("change_vol");
var volumeControl = document.getElementById("change_vol2");

var setVolume = function() { video.volume = this.value / 100; };

volumeControl.addEventListener('change', setVolumne);
volumeControl.addEventListener('input', setVolumne);
}


$(document).ready(function(){
	$("#menu1").click(function(){
		$("#submenu").toggleClass("d-block");
		if ($("#icon").hasClass("fa fa-angle-down")) 
		{
			$("#icon").removeClass("fa fa-angle-down").addClass("fa fa-angle-up");
		}
		else
		{
			$("#icon").removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
		}

	});
	$(window).resize(function() {
		$("#submenu").removeClass("d-block");
		
		if (window.matchMedia('(max-width: 1100px)').matches) 
		{
			$(".col-4").addClass("col-12");

		}
		if (window.matchMedia('(min-width: 1101px)').matches) 
		{
			$(".col-4").removeClass("col-12");

		}
		

	});

	
	
	$("#menu-sm").click(function(){
		$("#submenu-sm").toggleClass("d-block");
		if ($("#icon2").hasClass("fa fa-angle-down")) 
		{
			$("#icon2").removeClass("fa fa-angle-down").addClass("fa fa-angle-up");
		}
		else
		{
			$("#icon2").removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
		}

	});
	
	

	
});
$(document).ready(function(){
	
		if (window.matchMedia('(max-width: 1100px)').matches) 
		{
			$(".col-4").addClass("col-12");

		}
		
});