'use client'
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import LowerHero from "@/components/LowerHero";

export default function Home() {
  return (
    <section>
    <main className="mb-20 h-[100vh]">
      <Navbar></Navbar>  
      <Hero></Hero>

    </main>
    <div className="h-[50vh]">
<LowerHero></LowerHero>
</div>
    <div className="pt-4 border-t-2 border-gray-500">
    <FeaturedPosts></FeaturedPosts>
    </div>
    </section>
  )
}
