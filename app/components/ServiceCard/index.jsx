import React from 'react';
import './styles.scss';

const ServiceCard = (props) => {
	const { title, image } = props;
	
	return (
		<div className='ServiceCard'>
			{image}
			<h2 className='title'>{title}</h2>
			<div className='logo-container'></div>
		</div>
	);
};

export default ServiceCard;
