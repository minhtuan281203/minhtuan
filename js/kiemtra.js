function testForm(){
    var reEmail = /^\w+@\w+(\.\w+){1,3}$/;
    // if($(#InputEmail).val() == " "){
    //     $(#errorEmail).innerHTML = "This feild is required";
    //     #(#errorEmail).focus();
    //     return false
    // }else if(reEmail.test($(#InputEmail).val())==false){
    //     $(#errorEmail).innerHTML = 'This feild has fomat: abc@domain.com';
    //     $(#errorEmail).focus();
    //     return false
    // }
    // $(#errorEmail).innerHTML = "";
    //
    if($(#InputPassword).val() == ""){
        $(#errorPass).innerHTML = "The feild is required";
        $(#errorPass).focus();
        return false
    }
    $(#errorPass).innerHTML = "";
    return true
    alert("OK")
}