function getUserInfo(): [number, string] {
    return [1, "John Doe"];
}

const [userId, userName] = getUserInfo();
console.log(userId);   // 输出: 1
console.log(userName); // 输出: John Doe