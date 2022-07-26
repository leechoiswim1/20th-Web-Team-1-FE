import React from 'react';
import NotFoundIcon from '@/assets/images/shared/not_found.svg';
import * as S from './NotFound.styled';
import Button from '@/components/shared/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<S.Wrapper>
			<S.Content>
				<img src={NotFoundIcon} alt="" />
				<span>Page Not Found</span>
			</S.Content>
			<Button type="button" bgColor="primary" onClick={() => navigate('/')}>
				돌아가기
			</Button>
		</S.Wrapper>
	);
};

export default NotFound;