// services/sw-api.js
const BASE_URL = 'https://swapi.dev/api';

export async function getAllStarships() {
  try {
    const response = await fetch(`${BASE_URL}/starships/`);
    const data = await response.json();

    // Fetch the detailed information of each starship
    const starships = await Promise.all(data.results.map(async (starship) => {
      const detailResponse = await fetch(starship.url);
      const detailData = await detailResponse.json();
      return {
        name: starship.name,
        model: detailData.model,
      };
    }));

    return {
      count: data.count,
      starships: starships,
    };
  } catch (error) {
    throw new Error('Failed to fetch starships data');
  }
}
