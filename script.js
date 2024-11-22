function moveButton() {
  const noBtn = document.getElementById('noBtn');
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  
  noBtn.style.position = 'fixed';
  noBtn.style.left = newX + 'px';
  noBtn.style.top = newY + 'px';
}

function frameLoop() {
  confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FF69B4', '#FFB6C1', '#FFC0CB']
  });
  confetti({
      particleCount: 4,
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