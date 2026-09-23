const statusButton = document.querySelector('#status-button');
const statusMessage = document.querySelector('#status-message');

statusButton.addEventListener('click', () => {
  statusMessage.textContent = 'All systems are ready.';
});