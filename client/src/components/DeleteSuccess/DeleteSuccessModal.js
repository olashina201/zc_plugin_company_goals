import { useDispatch, useSelector } from 'react-redux';

import { deleteSuccessAction } from '../../redux/deleteGoal.slice';
import { FadedBg, DeleteContent, DeleteHead, DeleteInfo, DeleteModal, DelButton, XBtn, Images } from '../Deletemodal/Delete.styled';
import deleteSuccessImg from './deleteSuccess';

const DeleteSuccess = () => {
  const dispatch = useDispatch();
  const showDeleteSuccesslModal = useSelector(({ deleteGoal }) => deleteGoal.showDeleteSuccessModal);
  return (
    <FadedBg className="faded" show={showDeleteSuccesslModal}>
      <DeleteModal>
        <XBtn onClick={() => dispatch(deleteSuccessAction())}>X</XBtn>
        <Images>
          <img src={deleteSuccessImg.thumbs} alt="trash" />
        </Images>
        <DeleteContent>
          <DeleteHead className="delete-head">Goal Deleted Successfully </DeleteHead>
          <DeleteInfo>Clicking the return button to go back to the main dashboard.</DeleteInfo>
          <DelButton type="submit">Ok</DelButton>
        </DeleteContent>
      </DeleteModal>
    </FadedBg>
  );
};

export default DeleteSuccess;
