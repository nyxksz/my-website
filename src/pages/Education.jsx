import './style.css';
import React from 'react';

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="education-title">My Educational Journey</h1>
      <p className="education-intro">
        Here's a glimpse of my educational path and the schools that shaped me.
      </p>

      <div className="education-timeline">
        <div className="education-item">
          <h2>Naga Central School 2</h2>
          <p>Elementary Graduate</p>
          <img 
            src="https://ncs2spg.wordpress.com/wp-content/uploads/2015/07/ncs-2-facade.png?w=300" 
            alt="Naga Central School 2" 
            className="education-image" 
          />
        </div>

        <div className="education-item">
          <h2>Camarines Sur National High School</h2>
          <p>High School Graduate/Senior High School</p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/CSNHS_Gabaldon_RWDA.jpg/1200px-CSNHS_Gabaldon_RWDA.jpg" 
            alt="Camarines Sur National High School" 
            className="education-image" 
          />
        </div>

        <div className="education-item">
          <h2>System Technology Institute (STI)</h2>
          <p>First Year College</p>
          <img 
            src="https://www.sti.edu/images/events/2011/naga/inside_2.jpg" 
            alt="STI Naga" 
            className="education-image" 
          />
        </div>

        <div className="education-item">
          <h2>Naga College Foundation</h2>
          <p>Currently Studying - [Computer Science]</p>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAZRKyoDCoQBcbCmnKvOG-WHC0fzXwQSUnw&s" 
            alt="Naga College Foundation" 
            className="education-image" 
          />
        </div>
      </div>

    </div>
  );
};

export default Education;
