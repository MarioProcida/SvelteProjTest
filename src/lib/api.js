const BASE_URL = 'https://jsonplaceholder.typicode.com'; // o il tuo URL MockAPI

/**
 * @param {string} endpoint
 */
export async function fetchData(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}