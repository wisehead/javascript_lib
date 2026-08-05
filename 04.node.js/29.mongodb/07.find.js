const { MongoClient } = require('mongodb');
 
async function main() {
    // MongoDB 连接 URI
    const uri = "mongodb://admin:admin123@10.27.77.146:27017/?authSource=admin";

    // 创建一个新的 MongoClient
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
 
    try {
        // 连接到 MongoDB 服务器
        await client.connect();
 
        console.log("成功连接到服务器");
 
        // 指定数据库
        const database = client.db('runoob');
 
        // 使用 createCollection 方法创建集合
        const collectionName = 'exampleCollection';
        await database.createCollection(collectionName);
        console.log(`集合 ${collectionName} 创建成功`);
 
        // 获取集合
        const collection = database.collection(collectionName);
 
        // 创建多个新文档
        const docs = [
            { name: "Alice", age: 25, address: "Wonderland" },
            { name: "Bob", age: 30, address: "Builderland" },
            { name: "Charlie", age: 35, address: "Chocolate Factory" }
        ];
 
        // 插入多个文档到集合
        const result = await collection.insertMany(docs);
 
        console.log(`${result.insertedCount} 个新文档已创建，ID 为:`);
        Object.keys(result.insertedIds).forEach((id, index) => {
            console.log(`文档 ${index + 1}: ${id}`);
        });
 
        // 查询集合中的所有文档
        const query = {}; // 空查询对象表示查询所有文档
        const options = { projection: { _id: 0, name: 1, age: 1, address: 1 } }; // 仅选择需要的字段
        const cursor = collection.find(query, options);
 
        // 打印查询到的所有文档
        const allValues = await cursor.toArray();
        console.log("查询到的文档:");
        console.log(allValues);
    } finally {
        // 确保在完成后关闭连接
        await client.close();
    }
}
 
main().catch(console.error);