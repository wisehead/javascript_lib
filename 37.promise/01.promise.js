function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = () => reject(new Error('网络错误'));
        xhr.send();
    });
}

fetchData('https://api.example.com/data')
    .then((data) => {
        console.log('获取数据成功:', data);
    })
    .catch((error) => {
        console.error('获取数据失败:', error);
    });