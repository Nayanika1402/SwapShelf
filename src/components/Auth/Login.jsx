import { Link} from "react-router-dom"
import log_img from "../../assets/login.svg"

export default function Login() {
  return (
    <div>
      <main className="w-full min-h-[110vh] flex  bg-[url('https://pagedone.io/asset/uploads/1691055810.png')]  bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[450px] sm:max-w-[800px] rounded-2xl shadow-xl">
        <div className="w-full h-[300px] hidden md:block">
          <img className="mt-12" src={log_img} alt="Login illustration" />
        </div>
        <div className="p-5 flex flex-col justify-around">
          <form>
            <h1 className="text-4xl ml-[40px] font-medium mb-8 ">
              Welcome <span className="text-blue-600">Back!</span>
            </h1>
            <div>
              <label htmlFor="email" className="poppins-medium ml-1 text-slate-600 ">
                Email Address
              </label>
              <input
                id="email"
                className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 mt-3 dark:border-slate-600"
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="poppins-medium ml-1 text-slate-600 dark:text-slate-300">
                Enter Password
              </label>
              <input
                id="password"
                className="border border-black px-3 py-2 w-[350px] rounded-2xl bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500 mt-3 dark:border-slate-600"
                type="password"
                placeholder="Your Password"
                required
              />
            </div>
            <div className="ml-56 mt-3">
              <button className="font-normal text-base text-blue-500">
                <Link to='/forgot-password'>Forgot Password?</Link>
              </button>
            </div>
            <button
              type="submit"
              className="ml-[75px] mt-4 w-[200px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-gradient-to-r from-cyan-700 to-cyan-500 text-white text-lg font-semibold "
            > Log In
              
            </button>
            <div className="mt-6 flex ml-[60px]">
              <p className="font-medium text-base dark:text-slate-300">Do not have an Account?</p>
              <Link to="/register">
                <button className="text-blue-500 text-base font-normal ml-2">
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
    </div>
  )
}
