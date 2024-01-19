import React from 'react';

const Wishes = [
  {
    id: 0,
    text: 'Viajar a Londres',
    completed: true,
  },
  {
    id: 1,
    text: 'Comprarme un coche',
    completed: false,
  },
  {
    id: 2,
    text: 'Ir al cine',
    completed: false,
  },
];

export default function App() {
  return (
    <div>
      <h1>My Wishlist</h1>
      <fieldset>
        <legend>New Wish:</legend>
        <input
          type="text"
          placeholder="My new Wish"
        />
      </fieldset>
      <ul>
        {Wishes.map((wish) => (
          <li key={wish.id}>
            <input
              type="checkbox"
              checked={wish.completed}
              id={wish.id}
            />
            {/* palabra reservada for --> htmlFor */}
            <label htmlFor={wish.id}>{wish.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
