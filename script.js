//your JS code here. If required.
const username = document.getElementById("username");
        const password = document.getElementById("password");
        const checkbox = document.getElementById("checkbox");
        const btn1 = document.getElementById("submit");
        const btn2 = document.getElementById("existing");
        //const form = document.getElementById("form");
        //alert(`Logged in as ${username.value}`);

        window.addEventListener("DOMContentLoaded", () => {
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                btn2.style.display = "block";
            }
        })

        btn1.addEventListener("click", storingInLocalStorage);

        btn2.addEventListener("click", retrievingFromLocalStorage);

        function storingInLocalStorage(e) {
            e.preventDefault();
            if (checkbox.checked) {
                localStorage.setItem("username", username.value);
                localStorage.setItem("password", password.value);
                btn2.style.display = "block";
				alert(`Logged in as ${username.value}`);
            }
            else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                btn2.style.display = "none";
            }
        }

        function retrievingFromLocalStorage(e) {
            e.preventDefault();
            const savedUsername = localStorage.getItem("username");

            if (savedUsername) {
                alert(`Logged in as ${savedUsername}`);
            } else {
                alert("No saved credentials found.");
            }
        }