

const btn = document.querySelector("#testBtn");

function buttonCheck() {
    const message = document.getElementById("p01");
    message.innerHTML = "";

    let data = document.getElementById("inputField").value;
    try {
        if (data.trim() === "")
            throw new Error("Input is empty.");
        if (isNaN(data))
            throw new Error("Input is not a number.");
        if(isNumber(data))
            message.innerHTML = "Valid number: " + data;
            console.log(data);
    }
    catch(err) {
        message.innerHTML = "An error occurred: " + err.message;
        console.error("An error occurred:", err);
    }

}

function isNumber(value) 
{
    return !isNaN(parseFloat(value)) && isFinite(value);
}