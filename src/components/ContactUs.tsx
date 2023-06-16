export const ContactUs = () => {
  return (
    <section className="kontakt" id="kontakt">
      <h2 className="heading">Kontakt</h2>

      <form action="#">
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Imię Nazwisko" required />

            <span className="focus"></span>
          </div>

          <div className="input-field">
            <input type="number" placeholder="Numer telefonu" required />

            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea name="" id="" cols={30} rows={10} placeholder="Wiadomość"></textarea>

          <span className="focus"></span>
        </div>

        <div className="btn-box ">
          <button type="submit" className="btn">
            wyślij
          </button>
        </div>
      </form>
    </section>
  );
};
