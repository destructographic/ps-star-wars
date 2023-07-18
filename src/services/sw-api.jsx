// sw-api.js

const BASE_URL = 'https://swapi.dev/api';

// make the API requests
async function fetchAPI(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error fetching data from SWAPI: ' + error.message);
  }
}

// function to fetch all starships from SWAPI
export async function getAllStarships() {
  const url = `${BASE_URL}/starships/`;
  return await fetchAPI(url);
}
