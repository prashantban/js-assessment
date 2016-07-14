exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var re = new RegExp("(.)(?=\\1{" + amount + "})","g");
    return str.replace(re, "");
  },

  wordWrap: function(str, cols) {
  	// From StackOverFlow - http://stackoverflow.com/questions/36037657/javascript-strings-wrap
  	var formatedString = '',
        wordsArray = [];
    wordsArray = str.split(' ');

    formatedString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
        if (wordsArray[i].length > cols) {
            formatedString += '\n' + wordsArray[i];
        } else {
            if (formatedString.length + wordsArray[i].length > cols) {
                formatedString += '\n' + wordsArray[i];
            } else {
                formatedString += ' ' + wordsArray[i];
            }
        }
    }
    return formatedString;
  },

  reverseString: function(str) {
  	var ans = '';
  	for(var i = str.length-1;i>=0;i--) {
  		ans += str[i];
  	}
  	return ans;
  }
};
