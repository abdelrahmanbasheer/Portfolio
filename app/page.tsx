'use client'
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import LowerHero from "@/components/LowerHero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section>
    <main className="mb-20 h-[60vh] md:h-[120vh] xl:h-[90vh]">
      <Navbar></Navbar>  
      <Hero></Hero>

    </main>
    <div className="h-[50vh]">
<LowerHero></LowerHero>
</div>
    <div className="pt-4 border-t-2 border-gray-500">
    <FeaturedPosts></FeaturedPosts>
    </div>
    <Footer></Footer>
    </section>
  )
}
