const getImage = async() => {
    try {
        const apiKey = 'WtzljJpi47T6FkDDzVwQCClZhQUpIrDI';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await res.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (err) {
        console.log('error:', err)
    }
};

getImage();