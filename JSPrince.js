$("#nameInput").click(function(){
    var value = $( "#yourname" ).val();
  $("#chartTitle").append(value);
});

$("#chart").hide();

$( "#seeGraph" ).click(function() {
  $("#chart").toggle();
});
    
$("#thumbDevice").hide();

$('input:radio[name="joint"]').change(function(){
    if($(this).val() == 'thumb'){
       $("#thumbDevice").toggle();
    }
});

    
$("#kneeDevice").hide();

$('input:radio[name="joint"]').change(function(){
    if($(this).val() == 'knee'){
       $("#kneeDevice").toggle();
    }
});

    
$("#wristDevice").hide();

$('input:radio[name="joint"]').change(function(){
    if($(this).val() == 'wrist'){
       $("#wristDevice").toggle();
    }
});

    
$("#shoulderDevice").hide();

$('input:radio[name="joint"]').change(function(){
    if($(this).val() == 'shoulder'){
       $("#shoulderDevice").toggle();
    }
});