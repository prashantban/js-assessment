exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var defer = $.Deferred();
  	setTimeout(function() {
  		defer.resolve(value);
  	},10);
  	return defer.promise();
  },

  manipulateRemoteData: function(url) {
  	var defer = $.Deferred();
  	$.ajax(url).then(function(response) {
  		var person = $.map(response.people, function(person) {
  			return person.name;
  		});
  		defer.resolve(person.sort());
  	});

  	return defer.promise();
  }
};
