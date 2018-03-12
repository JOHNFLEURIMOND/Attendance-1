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

var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
  element.addEventListener('click', function() {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('thumbUp', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'msg': msg,
          'thumbUp': thumbUp
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});


Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function() {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
    fetch('thumbDown', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'msg': msg,
          'thumbUp': thumbUp,
          'thumbDown': thumbDown
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function() {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'msg': msg
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});