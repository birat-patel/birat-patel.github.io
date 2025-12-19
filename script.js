/*   auto  typing text    */
let showWord = document.getElementById("show_word")

let wordList = ['Frontend Developer', 'Web UI Clone Expert', 'Data Entry Operator'];
let i = 0, wordNo = 0, wait = 2;

setInterval(() => {
    let word = wordList[wordNo]

    if (i < word.length) {
        showWord.innerHTML += word.charAt(i);
        i++;
    }
    else {
        if (wait) {
            wait--
            return
        }
        // debugger
        showWord.innerHTML = '';
        i = 0
        wordNo++;
        wait = 2
        if (wordList.length == wordNo) {
            wordNo = 0;
        }
    }
}, 300);


/*   active navbar    */
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".nav_link")
// click to active 
navLinks.forEach(Link => {
    Link.onclick = () => {
        navLinks.forEach(link => {
            link.classList.remove("active")
        })
        Link.classList.add("active")
    }
});
// scroll to active
window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
        let sectionTop = section.offsetTop      // section top se kitna tur hai
        if (window.scrollY >= sectionTop - 270) {
            currentSection = section.getAttribute("id")
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active")
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active")
        }
    })
})


/*   menu button show deta   */
let menu = document.querySelector("i")
let ul = document.querySelector("ul")
menu.onclick = () => {
    ul.classList.toggle("showData")
    menu.classList.toggle("ri-menu-fill")
    menu.classList.toggle("ri-close-large-fill")
}
