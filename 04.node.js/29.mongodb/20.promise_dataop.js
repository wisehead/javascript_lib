const { MongoClient, ObjectId } = require('mongodb');
 
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
 
// 添加文档的函数
function insertDocument(db, document) {
    const collection = db.collection('documents');
    return new Promise((resolve, reject) => {
        collection.insertOne(document, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("添加文档成功");
                resolve(result);
            }
        });
    });
}
 
// 查询文档的函数
function findDocuments(db) {
    const collection = db.collection('documents');
    return new Promise((resolve, reject) => {
        collection.find({}).toArray((err, docs) => {
            if (err) {
                reject(err);
            } else {
                console.log("查询文档结果:");
                console.log(docs);
                resolve(docs);
            }
        });
    });
}
 
// 更新文档的函数
function updateDocument(db, id, updatedValues) {
    const collection = db.collection('documents');
    return new Promise((resolve, reject) => {
        collection.updateOne({ _id: ObjectId(id) }, { $set: updatedValues }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("更新文档成功");
                resolve(result);
            }
        });
    });
}
 
// 删除文档的函数
function deleteDocument(db, id) {
    const collection = db.collection('documents');
    return new Promise((resolve, reject) => {
        collection.deleteOne({ _id: ObjectId(id) }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log("删除文档成功");
                resolve(result);
            }
        });
    });
}
 
// 使用示例：连续执行增加、查询、更改、删除操作
async function performOperations() {
    try {
        const database = await connectDB();
        
        // 添加文档
        const insertResult = await insertDocument(database, { name: "Document 1" });
 
        // 查询文档
        const findResult = await findDocuments(database);
 
        // 更新文档
        const updatedDocId = insertResult.insertedId; // 使用插入文档返回的 ID 进行更新
        const updateResult = await updateDocument(database, updatedDocId, { name: "Updated Document 1" });
 
        // 删除文档
        const deleteResult = await deleteDocument(database, updatedDocId);
 
        // 输出操作结果
        console.log("最终操作完成:");
        console.log("删除文档结果:", deleteResult);
 
    } catch (err) {
        console.error("执行操作时发生错误:", err);
    } finally {
        // 确保在完成后关闭连接
        await client.close();
    }
}
 
// 执行操作
performOperations();