// alert("Miracles happen all the time, We're here aren't we ? -Marilyn Nelson");
//
// var present = []
//
// var tardy = []
//
// $('#all').click(function() {
//
//   $('.present-list > li, .tardy-list > li').toggle();
//
// });
//
// function presentList() {
//
//   var value = $("#enter").val()
//
//   present.push(value);
//
//   $(".present-list li").remove();
//
//   present.forEach(function(e) {
//
//     $(".present-list").append("<li>" + e + "</li>");
//
//     document.getElementById('e').value = "";
//
//   })
//
// }
//
//
//
// function tardyList() {
//
//   var values = $("#enter").val()
//
//   tardy.push(values);
//
//   $(".tardy-list li").remove();
//
//   tardy.forEach(function(e) {
//
//     $(".tardy-list").append("<li>" + e + "</li>");
//
//     document.getElementById('enter').value = "";
//
//   })
//
// }
//
//
//
// $(document).ready(function() {
//
//   $("#present").on("click", presentList);
//
//   $("#tardy").on("click", tardyList);
//
//   $("#all").on("click", allList);
//
// });
alert('Who is on time???!!!');

function substitute() {
  var myValue = document.getElementByTag("name").value;

  if (myValue.length === 0) {
    alert('Please enter a real value in the text box!!!');
    return;
  };

};


var trash = document.getElementsByClassName("fa-trash");


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