import Header from "../Hompage/Header"
import Hero from "../Hompage/Hero"
import Feature from "../Hompage/Feature"
import About from "../Hompage/About"


const Home = () => {
  return (
    <div>
        <div className=" sticky top-0 z-10">
        <Header/>
        </div>
        <div>
        <Hero/>
        <Feature />
        <About />
        </div>
      
    </div>
  )
}

export default Home
