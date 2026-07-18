function getUserInfo({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: 'Alice', age: 30 };
getUserInfo(user); // Name: Alice, Age: 30