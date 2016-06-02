var equals = function(side1, side2, side3) {
  if (side1 === side2 && side3) {
    return true;
    }
  else {
    return false;
  }
}

var isoceles = function(side1, side2, side3) {
  if ((side1 === side2 || side3) || (side2 === side3)) {
    return true;
    }
  else {
    return false;
  }
}

var scalene = function(side1, side2, side3) {
  if (side1 != side2 != side3) {
  return true;
  }
else {
  return false;
}
}


$(document).ready(function() {
  $("form#triangleForm").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    $("#equal").hide();
    $("#isoceles").hide();
    $("#scalene").hide();
    $("#not").hide();

    if (equals) {
      $("#equal").show();
    }
    else if (isoceles) {
      $("#isoceles").show();
    }
    else {
        $("#not").hide();
    }


    event.preventDefault();
  });
});
