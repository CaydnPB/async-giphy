require('dotenv').config();

async function getImage(query, location) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        const data = await response.json();
        let returnURL = data.data[location].images.original.url;
        return returnURL;
    } catch (error) {
        throw new Error(error);
    }
}

(async () => {
    try {
        let allGIFs = [];
        for (let i = 0; i < 25; i++) {
            const imageURL = await getImage("dog", i);
            allGIFs.push(imageURL); 
        }
        console.log(allGIFs);
    } catch (error) {
        console.error(error);
    }
})();