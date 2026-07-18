async function fetchUser(id) {
    try {
        const response = await fetch(`https://api.example.com/users/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}