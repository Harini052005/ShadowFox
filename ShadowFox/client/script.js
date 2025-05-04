function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show-nav");
}


  const roles = [
    "Web Developer",
    "Frontend Developer",
    "UI Designer",
    "React Learner"
  ];

  let currentRole = 0;
  let currentChar = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const pauseTime = 1500;
  const element = document.getElementById("typewriter");

  function type() {
    const fullText = roles[currentRole];
    
    if (isDeleting) {
      currentChar--;
    } else {
      currentChar++;
    }

    element.textContent = fullText.substring(0, currentChar);

    if (!isDeleting && currentChar === fullText.length) {
      setTimeout(() => { isDeleting = true; type(); }, pauseTime);
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(type, typeSpeed);
    } else {
      setTimeout(type, isDeleting ? typeSpeed / 2 : typeSpeed);
    }
  }

  type(); // Start the typing effect

