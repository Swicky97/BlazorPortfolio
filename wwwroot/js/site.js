window.restartFadeIn = (element) => {
    if (!element) return;

    element.classList.remove("fadeIn");

    void element.offsetWidth;

    element.classList.add("fadeIn");
};

