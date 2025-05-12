
// require('dotenv').config();

// Print out value of API key stored in .env file
//console.log(process.env.API_KEY)

async function getImage() {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=yAZObZAAvhvUqucxZBtGYPBcUJrqFJjB&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const gifUrl = data.data[0].images.original.url;
    console.log("Fetched GIF URL:", gifUrl);
    return gifUrl;

  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const gifUrl = await getImage();
    document.getElementById('gifContainer').innerHTML =
      `<img src="${gifUrl}" alt="Dog GIF" />`;
  });
});

