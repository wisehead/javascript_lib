const { MongoClient } = require('mongodb');

// 订单数据
const orders = [
  { "_id": 1, "product_id": 101, "quantity": 2 },
  { "_id": 2, "product_id": 102, "quantity": 1 },
  { "_id": 3, "product_id": 103, "quantity": 4 }
];

// 产品数据
const products = [
  { "_id": 101, "name": "Product A", "price": 50 },
  { "_id": 102, "name": "Product B", "price": 70 },
  { "_id": 103, "name": "Product C", "price": 100 },
  { "_id": 104, "name": "Product D", "price": 120 }
];

async function main() {
    // MongoDB 连接 URI
    const uri = "mongodb://admin:admin123@10.27.77.146:27017/?authSource=admin";

    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });

    try {
        // 连接到 MongoDB 服务器
        await client.connect();

        console.log("成功连接到服务器");

        // 指定数据库
        const database = client.db('mydatabase');

        // 插入 orders 集合
        const ordersCollection = database.collection('orders');
        const ordersResult = await ordersCollection.insertMany(orders);
        console.log(`orders 集合已插入 ${ordersResult.insertedCount} 条文档`);

        // 插入 products 集合
        const productsCollection = database.collection('products');
        const productsResult = await productsCollection.insertMany(products);
        console.log(`products 集合已插入 ${productsResult.insertedCount} 条文档`);
    } finally {
        // 确保在完成后关闭连接
        await client.close();
    }
}

main().catch(console.error);