import React, { cloneElement, FC, ReactElement, useMemo } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import { useA11yDialog } from "./a11yDialog";
import ModalContent from "../ModalContent/ModalContent";
import ModalHeader from "../ModalHeader/ModalHeader";
import useBodyScrollLock from "./useBodyScrollLock";
import useShowHideModal from "./useShowHideModal";
import L3ComponentProps from "../../types/L3ComponentProps";
import { isModalContent, isModalFooter, isModalHeader, ModalWidth, validateTitleProp } from "./ModalHelper";
import { NOOP } from "../../utils/function-utils";
import styles from "./Modal.module.scss";

interface ModalProps extends L3ComponentProps {
  /**
   * Id of the modal, used internally and for accessibility
   */
  id: string;
  /**
   * Show/hide the Dialog
   */
  show: boolean;
  /**
   * Title for the modal, mandatory when ModalHeader isn't provided in children
   */
  title?: string;
  /**
   * Description for the modal title
   */
  description?: string;
  /**
   * Called when the modal is closed (by close button/click outside/esc key)
   */
  onClose: () => void;
  /**
   *  Makes the dialog behave like a modal (preventing closing on click outside of
   *  ESC key)..
   */
  alertDialog?: boolean;
  /**
   *  Used for the fromOrigin animation
   */
  triggerElement?: Element;
  /**
   *  Define modal width
   */
  width?: typeof ModalWidth;
  /**
   *  Hide the modal close button
   */
  hideCloseButton?: boolean;
  /**
   *  Aria label for the close button
   */
  closeButtonAriaLabel?: string;
  /**
   *  classNames for specific parts of the dialog
   */
  classNames?: {
    container: string;
    overlay: string;
    modal: string;
  };
  /**
   *  Dialog content
   */
  children?: ReactElement | ReactElement[];
}

const Modal: FC<ModalProps> & { width?: typeof ModalWidth } = ({
  classNames = { container: "", overlay: "", modal: "" },
  id,
  show,
  title = "",
  description = "",
  onClose = NOOP,
  alertDialog = false,
  children,
  triggerElement,
  width = ModalWidth.DEFAULT,
  hideCloseButton = false,
  closeButtonAriaLabel = "close"
}) => {
  const childrenArray: ReactElement[] = useMemo(
    () => (children ? (React.Children.toArray(children) as ReactElement[]) : []),
    [children]
  );
  validateTitleProp(title, childrenArray);

  const [instance, attr] = useA11yDialog({
    id,
    alertDialog
  });

  // lock body scroll when modal is open
  useBodyScrollLock({ instance });

  // show/hide and animate the modal
  const { closeDialogIfNeeded } = useShowHideModal({ instance, show, triggerElement, onClose, alertDialog });

  const header = useMemo(() => {
    const { id } = attr.title;
    const header = childrenArray.find(isModalHeader);
    if (header) {
      return cloneElement(header, { id, closeModal: onClose });
    }

    return (
      <ModalHeader
        title={title}
        description={description}
        closeModal={onClose}
        id={id}
        hideCloseButton={hideCloseButton}
        closeButtonAriaLabel={closeButtonAriaLabel}
      />
    );
  }, [attr.title, childrenArray, title, description, onClose, hideCloseButton, closeButtonAriaLabel]);

  const content = useMemo(() => {
    return (
      childrenArray.find(isModalContent) || (
        <ModalContent>{childrenArray.filter(child => !isModalHeader(child) && !isModalFooter(child))}</ModalContent>
      )
    );
  }, [childrenArray]);

  const footer = useMemo(() => {
    return childrenArray.find(isModalFooter) || null;
  }, [childrenArray]);

  const dialog = ReactDOM.createPortal(
    <div {...attr.container} className={cx(styles.container, classNames.container)} data-testid="l3-dialog-container">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        onClick={closeDialogIfNeeded}
        className={cx(styles.overlay, classNames.overlay)}
        data-testid="l3-modal-overlay"
      />
      <div
        {...attr.dialog}
        className={cx(styles.dialog, classNames.modal, {
          [styles.default]: width === ModalWidth.DEFAULT,
          [styles.full]: width === ModalWidth.FULL_WIDTH
        })}
      >
        {header}
        {content}
        {footer}
      </div>
    </div>,
    document.body
  );

  return ReactDOM.createPortal(dialog, document.body);
};

Object.assign(Modal, {
  width: ModalWidth
});

export default Modal;
