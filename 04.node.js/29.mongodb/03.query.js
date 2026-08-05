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

        // 获取集合
        const collection = database.collection('exampleCollection');

        // 查询所有文档
        const docs = await collection.find({}).toArray();

        console.log(`查询到 ${docs.length} 条文档:`);
        console.log(JSON.stringify(docs, null, 2));
    } finally {
        // 确保在完成后关闭连接
        await client.close();
    }
}

main().catch(console.error);