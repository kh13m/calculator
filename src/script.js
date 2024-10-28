function calculate() {
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const operator = document.querySelector('input[name="a"]:checked');
    const output = document.getElementById('result');
    const noti = document.getElementById('noti');

    // Validate inputs to ensure they are numbers
    if (isNaN(n1) || n1 === "" || isNaN(n2) || n2 === "") {
        noti.value = "Please enter valid numbers in both fields.";
        output.value = ""; // Clear the result field
        return;
    }

    const no1 = parseFloat(n1);
    const no2 = parseFloat(n2);

    if (!operator) {
        noti.value = "Please select an operation.";
        output.value = ""; // Clear the result field
        return;
    }

    switch (operator.value) {
        case "1":
            output.value = no1 + no2;
            break;
        case "2":
            output.value = no1 - no2;
            break;
        case "3":
            output.value = no1 * no2;
            break;
        case "4":
            output.value = no2 !== 0 ? no1 / no2 : "Cannot divide by zero";
            break;
        default:
            output.value = "Invalid operation";
            break;
    }

    // Clear the notification if the operation is valid
    noti.value = "";
}
