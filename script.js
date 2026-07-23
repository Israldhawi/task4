const course = [
    "Software Design and Testing",
    "Applied Machine Learning",
    "B-Tech Course Project I",
    "Full-Stack Web Development",
    "Major Elective 3",
    "Major Elective 4"
];

function displayCourse() {
    let output = "<h3>Cousre List:</h3><ul>";

   
    for (let cousre of cousre) {
        output += "<li>" + course + "</li>";
    }

    output += "</ul>";

  
    document.getElementById("result").innerHTML = output;
}

document.getElementById("showBtn").addEventListener("click", displayCourse);