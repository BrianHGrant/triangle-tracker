var equals = function(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    return true;
    }
  else {
    return false;
  }
}

var isoceles = function(side1, side2, side3) {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
    return true;
    }
  else {
    return false;
  }
}

var scalene = function(side1, side2, side3) {
  if (side1 != side2 && side1 != side3 && side2 != side3) {
  return true;
  }
else {
  return false;
}
}

var checkTriangle = function(side1, side2, side3) {
  if (side1 + side2 > side3 || side2 + side3 > side1 || side3 + side1 > side2)
  {
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

    if (!checkTriangle(side1, side2, side3)) {
      alert("Not a triangle!!!");
    }
    else {
      if (equals(side1, side2, side3)) {
        $("#equal").show();
      }
      else if (isoceles(side1, side2, side3)) {
        $("#isoceles").show();
      }
      else if (scalene(side1, side2, side3)) {
        $("#scalene").show();

      }
    }


    event.preventDefault();
  });
});
