import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			bt_grey: {
				20: string;
				30: string;
				40: string;
				50: string;
				55: string;
				85: string;
				90: string;
				100: string;
				120: string;
			};
			bt_primary: {
				20: string;
				25: string;
				50: string;
				100: string;
				200: string;
				300: string;
			};
			bt_blue: {
				20: string;
				200: string;
			};
			bt_yellow: { 50: string };
			bt_white: string;
		};
		fontSize: {
			f10: string;
			f12: string;
			f13: string;
			f14: string;
			f15: string;
			f16: string;
			f20: string;
		};
		fontWeight: {
			light: number;
			normal: number;
			medium: number;
			semiBold: number;
			bold: number;
		};
		lineHeight: {
			lh10: string;
			lh12: string;
			lh13: string;
			lh14: string;
			lh15: string;
			lh16: string;
			lh20: string;
		};
	}
}