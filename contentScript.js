import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const ConnectButton = () => {
  const handleClick = () => {
    connectWithAll();
  };

  return (
    <button
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#0073b1',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        zIndex: 9999
      }}
      onClick={handleClick}
    >
      Connect with All
    </button>
  );
};

// Function to automate clicking Connect buttons
const connectWithAll = () => {
  const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');

  if (connectButtons.length === 0) {
    alert('No connectable profiles found.');
    return;
  }

  let index = 0;

  const clickButton = () => {
    if (index < connectButtons.length) {
      connectButtons[index].click();
      index++;
      setTimeout(clickButton, Math.random() * (3000 - 1000) + 1000); // 1-3 seconds delay
    } else {
      alert('All connection requests have been sent.');
    }
  };

  clickButton();
};

// Inject the button into the LinkedIn page
const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<ConnectButton />, root);
