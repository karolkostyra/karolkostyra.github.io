const translations = {
    pl,
    en
};

document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage = localStorage.getItem("language") || "pl";

    setLanguage(savedLanguage);
});

document.querySelectorAll(".lang-btn").forEach(button => {

    button.addEventListener("click", () => {

        const lang = button.textContent.trim().toLowerCase();

        setLanguage(lang);
    });
});

function setLanguage(lang) {

    localStorage.setItem("language", lang);

    const t = translations[lang];

    document.querySelectorAll("[data-lang]")
        .forEach(el => {

            const key = el.dataset.lang;
            const value = t[key];

            if (value !== undefined) {
                el.innerHTML = value;
            }
        });

    updateActiveLanguage(lang);
}

function updateActiveLanguage(lang) {

    document.querySelectorAll(".lang-btn")
        .forEach(btn => btn.classList.remove("active"));

    const activeButton =
        document.querySelector(`[data-lang-switch="${lang}"]`);

    if (activeButton) {
        activeButton.classList.add("active");
    }
}