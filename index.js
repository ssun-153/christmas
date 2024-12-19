const message = [
    "Merry Christmas",
    "HIHIHIHIHIHIHI",
    "I'm gangnang",
    "happy",
    "new",
    "year"
];

let isAnimating = false;

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * message.length );
    return message[randomIndex];
}

function toggleVis(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}
   
function typeMessage(callback) {
    if (isAnimating) return;
    isAnimating = true;
    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';
    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false;
            if(callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return;
    const postcardElement = document.getElementById('postcard');
    const nameElement = document.querySelector('.p-name');

    toggleVis(postcardElement, false);
    toggleVis(nameElement, false);

    setTimeout (() => {
        typeMessage(() => {
            toggleVis(nameElement, true);
        });
        toggleVis(postcardElement, true);

    },500 );
}

window.onload = () => {
    renewMessage();
}