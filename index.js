const btnGIF = document.querySelector("#btnGIF")
const imgGIF = document.querySelector("#imgGIF")

async function getImage(query) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        const data = await response.json();
        let returnURL = data.data[Math.floor(Math.random() * 25)].images.original.url;
        addGIF(returnURL);
    } catch (error) {
        throw new Error(error);
    }
}

async function addGIF(src) {
    if (imgGIF.src === src) {
        const imageURL = await getImage("dog");
    } else {
        imgGIF.src = src;
    }
}

btnGIF.addEventListener('click', async () => {
    try {
        const imageURL = await getImage("dog");
    } catch (error) {
        console.error(error);
    }
});