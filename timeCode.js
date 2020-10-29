let currentTime = moment().hours();
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// save to local storage
$(".saveBtn").on("click", function() {
    let time = $(this).parent().attr("data-hour");
    let text = $(this).siblings(".text").val();
    localStorage.setItem(time, text)
})

// function color
// need variable for current hour
// find how to read each time block
    $(".time-block").each(function() {
    let newTime = $(this).attr("data-hour");
    if (newTime < currentTime) {
        $(this).addClass("past");
    }
    else if (newTime == currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).addClass("future");
    }
    console.log(currentTime);
    console.log(newTime);
});

    $("#saved-text-9").text(localStorage.getItem("9"));
    $("#saved-text-10").text(localStorage.getItem("10"));
    $("#saved-text-11").text(localStorage.getItem("11"));
    $("#saved-text-12").text(localStorage.getItem("12"));
    $("#saved-text-13").text(localStorage.getItem("13"));
    $("#saved-text-14").text(localStorage.getItem("14"));
    $("#saved-text-15").text(localStorage.getItem("15"));
    $("#saved-text-16").text(localStorage.getItem("16"));
    $("#saved-text-17").text(localStorage.getItem("17"));