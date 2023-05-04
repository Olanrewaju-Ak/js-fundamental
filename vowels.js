const numberOfVowels = function (data) {
	let vowels = 0;
  for (const char of data){
		if (char === 'a'|| char === "e"|| char === "i"|| char === "o"|| char === "u"){
			vowels ++;
		}
	}
	return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
