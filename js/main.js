alert("Miracles happen all the time, We're here aren't we ? -Marilyn Nelson");

var present = []

var tardy = []

$('#all').click(function() {

  $('.present-list > li, .tardy-list > li').toggle();

});

function presentList() {

  var value = $("#enter").val()

  present.push(value);

  $(".present-list li").remove();

  present.forEach(function(e) {

    $(".present-list").append("<li>" + e + "</li>");

    document.getElementById('e').value = "";

  })

}



function tardyList() {

  var values = $("#enter").val()

  tardy.push(values);

  $(".tardy-list li").remove();

  tardy.forEach(function(e) {

    $(".tardy-list").append("<li>" + e + "</li>");

    document.getElementById('enter').value = "";

  })

}



$(document).ready(function() {

  $("#present").on("click", presentList);

  $("#tardy").on("click", tardyList);

  $("#all").on("click", allList);

});