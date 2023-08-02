$(function () {

  var today = dayjs();
  var currentTime = dayjs().format('H');
  $('#currentDay').text(today.format("[Today's date is: ] MMMM D, YYYY"));

  //Sets each box to the localStorage created for each hour
  $('#toDo9').val(localStorage.toDo9);
  $('#toDo10').val(localStorage.toDo10);
  $('#toDo11').val(localStorage.toDo11);
  $('#toDo12').val(localStorage.toDo12);
  $('#toDo13').val(localStorage.toDo13);
  $('#toDo14').val(localStorage.toDo14);
  $('#toDo15').val(localStorage.toDo15);
  $('#toDo16').val(localStorage.toDo16);
  $('#toDo17').val(localStorage.toDo17);

    
  //saves the inputted values to the correct localStorate object based on the button clicked to save it
  $('#btn9').on('click', function(){
    localStorage.toDo9 = $('#toDo9').val();
  });

  $('#btn10').on('click', function(){
    localStorage.toDo10 = $('#toDo10').val();
  });

  $('#btn11').on('click', function(){
    localStorage.toDo11 = $('#toDo11').val();
  });

  $('#btn12').on('click', function(){
    localStorage.toDo12 = $('#toDo12').val();
  });

  $('#btn13').on('click', function(){
    localStorage.toDo13 = $('#toDo13').val();
  });

  $('#btn14').on('click', function(){
    localStorage.toDo14 = $('#toDo14').val();
  });

  $('#btn15').on('click', function(){
    localStorage.toDo15 = $('#toDo15').val();
  });

  $('#btn16').on('click', function(){
    localStorage.toDo16 = $('#toDo16').val();
  });

  $('#btn17').on('click', function(){
    localStorage.toDo17 = $('#toDo17').val();
  });


//added if-else statements to compare the the day.js time of day hour we get and set the class accordingly to match the color.
  if(currentTime > 9){
    $('#hour-9').addClass('past');
  }else if(currentTime == 9){
    $('#hour-9').addClass('present');
  }else{
    $('#hour-9').addClass('future');
  }

  if(currentTime > 10){
    $('#hour-10').addClass('past');
  }else if(currentTime == 10){
    $('#hour-10').addClass('present');
  }else{
    $('#hour-10').addClass('future');
  }

  if(currentTime > 11){
    $('#hour-11').addClass('past');
  }else if(currentTime == 11){
    $('#hour-11').addClass('present');
  }else{
    $('#hour-11').addClass('future');
  }

  if(currentTime > 12){
    $('#hour-12').addClass('past');
  }else if(currentTime == 12){
    $('#hour-12').addClass('present');
  }else{
    $('#hour-12').addClass('future');
  }

  if(currentTime > 13){
    $('#hour-13').addClass('past');
  }else if(currentTime == 13){
    $('#hour-13').addClass('present');
  }else{
    $('#hour-13').addClass('future');
  }

  if(currentTime > 14){
    $('#hour-14').addClass('past');
  }else if(currentTime == 14){
    $('#hour-14').addClass('present');
  }else{
    $('#hour-14').addClass('future');
  }

  if(currentTime > 15){
    $('#hour-15').addClass('past');
  }else if(currentTime == 15){
    $('#hour-15').addClass('present');
  }else{
    $('#hour-15').addClass('future');
  }

  if(currentTime > 16){
    $('#hour-16').addClass('past');
  }else if(currentTime == 16){
    $('#hour-16').addClass('present');
  }else{
    $('#hour-16').addClass('future');
  }

  if(currentTime > 17){
    $('#hour-17').addClass('past');
  }else if(currentTime == 17){
    $('#hour-17').addClass('present');
  }else{
    $('#hour-17').addClass('future');
  }
});