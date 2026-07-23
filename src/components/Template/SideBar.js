import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kendall Frimodig</h2>
        <p><a href="mailto:kendallfrimodig@gmail.com">kendallfrimodig@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I’m a data specialist and epidemiologist, driven to find
        solutions for complex questions and unravel nuance within data.
        I recently worked in a biostatistics role with kaiser permanente, and before this I was
        an environmental tracking & GIS epidemiologist
        at <a href="https://www.nmhealth.org/"> the new mexico department of health</a> &
        <a href="https://www.tpchd.org/"> tacoma-pierce county health department</a>
        , and provided statistical and GIS support for
        <a href="https://desmondtutuhealthfoundation.org.za/"> the desmond tutu HIV foundation</a>
        and <a href="https://www.accesskent.com/Health/"> kent county health department</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Kendall Frimodig <Link to="/">kendallfrimodig.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
