import React from 'react'

const Program = () => {
  return (
    <>

      <div className="galry">
        <img src={'photos/college.png'} className='h-[28rem] w-full mx-auto'></img>
      </div>

      <div className='w-[80%] mx-auto my-10 '>

        <div className=''>
          <div className='md:text-[2rem] mt-10 font-bold'>Durga Modren Inter College </div>
          <div className='my-6 w-[80vw] mx-auto md:pr-20 text-[.6rem] md:text-[1rem]'>DMIC At we offer a well-rounded CBSE education from LKG to 12th, with dedicated streams
            in Science, Commerce, and Arts. Our campus features smart classrooms, fully-equipped science
            and computer s, commerce and art studios, a library, and large playgrounds for sports
            and physical activities. With experienced teachers and a focus on both academics and life
            skills, we help every student grow into a confident, future-ready individual.</div>
        </div>

        <div>
          <div className='image flex-col my-10'>
            <div className='mt-16 h-[22rem] bg-gray-200 rounded-lg'>
              <div className='text-2xl my-4 font-medium font-serif px-6'>Chemistry </div>
              <img src="photos/chemistry.avif" className='card1 h-[20rem] w-full rounded-lg'></img>
            </div>
            <div  className='mt-16 h-[22rem] bg-gray-200 rounded-lg '>
            <div className='text-2xl my-4 font-medium font-serif px-6'>Physics </div>
              <img src="photos/physics.avif" className='card1 h-[20rem] w-full rounded-lg'></img>
            </div>
            <div className='mt-16 h-[22rem] bg-gray-200 rounded-lg '>
            <div className='text-2xl my-4 font-medium font-serif px-6'>Computer </div>
              <img src="photos/computer.jpg" className='card1 h-[20rem] w-full rounded-lg'></img>
            </div>
            <div className='mt-16 h-[22rem] bg-gray-200 rounded-lg'>
              <div className='text-2xl my-4 font-medium font-serif px-6'>NSS and NCC </div>
              <img src="photos/nss.jpg" className='card1 h-[20rem] w-full rounded-lg'></img>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Program
