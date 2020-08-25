// 1. Permise 是一个构造函数，可以 new Permise();
// 2. Permise 有两个方法 resolve（成功回调） 和 reject（失败回调）
// 3. 成功的回调必须传，失败的回调可以不传

const fs = require('fs');

function getFileByPath(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', (err, dataStr) => {
            if (err) return reject(err);
            resolve(dataStr)
        });
    })
}

// 4如果前面的执行失败 仍需要继续执行 则需要指定失败的处理
getFileByPath('./files/1')
    .then(function (data) {
        console.log(data)
        return getFileByPath('./files/22');
    })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    .then(function (data) {
        console.log(data)
        return getFileByPath('./files/3');
    })
    .then(function (data) {
        console.log(data)
    })
    // 捕获异常信息
    .catch(function (err) {
        //
        console.log(err)
    })