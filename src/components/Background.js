import React from 'react';

const Background = () => {
  const gears = [
    { top: '2%', left: '5%', size: 'large' },
    { top: '4%', left: '15%', size: 'small' },
    { top: '6%', left: '50%', size: 'medium' },
    { top: '8%', left: '75%', size: 'large' },
    { top: '10%', left: '90%', size: 'small' },
    
    { top: '15%', left: '10%', size: 'medium' },
    { top: '17%', left: '30%', size: 'large' },
    { top: '19%', left: '60%', size: 'small' },
    { top: '22%', left: '80%', size: 'medium' },
    { top: '24%', left: '40%', size: 'large' },

    { top: '28%', left: '5%', size: 'small' },
    { top: '30%', left: '50%', size: 'medium' },
    { top: '32%', left: '70%', size: 'large' },
    { top: '34%', left: '85%', size: 'small' },
    { top: '36%', left: '25%', size: 'medium' },

    { top: '40%', left: '10%', size: 'large' },
    { top: '42%', left: '30%', size: 'small' },
    { top: '45%', left: '75%', size: 'medium' },
    { top: '48%', left: '90%', size: 'large' },
    { top: '50%', left: '50%', size: 'small' },

    { top: '52%', left: '5%', size: 'medium' },
    { top: '55%', left: '20%', size: 'large' },
    { top: '58%', left: '65%', size: 'small' },
    { top: '60%', left: '75%', size: 'Large' },
    { top: '63%', left: '40%', size: 'large' },

    { top: '67%', left: '10%', size: 'small' },
    { top: '70%', left: '30%', size: 'medium' },
    { top: '72%', left: '50%', size: 'large' },
    { top: '74%', left: '90%', size: 'small' },
    { top: '76%', left: '65%', size: 'medium' },

    { top: '80%', left: '20%', size: 'large' },
    { top: '83%', left: '40%', size: 'small' },
    { top: '85%', left: '70%', size: 'medium' },
    { top: '87%', left: '90%', size: 'large' },
    { top: '90%', left: '50%', size: 'small' },

    { top: '93%', left: '15%', size: 'medium' },
    { top: '95%', left: '30%', size: 'large' },
    { top: '97%', left: '60%', size: 'small' },
    { top: '99%', left: '80%', size: 'medium' },

    { top: '25%', left: '20%', size: 'medium' },
    { top: '40%', left: '57%', size: 'large' },
    { top: '60%', left: '55%', size: 'medium' },
];


  return (
    <div className="background-container">
      {gears.map((gear, index) => (
        <img
          key={index}
          src="/gear.png"
          className={`gear ${gear.size}`}
          style={{ top: gear.top, left: gear.left }}
          alt="Floating Gear"
        />
      ))}
    </div>
  );
};

export default Background;
