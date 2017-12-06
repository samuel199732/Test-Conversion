$(document).ready(function(){
$('#button-menu-one').click(function(event)
{
  event.preventDefault(); 
  $('html, body').animate({scrollTop:0},500);
});

$('#button-menu-two').click(function(event)
{
  event.preventDefault(); 
    var div = $('#div-two');
    var pos = div.offset().top;
    var alturaDivTxt2 = $("header")[0].getBoundingClientRect().height;
    pos = pos - alturaDivTxt2;
    $('html, body').animate({scrollTop:pos},500);
});
$('#button-menu-three').click(function(event)
{
  event.preventDefault(); 
    var div = $('#div-five');
    var pos = div.offset().top;
   var alturaDivTxt2 = $("header")[0].getBoundingClientRect().height;
    pos = pos - alturaDivTxt2;
    $('html, body').animate({scrollTop:pos},500);
});
$('#button-menu-four').click(function(event)
{
  event.preventDefault(); 
    var div = $('#div-seven');
    var pos = div.offset().top;
   	var alturaDivTxt2 = $("header")[0].getBoundingClientRect().height;
    pos = pos - alturaDivTxt2;
    $('html, body').animate({scrollTop:pos},500);
});
$('.send').click(function(event)
{
  event.preventDefault(); 
    var div = $('#div-seven');
    var pos = div.offset().top;
   	var alturaDivTxt2 = $("header")[0].getBoundingClientRect().height;
    pos = pos - alturaDivTxt2;
    $('html, body').animate({scrollTop:pos},500);
});
$('#ButtonQuery').click(function(event)
{
  event.preventDefault(); 
    var div = $('#div-five');
    var pos = div.offset().top;
   	var alturaDivTxt2 = $("header")[0].getBoundingClientRect().height;
    pos = pos - alturaDivTxt2;
    $('html, body').animate({scrollTop:pos},500);
});
});