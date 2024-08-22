import  { useState, useRef } from 'react';
import log_img from '../../assets/authentication.svg';
import { useParams } from 'react-router-dom';

export default function OTP() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  let { userId } = useParams();
  
  const inputRefs = useRef([]);

  const handleChange = (event, index) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const verifydata = { email: userId, otp: otp.join('') };
    console.log('Verifying:', verifydata);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[url('https://pagedone.io/asset/uploads/1691055810.png')]  bg-center bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[350px] sm:max-w-[800px] rounded-2xl">
        <div className="w-full h-[350px] hidden md:block">
          <img className="w-full h-[100%]" src={log_img} alt="OTP" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <h2 className="text-4xl font-medium poppins-medium text-center mb-4 mr-4">
            Enter Your <span className="text-blue-500">OTP</span>
          </h2>
          <p className="justify-center items-center mb-4">
            Enter the OTP which is sent to your registered email address to verify your identity and continue.
          </p>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-[27rem]">
              {otp.map((digit, index) => (
                <div key={index} className="w-12 h-14">
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-full h-full flex flex-col items-center justify-center text-center px-4 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-blue-500   "
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <button
              onClick={handleVerify}
              className="flex flex-row items-center justify-center text-center w-full border rounded-3xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg font-semibold"
            >
              <p>Verify Account</p>
            </button>
          </div>
          <div className="mt-5">
            <button
              className="flex flex-row items-center justify-center text-center w-full border rounded-3xl py-3 bg-white border-black text-black shadow-sm text-base font-semibold"
            >
              <p>Resend OTP</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



