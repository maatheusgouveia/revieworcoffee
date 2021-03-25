import { forwardRef, useState } from 'react';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DialogContent, Dialog, Slide } from '@material-ui/core';

import { Form } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginDialog() {
	const dispatch = useDispatch();
	const { name } = useSelector(state => state.user.profile);
	console.log(name);

	const [open, setOpen] = useState(false);

	const initialValues = {
		email: '',
		password: '',
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email().required('Campo obrigatório'),
		password: Yup.string().min(6).required('Campo obrigatório'),
	});

	function handleSubmit({ email, password }) {
		dispatch(signInRequest(email, password));
	}

	function handleClickOpen() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	return (
		<div>
			<button onClick={handleClickOpen}>
				{name ? `Olá, ${name}` : 'Login'}
			</button>

			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
			>
				<DialogContent style={{ width: 500 }}>
					<Grid container direction="column" alignItems="center">
						<Typography
							align="center"
							variant="h1"
							component="h1"
							style={{ fontSize: 25, marginBottom: 20 }}
						>
							Login
						</Typography>

						<Formik
							enableReinitialize
							initialValues={initialValues}
							validationSchema={validationSchema}
							validateOnBlur={false}
							validateOnChange={false}
							onSubmit={handleSubmit}
						>
							{({
								values,
								handleBlur,
								handleChange,
								errors,
								handleSubmit,
							}) => (
								<Form onSubmit={handleSubmit}>
									<Grid item xs>
										<TextField
											required
											fullWidth
											label="E-mail"
											name="email"
											value={values.email || ''}
											onChange={handleChange}
											onBlur={handleBlur}
											error={!!errors.email}
											helperText={errors.email}
										/>
									</Grid>

									<Grid item xs>
										<TextField
											required
											fullWidth
											label="Senha"
											name="password"
											type="password"
											value={values.password || ''}
											onChange={handleChange}
											onBlur={handleBlur}
											error={!!errors.password}
											helperText={errors.password}
										/>
									</Grid>

									<Grid
										container
										justify="space-around"
										style={{ marginTop: 30 }}
									>
										<Button
											type="button"
											variant="contained"
											color="secondary"
											onClick={() => {}}
										>
											Voltar
										</Button>

										<Button
											type="submit"
											variant="contained"
											color="primary"
										>
											Entrar
										</Button>
									</Grid>

									<Grid
										container
										justify="center"
										style={{ marginTop: 30 }}
									>
										<Link to="/signup">
											Ainda não tem uma conta? Crie agora!
										</Link>
									</Grid>
								</Form>
							)}
						</Formik>
					</Grid>
				</DialogContent>
			</Dialog>
		</div>
	);
}
