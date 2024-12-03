import './App.css';

// export const App = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="./logo192.png" className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>&copy; {currentYear}</p>
//       </header>
//     </div>
//   );
// };

import React from 'react';
export const App = () => {
  const currentYear = new Date().getFullYear();
  return React.createElement(
    'div',
    { className: 'App' },
    null,
    React.createElement(
      'header',
      { className: 'App-header' },
      null,
      React.createElement('img', {
        src: './logo192.png',
        alt: 'logo',
        className: 'App-logo',
      }),
      React.createElement('p', null, 'Edit src/App.js and save to reload.'),
      React.createElement(
        'span',
        { className: 'App-link' },
        null,
        React.createElement('a', { href: 'https://reactjs.org' }, 'Learn React'),
      ),
      React.createElement('p', null, `${currentYear}`),
    ),
  );
};
