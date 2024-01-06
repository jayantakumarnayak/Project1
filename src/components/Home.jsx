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
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ab esse accusamus, rem reprehenderit, natus reiciendis consectetur cupiditate explicabo fuga odio neque laboriosam suscipit molestiae. Assumenda cum quos ex libero suscipit eos similique consequuntur iure consequatur cumque, voluptatibus quam magni dolorum corporis optio, quis accusamus? Repudiandae nihil dolorem recusandae ipsa!</p>
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