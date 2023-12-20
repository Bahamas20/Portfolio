import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const ScrollToLink = ({ to, children }) => (
  <ScrollLink
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-70} // Adjust the offset as needed
    duration={500}
  >
    {children}
  </ScrollLink>
);

export default ScrollToLink;
