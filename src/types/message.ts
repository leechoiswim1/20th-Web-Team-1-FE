export type Message = {
	alreadyRead: boolean;
	anonymous: boolean;
	content: string;
	createdDate: string;
	favorite: boolean;
	id: number;
	opening: boolean;
	senderNickname: string;
	senderProfileImage: string;
};

export type MessageDetailData = {
	nextId: number;
	prevId: number;
	responseDto: Message;
};