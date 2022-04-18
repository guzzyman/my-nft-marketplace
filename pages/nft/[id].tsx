import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen grid-cols-10 flex-col lg:grid">
      {/*** Left ***/}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4 ">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">DADDYGO Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of DADDY-GO Apes who live & breathe crypto!
            </h2>
          </div>
        </div>
      </div>
      {/*** Right ***/}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/** Header **/}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              DADDY GO
            </span>{' '}
            NFT Market Place
          </h1>
          <button className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base">
            Sign In
          </button>
        </header>
        <hr className="my-2 border" />
        {/** Content **/}
        <div className="flex1 mt-10 flex flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="lg: w-160 h-80 object-cover pb-10"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="font-bolf text-3xl lg:text-5xl lg:font-extrabold">
            {' '}
            The DADDYGO Ape coding club | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT's Claimed</p>
        </div>
        {/** Mint Button **/}
        <button className='h-16 w-full bg-red-600 text-white rounded-full mt-10 font-bold'>Mint NFT (0.01 ETH)</button>
      </div>
    </div>
  )
}

export default NFTDropPage
