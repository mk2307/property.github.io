import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <section className="home" id="home">
        <div className="home-content">
          <h1>Witaj w naszym biurze</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsum, rem ad sequi ab accusantium neque
            nemo animi hic voluptate reprehenderit earum recusandae quos officiis dolorem nostrum quidem illo quia.
          </p>

          <div className="btn-box">
            <a href="#">KUP</a>
            <a href="sprzedaj.html">SPRZEDAJ</a>
            <a href="#">WYNAJMIJ</a>
          </div>
        </div>

        <div className="home-sci">
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-tiktok"></i>
          </a>
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </main>
  );
}
