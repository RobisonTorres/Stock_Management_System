function goodString(productInfo){

    // This function matches any empty string.
    return /^\s+$|^$/gi.test(productInfo)
}

function goodDigit(productInfo){

    // This function matches only digits.
    return /\d+/gi.test(productInfo)
}

function goodUser(){

    // This function checks for valid first and last name.
    let first_name = String(document.getElementById("first_name").value.trim());
    let last_name = String(document.getElementById("last_name").value.trim());  
    if (/^[a-zA-ZçÇ]+$/.test(first_name) || /^[a-zA-ZçÇ]+$/.test(last_name)) {
        return true;
    } else {
        alert("Please, use only letter in first and last name.")
        return false;
    }
}

function checkInputAdd() {
    
    // This function checks for valid user's input to add a product. 
    let name = String(document.getElementById("name").value.trim());
    let price = String(document.getElementById("price").value);
    let quantity = String(document.getElementById("quantity").value);
    let mim_quantity = String(document.getElementById("mim_quantity").value);
    const inputProductInfo = [name, price, quantity, mim_quantity]
    const checkAll = inputProductInfo.map(goodString);
    if (checkAll.includes(true) ) {
        alert("Please, fill in all the fields to add a product.")
        return false;
    } 
    if (quantity < 0){
        alert("To add a product the quantity must be greater than 0.")
        return false;
    }
    else {
        return document.getElementById("form_functions").submit();
    }
}

function checkInputUpdate() {
    
    // This function checks for valid user's input to update a product. 
    let name = String(document.getElementById("name").value.trim());
    let price = String(document.getElementById("price").value);
    let quantity = String(document.getElementById("quantity").value);
    let mim_quantity = String(document.getElementById("mim_quantity").value);
    let productName = goodString(name);
    const inputProductInfo = [price, quantity, mim_quantity]
    const checkAllUpdated = inputProductInfo.map(goodDigit);
    console.log(productName)
    if (productName == true) {
        alert("Please, fill the name and at least one information to update a product.")
        return false;
    } 
    if (checkAllUpdated.includes(true)){
        return document.getElementById("form_functions").submit();
    } else {
        alert("Please, fill at least one information to update a product.")
        return false;
    }
}

function checkInputDelete() {

    // This function checks for valid user's input to delete a product.
    let name = document.getElementById("name").value.trim();
    let check = goodString(name);
    if (check == true ) {
        alert("Please, fill in the field name to delete a product.")
        return false;
    } else {
        let check = confirm(`Do you confirm the deletion of this item - ${name}?`);
        if (check === true){
            return document.getElementById("form_functions").submit();
        } else {
            return false;
        }
    }
}

function validateForm(event) {

    // This function detects which button was clicked and proceeds for the operation.
    let buttonClicked = event.submitter.value; 
    if (buttonClicked === "Add") {
        return checkInputAdd(); 
    } else if (buttonClicked === "Update") {
        return checkInputUpdate();
    } else if (buttonClicked === "Delete") {
        return checkInputDelete();
    }
}