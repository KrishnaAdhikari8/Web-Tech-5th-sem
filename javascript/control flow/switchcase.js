function checkDay() {
    // Get input value
    let day = document.getElementById("dayInput").value;
    // Convert to number
    day = Number(day);
    let result;
    // Switch case
    switch(day) {
        case 1:
            result = "Sunday";
            break;
        case 2:
            result = "Monday";
            break;
        case 3:
            result = "Tuesday";
            break;
        case 4:
            result = "Wednesday";
            break;
        case 5:
            result = "Thursday";
            break;
        case 6:
            result = "Friday";
            break;
        case 7:
            result = "Saturday";
            break;

        default:
            result = "Invalid input";
    }
    // Display result
    document.getElementById("result").innerText = result;
}