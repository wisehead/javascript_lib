async function fetchMultipleUrls(urls) {
  try {
    const requests = urls.map(url => fetch(url));
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map(r => r.json()));
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}