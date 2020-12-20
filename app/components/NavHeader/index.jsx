import React from 'react';
import './styles.scss';

import NavHeaderButtons from './NavHeaderButtons';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

import Logo from '../../assets/oasis.png';

const NavHeaderEl = [
	{
		title: 'Home',
		icon: <HomeIcon className='icon' />,
		className: 'btn nav-btn',
	},
	{
		title: 'Product Finder',
		icon: <SearchIcon className='icon' />,
		className: 'btn nav-btn',
	},
];

const NavHeader = () => {
	return (
		<div className='NavHeader'>
			<div>
				<img
					className='logo nav-header'
					src={Logo}
					alt='torchlight in the sky'
				/>
			</div>
			{NavHeaderEl.map((items) => {
        return <NavHeaderButtons title={items.title} icon={items.icon} className={items.className}/>;
			})}
		</div>
	);
};

export default NavHeader;
