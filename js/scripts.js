var result = parseInt(prompt("Enter you result:"))
if (result >=0 && result <=19){
  alert("E");
}
else if(result <=39 && result >= 20){
	alert("D");
}
else if(result <=59 && result >= 40){
	alert("C");
}
else if(result <=79 && result >= 60){
	alert("B");
}
else if (result >= 80 && result <= 100){
	alert("A");
}
else {
	alert("Invalid mark")
}
