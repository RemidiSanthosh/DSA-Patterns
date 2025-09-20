const cardsContainer = document.getElementById('pattern-cards');
const modal = document.getElementById('pattern-modal');
const titleEl = document.getElementById('pattern-title');
const descEl = document.getElementById('pattern-description');
const codeEl = document.getElementById('pattern-code');

function renderCards() {
  cardsContainer.innerHTML = patterns.map(p => `
    <div class="card" onclick="openModal(${p.id})">
      <!-- <img src="${p.image}" alt="${p.title}"> -->
      <div class="card-content">
        <h3>${p.title}</h3>
        <p>${p.description.slice(0, 60)}...</p>
      </div>
    </div>
  `).join('');
}

function openModal(id) {
  const p = patterns.find(item => item.id === id);
  if (!p) return;
  titleEl.textContent = p.title;
  descEl.textContent = p.description;
  codeEl.textContent = p.template;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function copyCode() {
  const code = codeEl.textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert('Code copied to clipboard!');
  });
}

renderCards();

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};
