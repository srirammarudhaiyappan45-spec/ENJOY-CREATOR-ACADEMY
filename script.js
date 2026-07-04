// ===============================
// ENJOY CREATOR ACADEMY
// script.js
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Smooth Scroll
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // ===============================
    // Animated Counter
    // ===============================

    const counters = document.querySelectorAll(".stat-box h2");

    counters.forEach(counter => {

        const original = counter.innerText;

        const target = parseInt(original.replace(/[^0-9]/g, ""));

        if (isNaN(target)) return;

        let count = 0;

        let speed = Math.ceil(target / 100);

        const update = () => {

            count += speed;

            if (count >= target) {

                counter.innerText = original;

                clearInterval(interval);

            } else {

                counter.innerText = count + "+";

            }

        };

        const interval = setInterval(update, 20);

    });

});

// ===============================
// Registration Form
// ===============================

function submitRegistration(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const email = document.getElementById("email").value.trim();

    const location = document.getElementById("location").value.trim();

    const gender = document.getElementById("gender").value;

    const job = document.getElementById("job").value.trim();

    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        location === "" ||
        gender === "" ||
        job === ""
    ) {

        alert("Please Fill All Fields");

        return false;

    }

    if (phone.length != 10) {

        alert("Enter Valid Phone Number");

        return false;

    }

    localStorage.setItem("eca_name", name);
    localStorage.setItem("eca_phone", phone);
    localStorage.setItem("eca_email", email);

    window.location.href = "thankyou.html";

    return false;

}

// ===============================
// Thank You Page
// ===============================

function startRedirect() {

    let time = 10;

    const countdown = document.getElementById("countdown");

    const timer = setInterval(function () {

        if (countdown) {

            countdown.innerHTML = time;

        }

        time--;

        if (time < 0) {

            clearInterval(timer);

            const message = encodeURIComponent(
                "I HAVE BEEN SUCCESSFULLY REGISTERED FOR 2 HOUR FREE CLASS"
            );

            window.location.href =
                "https://wa.me/919344697851?text=" + message;

        }

    }, 1000);

}