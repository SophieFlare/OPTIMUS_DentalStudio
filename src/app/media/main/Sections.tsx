import React from 'react'

const Sections = () => {
  return (
    <div>
        <section className="relative flex flex-col md:flex-row h-screen w-full px-20 py-20">
          <div className='absolute top-0 left-0 w-full h-full z-0'>
          <video 
            autoPlay
            muted loop
            className="h-full w-full object-cover filter hue-rotate-150 saturate-120"
          >
            <source src="/videos/dna.mp4" type="video/mp4" />
          </video>

          </div>

        </section>

        <section className="relative flex flex-col md:flex-row h-screen w-full ">
        <video 
              autoPlay
              muted loop
              className="h-full w-full object-cover filter hue-rotate-150 saturate-120"
            >
              <source src="/videos/retro-media-video.mp4" type="video/mp4" />
            </video>
        </section>
    </div>
  )
}

export default Sections