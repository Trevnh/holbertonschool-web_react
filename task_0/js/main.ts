interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Bob",
    lastName: "One",
    age: 21,
    location: "Holberton",
};

const student2: Student = {
    firstName: "Guy",
    lastName: "Two",
    age: 22,
    location: "Holberton",
}

const studentsList: Student[] = [student1, student2]

const newTable = document.createElement('table');
newTable.innerHTML = "<thead><th>Name</th><th>Location</th></thead>";
for (const student of studentsList) {
    const newRow = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdLocation = document.createElement('td');
    tdName.textContent = student.firstName;
    tdLocation.textContent = student.location;
    newRow.appendChild(tdName);
    newRow.appendChild(tdLocation);
    newTable.appendChild(newRow);
}

document.body.appendChild(newTable);