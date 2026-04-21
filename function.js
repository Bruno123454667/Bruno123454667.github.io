
document.addEventListener("DOMContentLoaded", () => {
	const currentPage = window.location.pathname.split("/").pop() || "index.html";
	const navLinks = document.querySelectorAll(".main-nav a");

	navLinks.forEach((link) => {
		const href = link.getAttribute("href");
		if (!href) return;

		const linkPage = href.split("#")[0] || currentPage;
		if (linkPage === currentPage) {
			link.style.borderColor = "var(--orange-500)";
			link.style.backgroundColor = "var(--orange-100)";
		}
	});

	const footerText = document.querySelector(".footer-inner > div");
	if (footerText) {
		footerText.textContent = `© Chef Tingeling ${new Date().getFullYear()}`;
	}
})
