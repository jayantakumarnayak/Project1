import React from "react";
import vg from "../assets/2.webp";

import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram}from "react-icons/ai"
const Home = () => {
 
  return (
 <>
    <div className="home" id="home">
    <main>
        <h1>PRARAMBH</h1>
        <p>Solution to all your problems</p>
        </main>  
    </div>

    <div className="home2">
     <img src={vg} alt="Graphics" />
    

    <div>
        <p>
        We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
        </p>
    </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>Who we are ?</h1>
        <p>Ultra-fast development server: Say goodbye to sluggish development cycles. Vite's pre-bundling magic and instant HMR let you focus on coding, not waiting.
Seamless component development: Build reusable, modular components with React's intuitive approach, promoting efficient code organization and scaling.
State-of-the-art tooling: Prarambh DevX integrates seamlessly with the latest developer tools and build pipelines, keeping you at the forefront of the tech landscape.
Customizable configuration: No one-size-fits-all solutions here. Adapt Prarambh DevX to your specific needs with its highly customizable configuration options.
Extensive documentation and community: Get started quickly and stay informed with Prarambh DevX's comprehensive documentation and vibrant community of developers.</p>
       </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
            }}>
         <AiFillGoogleCircle/>
         <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s",
            }}>
         <AiFillAmazonCircle/>
         <p>Amazon</p>
          </div>

          <div style={{
            animationDelay:"0.7s",
            }}>
         <AiFillInstagram/>
         <p>Instagram</p>
          </div>

          <div style={{
            animationDelay:"1s",
            }}>
         <AiFillYoutube/>
         <p>Youtube</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home