let students = [];

function addStudent() {

    let id = document.getElementById("studentId").value;
    let name = document.getElementById("studentName").value;
    let age = document.getElementById("studentAge").value;
    let branch = document.getElementById("studentBranch").value;
    let marks = document.getElementById("studentMarks").value;

    if (id === "" || name === "" || age === "" || branch === "" || marks === "") {
        alert("Please fill all details");
        return;
    }

    let result = marks >= 40 ? "Pass" : "Fail";

    let student = {
        id: id,
        name: name,
        age: age,
        branch: branch,
        marks: marks,
        result: result
    };

    students.push(student);

    displayStudents();

    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
    document.getElementById("studentBranch").value = "";
    document.getElementById("studentMarks").value = "";
}

function displayStudents(list = students) {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    list.forEach(function(student, index) {

        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.branch}</td>
                <td>${student.marks}</td>
                <td>${student.result}</td>
                <td>
                    <button class="delete-btn" onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}

function searchStudent() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();

    let filteredStudents = students.filter(function(student) {

        return student.id.toLowerCase().includes(searchValue) ||
               student.name.toLowerCase().includes(searchValue);
    });

    displayStudents(filteredStudents);
}