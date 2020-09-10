$(document).ready(function () {
 

    var categories = [
      "fiction",
      "romance",
      "children",
      "short-stories",
      "african-history",
      "biography",
    ];
  
    $("#fiction").css("background-color", "#ff1654");
  
    $(".romance").hide();
    $(".short-stories").hide();
    $(".african-history").hide();
    $(".biography").hide();
    $(".children").hide();
  
    categories.forEach(function (category) {
      $("#" + category).click(function () {
        $("." + category).fadeIn(1000);
        $("#" + category).css("background-color", "#ff1654");
        categories.forEach(function (otherCategory) {
          if (otherCategory != category) {
            $("." + otherCategory).hide();
            $("#" + otherCategory).css("background-color", "#0169D9");
          }
        });
      });
    });
  });
  