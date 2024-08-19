function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i = 0; i < str.length; i++){
		if((i === 0 && str[i] !== str[i+1]) || (i === str.length-1 && str[str.length-1] !== str[str.length-2])) 
			return str[i]
		
		if(str[i] !== str[i-1] && str[i] !== str[i+1]){
			return str[i]
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
