import {useState} from "react";

const Newsletter= () => {
      const[email,setEmail]=useState("");
  return(
    <section>
      <form className="flex items-center">
        <label >Newsletter</label>
            <input type="email" 
            placeholder="Enter Your Email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} className="border p-2 rounded-l-md flex-1"/>
       
      </form>
        <button  className="flex justify-right items-right m-auto mt-0"   onClick={() => alert(email)} className1="bg-blue-500 text-white p-2 rounded-r-md">OK</button>
  
    </section>
    );
};

export default Newsletter;