import React from 'react';

const FooterComponent = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <div>
      <footer style={footerStyle}>
        <span>All Rights Reserved</span>
      </footer>
    </div>
  );
};

export default FooterComponent;
