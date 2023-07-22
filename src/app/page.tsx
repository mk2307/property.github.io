import { ContactUs } from "@/components/ContactUs";
import { Events } from "@/components/Events";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen desktop:min-h-max flex-col items-center justify-between">
      <Hero />
      <Events />
      {/* <ContactUs /> */}
    </main>
  );
}
