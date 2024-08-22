import { Link } from "react-router-dom"
import reg_img from "../../assets/register.svg"
import  { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log(email, password, username, phonenumber);

  };
  return (
    <main className="w-full min-h-[110vh] flex bg-[url('https://pagedone.io/asset/uploads/1691055810.png')]  bg-cover">
    <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[620px] sm:max-w-[900px] rounded-2xl  shadow-xl">
      <div className="w-full h-[450px] hidden md:block">
        <img
          className="w-full mt-[130px] ml-2 h-[380px]"
          src={reg_img}
          alt="Register illustration"
        />
      </div>
      <div className="p-4 flex flex-col justify-around">
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl font-medium text-center mb-8 mr-14 ">
            Create <span className="text-blue-600">Account</span>
          </h2>
          <div className="mt-3">
            <label htmlFor="username" className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">
              Enter Username
            </label>
            <input
              id="username"
              className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500  mt-3 dark:border-slate-600"
              type="text"
              placeholder="e.g. John Doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">
              Email Address
            </label>
            <input
              id="email"
              className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500  mt-3 dark:border-slate-600"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="phonenumber" className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">
              Phone Number
            </label>
            <input
              id="phonenumber"
              className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500  mt-3 dark:border-slate-600"
              type="tel"
              placeholder="+91 9876543210"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">
              Enter Password
            </label>
            <input
              id="password"
              className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500  mt-3 dark:border-slate-600 "
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
           
            type="submit"
            className="ml-[60px] mt-6 w-[220px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-cyan-700 to-cyan-500 text-white text-lg font-semibold "
          >
             Register
          </button>
          <div className="mt-4 flex ml-[55px]">
            <p className="font-medium text-base dark:text-slate-300">Already have an account?</p>
            <Link to="/login">
              <button className="text-blue-500 text-base font-normal ml-2">
                Login
              </button>
            </Link>
          </div>
        </form>

      </div>
    </div>
  </main>
  )
}
