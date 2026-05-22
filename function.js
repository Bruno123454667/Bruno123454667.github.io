
document.addEventListener("DOMContentLoaded", () => {
	const headerInner = document.querySelector('.header-inner');
	if (headerInner) {
		
		headerInner.innerHTML = '';

		const logoLink = document.createElement('a');
		logoLink.href = 'index.html';
		logoLink.className = 'logo';
		const logoImg = document.createElement('img');
		logoImg.src = 'Bilder/logga.webp';
		logoImg.alt = 'Chef Tingeling logotyp';
		logoLink.appendChild(logoImg);
		headerInner.appendChild(logoLink);

		const nav = document.createElement('nav');
		nav.className = 'main-nav';

		const links = [
			{ href: 'index.html', text: 'Hem' },
			{ href: 'about.html', text: 'Om' },
			{ href: 'priceAndbooking.html', text: 'Meny & Pris' },
			{ href: 'pics.html', text: 'Bilder' },
			{ href: 'booking.html#boka', text: 'Boka bord', cls: 'cta' },
		];

		links.forEach(l => {
			const a = document.createElement('a');
			a.href = l.href;
			a.textContent = l.text;
			if (l.cls) a.classList.add(l.cls);
			nav.appendChild(a);
		});

		headerInner.appendChild(nav);

		
		const currentPage = window.location.pathname.split('/').pop() || 'index.html';
		nav.querySelectorAll('a').forEach(a => {
			const hrefPage = (a.getAttribute('href') || '').split('#')[0];
			if (hrefPage === currentPage) {
				a.style.borderColor = 'var(--orange-500)';
				a.style.backgroundColor = 'var(--orange-100)';
			}
		});
	}

	
	const footerText = document.querySelector('.footer-inner > div');
	if (footerText) {
		footerText.textContent = `© Chef Tingeling ${new Date().getFullYear()}`;
	}
});
