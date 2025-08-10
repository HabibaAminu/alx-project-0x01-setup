import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Header Component</h1>
      {/* Additional header content can go here */}
      <nav>
        <ul>
          <li><link href="/">Home</link></li>
          <li><link href="/posts">Posts</link></li>
          <li><link href="/users">Users</link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;