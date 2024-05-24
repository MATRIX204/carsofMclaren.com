function msg()
{
    var pass1=document.getElementById("pass1").value;
    var pass2=document.getElementById("pass2").value;
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var emailRegex = /^\S+@\S+\.\S+$/;

    if(pass1==""||pass2==""||name==""||email=="")
    {
        error.innerHTML=`Please fill the Information`;
    }
    else if (name.length <= 4)
    {
        error.innerHTML=`Use 5 characters or more for your username `;
    }
    else if (pass1.length <= 8 || pass2.length <= 8)
    {
        error.innerHTML=`Use 8 characters or more for your password `;
    }
    else if(pass2!==pass1)
    {
        error.innerHTML=`Password does not match`;
    }
    else if(!email.match(emailRegex))
    {
        error.innerHTML=`The Syntax of Email is not correct`;
    }
    else if (pass2===pass1)
    {
        window.open("new.html");
    }
    
}
