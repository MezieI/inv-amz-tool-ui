import React from 'react';

// Components
import Input from '../../components/Input';
import Button from '../../components/Button';

// Assets/Images
import Logo from '../../assets/oasis.png';

// Styles
import './styles.scss';

import { Formik, Field, Form } from 'formik';

const LoginPage = () => {
	return (
		<>
			<div className='LoginPage'>
				<div className='login-logo-backdrop'>
					<img className='logo' src={Logo} alt='torchlight in the sky' />
				</div>
				<div className='login-modal'>
					<h2 className='login-text'>Welcome Back!</h2>
					<h1 className='login-sub-text'>We are excited to see you again!</h1>
					<Formik
						enableReinitialize
						initialValues={{
							credentials: '',
							password: '',
						}}
						onSubmit={(values, { resetForm }) => {
							authenticateUser(values);
							resetForm({});
						}}>
						{() => (
							<Form className='login-form'>
								<div className='username'>EMAIL OR PHONE NUMBER</div>
								<Field
									type='text'
									name='credentials'
									component={Input}
									className='input login'
								/>
								<div className='password'>PASSWORD</div>
								<Field
									type='text'
									name='password'
									component={Input}
									className='input login'
								/>
								<Button
									type='submit'
									className='btn login-btn'
									buttonTextContent='LOGIN'
								/>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
