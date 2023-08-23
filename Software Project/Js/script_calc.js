function calculateCGPA() {
    var number_of_courses = parseInt(document.getElementById("number_of_courses").value);
    var cgpa = 0;
    var missingGrade = false;

    for (var i = 0; i < number_of_courses; i++) {
        var grade = document.getElementById("grade_" + i).value;

        if (grade === '') {
            missingGrade = true;
            break;
        }

        if (grade === 'A+') {
            cgpa += 9.5;
        } else if (grade === 'A') {
            cgpa += 9;
        } else if (grade === 'B+') {
            cgpa += 8.5;
        } else if (grade === 'B') {
            cgpa += 8;
        } else if (grade === 'C') {
            cgpa += 6;
        } else if (grade === 'D') {
            cgpa += 5;
        } else if (grade === 'E') {
            cgpa += 4;
        } else if (grade === 'F') {
            cgpa += 0;
        }
    }

    var resultElement = document.getElementById("result");

    if (missingGrade) {
        resultElement.textContent = "Error: Please enter all grades.";
        resultElement.style.color = "red";
    } else {
        var predicted_cgpa = (cgpa / number_of_courses).toFixed(2);
        var predicted_range = (parseFloat(predicted_cgpa) + 0.5).toFixed(2);

        resultElement.textContent = "Predicted SGPA: (" + predicted_cgpa + ", " + predicted_range + ")";
        resultElement.style.color = "black";
    }
}

// Dynamically create input fields for grades based on the number of courses
document.getElementById("number_of_courses").addEventListener("input", function() {
    var number_of_courses = parseInt(this.value);
    var gradesDiv = document.getElementById("grades");
    gradesDiv.innerHTML = "";

    for (var i = 0; i < number_of_courses; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.id = "grade_" + i;
        input.placeholder = "Grade for Course " + (i + 1);
        gradesDiv.appendChild(input);
        gradesDiv.appendChild(document.createElement("br"));
    }
});

// Attach event listener to the calculate button
document.getElementById("calculateButton").addEventListener("click", calculateCGPA);
