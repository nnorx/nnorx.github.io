import React from 'react';
import HeroSectionAbout from './HeroSectionAbout';
import { aboutObjOne } from './Data';

function About() {
  return (
    <>
      <HeroSectionAbout {...aboutObjOne} />
    </>
  );
}

export default About;
