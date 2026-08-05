const { MongoClient } = require('mongodb');
 
// MongoDB 连接 URI
const uri = "mongodb://admin:admin123@10.27.77.146:27017/?authSource=admin";

// 创建一个新的 MongoClient
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
 
// 使用 Promise 封装连接数据库的过程
function connectDB() {
    return new Promise((resolve, reject) => {
        // 连接到 MongoDB 服务器
        client.connect((err) => {
            if (err) {
                reject(err);
            } else {
                console.log("成功连接到 MongoDB 服务器");
                resolve(client.db()); // 返回数据库实例
            }
        });
    });
}
 
// 使用示例
connectDB()
    .then(database => {
        // 这里可以继续执行数据库操作
        console.log("连接到数据库成功");
 
        // 示例：输出数据库的名称
        console.log("数据库名称:", database.databaseName);
 
        // 如果需要进行其他操作，可以在这里继续编写代码
        // 比如查询、插入文档等
 
        // 最后关闭连接
        client.close();
    })
    .catch(err => {
        console.error("连接数据库时发生错误:", err);
    });