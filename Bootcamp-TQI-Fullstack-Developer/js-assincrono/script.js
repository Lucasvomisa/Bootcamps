const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('trocargato');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('gatos');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();