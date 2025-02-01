function convertToNumber() {
    let mapping = {
        'k': '1', 'u': '2', 'b': '3', 'e': '4',
        'r': '5', 'n': '6', 't': '8', 'h': '9', 'm': '0'
    };

    let input = document.getElementById("userInput").value.toLowerCase(); // Convert input to lowercase
    let result = "";

    for (let char of input) {
        if (mapping[char]) {
            result += mapping[char]; // Convert letter to number
        } else {
            result += char; // Keep unknown characters unchanged
        }
    }

    document.getElementById("output").innerHTML = "Converted: " + result;
}
