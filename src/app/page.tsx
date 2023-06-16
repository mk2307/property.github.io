import { ContactUs } from "@/components/ContactUs";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Events />
      <ContactUs />
      <Footer />
    </main>
  );
}
