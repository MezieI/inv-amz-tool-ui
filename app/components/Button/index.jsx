import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const {
		type,
		isDisabled,
		className,
		innerRef,
		onClick,
		buttonTextContent,
		icon,
		...rest
	} = props;

	const handleClick = (e) => {
		if (!isDisabled && onClick) {
			onClick(e);
		}
	};

	return (
		<>
			<div>
				<button
					className={className}
					type={type}
					disabled={isDisabled}
					onClick={(e) => handleClick(e)}
					{...rest}>
					<span>{icon}</span>
					{buttonTextContent}
				</button>
			</div>
		</>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	buttonTextContent: PropTypes.string,
	icon: PropTypes.element,
};

Button.defaultProps = {
	onClick: PropTypes.isRequired,
	buttonTextContent: PropTypes.isRequired,
};

export default Button;
