function employeeStatus() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var employees = JSON.parse(xhr.responseText);
                var statusHTML = '<ul class="bulleted">';
                for (let i = 0; i < employees.length; i++) {
                    if (employees[i]['inoffice'] === true) {
                        statusHTML += '<li class="in">' + employees[i].name + '</li>';
                    } else {
                        statusHTML += '<li class="out">' + employees[i].name + '</li>';
                    }
                }
            } else {
                alert(xhr.statusText);
            }
            statusHTML += '</ul>';
            document.getElementById('employeeList').innerHTML = statusHTML;
        }
    };
    
    xhr.open('GET', 'data/employees.json');
    xhr.send();
}

employeeStatus();













