(function(){
  console.log(process.cwd());
  fs = require('fs');

  fs.readFile('dist/views/20150812-hk-legco-analysis.html', 'utf-8', function (err, data){
    var OpenCC = require('opencc');
    var opencc = new OpenCC('hk2s.json');
    var simplifiedText = opencc.convertSync(data);

    simplifiedText = simplifiedText.replace('zh-hant', 'zh-hans');

    fs.writeFile("dist/views/20150812-hk-legco-analysis-hans.html", simplifiedText, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("index_hans.html created.");
    });
  });

}());
