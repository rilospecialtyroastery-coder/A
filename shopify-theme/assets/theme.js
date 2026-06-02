// Carousel scroll
function scrollCarousel(id, dir) {
  const track = document.getElementById(id);
  if (track) track.scrollBy({ left: dir * 320, behavior: 'smooth' });
}

// Sticky header shadow
const header = document.getElementById('SiteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('site-header--scrolled', window.scrollY > 10);
  }, { passive: true });
}

// Add to cart AJAX — update cart count
document.addEventListener('submit', async function(e) {
  const form = e.target;
  if (!form.action || !form.action.includes('/cart/add')) return;
  e.preventDefault();
  try {
    const res = await fetch('/cart/add.js', { method: 'POST', body: new FormData(form) });
    const data = await res.json();
    if (data.id) {
      const countRes = await fetch('/cart.js');
      const cart = await countRes.json();
      document.querySelectorAll('.site-header__cart-count').forEach(el => {
        el.textContent = cart.item_count;
      });
    }
  } catch(err) { console.error(err); }
});
