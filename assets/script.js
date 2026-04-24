// フィルター機能
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.tool-card');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });

  // 記事数カウント
  const blogCards = document.querySelectorAll('.blog-card');
  const counter = document.getElementById('stat-articles');
  if (counter && blogCards.length > 0) {
    counter.textContent = blogCards.length + '+';
  }
});
