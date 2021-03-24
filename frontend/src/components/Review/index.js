import { Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { StarBorder } from '@material-ui/icons';
import { formatDistanceToNow } from 'date-fns';
import br from 'date-fns/locale/pt-BR';

import avatar from '~/assets/avatar-blank.png';

import { Avatar, ReviewContent, ReviewDate, UserName } from './styles';

export default function Review({ data }) {
	const { content, user, created_at, stars } = data;

	return (
		<Grid container style={{ marginBottom: 15 }}>
			<Grid item xs>
				<Grid container direction="column" alignItems="center">
					<Avatar src={avatar} alt="user" />

					<Rating
						readOnly
						precision={0.5}
						emptyIcon={<StarBorder fontSize="inherit" />}
						value={stars}
					/>
				</Grid>
			</Grid>

			<Grid item xs={10}>
				<UserName>{user.name}</UserName>

				<ReviewDate>
					{formatDistanceToNow(created_at, {
						addSuffix: true,
						locale: br,
					})}
				</ReviewDate>

				<ReviewContent>{content}</ReviewContent>
			</Grid>
		</Grid>
	);
}
