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
        const database = client.db('mydatabase');
 
        // orders 集合
        const ordersCollection = database.collection('orders');
 
        // products 集合
        const productsCollection = database.collection('products');
 
        // 定义聚合管道，使用 $lookup 进行左外连接
        const pipeline = [
            {
                $lookup: {
                    from: 'products',         // 关联的集合名
                    localField: 'product_id', // 本地集合中用于关联的字段
                    foreignField: '_id',      // 关联集合中用于关联的字段
                    as: 'productDetails'      // 输出结果中包含的字段名
                }
            }
        ];
 
        // 执行聚合操作
        const result = await ordersCollection.aggregate(pipeline).toArray();
 
        // 输出查询结果
        console.log("左外连接查询结果:");
        console.log(result);
 
    } finally {
        // 确保在完成后关闭连接
        await client.close();
    }
}
 
main().catch(console.error);