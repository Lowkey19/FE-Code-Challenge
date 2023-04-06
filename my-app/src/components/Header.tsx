import { FunctionComponent } from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Typography } from '@mui/material';

const Title = styled.div`
	margin-left: 70px;
	> p {
		color: #000000;
		font-weight: bold;
		font-size: 24px;
	}
`;

const Container = styled.div`
	margin-bottom: 64px;
`;

const Header: FunctionComponent = () => {
	return (
		<Container>
			<AppBar position="fixed">
				<Toolbar style={{ backgroundColor: '#ffffff' }}>
					<Title>
						<Typography>Where in the World?</Typography>
					</Title>
				</Toolbar>
			</AppBar>
		</Container>
	)
}

export default Header;