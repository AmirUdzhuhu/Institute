// Задание 1
/*
$("#list .item").css("background­color", function(i,val){
  if($(this).text() == "Уджуху А. А.")
    return "#9900CC";
  else
    return val;
});
*/

// Задание 2
$(document).ready(function(){
  $('.content_toggle').click(function(){
    $('.content_block').slideToggle(300);
    return false;
  });
});

// Задание 3
$( document ).ready(function(){
  $( ".hide" ).click(function(){
    $( "p" ).hide();
  });
  $( ".show" ).click(function(){
    $( "p" ).show();
  });
});

// Задание 4
/*
$(document).ready(function(){
  $('.content_toggle').click(function(){
    $('.content_block').slideToggle(300);
    return false;
  });
});
*/

// Задание 5
$('#clickonme').click(function(){
  $('#1').hide('slow',function(){
    $('#result').html("Изображение удалено");
  });
});
