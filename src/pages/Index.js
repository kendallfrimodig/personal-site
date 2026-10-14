import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Kendall Frimodig's personal website"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A collection of vignettes aimed to convey a sense of my character and utility
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        <Link to="/blog">technical blog posts</Link>, {' '}
        or view <Link to="/stats">site statistics</Link>, {' '}
      </p>
      <p> A printable copy of my resume can be downloaded
        <a href="https://drive.google.com/file/d/19jGQInhjokk_2Z0fK-B0xZGe7fMoH_qN/view?usp=sharing"> *here*</a>
      </p>
    </article>
  </Main>
);

export default Index;
