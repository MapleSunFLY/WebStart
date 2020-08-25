//根据路径获取文件并返回内容


const fs = require('fs');

// 普通获取文件方法
// fs.readFile(path.join(__dirname, './files/1'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

// 封装方法
function getFileByPath(fPath, callBack) {
    fs.readFile(fPath, 'utf-8', (err, data) => {
        // 不需要执行报错以后的代码
        if (err) return callBack(err, null);
        callBack(null, data);
    });
}


const path = require('path');

getFileByPath(path.join(__dirname, './files/2'), (err, data) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(data);
    }
});