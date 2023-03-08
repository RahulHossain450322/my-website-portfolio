import React from 'react'
import SkillStyle from './Skill.css'

function Skil() {
  return (
    <section className='skills bg-dark text-light'>
      <div className='container'>
        <div className=' skill_content'>
            <div className='skill_title'>
                <h2 className='h2 text-center pb-3'>My Skills</h2>
            </div>
            <div className='name_of_skills'>
                <h1 className='h5 html'>HTML 5 <span className='border border-2 rounded-3 p-1 persent'>80%</span></h1>
                <h1 className='h5 css'>CSS 3 <span className='border border-2 rounded-3 p-1 persent'>65%</span></h1>
                <h1 className='h5 bs'>BOOTSTRAP 5 <span className='border border-2 rounded-3 p-1 persent'>70%</span></h1>
                <h1 className='h5 js'>JAVA SCRIPT <span className='border border-2 rounded-3 p-1 persent'>60%</span></h1>
                <h1 className='h5 react'>REACT.js <span className='border border-2 rounded-3 p-1 persent'>50%</span></h1>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skil
