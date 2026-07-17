async function fetchUser(id) {
    try {
        const response = await fetch(`https://api.example.com/users/${id}`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

fetchUser(1).then(user => console.log(user));