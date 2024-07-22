import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const [isLoginPopup, setIsLoginPopup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Perform login logic here
  };

  const handleClose = () => {
    setIsLoginPopup(false);
    // navigate('/');
  };

  return (
    <div>
      <button onClick={() => setIsLoginPopup(true)} className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
        Login
      </button>

      {isLoginPopup && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button type="button" onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type='email'
                  placeholder='Enter Your Email'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type='password'
                  placeholder='Enter Your Password'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className='text-sm text-red-500 '>This field is required</span>}
              </div>
              <div className="flex justify-around mt-6">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
                <p>
                  Not Registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>SignUp</Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Login;



// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = (data) => console.log(data);

//   const handleClose = () => {
//     navigate('/');
//   };

//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box dark:bg-slate-900 dark:text-white">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <button type="button" onClick={navigate('/')} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//             <h3 className="font-bold text-lg">Login</h3>
//             {/*Email */}
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type='email'
//                 placeholder='Enter Your Email'
//                 className='w-80 px-3 py-1 border rounded-md outline-none'
//                 {...register("email", { required: true })}
//               />
//               <br />
//               {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
//             </div>
//             {/* Password */}
//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input
//                 type='password'
//                 placeholder='Enter Your Password'
//                 className='w-80 px-3 py-1 border rounded-md outline-none'
//                 {...register("password", { required: true })}
//               />
//               <br />
//               {errors.password && <span className='text-sm text-red-500 '>This field is required</span>}
//             </div>
//             {/* Button */}
//             <div className="flex justify-around mt-6">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 Login
//               </button>
//               <p>
//                 Not Registered? <Link to='/signup'
//                   className='underline text-blue-500 cursor-pointer'>SignUp</Link >
//               </p>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   )
// }

// export default Login;
