function meetingRoomStatus() {
  var url = '../data/rooms.json';
  $.getJSON(url, function (data) {
    var statusHTML = '<ul class="rooms">';

    $.each(data, function (index, room) {
      if (room.available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += room.room;
      statusHTML += '</li>';

    }) // end jquery each function
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML);
  }); // end getJSON
} // end meetingRoomStatus function


function employeeStatus() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var employees = JSON.parse(xhr.responseText);
      var statusHTML = '<ul class="bulleted">';
      for (var i = 0; i < employees.length; i += 1) {
        if (employees[i].inoffice === true) {
          statusHTML += '<li class="in">';
        } else {
          statusHTML += '<li class="out">';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>';
      }
      statusHTML += '</ul>';
      document.getElementById('employeeList').innerHTML = statusHTML;
    }
  };
  xhr.open('GET', '../data/employees.json');
  xhr.send();
}

meetingRoomStatus();
employeeStatus();