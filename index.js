require('dotenv').config();

async function getImage(query) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        const data = await response.json();
        let returnURL = data.data[Math.floor(Math.random() * 25)].images.original.url
        return returnURL;
    } catch (error) {
        throw new Error(error);
    }
}

(async () => {
    try {
        const imageUrl = await getImage("dog");
        console.log(imageUrl);
    } catch (error) {
        console.error(error);
    }
})();