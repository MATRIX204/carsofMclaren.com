function msg()
{
    var kp;
    var dap;
    var k;
    var da;
    var pass2=document.getElementById("lpass").value;
    var name2=document.getElementById("un").value;
    k="kartik";
    kp="kartik";
    da="darshil";
    dap="darshil";
   
    if(pass2===""||name2==="")
    {
        error.innerHTML=`Please fill the Information`;
    }
    else if (name2===k)
    {
        if(pass2===kp)
        {
            window.open("open.html");
        }
        else if(pass2!==kp)
        {
            error.innerHTML=`Password Does not match`;
        }
    }
    else if(name2===da)
    {
        if(pass2===dap)
        {
            window.open("open.html");
        }
        else if(pass2!==dap)
        {
            error.innerHTML=`Password Does not match`;
        }
    }
    else if(name2!==k||name2!==da)
    {
        error.innerHTML=`Username Does not match`;
    }
    else if(pass2!==kp||pass2!==dap)
    {
        error.innerHTML=`password does not match`;
    }    
}
