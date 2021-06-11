import React, { VFC } from 'react';
import { LABEL_TEXT } from '../../constants/a11y';
import { ERROR_MESSAGE_FOR_DEVELOPER } from '../../constants/message';
import { Palette } from '../../constants/palette';
import { modifyLine } from '../../redux/slice/lineSlice';
import { useAppDispatch } from '../../redux/store';
import { isMyEnumTypeBy } from '../../util/typeGuard';
import Button from '../@common/Button/Button';
import { SubmitFormInfoHandler } from '../@common/Form/Form';
import Modal from '../@common/Modal/Modal';
import LineColorRadio from '../LineColorRadio/LineColorRadio';
import LineNameInput from '../LineNameInput/LineNameInput';
import TransparentButton from '../@common/TransparentButton/TransparentButton';
import { LineModalButtonContainer, LineModifyForm } from './LinesModifyModal.styles';

export interface ModifyLine {
  id: number;
  name: string;
  color: Palette;
}

interface Props {
  line: ModifyLine;
  onClose: () => void;
}

const LineModifyModal: VFC<Props> = ({ line, onClose }) => {
  const dispatch = useAppDispatch();

  const onSubmitModifyLine: SubmitFormInfoHandler = (inputValues) => {
    const [name, color] = inputValues;

    if (!isMyEnumTypeBy(Palette)(color)) {
      console.error(ERROR_MESSAGE_FOR_DEVELOPER.COLOR_IS_NOT_PALETTE_TYPE);

      return;
    }

    const lineInfo = {
      lineId: line.id,
      name: String(name),
      color,
    };

    dispatch(modifyLine(lineInfo));

    onClose();
  };

  return (
    <Modal titleText={LABEL_TEXT.MODIFY_LINE} onClose={onClose}>
      <LineModifyForm onSubmitFormInfo={onSubmitModifyLine}>
        <LineNameInput initialValue={line.name} />
        <LineColorRadio initialValue={line.color} />
        <LineModalButtonContainer justifyContent="flex-end">
          <TransparentButton onClick={onClose}>{LABEL_TEXT.CANCEL}</TransparentButton>
          <Button>{LABEL_TEXT.CONFIRM}</Button>
        </LineModalButtonContainer>
      </LineModifyForm>
    </Modal>
  );
};

export default LineModifyModal;