import React, { useCallback, useState } from "react";
import { motion } from 'framer-motion'
import "./Home1.css";

function Home1() {
  const [counter, setCounter] = useState(0)

  useCallback(setTimeout(() => {
    setCounter((counter + 1) % 3)
    console.log(counter)
  }, 3000), [])
  return (
    <div className="home1">
      <div className="home1-upper">
        <div className="home1-upper-left">
          <p className="home1-upper-left-text1">
            Schedule Tracking Of Your Field Work And Accelerate Your Business
            With{" "}
          </p>
          {/*   <div className="words">
            <span  style={{ color: "red", fontSize: "45px" }}>
              {" "}
              Customized ERP
            </span>
            <span style={{ color: "#F8A500", fontSize: "45px" }}>
              Interactive Live Chat
            </span>
            <span style={{ color: "#007FE4", fontSize: "45px" }}>
              {" "}
              Sales CRM
            </span>
  </div> */}
          <div style={{ width: '100', height: 'auto' }}>
            {counter === 0 ? <motion.div initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 3 }
              }}
              exit={{ opacity: 0 }}>
              <h1 className="blinking-text" style={{ color: "red" }}>Customized ERP</h1>
            </motion.div> : ''}
            {counter === 1 ? <motion.div initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 3 }
              }}
              exit={{ opacity: 0 }}>
              <h1 className="blinking-text" style={{ color: "#F8A500" }}>Interactive Live Chat</h1>
            </motion.div> : ''}
            {counter === 2 ? <motion.div initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 3 }
              }}
              exit={{ opacity: 0 }}>
              <h1 className="blinking-text" style={{ color: "#007FE4" }}>Sales CRM</h1>
            </motion.div> : ''}
          </div>

          <p className="home1-upper-left-text2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis omnis maxime molestias atque praesentium temporibus
            neque sapiente doloremque earum hic.
          </p>
          <div className="home1-upper-left-buttons">
            <button className="home1-upper-left-button1">Start for Free</button>
            <button className="home1-upper-left-button2">Book Demo</button>
          </div>
        </div>
        <div className="home1-upper-right">
          <img
            className="home1-upper-right-image"
            src="https://uploads-ssl.webflow.com/5e53d34464688e6f5960a338/630d1ad7a363c42a329e2731_Dashboard%20HR%20Management.svg"
            alt="not-found"
          />
        </div>
      </div>
    </div>
  );
}

export default Home1;
