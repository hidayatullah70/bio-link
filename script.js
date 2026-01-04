// ** Untuk membuat link bisa di copy ** //

const actionLinks = document.querySelectorAll(".link-card .link-action");

actionLinks.forEach((action) => {
    action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

// ** *Untuk menampilkan toast notification ** //

    document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p>✅ Link ${action.parentElement.innerText} berhasil disalin</p>
        </div>
        `;

// ** Untuk menghilangkan toast notification setelah beberapa detik ** // 

    setTimeout(() => {
        document.querySelector("#toast .toast-container").classList.add("toast-gone");
    }, 300)

    setTimeout(() => {
        document.querySelector("#toast .toast-container").remove();
    }, 2000);
    });
});


// ** untuk ganti icon sosmed saat hover **//

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    });
})

// ** Animasi text bergerak saat scroll ** //

document.addEventListener("scroll", (e) => {
    document.querySelector(
        ".bg-text-animation"
    ).style.transform = `translateX(${window.scrollY / 5}px)`;
});
