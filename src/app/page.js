import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/About"
import SocialBar from "./components/Socialbar"
import Image from "next/image"
import './page.css'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="always-there">
        <SocialBar />
        <section className="content">
          <About />
        </section>
        <div className="email-container">
          <a href="mailto:alyciacan.swe@gmail.com" className='email-vert'>alyciacan.swe@gmail.com</a>
          <div className="relative h-56 w-5">
              <Image src="/line.png" fill={true} alt="line"/>
          </div>
        </div>
      </div>

    </main>
  )
}
