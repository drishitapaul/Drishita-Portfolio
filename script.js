// 🔥 Anime.js Utility Function for Reusable Animations
function animateElement(selector, props = {}, delay = 0) {
  anime({
    targets: selector,
    opacity: [0, 1],
    ...props,
    delay: delay,
    duration: 1000,
    easing: 'easeOutQuad'
  });
}
// Animate CTA buttons one after another
const ctaButtons = document.querySelectorAll('.animate-fadeInDelay');
ctaButtons.forEach((btn, i) => {
  animateElement(btn, { translateY: [-20, 0] }, 400 + i * 200);
});


// 🚀 Fire animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Header & Intro
  animateElement('.animate-fadeIn', { translateY: [-20, 0] }, 200);
  animateElement('.animate-fadeInDelay', { translateY: [-20, 0] }, 600);

  // About Section
  animateElement('.animate-slideIn', { translateX: [-50, 0] }, 400);

  // Skills Section
  animateElement('.animate-skills', { translateY: [-30, 0] }, 800);

  // Projects Section
  animateElement('.animate-projects', { translateY: [30, 0] }, 1000);

  // Experience Section (optional future section)
  animateElement('.animate-experience', { translateX: [-40, 0] }, 1200);

  // Testimonials or Blog (you can reuse this class for others too)
  animateElement('.animate-zoomIn', { scale: [0.9, 1] }, 1300);

  // Footer
  animateElement('.animate-footer', { scale: [0.9, 1] }, 1500);

  // 🎉 Toggle Fun Projects Section
  const toggleBtn = document.getElementById('toggleFunProjects');
  const funProjects = document.getElementById('funProjects');

  if (toggleBtn && funProjects) {
    toggleBtn.addEventListener('click', () => {
      if (funProjects.classList.contains('hidden')) {
        funProjects.classList.remove('hidden');
        toggleBtn.textContent = 'Hide Fun Projects 😟';
        anime({
          targets: '#funProjects',
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          easing: 'easeOutQuad'
        });
      } else {
        anime({
          targets: '#funProjects',
          opacity: [1, 0],
          translateY: [0, 20],
          duration: 400,
          easing: 'easeInQuad',
          complete: () => {
            funProjects.classList.add('hidden');
            toggleBtn.textContent = 'Show Fun Projects 🎉';
          }
        });
      }
    });
  }
});
