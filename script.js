$(document).ready(start);

function start() {
	intro();
	footerFix();
	clickForm();
}

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
	$('.container').append(`
		<div class="form" style="opacity: 0">	
			<form action="index.html" method="post"> 
				<div class="col"><input type="text" id="name" placeholder="FULL NAME" name="user_name" required /></div>
			  	<div class="col"><input type="email" id="email" placeholder="EMAIL ADDRESS" name="user_email" required /></div>
			  	<div class="msg"><textarea id="msg" placeholder="YOUR MESSAGE" name="user_message" maxlength="200" rows="5"></textarea></div>
				<div class="button"><button class="send">SEND</div>
				<div class="close"><i class="fa fa-times fa-4x" aria-hidden="true"></i></div>
		</div>`
	);
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
	$('i.fa.fa-times.fa-4x').one('click',function(){
		$('.form').css({
			opacity:'0',
		});
		setTimeout(function(){
			$('div.form').remove();
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