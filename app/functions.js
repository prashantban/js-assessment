exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
      return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
      obj.speak = fn;
      return obj.speak();
  },

  functionFunction: function(str) {
      return function(a) {
        return str + ', ' + a;
      }
  },

  makeClosures: function(arr, fn) {
    var res = [];

    var fun = function(val) {
      return function() {
        return fn(val);
      };
    };
    
    for (var i = 0; i < arr.length; i++) {
      res.push(fun(arr[i]));
    }
    return res;
  },

  partial: function(fn, str1, str2) {
    return function(c) {
      return fn(str1,str2,c);
    }
  },

  useArguments: function() {
    return [].reduce.call(arguments,function(a,b) {
      return a+b;
    });
  },

  callIt: function(fn) {
    var ar = [];
    for(var i =1;i<arguments.length;i++) {
      ar.push(arguments[i]);
    }
    return fn.apply(this,ar);
  },

  partialUsingArguments: function(fn) {
    var arg = arguments;
    return function() {
      var args = [];
      for(var i=1;i<arg.length;i++) {
        args.push(arg[i]);
      }
      for(var i=0;i<arguments.length;i++) {
        args.push(arguments[i]);
      }
      return fn.apply(this,args);
    }
  },

// The CurryIt test cases does not make sense. Its looking for a recursive function and save the arguments even though they do not comply with passed functions length. 
  curryIt: function(fn) {
    function argsCall(current,expected) {
      return function(first) {
        current.push(first);
        if(current.length>=expected) {
          return fn.apply(null,current);
        }
        return argsCall(current,expected);
      };
    };
    return argsCall([],fn.length);
  },

// This Curry function lets you pass a function and expected arguments to pass the answer. Makes more sense to me.
  curryIt2: function(fn) {
    var expected_length = fn.length;
    return (function resolver() {
      var mem = Array.prototype.slice.call(arguments);
      return function() {
        var local = mem.slice();
        Array.prototype.push.apply(local,arguments);
        var next = local.length >= expected_length ? fn : resolver;
        return next.apply(null,local);
      }
    }());
  }
};
