import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <br />
        <p>
          <strong>Skontaktuj się z nami:</strong>
        </p>
        <br />
        <p>333 444 555</p>
        <br />
        <p>homeplus@gmail.com</p>
      </div>

      <div className="private">
        <br />
        <br />
        <br />
        <a href="#">Polityka prywatności</a>
      </div>
      <div className="info">
        <p>
          <br />
          Co znajdziesz na tej stronie:
          <br />
          Biuro Nieruchomości,
          <br />
          Kupno Nieruchomości,
          <br />
          Sprzedaż Nieruchomości
          <br />
          Wynajem Nieruchomości
        </p>
      </div>
    </footer>
  );
};
