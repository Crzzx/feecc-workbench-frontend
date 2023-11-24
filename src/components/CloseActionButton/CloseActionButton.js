import React from "react";
import styles from "./CloseActionButton.module.css";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

const CloseActionButton = (props) => {
  const { onClose } = useContext(ModalActionsContext);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

const CloseActionButton = (key) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <button
      className={styles.notificationButton}
      onClick={() => closeSnackbar(key)}
    >
      {t('CloseButton')}
    </button>
  );
};
};
export default CloseActionButton;
