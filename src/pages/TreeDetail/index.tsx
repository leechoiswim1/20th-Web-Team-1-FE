import React from 'react';
import { Clouds, Tree, MessageBox, WateringButton } from '@/components/features/NoticeTree';
import * as S from './TreeDetail.styled';
import LeftButton from '@/assets/images/trees/tree_left_button.svg';
import RightButton from '@/assets/images/trees/tree_right_button.svg';
import useTreeDetail from './useTreeDetail';
const TreeDetail = () => {
	const {
		treeId,
		treeMessages,
		treeDetailInfo,
		updateReadMessageHandler,
		moveTree,
		showMessage,
		selectedMessage,
		setShowMessage,
	} = useTreeDetail();

	return (
		<>
			<S.TemporaryWrapper>
				<Clouds />

				<S.TreeDetailTextWrapper>
					<S.TreeDetailMainText>
						{treeDetailInfo?.name === 'DEFAULT' ? '기본폴더' : treeDetailInfo?.name}
					</S.TreeDetailMainText>
					<span>맺혀 있는 열매 : {treeDetailInfo?.messages.length}개</span>
				</S.TreeDetailTextWrapper>

				<Tree updateReadMessageHandler={updateReadMessageHandler} messages={treeMessages ? treeMessages : null} />

				{showMessage && (
					<MessageBox selectedMessage={selectedMessage} showMessageHandler={() => setShowMessage(false)} />
				)}

				<WateringButton treeId={treeId} />

				{treeDetailInfo?.prevId !== 0 && (
					<S.PrevButton>
						<img src={LeftButton} onClick={() => moveTree(treeDetailInfo?.prevId)} alt="move to prev tree" />
					</S.PrevButton>
				)}
				{treeDetailInfo?.nextId !== 0 && (
					<S.NextButton>
						<img src={RightButton} onClick={() => moveTree(treeDetailInfo?.nextId)} alt="move to next tree" />
					</S.NextButton>
				)}
			</S.TemporaryWrapper>
		</>
	);
};

export default TreeDetail;