import React from 'react';

const KnowledgeCenter = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Coming Soon</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#1a1a1a', // Dark background (optional)
  },
  text: {
    color: '#fff', // White text
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default KnowledgeCenter;
