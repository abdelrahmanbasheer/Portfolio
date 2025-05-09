'use client'
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import LowerHero from "@/components/LowerHero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";


export default function Home() {
  return (
    <>
    <meta name="google-site-verification" content="tBmy2RY2-rmOg_HxF874XCu8B9OwNB6uVvhITDbheFo" />
    <section>
    <main >
      <Navbar></Navbar>  
      <Hero></Hero>
    <LowerHero></LowerHero>
    <Experience></Experience>
    <div className="pt-4 border-t-2 border-white">
    <FeaturedPosts></FeaturedPosts>
    </div>
    <Footer></Footer>
    </main>
    </section>
    </>
  )
}
