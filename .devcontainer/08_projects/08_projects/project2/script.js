const form = document.querySelector("form");

form.addEventListener("submit" , function (e) {
    e.preventDefault();  // this is used when we click on submit then the result will be delevered to server or get, it should be hold it so we use this e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result  = document.querySelector("#results");
    
    result.style.color = "orange";
    
    if (height === '' || isNaN(height) || height < 0 ) {
        result.innerHTML = `Please provide a valid : ${height}`
    }
    if (weight === '' || isNaN(weight) || weight < 0 ) {
        result.innerHTML = `Please provide a valid : ${weight}`
    }
    else{ 
        let total = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = (total);
    }
})