import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1999-11-16");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  const myAge = calculate_age();
   console.log(myAge);
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
      I am a highly motivated ♨️ undergraduate Applied Computer Science
      Student who studies at Chuka University. Currently doing freelancing.
      I am equipped with skills as a computer science student that are
      useful in solving real-world problems by applying the knowledge of
      computer science
      </div>
    </div>
  )
}
export default About;
