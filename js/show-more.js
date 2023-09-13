document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".project-page-box"); // Выбираем все блоки

    blocks.forEach(function (block) {
        const newsContent = block.querySelector(".project-page-text");
        const showMoreButton = block.querySelector(".show-more-button");
        const threeDot = block.querySelector(".threedot")
        const maxCharCount = 700;
        const fullText = newsContent.textContent;

        if (fullText.length > maxCharCount) {
            const truncatedText = fullText.substring(0, maxCharCount);
            newsContent.textContent = truncatedText;
            showMoreButton.style.display = "block"; // Показываем кнопку
        }

        showMoreButton.addEventListener("click", function () {
            newsContent.textContent = fullText;
            showMoreButton.style.display = "none";
            threeDot.style.display = "none";
        });
    });
});
