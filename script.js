document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const form = document.querySelector('form');
    const answerContainer = document.querySelector('.answer-container');

    // Palindrome check function

    const checkPalindrome = (text) => {
        const cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        return cleanText === cleanText.split('').reverse().join('');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = textInput.value.trim();

        if(!text){
            alert("Please input a value");
            return;
        }

        if(checkPalindrome(text)){
            answerContainer.classList.remove('hidden');
            answerContainer.textContent = `${text} is a Palindrome`;
        } else {
            answerContainer.classList.remove('hidden');
            answerContainer.textContent = `${text} is not a Palindrome`;
        }

    })
})