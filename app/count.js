exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var time, exec;
  	exec = function() {
  		console.log(start++);
  		if(start<=end) {
  			time = setTimeout(exec,100);
  		}
  	}
  	exec();
  	return {
  		cancel : function() {
  			clearTimeout(time);
  		}
  	}
  }
};
