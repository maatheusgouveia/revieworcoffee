import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Container,
	CssBaseline,
	Grid,
	TextField,
	Typography,
	Button,
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Form } from './styles';
import { signUpRequest } from '~/store/modules/auth/actions';

const useStyles = makeStyles(() => ({
	mainGrid: {
		height: '100vh',
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const initialValues = {
		name: '',
		email: '',
		password: '',
		confirm_password: '',
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email().required('Campo obrigatório'),
		password: Yup.string().min(6).required('Campo obrigatório'),
	});

	function handleSubmit({ name, email, password }) {
		dispatch(signUpRequest({ name, email, password }));
	}

	return (
		<>
			<CssBaseline />
			<Container maxWidth="lg">
				<main>
					<Grid
						container
						spacing={5}
						className={classes.mainGrid}
						justify="center"
						alignItems="center"
					>
						<Paper
							style={{
								width: 500,
								padding: 30,
							}}
						>
							<Typography
								align="center"
								variant="h1"
								component="h1"
								style={{ fontSize: 25, marginBottom: 15 }}
							>
								Cadastro
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
												label="Nome"
												name="name"
												value={values.name || ''}
												onChange={handleChange}
												onBlur={handleBlur}
												error={!!errors.name}
												helperText={errors.name}
											/>
										</Grid>

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

										<Grid item xs>
											<TextField
												required
												fullWidth
												label="Confirme sua senha"
												name="confirm_password"
												type="password"
												value={
													values.confirm_password ||
													''
												}
												onChange={handleChange}
												onBlur={handleBlur}
												error={
													!!errors.confirm_password
												}
												helperText={
													errors.confirm_password
												}
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
												onClick={() =>
													history.push('/login')
												}
											>
												Voltar ao login
											</Button>

											<Button
												type="submit"
												variant="contained"
												color="primary"
											>
												Criar minha conta
											</Button>
										</Grid>
									</Form>
								)}
							</Formik>
						</Paper>
					</Grid>
				</main>
			</Container>
		</>
	);
}
