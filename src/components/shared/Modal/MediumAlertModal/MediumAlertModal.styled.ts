import styled from '@emotion/styled';

export const MediumModalContainer = styled.div`
	width: 100%;
	height: 496px;
	padding: 0px 32px 50px 32px;
	display: flex;
	flex-direction: column;
`;

export const Content = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	p {
		font-weight: 400;
		font-size: 16px;
		line-height: 26px;
		color: #4b4b4b;
	}
`;
