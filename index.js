let array = ["Banana ", "Apple ", "Cat ", "Tree ", "Acorn ", "Scratch ", "Use ", "Write ", "In ",
"Vue ", "Svelte ", "C ", "Program ", "Write ", "Microsoft ", "Windows ", "Mac ", "God286 ", "JaydenDev ",
"Git ", "GitHub ", "Meow! ", "Who ", "What ", "Where ", "When ", "Why ", "Then ", "Bit ", "Bite ",
"Byte ", "Kite ", "Bottom ", "Top ", "Padding ", "HTML ", "CSS ", "SCSS ", "Sometimes ", "Someday ",
"Art ", "Math ", "Dog ", "Visual ", "Studio ", "Code "
]

function randMSG() {
    const word1 = array[Math.floor(Math.random() * array.length)];
    const word2 = array[Math.floor(Math.random() * array.length)];
    const word3 = array[Math.floor(Math.random() * array.length)];
    const word4 = array[Math.floor(Math.random() * array.length)];
    const word5 = array[Math.floor(Math.random() * array.length)];
    const word6 = array[Math.floor(Math.random() * array.length)];
    document.getElementById("span").innerHTML = (word1 + word2 + word3 + word4 + word5 + word6);
}