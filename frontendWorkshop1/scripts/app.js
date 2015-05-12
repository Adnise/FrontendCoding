function showMenu() {
    document.getElementById("appmenu").style.display = 'block'
}
function hideMenu() {
    document.getElementById("appmenu").style.display = 'none'
}

var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 5500
    },
    {
        firstName: 'Steven',
        lastName: 'Jobs',
        phone: '0123456789',
        salary: 2500
    },
    {
        firstName: 'Emily',
        lastName: 'Potato',
        phone: '0123456789',
        salary: 3500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4700
    },
    {
        firstName: 'Diana',
        lastName: 'London',
        phone: '0186456789',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th></th><th></th></tr>';
    for (var i in employeesList) {
        myTable += '<tr>' +
            '<td>' + employeesList[i].firstName + '</td>' +
            '<td>' + employeesList[i].lastName + '</td>' +
            '<td>' + employeesList[i].phone + '</td>' +
            '<td>' + employeesList[i].salary + '</td>' +
            '<td> <button onclick="deleteOneEmp(' + i + ')">Delete</button></td>' +
            '<td> <button onclick="viewEmp(' + i + ')">View</button></td>' +
            '</tr>';
    }
    myTable += '<tr>' +
        '<td>' + commonName() + '</td>' +
        '<td>' + uniqueName() + '</td>' +
        '<td>' + topDigits() + '</td>' +
        '<td>' + calcAvg() + '</td>' +
        '<th></th>' +
        '<th></th>' +
        '</tr>'+
        '</table>'
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("salary").value = "";
}

function deleteEmployee() {
    employeesList.pop();
    showList();
}

function calculateSum() {
    var sum = 0;
    for (var i = 0; i < employeesList.length; i++)
        sum = sum + employeesList[i].salary;
    alert(sum);
}

function deleteOneEmp(i) {
    employeesList.splice(i, 1);
    showList();
}

function viewEmp(i) {
    alert('First Name : ' + employeesList[i].firstName +
          '\nLast Name : ' + employeesList[i].lastName +
          '\nPhone : ' + employeesList[i].phone +
          '\nFirst Name : ' + employeesList[i].salary);
    showList();
}

function calcAvg() {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < employeesList.length; i++) {
        sum = sum + employeesList[i].salary;
        count++;
    }
    var avg = sum / count;
    return avg;
}

function commonName(){
    var name = null, max = 0, count;
    for (var i in employeesList) {
        count = 0;
        for (var j in employeesList) {
            if (employeesList[i].firstName == employeesList[j].firstName)
                count += 1;
        }
        if (count > max) {
            max = count;
            name = employeesList[i].firstName;
        }
    }
    return name;
}

function uniqueName(){
    var u = {}, a = [];
    for(var i = 0, l = employeesList.length; i < l; ++i){
        if(u.hasOwnProperty(employeesList[i].lastName)) {
            continue;
        }
        a.push(employeesList[i]);
        u[employeesList[i]] = 1;
    }
    return a.length;
}

function topDigits() {
    var digits = [0,0,0,0,0,0,0,0,0,0];
    for (var x in employeesList) {
        var phoneNumber = employeesList[x].phone;
        for (var i = 0; i < phoneNumber.length; i++)
            digits[phoneNumber.charAt(i)]++;
    }
    var result = [];
    var sortDigit = digits.sort();
    for (var j = 0; j < sortDigit.length ; j++) {
        if (sortDigit[j] != sortDigit[j+1]) {
            result.push(sortDigit[j]);
        }
    }
   return result.splice(5);
}

function sortBy(){
    var number = document.getElementById("sortNumber").value;
    if (number == 1) {
        employeesList.sort(function(a, b) { return a.firstName.localeCompare(b.firstName); });
        showList();
    } else if (number == 2) {
        employeesList.sort(function(a, b) { return a.lastName.localeCompare(b.lastName); });
        showList();
    } else if (number == 3) {
        employeesList.sort(function(a, b) { return a.phone.localeCompare(b.phone); });
        showList();
    } else {
        employeesList.sort(function(a, b) { return a.salary - b.salary; });
        showList();
    }
}

