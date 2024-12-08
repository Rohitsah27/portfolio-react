import React from 'react'
import TypingEffect from "./Typed.jsx";

const Home = () => {
  return (
    <div className='home h-screen relative overflow-hidden'>
      <div className="shape1"></div>
      <div className="shape2"></div>

      <div>
        <div className="skills flex flex-row w-full justify-between p-2">
          <img className='h-9' src="./skill-logo/html-5.png" />
          <img className='h-9' src="./skill-logo/css-3.png" />
          <img className='h-9' src="./skill-logo/js.png" />
          <img className='h-9' id="bootstrap" src="./skill-logo/bootstrap.png" />
          <img className='h-9' src="./skill-logo/physics.png" />
          <img className='h-9' src="./skill-logo/git.png" />
          <img className='h-9' src="./skill-logo/seo.png" />
          <img className='h-9' src="./skill-logo/figma.png" />
          <img className='h-9' src="./skill-logo/wordpress.png" />
          <img className='h-9' src="./skill-logo/blogger.png" />
        </div>

        <div className='relative'>
          <div class="shape3">
            <img src="./assets/splash.png" alt="Animated Image" />
          </div>

          <div className="my-photo">
            <img src="./assets/roh.png" alt="rohit" />
          </div>
        </div>
      </div>

      <div class="about-me">
        <span className="hello text-[12px]">Hello</span><span>__</span>
        <div className="flex flex-row items-baseline gap-2">
          <h1>I'm </h1>
          <TypingEffect />
        </div>
        <p>
          Specializing in the IT sector, I excel in coding,
          design, and app and website development. With a
          constant eye on industry advancements, I deliver innovative
          solutions that prioritize quality and efficiency, ensuring impactful
          results.
        </p>
        <div class="btns">
          <button id="downloadBtn">Download CV</button>
        </div>
      </div>
    </div>


  )
}

export default Home