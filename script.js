//Script will only run after the page has finished loading
$(document).ready(function() {
  //create a dayjs object to represent current time
  var now = dayjs();
  //formatting the date and time
  var currentTime = now.format("dddd, MMMM DD YYYY, h:mm:ss A");
  console.log("Current time: " + currentTime);
  
  //Loops through each element with "time-block"
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = now.hour();
    
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    
    var hour = blockHour + ":00";
    var text = localStorage.getItem(hour);
    $(this).find(".description").val(text);
  });

  $(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var hour = now.format("h:mm:ss A");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(hour, text);
    console.log("Saved: " + hour + " - " + text);
  });
});


