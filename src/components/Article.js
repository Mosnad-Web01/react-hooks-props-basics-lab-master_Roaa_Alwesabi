// src/components/Article.js
import React from 'react';

function calculateReadingTime(minutes) {
  const coffeeEmoji = '☕️';
  const bentoBoxEmoji = '🍱';
  let emojis = '';

  if (minutes < 30) {
    emojis = coffeeEmoji.repeat(Math.ceil(minutes / 5));
    return `${emojis} ${minutes} min read`;
  } else {
    emojis = bentoBoxEmoji.repeat(Math.ceil(minutes / 10));
    return `${emojis} ${minutes} min read`;
  }
}

function Article({ title, date = "January 1, 1970", preview }) {
  const readingTime = calculateReadingTime(5); // يمكنك تعديل هذا بناءً على الوقت الفعلي للقراءة

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{readingTime}</p>
    </article>
  );
}

export default Article;
