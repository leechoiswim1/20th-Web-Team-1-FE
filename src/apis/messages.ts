import API_URL, { DELETE, GET, PUT } from '@/constants/api';
import { MessageDetailData } from '@/types/message';
import { getStorageItem, storageAccessKey } from '@/utils/local-storage';
import { axiosInstance, requester } from './requester';

export const deleteMessage = async (messageId: string) => {
	const {
		messages: { index },
	} = API_URL;

	try {
		const data = {
			messageIds: [messageId],
		};

		const { status } = await requester({
			method: DELETE,
			url: index,
			data,
		});

		return status;
	} catch (error) {
		// 에러 핸들링
	}
};

export const readMessage = async (messageId: string | undefined) => {
	const {
		messages: { read },
	} = API_URL;

	try {
		const { status } = await requester({
			method: PUT,
			url: `${read}?messageId=${messageId}`,
		});

		return status;
	} catch (error) {
		// 에러 핸들링
	}
};

export const messageDetailFetcher = async (messageId: string | undefined) => {
	const response = await requester<MessageDetailData>({
		method: GET,
		url: `/messages/${messageId}`,
	});

	return response.payload;
};
