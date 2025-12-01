import './App.css'
import About from './components/About'
import Exchanges from './components/Exchanges'
import Nav from './components/Nav'
import Header from './components/Header'
import Hero from './components/Hero'
import Tokenomics from "./components/Tokenomics"
import HowToBuy from './components/HowToBuy'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <Homepage /> */}
      <Header>
        <Nav />
      </Header>
      <Hero />
      <div className="bg-[#e4e0e1]">
        <About />
        <Exchanges />
        <div className="max-w-340 mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
              <img src="/collection/10.png" width="300" height="300" alt="dui-5" />
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <Tokenomics />
        <div className="max-w-340 mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
              <img src="/collection/11.png" width="300" height="300" alt="dui-7" />
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <HowToBuy />
        <div className="text-center">
          <div className="flex justify-center">
            <img className="hidden md:block" src="/collection/12.png" width="300" height="300" alt="dui-6" />
            <img src="/collection/13.png" width="300" height="300" alt="dui-8" />
          </div>
          <div className="mt-5">
            <p className="font-stopbuck text-2xl text-black">Woof! Woof!</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
