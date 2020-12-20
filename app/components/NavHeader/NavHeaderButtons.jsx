import React from 'react';

import Button from '../Button';

const NavHeaderButtons = (props) => {
	const { title, icon, className} = props;
  return <Button buttonTextContent={title} icon={icon} className={className}/>;
};

export default NavHeaderButtons; 
