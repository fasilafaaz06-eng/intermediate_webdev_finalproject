
function calculateSum() {
    const input1 = document.getElementById('value1');
    const input2 = document.getElementById('value2');

    // 1. Prevent TypeError by checking if elements exist
    if (!input1 || !input2) {
        console.error("Input elements not found!");
        return;
    }

    // 2. Properly convert string inputs to Numbers
    const val1 = Number(input1.value);
    const val2 = Number(input2.value);

    // 3. Optional: Validate that the result is actually a number (not NaN)
    if (isNaN(val1) || isNaN(val2)) {
        alert("Please enter valid numbers");
        return;
    }

    console.log("Total:", val1 + val2);
}
