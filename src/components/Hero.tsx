import React from "react";

export const Hero = () => {
    return <section className="bg-cover bg-center flex items-center w-full bg-hero-pattern bg-no-repeat h-screen p-4" id="home">
        <div>
            <h1 className="text-center font-bold text-5xl">Witaj w naszym biurze</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsum, rem ad sequi ab accusantium neque
                nemo animi hic voluptate reprehenderit earum recusandae quos officiis dolorem nostrum quidem illo quia.
            </p>

            <div className="btn-box flex flex-col gap-2 text-base items-center">
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
}