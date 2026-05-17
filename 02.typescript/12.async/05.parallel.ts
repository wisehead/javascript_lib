function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return Promise.resolve({ id: id, name: "User" + id });
}

async function main1() {
    // 串行执行
    console.time("串行");
    var user1 = await fetchUser(1);
    var user2 = await fetchUser(2);
    console.log("串行完成: " + user1.name + ", " + user2.name);
    console.timeEnd("串行");

    // 并行执行
    console.time("并行");
    var results = await Promise.all([fetchUser(1), fetchUser(2)]);
    console.log("并行完成: " + results[0].name + ", " + results[1].name);
    console.timeEnd("并行");
}

main();