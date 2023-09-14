const currentLanguageBtn = document.getElementById("currentLanguageBtn");
const languageList = document.getElementById("languageList");
const languageLi = document.querySelectorAll(".language-li");

currentLanguageBtn.addEventListener("click", () => {
    languageList.style.display = languageList.style.display === "none" ? "block" : "none";
});

// languageList.addEventListener("click", (event) => {
//     if (event.target.tagName === "A") {
//         currentLanguageBtn.textContent = event.target.textContent;
//         languageList.style.display = "none";
//     }
// });

// for (let i = 0; i < languageLi.length; i++) {
//     languageLi[i].addEventListener('click', () => {
//         currentLanguageBtn.classList.remove('kg')
//         currentLanguageBtn.classList.remove('ru')
//         currentLanguageBtn.classList.remove('eng')
//         currentLanguageBtn.classList.add(languageLi[i].innerText);
//     });
// };
