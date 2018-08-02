var fs = require('fs');
deleteFolderRecursive = function (path) {

    var files = [];
    // 测试某个路径下的文件是否存在。
    if (fs.existsSync(path)) {
        // 返回一个包含“指定目录下所有文件名称”的数组对象。
        files = fs.readdirSync(path);
        // console.log(files);

        files.forEach(function(file,index){

            var curPath = path + "/" + file;

            if(fs.statSync(curPath).isDirectory()) { // recurse

                deleteFolderRecursive(curPath);

            } else { // delete file

                fs.unlinkSync(curPath);

            }

        });

        fs.rmdirSync(path);

    }

};
deleteFolderRecursive ('./dist');