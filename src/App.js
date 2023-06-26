import React, { useState } from 'react';
import { backgroundColor } from './colors';
import './styles.css';
import Button from './Button';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleButtonClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <h1>What is your field of interest?</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', padding: '5vh 5vh 0 5vh ' }}>
              <Button onClick={handleButtonClick}>💻 Technology</Button>
              <Button onClick={handleButtonClick}>🔬 Research</Button>
              <Button onClick={handleButtonClick}>🚑 Healthcare</Button>
              <Button onClick={handleButtonClick}>📈 Finance</Button>
              <Button onClick={handleButtonClick}>🚴‍♂️ Sports</Button>
              <Button onClick={handleButtonClick}>Others</Button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h1>What is your preferred programming language?</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', padding: '5vh 5vh 0 5vh ' }}>
              <Button onClick={handleButtonClick}>JavaScript</Button>
              <Button onClick={handleButtonClick}>Python</Button>
              <Button onClick={handleButtonClick}>Java</Button>
              <Button onClick={handleButtonClick}>C++</Button>
              <Button onClick={handleButtonClick}>C#</Button>
              <Button onClick={handleButtonClick}>Other</Button>
            </div>
          </>
        );
      // Add more cases for additional pages/questions

      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100vh', height: '60vh', background: '#ffffff', borderRadius: '10px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        {renderPageContent()}
      </div>
    </div>
  );
};

export default MainPage;
