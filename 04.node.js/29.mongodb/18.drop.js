var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://admin:admin123@10.27.77.146:27017/?authSource=admin";
// const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
MongoClient.connect(url, { serverSelectionTimeoutMS: 5000, connectTimeoutMS: 5000 }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    // 删除 test 集合
    dbo.collection("test").drop(function(err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
        if (err) throw err;
        if (delOK) console.log("集合已删除");
        db.close();
    });
});
