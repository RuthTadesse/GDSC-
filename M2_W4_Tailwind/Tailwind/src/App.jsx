import './index.css'
import dog from './assets/download.jpg';
import pow from './assets/pow.jpg'
export default function App() { 
  return (
    <>
    <div class=" text-3xl font-bold underline animate-bounce"> Cats</div>
   <div class="flex justify-between"> <img className="ear-image" src={dog} alt="My Image" />
   <div class="bg-red-200 animate-bounce w-16 h-16 rounded-full mr-20">
  <img class="w-16 h-16 rounded-full" src={pow} alt="My Image" />
</div></div>
   <br /> 
    <br />
   <div  class="flex space-x-4">
    
   <div class="bg-yellow-200  animate-bounce duration-500">Cats are celebrated for their extraordinary hearing acumen. Their auditory prowess exceeds that of humans, allowing them to perceive sounds at frequencies significantly higher than our range.</div>
   
   </div>
   <br />
   <br />
   <div  class="flex space-x-4">
    
   
   
   </div>
   </>
  )
}
