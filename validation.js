function formValidation()
{
var uname = document.registration.username;
var passid = document.registration.passid;
var uname = document.registration.username;
var ucity = document.registration.country;
var uemail = document.registration.email;
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{ 
if(cityselect(ucity))
{
if(ValidateEmail(uemail))
{
}
} 
}
} 
}
}
return false;
function userid_validation(uname,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uname_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uname.focus();
return false;
}
return true;
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function cityselect(_ucity)
{
if(ucountry.value == "Default")
{
alert('Select your city from the list');
    _ucity.focus();
return false;
}
else
{
return true;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
