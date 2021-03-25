import { TextareaAutosize } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styled from 'styled-components';

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

export const Avatar = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-bottom: 10px;
`;

export const CustomRating = styled(Rating)`
	svg.MuiSvgIcon-root {
		width: 50px;
		height: 50px;
	}

	margin-bottom: 20px;
	margin-top: 10px;
`;

export const CustomTextArea = styled(TextareaAutosize)`
	width: 80%;
	border-radius: 5px;
	margin-bottom: 20px;
	padding: 5px;
`;
