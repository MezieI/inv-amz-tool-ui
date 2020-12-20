import React from 'react';

const Input = (props) => {
	const {
		field,
		form,
		className,
		errorText,
		onChange,
		id,
		type,
		value,
		isDisabled,
		isRequired,
		maxLength,
		placeholder,
	} = props;

	const { name } = field;

	const manualField = {};
	if (name === undefined) {
		manualField.onChange = onChange;
		manualField.value = value !== undefined ? value : '';
	}

	return (
		<>
			<div>
				<input
          className={className}
          errorText={errorText}
          id={id}
          type={type}
          value={value}
          disabled={isDisabled}
          required={isRequired}
          maxLength={maxLength > 0 ? maxLength : null}
          placeholder={placeholder}
          {...manualField}
          {...field}
				/>
			</div>
		</>
	);
};

export default Input;
