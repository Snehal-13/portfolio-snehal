import React from 'react';
import { webDevelopmentSkills, langAndTools } from '../data/index';

const SkillsSection: React.FC = () => {
  return (
      <section className="py-20 w-full z-10" id="skills">
       <h1 className="heading mb-10">
         <span className="text-purple">Skills</span>
      </h1>
      <div className=" skills__container container grid section__border gap-y-14 lg:flex lg:flex-row lg:justify-center lg:gap-x-40">
        {/* Frontend Skills */}
        <div className="skills__content">
          <h3 className="skills__title flex justify-center items-center gap-x-2 text-xl font-semibold mb-10">
            <i className="ri-braces-line text-base font-normal"></i>Web Development
          </h3>
          <div className="skills__info grid lg:grid-cols-4 lg:gap-10 grid-cols-3 gap-10">
            {webDevelopmentSkills.map((skill, index) => (
              <SkillComponent key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills__content">
        <h3 className="skills__title flex justify-center items-center gap-x-10 text-xl font-semibold mb-10">
            <i className="ri-braces-line text-base font-normal"></i>Languages and Tools
          </h3>
          <div className="skills__info grid lg:grid-cols-4 lg:gap-10 grid-cols-3 gap-10">
            {langAndTools.map((skill, index) => (
              <SkillComponent key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillComponent: React.FC<{ skill: { imgSrc: string; imgAlt: string; name: string; subtitle: string; } }> = ({ skill }) => {
  return (
    <div className="skills__data grid justify-center text-center">
      <div className="skills_blob w-20 h-24 dark:bg-black-200 dark:border-white-200 rounded-xl grid place-items-center mb-4 transition-colors duration-400 hover:bg-slate-800 cursor-pointer">
        <img src={skill.imgSrc} alt={skill.imgAlt} className="w-10 hover:animate-bounce-skills" />
      </div>
      <h3 className="skills__name text-sm mb-1">{skill.name}</h3>
      <span className="skills_subtitle text-xs text-gray-400">{skill.subtitle}</span>
    </div>
  );
};

export default SkillsSection;
