
	var count=0;




		
		
		
	function display()
	{

		document.getElementById("htm").style.height="auto";

		document.getElementById("table-box").style.display="block";
		formcheck();
		
		var bal=(document.getElementById("principal1").value);
		var inrt= (document.getElementById("intrest1").value/100.0);
		var loanperiod=parseFloat(document.getElementById("term").value);

	
		//inrt-intrest rate, monthlyrate-monthly intrest rate
		var monthlyrate=(inrt/12);
		monthlyrate.toFixed(2);
		//payamt-payment amount,bamt-begining balance
		var payamt=bal*(monthlyrate/(1-Math.pow(
    	1+monthlyrate, -loanperiod)));
		var bamt=bal;

		var tab='<table border="1" cellspacing="0" cellpadding="15px">'
	
		
		tab+='<tr>';

		for(var j=1;j<=loanperiod;j++){
					

			var intr =0;
		var principalamt=0;



			

					
		intr =bamt*monthlyrate;
		principalamt=payamt-intr ;
		bamt-=principalamt;

		tab+='<td>'+j+'</td>';

		tab+='<td>'+"&#8377;"+payamt.toFixed(2)+'</td>';

	
		tab+='<td>'+"&#8377;"+intr .toFixed(2)+'</td>';
	

		tab+='<td>'+"&#8377;"+principalamt.toFixed(2)+'</td>';



		tab+='<td>'+"&#8377;"+bamt.toFixed(2)+'</td>'
	

	
		tab+='</tr>'

	
		}

		
		tab+='</table>'
		document.getElementById('tabl').innerHTML=tab;
		count++;
		
		}

	
	function formcheck(){



	var form1=document.getElementById("principal1").value;
	var form2=(document.getElementById("intrest1").value);
	var form3=document.getElementById("term").value;
	var form4=document.getElementById("termy").value;
	

	if(form1==""||form2==""|| form3=="" && form4==""){
	alert("Enter some input:");
	invisible();
	reloadcontent();

	}

	
	else if(count>0)
		{ 
	
			alert("Reset values");
			invisible();
			reloadcontent();
			
	
	}
	
	else if(form2>100||isNaN(form4)||isNaN(form2)||isNaN(form3))
	{
			
			
			alert("Enter valid input"); 
			reloadcontent();
		
	
	}
	
	else if(form3!=="")
	{
			document.getElementById("termy").value=(form3/12).toFixed(2);
	}
	
	else
	{
	document.getElementById("term").value=form4*12;
	}

	}

				
		
		function invisible() {
		document.getElementById("table-box").style.display="none";
		}


	
		function reloadcontent(){
  	  window.location.reload();
    	count=0;
		} 
