			

			document.getElementById("zero").addEventListener("click", number0);
			
			function number0() {
				
				document.getElementById("display").value += 0;
				
			}

			
			
			document.getElementById("one").addEventListener("click", number1);
			function number1(){
				
				document.getElementById("display").value += 1;
			}
			
			document.getElementById("two").addEventListener("click", number2);
			function number2(){
				
				document.getElementById("display").value += 2;
			}
			
			
			document.getElementById("three").addEventListener("click", number3);
			function number3(){
				
				document.getElementById("display").value += 3;
			}
			
			document.getElementById("four").addEventListener("click", number4);
			function number4(){
				
				document.getElementById("display").value += 4;
			}
			
			document.getElementById("five").addEventListener("click", number5);
			function number5(){
				
				document.getElementById("display").value += 5;
			}
			
			document.getElementById("six").addEventListener("click", number6);
			function number6(){
				
				document.getElementById("display").value += 6;
			}
			
			document.getElementById("seven").addEventListener("click", number7);
			function number7(){
				
				document.getElementById("display").value += 7;
			}
			
			document.getElementById("eight").addEventListener("click", number8);
			function number8(){
				
				document.getElementById("display").value += 8;
			}
			
			document.getElementById("nine").addEventListener("click", number9);
			function number9(){
				
				document.getElementById("display").value += 9;
			}
			
			document.getElementById("plus").addEventListener("click", plus);
			function plus(){
				
				document.getElementById("display").value += "+";
			}
			document.getElementById("minus").addEventListener("click", minus);
			function minus(){
			
				document.getElementById("display").value += "-";
			}
			
			document.getElementById("div").addEventListener("click", div);
			function div(){
			
				document.getElementById("display").value += "/";
				
			}
			
			document.getElementById("multi").addEventListener("click", multi);
			function multi(){
			
				document.getElementById("display").value += "*";
			}
			document.getElementById("clear").addEventListener("click", clear);
			function clear()  {           
				 document.getElementById("display").value = "";
			}