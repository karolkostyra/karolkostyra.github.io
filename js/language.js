const translations = {
    pl,
    en
};

function setLanguage(lang) {

    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-lang]")
        .forEach(element => {

            const key =
                element.getAttribute("data-lang");

            if (translations[lang][key]) {

                element.innerHTML =
                    translations[lang][key];

            }

        });

}

const savedLanguage =
    localStorage.getItem("language") || "pl";

setLanguage(savedLanguage);