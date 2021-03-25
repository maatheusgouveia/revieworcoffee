import { forwardRef, useState } from 'react';
import {
	Grid,
	DialogContent,
	Dialog,
	Slide,
	Typography,
} from '@material-ui/core';
import { StarBorder } from '@material-ui/icons';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import avatar from '~/assets/avatar-blank.png';

import { ReviewButton, Avatar, CustomTextArea, CustomRating } from './styles';
import api from '~/services/api';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReviewDialog({ style }) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const initialValues = {
		content: '',
		stars: '',
	};

	const validationSchema = Yup.object().shape({
		content: Yup.string().required('Campo obrigatório'),
		stars: Yup.string().required('Campo obrigatório'),
	});

	function handleSubmit({ content, stars }, { resetForm }) {
		api.post('reviews', { content, stars });

		resetForm();
	}

	return (
		<div>
			<ReviewButton style={style} onClick={handleClickOpen}>
				Avaliar
			</ReviewButton>

			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
			>
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
						setFieldValue,
					}) => (
						<Form onSubmit={handleSubmit}>
							<DialogContent style={{ width: 500 }}>
								<Grid
									container
									direction="column"
									alignItems="center"
								>
									<Avatar src={avatar} alt="user" />

									<Typography variant="h5" component="h1">
										Sua experiência foi boa?
									</Typography>

									<CustomRating
										precision={0.5}
										emptyIcon={
											<StarBorder fontSize="inherit" />
										}
										onChange={(e, value) =>
											setFieldValue('stars', value)
										}
										value={values.stars}
									/>

									<CustomTextArea
										name="content"
										rowsMin={8}
										onChange={handleChange}
										placeholder="Sua avaliação e comentário ajudam a comunidade"
										value={values.content}
									/>

									<ReviewButton
										type="submit"
										onClick={() => handleSubmit(values)}
										color="primary"
									>
										Salvar Avaliação
									</ReviewButton>
								</Grid>
							</DialogContent>
						</Form>
					)}
				</Formik>
			</Dialog>
		</div>
	);
}
