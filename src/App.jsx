
import Navbar from './Components/Navbar'
import './App.css'
import AmountSection from './Components/AmountSection'
import RetirementSection from './Components/RetirementSection'
function App() {
 

  return (
   <main className='p-0 flex flex-col sm:flex-row sm:w-[100vw] '>
    <Navbar/>
    <AmountSection/>
    <RetirementSection/>
   </main>
   
  )
}

export default App
