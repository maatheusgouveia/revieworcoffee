import { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StarBorder } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';

import api from '~/services/api';
import Review from '~/components/Review';
import ReviewDialog from '~/components/ReviewDialog';

import img1 from '~/assets/img1.png';
import img2 from '~/assets/img2.png';
import img3 from '~/assets/img3.png';
import img4 from '~/assets/img4.png';
import img5 from '~/assets/img5.png';
import logo from '~/assets/borc-logo-transparente.png';

import {
	Container,
	SearchInput,
	ImgContainer,
	InputsContainer,
	ReviewsContainer,
	Header,
} from './styles';
import LoginDialog from '~/components/LoginDialog';

export default function Home() {
	const [reviews, setReviews] = useState([
		{
			id: 'adasdas',
			created_at: new Date(),
			content:
				'Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. A ordem dos tratores não altera o pão duris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Suco de cevadiss deixa as pessoas mais interessantis.',
			stars: 2,
			user: { name: 'Usuário 1' },
		},
		{
			id: '234rwe',
			created_at: new Date(),
			content:
				'Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. A ordem dos tratores não altera o pão duris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Suco de cevadiss deixa as pessoas mais interessantis.',
			stars: 4,
			user: { name: 'Usuário 2' },
		},
	]);

	const [search, setSearch] = useState([]);
	const [isSearching, setSearching] = useState(false);

	useEffect(() => {
		api.get('reviews').then(response => setReviews(response.data));
	}, []);

	function handleSearch(e) {
		setSearching(!!e.target.value);

		const values = reviews.filter(item =>
			item.content
				.toLocaleLowerCase()
				.includes(e.target.value.toLocaleLowerCase())
		);

		setSearch(values);
	}

	return (
		<Container>
			<Header>
				<img src={logo} alt="Beer or Coffee" />

				<LoginDialog />
			</Header>

			<main>
				<Typography variant="h4" component="h1">
					Avaliações de Mofo WorkSpaces - Unidade CASA Jd. Paulistano
					Sorocaba/SP
				</Typography>

				<Grid
					container
					align-items="center"
					className="rating-container"
				>
					<Rating
						name="space-rating"
						readOnly
						defaultValue={2}
						precision={0.5}
						emptyIcon={<StarBorder fontSize="inherit" />}
						value={4}
					/>

					<Typography className="reviews">2 Avaliações</Typography>
				</Grid>

				<ImgContainer>
					<Grid item xs>
						<img src={img1} alt="img1" className="img-selected" />
					</Grid>

					<Grid item xs={8} sm md lg className="img-group">
						<Grid container justify="flex-end">
							<img src={img2} alt="img2" className="img-item" />
							<img src={img3} alt="img3" className="img-item" />
						</Grid>
						<Grid container justify="flex-end">
							<img src={img4} alt="img4" className="img-item" />
							<img src={img5} alt="img5" className="img-item" />
						</Grid>
					</Grid>
				</ImgContainer>

				<InputsContainer>
					<SearchInput
						name="search-field"
						placeholder="Pesquisar nos comentários"
						onChange={handleSearch}
					/>

					<ReviewDialog />
				</InputsContainer>

				<ReviewsContainer>
					{!isSearching &&
						reviews?.map(review => (
							<Review key={review.id} data={review} />
						))}

					{isSearching &&
						search?.map(review => (
							<Review key={review.id} data={review} />
						))}
				</ReviewsContainer>
			</main>
		</Container>
	);
}
