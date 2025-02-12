import React from "react";
import { PhoneCall } from "lucide-react";

function Contact() {
  return (
    <div className="p-10">
      <div className=" flex p-5  items-center justify-center border-2 rounded-2xl  shadow-lg shadow-blue-500/50 ">
        <div className="p-5 gap-5">
          <h1 className="text-3xl font-serif text-blue-600">
            React Out and Say Helloooooo !
          </h1>
          <h1 className="text-xl text-fuchsia-200">
            Get in touch through the form and we are eagerly waiting to hear you
            :)
          </h1>
          <h1 className="flex">
            <PhoneCall /> +91-8769977899
          </h1>
        </div>
        <div>
          <img
            className="h-[150px] w- rounded-xl"
            src="src/assets/Actors/babu bhaiya.gif"
            alt="loading...."
          />
        </div>
      </div>

      <div className="flex-col items-center justify-center my-10 border-2 p-3 rounded-2xl shadow-lg shadow-blue-500/50">
        <h1 className="text-center my-10 font-bold text-xl">Write Your Query Here and We Will Contact You Soon...</h1>
        <div className="flex flex-col gap-10 ">
          <div className="flex gap-10 items-center justify-center">
          <label>Email: </label>
          <input  className='p-3 bg-[#ffffff2b]  rounded-2xl w-[70%] outline-none 'type="email" placeholder="Enter Your Email Id"></input>
          </div>
          <div className="flex gap-10 items-center justify-center">
          <label>Query: </label>
          <textarea className='p-3 bg-[#ffffff2b]  rounded-2xl w-[70%] outline-none'id="review" name="review" rows="4" cols="50" placeholder="Enter Your Query Here"></textarea>
          </div>
          <button type="submit" className="bg-[blue] w-[80px] mx-auto p-1 rounded-2xl px-2 shadow-2xs shadow-blue-500/50"> Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
