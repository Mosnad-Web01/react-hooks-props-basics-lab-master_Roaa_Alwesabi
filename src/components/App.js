// src/components/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import NavBar from './NavBar';
import user from '../data/user';
import blogPosts from '../data/blog'; // فرضاً لديك ملف يحتوي على مقالات المدونة

function App() {
  return (
    <div>
      <NavBar />
      <Header name={user.name} />
      <About 
        image={user.links.github} 
        about={user.bio} 
      />
      <ArticleList articles={blogPosts} />
    </div>
  );
}

export default App;
