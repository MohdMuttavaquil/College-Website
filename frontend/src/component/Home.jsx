import React from 'react'
import { useState, useEffect} from 'react'
import { Link } from 'react-router'

const Home = () => {

  const [url, seturl] = useState("photos/third.jpg")

  useEffect(() => {
    call()
  }, [])


  const chengeimg = async (a) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(seturl(a))
      }, 3000)
    })
  }

  const call = async () => {
    console.log("call is runing")

    await chengeimg("photos/first.jpg")
    await chengeimg("photos/first.jpg")
    await chengeimg("photos/topper.jpg")
    await chengeimg("photos/event3.jpg")
    await chengeimg("photos/event5.jpg")
  }

  return (
    <>

      <div className="galry">
        <img src={url} className='sm:h-screen w-full h-[65vh]'></img>
      </div>

      <div className=' container w-[80%] mx-auto'>

         <div className="about sm:hidden py-12 gap-6">
          <div>
            <div className='md:text-[2rem] font-bold'>ABOUT</div>
              <div className='font-bold md:text-[2rem] my-2'>Durga Modren Inter College</div>
              <div className='college-photo flex gap-10'>
          <div className='md:text-[1rem] text-[.6rem] mt-10'>
             DMIC At we offer a well-rounded CBSE education from LKG to 12th, with dedicated streams
            in Science, Commerce, and Arts. Our campus features smart classrooms, fully-equipped science
            and computer labs, commerce and art studios, a library, and large playgrounds for sports
            and physical activities. With experienced teachers and a focus on both academics and life
            skills, we help every student grow into a confident, future-ready individual.
            </div>
            </div>
            <div className='mt-10'>
            <Link className="border border-black px-2 py-1 text-xl rounded-lg hover:text-white cursor-pointer hover:bg-slate-900 " to="/program">Read More</Link>
            </div>
            
          </div>
        </div>

        <div className="topper flex justify-center gap-4 py-16">

          <div className=' card1 flex-col w-[14.8rem] bg-gray-200 pb-4 text-center '>
            <img className='md:h-[18rem] h-[10rem] rounded-lg' src='./photos/rihan.jpg'></img>
            <div className='bg-[#812972] h-14 text-center text-white text-xl'>10th Topper<br></br> 95.4%</div>
            <p className='pt-3.5 md:text-[1rem] text-[.6rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

          <div className=' card2 flex-col w-[14.8rem] bg-gray-200 pb-4 text-center'>
            <img className='md:h-[18rem] h-[10rem] rounded-lg' src='./photos/afseen.jpg'></img>
            <div className='bg-[#812972] h-14 text-center text-white text-xl'>10th Topper <br></br> 95.4%</div>
            <p className='pt-3.5 md:text-[1rem] text-[.6rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

          <div className='card3 flex-col w-[14.8rem] bg-gray-200 pb-4 text-center'>
            <img className="md:h-[18rem] h-[10rem] rounded-lg" src='./photos/arman.jpg'></img>
            <div className='bg-[#812972] h-14 text-center text-white text-xl'>10th Topper <br></br> 95.4%</div>
            <p className='pt-3.5 md:text-[1rem] text-[.6rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className='card4 flex-col w-[14.8rem] bg-gray-200 pb-4 text-center'>
            <img className="md:h-[18rem] h-[10rem] rounded-lg" src='./photos/sachin.jpg'></img>
            <div className='bg-[#812972] h-14 text-center text-white text-xl'>10th Topper <br></br> 95.4%</div>
            <p className='pt-3.5 md:text-[1rem] text-[.6rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

        </div>

        <div className="about hidden sm:flex py-12 gap-6">
          <div>
            <div className='md:text-[2rem] font-bold'>ABOUT</div>
              <div className='font-bold md:text-[2rem] my-2'>Durga Modren Inter College</div>
              <div className='college-photo flex gap-10'>
          <div className='md:text-[1rem] text-[.6rem] mt-10'>
             DMIC At we offer a well-rounded CBSE education from LKG to 12th, with dedicated streams
            in Science, Commerce, and Arts. Our campus features smart classrooms, fully-equipped science
            and computer labs, commerce and art studios, a library, and large playgrounds for sports
            and physical activities. With experienced teachers and a focus on both academics and life
            skills, we help every student grow into a confident, future-ready individual.
            </div>
            <img src="./photos/college.png" className='h-[20rem] rounded-4xl'></img>
            </div>
            <div className='mt-10'>
            <Link className="border border-black px-2 py-1 text-xl rounded-lg hover:text-white cursor-pointer hover:bg-slate-900 " to="/program">Read More</Link>
            </div>
            
          </div>
        </div>

        <div className="card1 w-full py-3 pl-2 sm:w-[80%] my-10 bg-[#812972] flex mx-auto items-center md:gap-8 text-white" >
          <img src="photos/logo.jpg" className='md:h-44 h-24 w-[60%] hidden sm:flex rounded-lg px-2'></img>

          <div className='flex-col'>
            <div className='font-bold text-white md:text-[2rem] text-[1rem] sm:mb-4 mb-1'>Our messege to society</div>
            <div className='md:mr-8 md:text-[1rem] text-[.6rem]'>Education is the key to a better future. It gives us
              knowledge, confidence, and the power to achieve our dreams.
              Education helps fight poverty, builds character, and teaches
              us to respect others. It shapes our lives and our world.
              Let's value and promote education for a brighter tomorrow. </div>
          </div>
        </div>

        <div className='event&News py-8 gap-4 flex justify-center'>
          <div className="event w-[40%]">
            <p className='text-2xl font-bold text-[#812972] mb-4'>EVENT</p>

            <div className='border-2 border-black h-[20rem] w-full overflow-y-scroll'>
              <div className='flex'>
              <div className="date md:text-[1rem] text-[.75rem]">2 April 2025 </div>
              <div className='hover:text-[#812972] ml-3 mt-2 w-[23rem] md:text-[1rem] text-[.6rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className='flex'>
              <div className="date md:text-[1rem] text-[.75rem]">2 April 2025 </div>
              <div className='hover:text-[#812972] ml-3 mt-2 w-[23rem] md:text-[1rem] text-[.6rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className='flex'>
              <div className="date md:text-[1rem] text-[.75rem]">2 April 2025 </div>
              <div className='hover:text-[#812972] ml-3 mt-2 w-[23rem] md:text-[1rem] text-[.6rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className='flex'>
              <div className="date md:text-[1rem] text-[.75rem]">2 April 2025 </div>
              <div className='hover:text-[#812972] ml-3 mt-2 w-[23rem] md:text-[1rem] text-[.6rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
            </div>
          </div>

          <div className="news w-[40%]">
            <p className='text-2xl font-bold text-[#812972] mb-4'>NEWS</p>
            <div className='border-2 border-black h-[20rem] w-full overflow-y-scroll'>
              <div className='flex'>
              <div className="date md:text-[1rem] text-[.75rem]">2 April 2025 </div>
              <div className='hover:text-[#812972] ml-3 mt-2 w-[23rem] md:text-[1rem] text-[.6rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className='flex'>
              <div className="date md:text-[1rem] text-[.75rem]">2 April 2025 </div>
              <div className='hover:text-[#812972] ml-3 mt-2 w-[23rem] md:text-[1rem] text-[.6rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className='flex'>
              <div className="date md:text-[1rem] text-[.75rem]">2 April 2025 </div>
              <div className='hover:text-[#812972] ml-3 mt-2 w-[23rem] md:text-[1rem] text-[.6rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
              <div className='flex'>
              <div className="date md:text-[1rem] text-[.75rem]">2 April 2025 </div>
              <div className='hover:text-[#812972] ml-3 mt-2 w-[23rem] md:text-[1rem] text-[.6rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Home
