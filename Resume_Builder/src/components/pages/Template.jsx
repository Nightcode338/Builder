import Footer from "../Hompage/Footer"
import Header from "../Hompage/Header"
import { resumeTemplates } from "../../utilities/constant"
import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



const Template = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = () => {
    if (currentIndex < 2) setCurrentIndex((s) => s + 1)
  } 
  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((s) => s - 1)
  } 

  const currentTemplate = resumeTemplates[currentIndex];
  return (
    <div>
      <Header />

      <div className=" pl-10 my-10 flex justify-between">

          <div className="flex flex-col justify-center max-w-[380px] gap-[30px] relative">
            <div className=" flex gap-2">
              <p className=" font-bold text-5xl text-[#B1B1B1]">{currentTemplate.id}</p>
              <p className=" font-bold text-5xl">{currentTemplate.name}</p>
            </div>
            <p className=" font-medium text-[20px]">{currentTemplate.description}</p>
            <div className=" flex gap-[10px]">
              <p className=" size-[65px] bg-[#2F635A]"></p>
              <p className=" size-[65px] bg-[#FECB00]"></p>
              <p className=" size-[65px] bg-[#F63C7C]"></p>
              
            </div>
            <button className="bg-[#8910F1] text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 mb-[15px]">
            Select this template
          </button>
          <p className=" text-[#6A6A6A] font-normal text-lg">
          You can always change your template later.
          </p>
          <img src={currentTemplate.Arrow} alt="" className={`${currentIndex === 2} && " mt-[-500px]"`} />
          </div>

          <div>
            <img src={currentTemplate.image} alt="" className=" relative mr-[-50px]" />
            <img src={currentTemplate.imageSrc} alt="" className=" absolute top-[50%] left-[40%]" />
            <button  onClick={handlePrevious} > 
                 <MdOutlineKeyboardArrowLeft  size={40} className=" bg-white shadow-lg rounded-full text-[#191919] absolute top-[80%] left-[38.5%]"/>
               </button>
            <button onClick={handleNext}> 
                 <MdOutlineKeyboardArrowRight  size={40} className=" bg-white shadow-lg rounded-full text-[#191919] absolute top-[80%] right-[26.5%]"/>
               </button>
          </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Template
