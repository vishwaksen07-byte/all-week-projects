function acceptData() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    if (name === "" || email === "" || age === "") {
        alert("Please fill all the fields.");
        return;
    }
    if(age<18){
        alert("You must be at least 18 years old to submit the form.");
        return;
    }

    alert("Form submitted successfully!");
}