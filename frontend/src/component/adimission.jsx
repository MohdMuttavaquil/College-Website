import { useForm } from "react-hook-form"
import { useState } from "react"
import axios from "axios"

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const [show, setshow] = useState(true)
  
const onSubmit = (data) => {
    let fullname = data.fullname;
    let fathername = data.fathername;
    let phoneno = data.phoneno;
    let dateofberth = data.dateofberth;
    let classname = data.class;
    console.log(fullname, fathername, phoneno, dateofberth, classname)

   /* axios.post("/dmic/adimission", { fullname, fathername, phoneno, dateofberth, classname })
      .then(res => console.log(res.data))*/
      setTimeout(() => {
       setshow(false)
      }, 1000);
    }

  


  return (
      <>

        <div className={show ? `sm:w-[25rem] bg-gray-500 sm:my-10 shadow-2xl shadow-gray-500 sm:rounded-3xl text-white mx-auto` : `hidden`}><div />
          <h1 className="pt-8 text-2xl font-bold text-center">Ragistration For Adimission</h1>
          <form className="pt-4" onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label>
                <div className="px-8 mt-2 text-xl">Student Name</div>
                <input className=" w-[80%] focus:outline-0 bg-gray-500 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 text-white " placeholder="Full Name" type="text" {...register("fullname", { required: true })} />
                {errors.fullname && <div className="px-8 text-red-600">This field is required</div>}
              </label>
            </div>

            <div>
              <label>
                <div className="px-8 text-xl my-1 ">Fathert Name</div>
                <input className=" w-[80%] focus:outline-0 bg-gray-500 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 text-white " placeholder="Father Name" type="text" {...register("fathername", { required: true })} />
                {errors.fathername && <div className="px-8 text-red-600">This field is required</div>}
              </label>
            </div>

            <div>
              <label>
                <div className="px-8 text-xl mt-2 ">Phone No</div>
                <input className=" w-[80%] focus:outline-0 bg-gray-500 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 text-white " placeholder="Phone No" type="text" {...register("phoneno", { required: true })} />
                {errors.pnoneno && <div className="px-8 text-red-600">This field is required</div>}
              </label>
            </div>

            <div>
              <label>
                <div className="px-8 text-xl mt-2 ">Date Of Berth</div>
                <input className=" w-[80%] focus:outline-0 bg-gray-500 text-xl rounded-xl border-b-2 pb-2 border-b-white ml-8 text-white " placeholder="Date Of Berth" type="date" {...register("dateofberth", { required: true })} />
                {errors.dateofberth && <div className="px-8 text-red-600">This field is required</div>}
              </label>
            </div>

            <div>
              <label>
                <div className="px-8 text-xl mt-2 ">Class</div>
                <select className="px-8 mt-2 bg-gray-500 focus:outline-0 text-xl" {...register("class", { required: true })}>
                  <option value="LKG">LKG</option>
                  <option value="9th">9th</option>
                  <option value="11th">11th</option>
                </select>=
              </label>
            </div>

            <input disabled={isSubmitting} className="px-2 py-1 my-2 mb-8 mx-[10rem] font-bold rounded-lg text-white border-1 border-white" type="submit" value="Submit"/>
          </form>
        </div>

        {//msg after ragistration complet
        }

        <div className={show ? `hidden` : `bg-gray-100 h-[26rem] w-[25rem] flex flex-col items-center sm:my-10 shadow-2xl shadow-gray-100 sm:rounded-3xl mx-auto`}>
          <div className="mt-16"> <img src="./photos/right.png" className="h-[12rem]"></img></div>
          <div className="text-2xl text-center mt-5">Your ragistration is complet</div>
          <div className="text-2xl text-center">For more query you can contact us </div>
        </div>

        </>
)
}