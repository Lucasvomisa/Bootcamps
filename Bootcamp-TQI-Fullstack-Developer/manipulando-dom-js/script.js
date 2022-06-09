const modeSelector = document.getElementById('mode-selector');

const allElements = document.querySelector('body, h1, button, footer');

modeSelector.addEventListener('click', () => {
    allElements.classList.toggle("dark-mode");

    if (allElements.classList.contains("dark-mode")) {
        modeSelector.innerHTML = "Light Mode";
        document.getElementById('page-title').innerHTML = "Dark Mode ON";
        return
    }

    modeSelector.innerHTML = "Dark Mode";
    document.getElementById('page-title').innerHTML = "Light Mode ON";

});