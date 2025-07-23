function checkPassword() {
    const password = document.getElementById('Password1').value;
    if (password === "open098") {
        alert("Correct Password! Now solve Puzzle 1.");
        // document.getElementById('Password2').style.display = "block";
       window.location.href = "page2.html"; 
    } else {
        alert("Wrong Password! Try again.");
    }
}

function SubMitFun() {
    const answer = document.getElementById('Password2').value;
    if (answer === "6") {
        alert("Correct! 🎉 Now go to next puzzel");
        window.location.href = "page3.html"; 
    } else {
        alert("Wrong answer. Try again.");
    }
}

function SubMitWord() {
    const answer = document.getElementById('Password3').value;
    if (answer === "COMPUTER") {
        alert("Correct! 🎉 now go to last puzzel");
        window.location.href = "page4.html"; 
    } else {
        alert("Wrong answer. Try again.");
    }
}

function SubMitTime() {
    const answer = document.getElementById('Password4').value;
    if (answer === "8:45") {
        alert("Correct! 🎉 you did it");
        window.location.href = "congrates.html"; 
    } else {
        alert("Wrong answer. Try again.");
    }
}

// function goBack() {
//       window.location.href = "con.html"; 
//     }