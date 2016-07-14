exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  		var que = num & (1 << (bit-1));
  		if(que>0) return 1;
  		else return 0;
  },

  base10: function(str) {
  		var len = str.length;
  		var ans = 0;
  		var j =0;
  		for(var i = len-1;i>=0;i--) {
  			ans += Math.pow(2,i) * parseInt(str[j]);
  			j++; 
  		}
  		return ans;
  },

  convertToBinary: function(num) {
      var str = "";
      while(num>0) {
          var que = num%2;
          str = "" + que + str;
          num = parseInt(num/2);
      }
      while(str.length<8) {
        str = "0" + str;
      }
      return str.toString();
  },

  multiply: function(a, b) {
    var pres = (b + "").split(".")[1].length;
    return parseFloat(eval(a*b).toPrecision(pres));
  }
};
