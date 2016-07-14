exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    function processDir(dir) {
      var i;
      var len;
      var file;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    processDir(data);


    return listOfFiles;
},

  permute: function(arr) {
    var ans = [];

    function perm(arr,temp) {
      var cur , temp = temp || [];
      for(var i = 0;i<arr.length;i++) {
        cur = arr.splice(i,1);
        if(arr.length==0) ans.push(temp.concat(cur));
        perm(arr.slice(), temp.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
      return ans;
    }
    return perm(arr);
  },

  fibonacci: function(n) {
    var i = 1, j = 1;
    if(n==1) return i;
    if(n==2) return j;
    for(var k=3;k<=n;k++) {
      sum = i+j;
      i = j;
      j = sum;
    }
    return sum;
  },

  validParentheses: function(n) {
      var res = [];
      function balparan(output,open,close,pairs) {
        if((open==pairs)&&(close==pairs)) {
        res.push(output);
    } else {
        if(open<pairs)
            balparan(output + "(", open+1, close, pairs);
        if(close<open)
            balparan(output + ")", open, close+1, pairs);
      }
    }
    balparan("",0,0,n);
    return res;
  }
};

