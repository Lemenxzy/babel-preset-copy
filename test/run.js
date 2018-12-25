var fs = require('fs');
var babel = require('babel-core');
var babePresetPreact = require('../index');
/**
 *运行以下命令启动进程：

 $ node process-args.js one two=three four
 输出如下：

 0: /usr/local/bin/node
 1: /Users/mjr/work/node/process-args.js
 2: one
 3: two=three
 4: four
 */
var fileName = process.argv[2];

// read the code from this file
fs.readFile(fileName, function(err, data) {
    if(err) throw err;

    // convert from a buffer to a string
    const code = data.toString();
    console.log(code);

    try {
        const out = babel.transform(code, babePresetPreact());
        // // print the generated code to screen
        console.log(out.code);
    } catch (e) {
        console.log(e);
    }
});