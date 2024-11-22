function moveButton() {
  const noBtn = document.getElementById('noBtn');
  
  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Button dimensions
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;
  
  // Calculate safe boundaries (keeping button fully visible)
  const maxX = viewportWidth - buttonWidth - 20; // 20px safety margin
  const maxY = viewportHeight - buttonHeight - 20;
  
  // Generate random position within safe boundaries
  let newX = Math.min(Math.max(20, Math.random() * maxX), maxX);
  let newY = Math.min(Math.max(20, Math.random() * maxY), maxY);
  
  // Apply new position
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
  noBtn.style.zIndex = '9999';
}

function frameLoop() {
  confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FF69B4', '#FFB6C1', '#FFC0CB']
  });
  confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#FF69B4', '#FFB6C1', '#FFC0CB']
  });
}

function handleYes() {
  document.querySelector('.buttons').style.display = 'none';
  document.querySelector('.question').style.display = 'none';
  document.getElementById('success').style.display = 'block';
  
  // Initial burst
  confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
  });
  
  // Start the confetti rain
  const animation = setInterval(frameLoop, 50);
  
  // Stop after 4 seconds
  setTimeout(() => {
      clearInterval(animation);
  }, 4000);
}