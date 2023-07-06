import React from 'react';
import './Timeline.css';
const Timeline = () => {
  return (
    <div class="container">
      <h1 id='p1' className='headttag'>My Professional Story</h1>
      <div class="timeline">
       <ul>

         <li>
          <div class="timeline-content">
          <h3 class="date">2018 - 2022</h3>
          <h1>B.Tech Computer Science</h1>
          <p>I graduated with a Bachelor of Technology in computer science from KIET Group of Institutions Ghaziabad.</p>
          </div>
         </li>
         {/* Lots of this knowledge can be applied for desiging user-interface and developing web and mobile application. */}
         <li>
          <div class="timeline-content">
          <h3 class="date">2019 - 2020</h3>
          <h1>Freelancer</h1>
          <p>While studing computer science, I got my hands dirty by UI designing and writing
              mobile applications code for several clients in India.</p>
          </div>
         </li>

         <li>
          <div class="timeline-content">
          <h3 class="date">2022 - 2023</h3>
          <h1>Oracle App Developer</h1>
          <p>During my internship at Wipro as an Oracle app intern, I gained valuable experience working with Oracle Reports and Oracle Forms.</p>
          </div>
         </li>

         <li>
          <div class="timeline-content">
          <h3 class="date">2022 - Present</h3>
          <h1>Project Engineer</h1>
          <p>As a Project Engineer at Wipro, I bring a unique blend of expertise in React JS and Java to deliver exceptional solution.</p>
          </div>
         </li>
         
         <h3 className='endtag'>Be part of my story</h3>
         
    </ul>
  </div>
</div>
  );
};

export default Timeline;