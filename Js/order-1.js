function checkmob(){
			var str=document.getElementById("mblenmb").value;
	var ptr=/^07[072568][0-9]{7}$/;
	
	var chck=ptr.test(str);
	
	if(!chck)
	alert("Mobile Number is Incorrect");
}

//Function for creating bill
function createBill(){
var index=0;
var items = ["null", "null", "null","null"];
var quantities = ["null", "null", "null","null"];
var prices = ["null", "null", "null","null"];
						
//Item 1
var e1 = document.getElementById("item1");
var itemselected1 = e1.options[e1.selectedIndex].value;
if(itemselected1!="1"){
items[index]=itemselected1;
quantities[index] = document.getElementById("q1").value;
prices[index] = document.getElementById("p1").value;
index++;
}

//Item 2

var e2 = document.getElementById("item2");
var itemselected2 = e2.options[e2.selectedIndex].value;
if(itemselected2!="1"){
items[index]=itemselected2;
quantities[index] = document.getElementById("q2").value;
prices[index] = document.getElementById("p2").value;
index++;
}

//Item 3
var e3 = document.getElementById("item3");
var itemselected3 = e3.options[e3.selectedIndex].value;
if(itemselected3!="1"){
items[index]=itemselected3;
quantities[index] = document.getElementById("q3").value;
prices[index] = document.getElementById("p3").value;
index++;
}

//Item 4
var e4 = document.getElementById("item4");
itemselected4 = e4.options[e4.selectedIndex].value;
if(itemselected4!="1"){
items[index]=itemselected4;
quantities[index] = document.getElementById("q4").value;
prices[index] = document.getElementById("p4").value;
index++;
}

//Creating a table containing the total amount to be paid
var fTot=0;
strt(1);
for(var i=0;i<index;i++){
document.write("<tr>");
createtbl(items[i]);
createtbl(quantities[i]);
createtbl(prices[i]);
var tot=parseInt(quantities[i])*parseInt(prices[i]);
document.write("<td>"+tot+"</td>");
fTot+=tot;
document.write("</tr>");
}
document.write("<tr><td colspan=\"3\"><strong>TOTAL</strong></td><td>"+fTot+"</td><tr>");
document.write("<tr><td colspan=\"4\"><center><h5 style='color:red;'>Account No: 011116777755 <br> Thank you for shopping with us</h5></center><tr>");

strt(2);	
}
function createtbl(x){		
document.write("<td>"+x+"</td>");
}

function strt(n){
if(n==1){

document.writeln("<h1 style=\"text-align:center;\">The Bill</h1>");
document.writeln("<center><h5>We will send you an sms acknowledging your payment for this order. Please keep the order number</h5></center>");
document.writeln("<table width=\"90%\" border=\"1\">");
document.writeln("<tr><th>ITEMS</th><th>QUANTITY</th><th>PRICE</th><th></th></tr>");


}

	else

	document.write("</table>");

}

function createTot(x,y){
var tot=parseInt(x)*parseInt(y);
document.write("<td>"+tot+"</td>");
}

//Form Validation Function


function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;

} 

//Validate User ID
function userid_validation(uid,mx,my)
{
	var uid_len = uid.value.length;
	if (uid_len == 0 || uid_len >= my || uid_len < mx)
		{
			alert("User Id should not be empty / length be between "+mx+" to "+my);
			uid.focus();
			return false;
		}
		return true;
	}

//Function for validating Password
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
function allLetter(uname)
	{ 
		var letters = /^[A-Za-z]+$/;
		if(uname.value.match(letters))
			{
				return true;
			}
			else
				{
					alert('Username must have alphabet characters only');
					uname.focus();
					return false;
				}
			}
function alphanumeric(uadd)
{ 
	var letters = /^[0-9a-zA-Z]+$/;
	if(uadd.value.match(letters))
	{
		return true;
	}
	else
		{
			alert('User address must have alphanumeric characters only');
			uadd.focus();
			return false;
		}
	}
	function countryselect(ucountry)
	{
		if(ucountry.value == "Default")
			{
				alert('Select your country from the list');
								ucountry.focus();
								return false;
							}
							else
								{
									return true;
								}
							}
							function allnumeric(uzip)
							{ 
								var numbers = /^[0-9]+$/;
								if(uzip.value.match(numbers))
									{
										return true;
									}
									else
										{
											alert('ZIP code must have numeric characters only');
											uzip.focus();
											return false;
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
											function validsex(umsex,ufsex)
											{
												x=0;
												if(umsex.checked) 
													{
														x++;
													} 
													if(ufsex.checked)
														{
															x++; 
														}
														if(x==0)
															{
																alert('Select Male/Female');
																umsex.focus();
																return false;
															}
															else
																{
																	alert('Form Succesfully Submitted');
																	//window.location.reload()
																	window.location.href = "create-bill.html";
																	return true;
																}
															}


