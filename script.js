function checkCompatibility() {
    var yourName = document.getElementById('yourName').value;
    var partnerName = document.getElementById('partnerName').value;

    if (yourName && partnerName) {
        var compatibilityScore = Math.floor(Math.random() * 101); // Random number between 0 and 100

        var resultMessage = yourName + ' and ' + partnerName + "'s compatibility score is: " + compatibilityScore + '%';
        document.getElementById('result').innerText = resultMessage;
    } else {
        alert('Please enter both names.');
    }
}
