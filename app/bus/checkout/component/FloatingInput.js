import React from 'react'

const FloatingInput = () => {
  return (
    <>
        
<form class="font-sans text-sm rounded w-full max-w-xs mx-auto my-8 px-8 pt-8 pb-8">
  <h3 class="mb-4 font-normal text-green">Enter something in the form:</h3>
      <div class="relative border rounded mb-4 shadow appearance-none label-floating">
        <input class="w-full py-2 px-3 text-green-darker leading-normal rounded" id="username" type="text" placeholder="Username"/>
        <label class="absolute block text-green-darker pin-t pin-l w-full px-3 py-2 leading-normal" for="username">
          Username
        </label>
      </div>
      <div class="relative border rounded mb-4 shadow appearance-none ">
        <input class="w-full py-2 px-3 text-green-darker leading-normal rounded" id="password" type="password" placeholder="Password"/>
        <label class="absolute block text-green-darker pin-t pin-l w-full px-3 py-2 leading-normal" for="password">
          Password
        </label>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-green-darkest hover:bg-black text-white py-2 px-4 rounded" type="button">
        Sign In
        </button>
        <a class="inline-block align-baseline text-grey hover:text-grey-darker" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    </>
  )
}

export default FloatingInput


// .label-floating input(:placeholder-shown) ~ label{
//     transition: all 0.2s ease-in-out;
//   }
//   .label-floating input:not(:placeholder-shown) ~ label {
//     font-size: 0.7rem;
//     transition: all 0.2s ease-in-out;
//     color: #1f9d55;
//     margin-top: -0.7rem;
//     margin-left: 10px;
//     background: white;
//     display: block;
//     padding: 2px 6px;
//     width: fit-content;
//   }