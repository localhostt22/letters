document.addEventListener("DOMContentLoaded", () => {

    const opening = document.getElementById("opening");

    const bird = document.getElementById("bird");

    const birdMessage =
        document.getElementById("birdMessage");

    const receiveButton =
        document.getElementById("receiveButton");

    const letter =
        document.getElementById("letter");


    /* =========================================
       BIRD ARRIVES
    ========================================== */

    setTimeout(() => {

        receiveButton.classList.add("visible");

    }, 6000);


    /* =========================================
       CLICK BIRD
    ========================================== */

    bird.addEventListener("click", () => {

        birdMessage.textContent =
            "You caught him. He was carrying this for you.";

        receiveButton.classList.add("visible");

        bird.style.transform =
            "translateY(-8px) scale(1.08)";

    });


    /* =========================================
       OPEN LETTER
    ========================================== */

    receiveButton.addEventListener("click", () => {

        opening.style.opacity = "0";

        opening.style.transform =
            "scale(1.05)";

        setTimeout(() => {

            opening.style.display = "none";

            letter.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 1200);

    });


    /* =========================================
       SECRET WORD
    ========================================== */

    const secretWord =
        document.getElementById("secretWord");

    secretWord.addEventListener("click", () => {

        secretWord.classList.add("found");

        secretWord.textContent =
            "not enough";

        setTimeout(() => {

            secretWord.textContent =
                "wrong";

        }, 1800);

    });


    /* =========================================
       SECRET HEART
    ========================================== */

    const heartButton =
        document.getElementById("heartButton");

    const heartMessage =
        document.getElementById("heartMessage");

    heartButton.addEventListener("click", () => {

        heartMessage.classList.toggle("visible");

        if (heartMessage.classList.contains("visible")) {

            heartMessage.textContent =
                "You were supposed to notice that. ♥";

            heartButton.style.transform =
                "scale(1.3) rotate(8deg)";

        } else {

            heartMessage.textContent =
                "You noticed.";

            heartButton.style.transform =
                "scale(1)";

        }

    });


    /* =========================================
       CROSSED OUT SECRET
    ========================================== */

    const questionButton =
        document.getElementById("questionButton");

    const crossedAnswer =
        document.getElementById("crossedAnswer");

    questionButton.addEventListener("click", () => {

        crossedAnswer.classList.add("visible");

        questionButton.style.transform =
            "scale(0)";

        setTimeout(() => {

            questionButton.style.display =
                "none";

        }, 300);

    });


    /* =========================================
       CONTINUE
    ========================================== */

    const continueButton =
        document.getElementById("continueButton");

    const ending =
        document.getElementById("ending");

    continueButton.addEventListener("click", () => {

        continueButton.textContent =
            "♥";

        continueButton.style.transform =
            "scale(1.3)";

        setTimeout(() => {

            ending.style.display =
                "block";

            ending.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 700);

    });


});