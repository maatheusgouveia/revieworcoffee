import { forwardRef, useState } from 'react';
import {
	Grid,
	DialogContent,
	Dialog,
	Slide,
	Typography,
} from '@material-ui/core';
import { StarBorder } from '@material-ui/icons';

import avatar from '~/assets/avatar-blank.png';

import { ReviewButton, Avatar, CustomTextArea, CustomRating } from './styles';

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
				<DialogContent style={{ width: 500 }}>
					<Grid container direction="column" alignItems="center">
						<Avatar src={avatar} alt="user" />

						<Typography variant="h5" component="h1">
							Sua experiência foi boa?
						</Typography>

						<CustomRating
							precision={0.5}
							emptyIcon={<StarBorder fontSize="inherit" />}
						/>

						<CustomTextArea
							rowsMin={8}
							placeholder="Sua avaliação e comentário ajudam a comunidade"
						/>

						<ReviewButton onClick={handleClose} color="primary">
							Salvar Avaliação
						</ReviewButton>
					</Grid>
				</DialogContent>
			</Dialog>
		</div>
	);
}
