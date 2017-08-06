$(document).ready(start);

function start() {
	intro();
	footerFix();
	clickForm();
}

var indicator = false;

function intro() {
	setTimeout(function(){
		$('.outer-box').css({
			visibility: "visible",
			opacity: '1'
		});
	},500)
}

function footerFix() {
	if($(window).height() < 400) {
		$('footer').css('display','none');
	}
	if($(window).height() >= 400) {
		$('footer').css('display','block');
	}
	$(window).resize(function() {
		if($(window).height() < 400) {
			$('footer').css('display','none');
		}
		if($(window).height() >= 400) {
			$('footer').css('display','block');
		}
	});
}

function clickForm(){
	$('body > div > div > div > div:nth-child(3) > div > div:nth-child(5) > i').on('click',function() {
		$('.bg-img').css('transition','all 0.5s ease-in-out');
		addForm();	
	});
}

function addForm(){
	$('.form').css('display','block');
	setTimeout(function(){
		$('.form').css('opacity', '1')
	},250);
	validate();
	sendMessage();
	reset();
	return;
}

function validate(){
	$('#email').on('input',function(event){
		if (email.validity.typeMismatch) {
    		email.setCustomValidity("Please enter a valid email");
  		} else {
    		email.setCustomValidity("");
  		}
	});
	$('#name').on('input',function(event){
		if (name.validity.typeMismatch) {
    		name.setCustomValidity("Please enter your name");
  		} else {
    		name.setCustomValidity("");
  		}
	});
}

function reset(){
	$('#email').off();
	$('#name').off();
	$('i.fa.fa-times.fa-4x').one('click',function(event){
		if( $('#thankyou_message').css('display','block') ) {
			$('#thankyou_message').css('display','none');
		}
		$('.form').css({
			opacity:'0',
		});
		setTimeout(function(){
			if( $('div.form').css('display','block') ) {
				$('div.form').css('display','none');
			}
		},500);
	});
}
function sendMessage() {
	$('button.send').one('click',function(){
		$('.outer-box').append(`<div class="sent">Thanks, message sent!</div>`);
		$('.outer-box').css('opacity','1');

		setTimeout(function(){
			$('div.sent').css('opacity','0');
		},3000);
		setTimeout(function(){
			$('div.sent').remove();
		},4000);
	})
}