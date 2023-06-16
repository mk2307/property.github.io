import React from "react";

export const Events = () => {
    return (
      <section className="events" id="events">
        <div className="title">
          <h2>W czym możemy pomóc</h2>
          <div className="line"></div>
        </div>
        <div className="row">
          <div className="col">
            <img src="img/sprzedazedit.jpg" alt="zdjecie" />
          </div>

          <div className="col">
            <img src="img/zakupedit.jpg" alt="zdjecie" />
          </div>

          <div className="col">
            <img src="img/wynajemedit.jpg" alt="zdjecie" />
          </div>
        </div>

        <div className="raw">
          <div className="col">
            <img src="img/wycenaedit.jpg" alt="zdjecie" />
          </div>

          <div className="col">
            <img src="img/finansowanieedit.jpg" alt="zdjecie" />
          </div>

          <div className="col">
            <img src="img/zarzadanieedit.jpg" alt="zdjecie" />
          </div>
        </div>
      </section>
    );
};