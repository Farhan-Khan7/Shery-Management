const changetext = [
    "dynamic teams",
    "increased productivity",
    "improved collaboration",
    "smart workflows",
    "better organization",
    "You"
];

const text = document.querySelector("#changing-text");

let index = 0;

setInterval(() => {
    index++;

    if(index >= changetext.length){
        index = 0;
    }

    text.style.animation = "none"
    text.offsetHeight;
    text.textContent = changetext[index];
    text.style.animation = "dropIn 0.6s ease"
    
}, 2000)