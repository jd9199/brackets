module.exports = function check(str, bracketsConfig) {
	let masStr = str.split('');
	let masOfBrackets = [], index = 0;
		for (let i = 0, masStrLength = masStr.length; i < masStrLength; i++)
		{
			for (let j = 0, bracketsConfigLength = bracketsConfig.length; j < bracketsConfigLength; j++)
			{
				let firstOfBrackets = bracketsConfig[j][0];
				let secondOfBrackets = bracketsConfig[j][1];
				if (masStr[i] === firstOfBrackets)
				{
					masOfBrackets[index] = masStr[i];
					index++;
					j = bracketsConfigLength;
				}
				else if (masStr[i] === secondOfBrackets && firstOfBrackets === masOfBrackets[index-1])
				{
					delete masOfBrackets[index-1];
					index--;
					j = bracketsConfigLength;
				}
				else if (masStr[i] === secondOfBrackets && firstOfBrackets !== masOfBrackets[index-1])
				{
					return false;
				}
			}
		}
		if(masOfBrackets[0])
		{
			return false;
		}
		return true;
}
