function scrollToElement(elementSelector, instance = 0){
    //Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);

    if(elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const btn = document.getElementById("a");
const button = document.getElementById("b")

link1.addEventListener('click', () => {
    scrollToElement('.header')
})

link2.addEventListener('click', () => {
    scrollToElement('.header', 1)
})

link3.addEventListener('click', () => {
    scrollToElement('.column')
})

btn.addEventListener("click", () => {
    window.location.href = 'https://github.com/MarlonProgram/Web-Projects.git'
})

button.addEventListener("click", () => {
    window.location.href = "https://github.com/MarlonProgram/Game-Develop.git"
})