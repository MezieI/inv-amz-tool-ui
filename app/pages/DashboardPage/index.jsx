import React from 'react';
import './styles.scss';

// Components
import ServiceCard from '../../components/ServiceCard';

// Material Styles
import SearchIcon from '@material-ui/icons/Search';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentIcon from '@material-ui/icons/Assessment';

const cards = [
	{
		id: 0,
		title: 'Product Finder',
		image: <SearchIcon className='icon' />,
	},
	{
		id: 1,
		title: 'Cost Calculator',
		image: <AttachMoneyIcon className='icon' />,
	},
	{
		id: 2,
		title: 'Sales Analytics',
		image: <AssessmentIcon className='icon' />,
	},
];

const DashboardPage = () => {
	return (
		<>
			<div className='DashboardPage'>
				<h2 className='dashboard-title'>
					Hi George! What would you like to do today?
				</h2>
				<div className='cards-container'>
					{cards.map((items) => {
						return (
							<ServiceCard
								key={items.id}
								title={items.title}
								image={items.image}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default DashboardPage;
