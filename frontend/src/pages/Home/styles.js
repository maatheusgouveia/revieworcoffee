import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
	header {
		background: #222222;
		padding: 10px 10%;
	}

	main {
		padding: 30px 10% 0 10%;

		h1 {
			font-weight: bold;
		}
	}

	.rating-container {
		margin: 10px 0;
	}
`;

export const SearchInput = styled.input`
	height: 50px;
	border-radius: 5px;
	width: 400px;
	background-color: #f5f5f5;
	border: #666;
	padding-left: 10px;
	font-weight: bold;
	font-size: 24px;
	color: #999;
`;

export const ReviewButton = styled.button`
	height: 50px;
	border-radius: 5px;
	background: #faaf40;
	color: #fff;
	font-weight: bold;
	width: 250px;
	border: none;
	font-size: 24px;
`;

export const ImgContainer = styled.div`
	display: flex;
	flex-direction: row;

	.img-selected {
		height: 100%;
		padding-bottom: 5px;
	}

	.img-group {
		.img-item {
			width: 45%;
			margin-bottom: 5px;

			&:last-child {
				margin-left: 5px;
			}
		}
	}
`;

export const InputsContainer = styled(Grid).attrs({
	container: true,
	justify: 'space-between',
})`
	margin: 30px 0;
`;

export const ReviewsContainer = styled(Grid).attrs({
	container: true,
	direction: 'column',
})``;
