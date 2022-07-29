import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import * as S from './BottomNav.styled';

const BottomNav = () => {
	const theme = useTheme();

	const { pathname } = useLocation();

	console.log(pathname);

	const isLinkSelected = (to: string) => to === pathname;

	const decideLinkColor = (to: string) =>
		isLinkSelected(to) ? theme.colors.bt_primary[200] : theme.colors.bt_grey[20];

	return (
		<S.BottomNavWrapper>
			<S.BottomNavLinkList>
				<li>
					<S.BottomNavLink to="/main-tree" selected={isLinkSelected('/main-tree')}>
						<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M7.5 18C8.53125 18 9.375 17.1692 9.375 16.1538H5.625C5.625 17.1692 6.45937 18 7.5 18ZM13.125 12.4615V7.84615C13.125 5.01231 11.5875 2.64 8.90625 2.01231V1.38462C8.90625 0.618462 8.27812 0 7.5 0C6.72187 0 6.09375 0.618462 6.09375 1.38462V2.01231C3.40312 2.64 1.875 5.00308 1.875 7.84615V12.4615L0 14.3077V15.2308H15V14.3077L13.125 12.4615Z"
								fill={decideLinkColor('/main-tree')}
							/>
						</svg>

						<span>알림</span>
					</S.BottomNavLink>
				</li>

				<li>
					<S.BottomNavLink to="/forest" selected={isLinkSelected('/forest')}>
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M16.7567 3.45253C17.0961 3.08561 17.3035 2.59522 17.3035 2.05613C17.3035 0.920815 16.3827 0 15.2474 0C14.6476 0 14.1078 0.25684 13.7324 0.666092C13.3564 0.25684 12.8173 0 12.2175 0C11.0822 0 10.1614 0.920815 10.1614 2.05613C10.1614 2.59522 10.3688 3.08561 10.7082 3.45253C10.3688 3.81944 10.1614 4.30984 10.1614 4.84892C10.1614 5.388 10.3582 5.853 10.6814 6.21568C10.3575 6.57907 10.1614 7.05817 10.1614 7.58244C10.1614 8.1067 10.3695 8.61403 10.7103 8.98095C10.3695 9.34786 10.1614 9.83967 10.1614 10.3795C10.1614 11.5148 11.0822 12.4356 12.2175 12.4356C12.6098 12.4356 12.9767 12.3248 13.2886 12.1343C13.2216 14.1446 13.1567 16.1852 13.0791 17.9993H14.3858C14.3117 16.0419 14.2377 14.0839 14.1643 12.1265C14.479 12.322 14.8501 12.4356 15.2481 12.4356C16.3834 12.4356 17.3042 11.5148 17.3042 10.3795C17.3042 9.83897 17.0961 9.34786 16.7553 8.98095C17.0961 8.61403 17.3042 8.12223 17.3042 7.58244C17.3042 7.04265 17.1074 6.57836 16.7842 6.21568C17.1081 5.85229 17.3042 5.37319 17.3042 4.84892C17.3042 4.32466 17.0968 3.81944 16.7574 3.45253H16.7567ZM13.7317 3.44618C13.7317 3.44618 13.7353 3.45041 13.7374 3.45253C13.7353 3.45465 13.7339 3.45676 13.7317 3.45888C13.7296 3.45676 13.7282 3.45465 13.7261 3.45253C13.7282 3.45041 13.7296 3.44829 13.7317 3.44618Z"
								fill={decideLinkColor('/forest')}
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M6.68914 2.77587C6.66303 2.77587 6.63763 2.77587 6.61152 2.77729C6.61364 2.7794 6.61505 2.78223 6.61717 2.78434C6.13736 2.18387 5.39929 1.79932 4.57162 1.79932C3.74394 1.79932 3.01082 2.18105 2.53171 2.77729C2.5423 2.77729 2.55359 2.7787 2.56417 2.7787C2.53242 2.77729 2.49996 2.77658 2.4675 2.77658C1.10427 2.77587 0 3.88015 0 5.24267C0 5.85584 0.224383 6.41609 0.594826 6.84793C0.224383 7.27905 0 7.84001 0 8.45318C0 9.8157 1.10427 10.92 2.4668 10.92C2.49573 10.92 2.52466 10.9186 2.55359 10.9179C2.54018 10.9179 2.52748 10.9193 2.51407 10.9193C2.90921 11.421 3.48428 11.7738 4.1419 11.8824C4.07205 13.9731 4.00502 16.1097 3.92458 18H5.23136C5.15445 15.9608 5.07754 13.9216 5.00063 11.8824C5.65896 11.7738 6.23473 11.4202 6.62987 10.9179V10.9193C6.64892 10.9193 6.66938 10.92 6.68985 10.92C8.05237 10.92 9.15664 9.8157 9.15664 8.45318C9.15664 7.84001 8.93297 7.27976 8.56323 6.84793C8.54841 6.86557 8.53289 6.88321 8.51737 6.90014C8.91462 6.46196 9.15735 5.88054 9.15735 5.24267C9.15735 3.88015 8.05308 2.77587 6.69055 2.77587H6.68914ZM4.35641 6.86768C4.35076 6.86063 4.34512 6.85428 4.33877 6.84793C4.34441 6.84087 4.35076 6.83452 4.35641 6.82746C4.35076 6.83452 4.34512 6.84157 4.33947 6.84793C4.34512 6.85428 4.35006 6.86133 4.3557 6.86768H4.35641ZM4.46719 6.68564C4.46296 6.69128 4.45802 6.69693 4.45378 6.70328C4.46931 6.68281 4.48412 6.66164 4.49824 6.64048C4.48765 6.65529 4.47777 6.67082 4.46648 6.68564H4.46719ZM5.51219 6.8578C5.51219 6.8578 5.50655 6.85569 5.50443 6.85498C5.50725 6.85569 5.51007 6.8571 5.5129 6.8578H5.51219ZM6.64892 7.70876C6.64892 7.70876 6.65245 7.7137 6.65457 7.71582L6.64822 7.70806C6.66233 7.70806 6.67573 7.70876 6.68985 7.70876C6.67644 7.70876 6.66303 7.70876 6.64963 7.70876H6.64892Z"
								fill={decideLinkColor('/forest')}
							/>
						</svg>

						<span>나무숲</span>
					</S.BottomNavLink>
				</li>

				<li>
					<S.BottomNavLink to="/messages" selected={isLinkSelected('/messages')}>
						<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0.134471 10.4021C1.91957 11.0649 3.70466 11.727 5.49049 12.3898C5.56332 12.4168 5.64489 12.4007 5.7017 12.3475L13.0846 5.46134C13.2674 5.29072 13.5376 5.53353 13.389 5.73405C11.5836 8.16433 9.77807 10.5939 7.97331 13.0242C7.87717 13.1532 7.82546 13.31 7.82546 13.4711V17.7943C7.82546 17.9846 8.06216 18.0728 8.18598 17.9277L11.0482 14.5802C11.1036 14.5153 11.1939 14.4912 11.274 14.5211C12.5486 14.9863 13.8231 15.4515 15.0969 15.9167C15.2164 15.9605 15.3468 15.8854 15.3686 15.76C16.2979 10.5873 17.228 5.41468 18.1573 0.242033C18.1879 0.0714104 18.0058 -0.0583796 17.8551 0.0269318C11.9382 3.36137 6.02143 6.69654 0.10461 10.031C-0.0476075 10.117 -0.030128 10.3416 0.133743 10.4021H0.134471Z"
								fill={decideLinkColor('/messages')}
							/>
						</svg>

						<span>메시지</span>
					</S.BottomNavLink>
				</li>
			</S.BottomNavLinkList>
		</S.BottomNavWrapper>
	);
};

export default BottomNav;
