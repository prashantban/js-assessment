exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
      return arr.reduce(function(a,b){return a+b;})
  },

  remove: function(arr, item) {
      return arr.filter(function(a){
        return a!=item;
      })
  },

  removeWithoutCopy: function(arr, item) {
      for(var i=arr.length - 1; i>=0;i--) {
          if(arr[i]==item) arr.splice(i,1);
      }
      return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1,1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    for(var i in arr2) arr1.push(arr2[i]);
      return arr1;
  },

  insert: function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
  },

  count: function(arr, item) {
      var count = 0;
      for(var i in arr) if(arr[i]==item) count++;
        return count;
  },

  duplicates: function(arr) {
      var dup = [];
      var map = {};
      for(var i in arr) {
        map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
      }
      for(var i in map) {
        if(map[i]!=1) dup.push(parseInt(i));
      }
    return dup;
  },

  square: function(arr) {
      return arr.map(function(a){return a*a;});
  },

  findAllOccurrences: function(arr, target) {
    var res = [];
    for(var i in arr) {
      if(arr[i]==target) res.push(i);
    }
    return res;

  }
};
