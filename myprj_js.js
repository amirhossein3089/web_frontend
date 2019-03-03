$(function(){
  

  //for changing the color of navbar items
  $('#nav_home').removeClass('active').css('background-color','red');
  

  $('#jump_top').on('click',function(event){
    if(this.hash !== "")
    {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top-80
      },1500
      // ,function(){
      //     window.location.hash = hash;
      // }
      );
    }
  });
  
  var main_items=$('#main_items').offset().top;
  var topDiv_old_works=$('#old_works').offset().top;
  var topDiv_calculator_datepicker=$('#calculator_datepicker').offset().top;
  var topDiv_contact_about_us=$('#contact_about_us').offset().top;
  var topDiv_services=$('#services').offset().top;
  var topDiv_galley=$('#gallery').offset().top;
  var topDiv_video=$('#video').offset().top;
  var prevScrollpos = $(window).scrollTop();

  $(window).scroll(function () {

    /*
    changing color of navbar items
    */        
    if ($(window).scrollTop() >= main_items - 300)
    {
      $('nav li').css('background-color','black');
      $('#nav_home').css('background-color','red');
    }
    if ($(window).scrollTop() >= topDiv_services - 300)
    {
      $('nav li').css('background-color','black');
      $('#nav_services').css('background-color','red');
    }
    if ($(window).scrollTop() >= topDiv_galley  - 300)
    {
      $('nav li').css('background-color','black');
      $('#nav_gallery').css('background-color','red');
    }
    if ($(window).scrollTop() >= topDiv_old_works - 300 ) {
      $('nav li').css('background-color','black');
      $('#nav_old_works').css('background-color','red');
    }
    if ($(window).scrollTop() >= topDiv_contact_about_us - 300 ) {
      $('nav li').css('background-color','black');
      $('#nav_about_us').css('background-color','red');
    }
    /*********************************
    * showing up elements
    */
    if ($(window).scrollTop() >= topDiv_video - 400) {
      $('#video').fadeTo(1000, 1);
    }
    
    if ($(window).scrollTop() >= topDiv_calculator_datepicker ) {
      $('#calculator_datepicker').fadeTo(1000, 1);
    }
    
    if ($(window).scrollTop() >= topDiv_services - 400) {
      $('#services').fadeTo(1000, 1);
    }

/*******************************************
 *          Navbar  hide on scroll down and show up on scroll up
 * **************************************
 */
    var currentScrollPos = $(window).scrollTop();
      if (prevScrollpos > currentScrollPos) {
        $("#navbar_ID").css("top","0");
      } else {
        if(currentScrollPos >= $("#main_items").scrollTop()+450){//just fade out navbar after scroll down to below the banner
          $("#navbar_ID").css("top","-50px") ;
        }
        
      }
    prevScrollpos = currentScrollPos;

  });
  /*
    end the window scroll event handler
  */

  
  $("nav a").on('click',function(event){
    if(this.hash !== "")
    {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top-80
      },1000
      // ,function(){
      //     window.location.hash = hash;
      // }
      );
    }
  });

  $(".gallery_img_class").on('click',function(event){
    if(this.hash !== "")
    {
      var ImageSource = $(this).attr('src');
      $("#img01").attr('src', ImageSource);

      $("#myModal").fadeIn(500);
      $("#caption").text(this.alt);
    }
  });

  $(".close").on('click',function(event){
    $("#myModal").fadeOut(500);
  });


  $("#login_btn").on('click',function(event){
      $("#id01").fadeIn(500);
      // $("#id01").css("width","500px");
  });
  $("#register_btn").on('click',function(event){
    $("#modal_register").fadeIn(500);
    // $("#id01").css("width","500px");
});


$('#datepicker0,#datepicker1').datepicker();


});



// calculator

function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
   // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
 // } else 
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}





// for login modal:

// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
