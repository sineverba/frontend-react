import React from 'react';

const FooterPresentationals = (props) => {
  return (
    <p>Backend Api Version: {props.apiVersion ? props.apiVersion : 'N.D.'} - Frontend Version: {props.frontendVersion ? props.frontendVersion : 'N.D.'}</p>
  )
};

export default FooterPresentationals;