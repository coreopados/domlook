import React from 'react';
import './ErrorPage.scss';

export const ErrorPage = () => (
  <main className="error-main">
    <div className="error-main__overlay" />
    <section className="error">
      <div className="container">
        <div className="error__wrapper">
          <div className="error__404">
            <span className="error__3d-symbol">4</span>
            <span className="error__3d-symbol">0</span>
            <span className="error__3d-symbol">4</span>
            <span className="error__3d-symbol">!</span>
          </div>
          <div className="error__message-wrapper">
            <p className="error__message">
              Похоже, вы выбрали неправильный путь.
            </p>
            <p className="error__message">
              Не волнуйтесь, время от времени, это случается с каждым из нас.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);
