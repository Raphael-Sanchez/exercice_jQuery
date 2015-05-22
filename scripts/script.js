$(function(){

	// CAROUSEL
	$(document).ready(function() {
	 
	  $("#slide-img-motorbike").owlCarousel({
	 
	      autoPlay: 3000,
	      items : 4,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,3]
	 
	  });
	 
	});

	// BARRE DE MENU SCROLL
	var hauteur = $('.wallpaper').height();

		$(window).scroll(function () {
			if ($(this).scrollTop() > hauteur) {
				$('#menuBar').css({
					'position': 'fixed',
					'top': '0px'
				});
      		         } else {
	  			$('#menuBar').css({
		  			'position': 'absolute',
		  			'top': '100%'
	  			});
      		          }
   		});

	// ANIMATION TITLE HEADER BOUNCE
	$('#blockTitle').hover(function ()
		{
			$('#blockTitle').attr('class', 'animated bounce');
		}, function(){
			$('#blockTitle').attr('class', '');
		});

	// NAVIGATION PAGE TO PAGE
	$("#linkAccueil").click(function() {
		$("#accueilPage").css("visibility", "visible");
	  	$('#inscriptionPage, #categoriesPage, #photoPage, #contactPage').css( "visibility", "hidden" );
	});
	$("#linkInscription").click(function() {
		$("#inscriptionPage").css("visibility", "visible");
	  	$('#accueilPage, #categoriesPage, #photoPage, #contactPage').css( "visibility", "hidden" );
	});
	$("#linkCategories").click(function() {
		$("#categoriesPage").css("visibility", "visible");
	  	$('#accueilPage, #photoPage, #contactPage, #inscriptionPage').css( "visibility", "hidden" );
	});
	$("#linkPhoto").click(function() {
		$("#photoPage").css("visibility", "visible");
	  	$('#accueilPage, #categoriesPage, #contactPage, #inscriptionPage').css( "visibility", "hidden" );
	});
	$("#linkContact").click(function() {
		$("#contactPage").css("visibility", "visible");
	  	$('#accueilPage, #categoriesPage, #photoPage, #inscriptionPage').css( "visibility", "hidden" );
	});

	// TEST BUTTON VALIDER, CONTROLE DES FONCTIONS RETURN TRUE OU FALSE 
	$('#submitValidation').click(function(){
		var lastNameVar = lastName();
		var nameVar = name();
		var mailVar = mail();
		var ageVar = age();
		var passwordVar = password();
		var passwordConfVar = passwordConfirm();
		
		// CHECK SI LE FORM NE CONTIENT PAS D'ERREUR 
		if (lastNameVar&&nameVar&&mailVar&&ageVar&&passwordVar&&passwordConfVar)
		{
			$('#registrationForm').submit();
			alert("Vous êtes désormais enregistré !");
			
		} else {
			alert("Certains champs comportent des erreurs !");
		}
	});

	// APPEL DES FONCTIONS DU FORM AU CHANGEMENT 
	$('#lastName').change(function(){
		lastName();
	});

	$('#name').change(function(){
		name();
	});

	$('#mail').change(function(){
		mail();
	});

	$('#age').change(function(){
		age();
	});

	$('#password').change(function(){
		password();
	});

	$('#passwordConfirm').change(function(){
		passwordConfirm();
	});	

	// FUNCTIONS FORM 
	function lastName(){
		var errorLastName = $('#errorLastName');
		var lastName = $('#lastName').val();

		if(lastName.length < 2 || $.isNumeric(lastName)){
            errorLastName.html('Champ incorrect !');
            return false;
        } 
        else {
        	errorLastName.html('<span class="success">'+'Champ correct'+'</span>');
        	return true;
        }
	}

	function name(){
		var errorName = $('#errorName');
		var name = $('#name').val();

		if(name.length < 2 || $.isNumeric(name)){
            errorName.html('Champ incorrect !');
            return false;
        } else {
          	errorName.html('<span class="success">'+'Champ correct'+'</span>');
          	return true;
        }
	}

	function mail(){
		var regMail = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		var errorMail = $('#errorMail');
		var mail = $('#mail').val();

		if(!regMail.test(mail) === true){
                errorMail.html('Mail incorrect !');
                return false;
            } 
            else {
            	errorMail.html('<span class="success">'+'Champ correct'+'</span>');
            	return true;
            }
	}

	function age(){
		var errorAge = $('#errorAge');
		var age = $('#age').val();

		if(age < 16 || !$.isNumeric(age) || age > 110){
                errorAge.html('Âge incorrect !');
                return false;
            } else {
            	errorAge.html('<span class="success">'+'Champ correct'+'</span>');
            	return true;
            }
	}

	function password(){
		var errorPassword = $('#errorPass');
		var password = $('#password').val();

		if(password.length < 6){
            errorPassword.html('Mot de passe incorrect !');
            return false;
        } else {
        	errorPassword.html('<span class="success">'+'Champ correct'+'</span>');
        	return true;
        }
	}

	function passwordConfirm(){
		var errorConfirmPass = $('#errorConfirmPass');
		var password = $('#password').val();
		var passwordConfirm = $('#passwordConfirm').val();

		if(passwordConfirm != password || passwordConfirm == false){
            errorConfirmPass.html('Mot de passe non identique !');
            return false;
        } else {
          	errorConfirmPass.html('<span class="success">'+'Champ correct'+'</span>');
          	return true;
        }
	}

});