import React from 'react';
import IMG1 from  '../../assets/spogoo.png';
import IMG2 from  '../../assets/kmk.png';
import IMG3 from  '../../assets/reditas.png';
import IMG4 from  '../../assets/naava.png';
import IMG5 from  '../../assets/project5.png';
import IMG6 from  '../../assets/project6.png';
import './Portfolio.css';

const data =[
  {
    id:1,
    image:IMG1,
    title:'Spogoo',
    // github: 'https://github.com/AbhishekBhanot5991',
    demo : 'https://spogoo.com/'
  },
  {
    id:2,
    image:IMG2,
    title:'Kmk',
    // github: 'https://github.com/AbhishekBhanot5991',
    demo : 'http://kmk-website.impetusaisolutions.com/'
  },
  {
    id:3,
    image:IMG3,
    title:'Reditas',
    // github: 'https://github.com/AbhishekBhanot5991',
    demo : 'http://reditas-website.impetusaisolutions.com/'
  },
  {
    id:4,
    image:IMG4,
    title:'Naava',
    // github: 'https://github.com/AbhishekBhanot5991',
    demo : 'https://naava.in/'
  },
  {
    id:5,
    image:IMG5,
    title:'Digi Loans',
    // github: 'https://github.com/AbhishekBhanot5991',
    demo : 'https://www.starpowerzdigiloans.com/'
  },  
  {
    id:6,
    image:IMG6,
    title:'SV Wealth',
    // github: 'https://github.com/AbhishekBhanot5991',
    demo : 'http://sv-wealth.impetusaisolutions.com/'
  },  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3 className='portfolio__item-h3'>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribble.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article> */}
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3 className='portfolio__item-h3'>{title}</h3>
          <div className='portfolio__item-cta'>
          {/* <a href={github} target='_blank' rel='noreferrer' className='btn'>Github</a> */}
          <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio;