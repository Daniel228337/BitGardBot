document.getElementById('copy-btn').addEventListener('click', () => {
    const input = document.getElementById('partner-link');
    input.select();
    input.setSelectionRange(0, 99999);
  
    document.execCommand('copy');
    alert('Ссылка скопирована!');
  });
  