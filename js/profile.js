document.querySelectorAll('.profile-change_form').forEach(form => {
    const inputField = form.querySelector('input[type="password"]'); 
    const eyeClosed = form.querySelector('.toggle-password'); 
    const eyeOpen = form.querySelector('.eye-open'); 
  
    eyeClosed.addEventListener('click', () => {
      if (inputField.type === 'password') {
        inputField.type = 'text'; 
        inputField.classList.add('visible'); 
        eyeClosed.style.display = 'none'; 
        eyeOpen.style.display = 'block'; 
      }
    });
  
    eyeOpen.addEventListener('click', () => {
      if (inputField.type === 'text') {
        inputField.type = 'password'; 
        inputField.classList.remove('visible');
        eyeOpen.style.display = 'none'; 
        eyeClosed.style.display = 'block'; 
      }
    });
  });
  