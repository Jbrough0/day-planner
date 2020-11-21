var today=moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm:ss a"));
var rows = document.getElementsByClassName("row");
var currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
    
      if (currentHour === rowHour) {
        setColor(row, "red");
      } else if ((currentHour < rowHour)) {
        setColor(row, "green");
      } else if ((currentHour > rowHour)) {
        setColor(row, "lightgrey");
      } else {
        setColor(row, "white");
      }
    }
  });
  
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }
    

 $(".saveBtn").on("click", function(){
    var savedData = $(this).siblings(".schedule").val().trim()
    var dataField = $(this).parent().parent().attr("id")
    console.log (dataField)
    localStorage.setItem(dataField, savedData)
    console.log(localStorage)
});
localStorage.getItem("class"
)


