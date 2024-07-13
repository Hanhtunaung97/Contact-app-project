import React from 'react'

const LoadingComponents = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
    <div className=" h-full">
      <h1 className="text-3xl font-bold font-heading text-basic mb-0 lg:mb-3 flex justify-center items-center">
        Loading.....
        <span className=" inline-block p-2 w-3 h-3 border-4 border-danger border-s-4 border-s-basic border-e-4 border-e-basic rounded-full animate-spin"></span>
      </h1>
    </div>
  </div>
  )
}

export default LoadingComponents