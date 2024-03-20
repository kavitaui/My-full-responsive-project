import { JSONContent } from 'components/HomeContent/JSONContent';
import 'odometer/themes/odometer-theme-default.css';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Odometer from 'react-odometerjs';
import ScrollTrigger from 'react-scroll-trigger';
import './OdometerAnimation.css';
const OdometerAnimationFile = () => {
  const [counterStart, setCounterStart] = useState(false)

  const [value, setValue] = useState(1234);
  useEffect(() => {
    const timeoutId = setTimeout(() => setValue(799), 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {JSONContent.ReviewCountArea.map((item => <ScrollTrigger key={item.id} onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
        <div className='odo-ani'>

          <h1 className='value'>
            {counterStart && <CountUp start={0} end={10}  duration={2} delay={0} />} M+
            {item.review }
          </h1>
        </div>
      </ScrollTrigger>))
        
     
      }
      {JSONContent.ReviewCountArea.map((item => 
       <div  key = {item.id}>
          <Odometer value={value} format="(ddd).dd" />{item.review}
          </div>
    ))}
     
    </>
  )
}

export default OdometerAnimationFile;