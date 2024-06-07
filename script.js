document.addEventListener("DOMContentLoaded", function() {
    const subtitleElement = document.querySelector('.subtitle');
    const textArray = ["Femboy-", "Catboy-", "Developer-", "Boykisser-"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 300;
    const eraseSpeed = 150;
    const pauseBetweenWords = 1000;

    function updateText() {
        const currentWord = textArray[index];
        subtitleElement.innerText = currentWord.slice(0, charIndex) + '|';

        if (charIndex < currentWord.length) {
            charIndex++;
            setTimeout(updateText, typingSpeed);
        } else {
            setTimeout(() => {
                charIndex--;
                eraseText();
            }, pauseBetweenWords);
        }
    }

    function eraseText() {
        const currentWord = textArray[index];
        subtitleElement.innerText = currentWord.slice(0, charIndex) + '|';

        if (charIndex > 0) {
            charIndex--;
            setTimeout(eraseText, eraseSpeed);
        } else {
            index = (index + 1) % textArray.length;
            setTimeout(updateText, typingSpeed);
        }
    }

    updateText();
});
