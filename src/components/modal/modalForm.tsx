import React from "react";
import ReactDOM from "react-dom";

import {Container, Modal} from "react-bootstrap";
import { Button } from "components";

//props for this modal
interface modalProps {
    isShowing: boolean;
    minSize?: string;
    size: string;
    title: string;
    okText?: string;
    cancelText?: string;
    canSubmit?: boolean;
    onSubmit?: () => void;
    onClose?: () => void;
    footer?: boolean;
    children: React.ReactNode;
}

export const ModalForm = ({
                                isShowing,
                                minSize = "",
                                size,
                                title,
                                okText = "Submit",
                                cancelText = "Cancel",
                                onSubmit,
                                canSubmit = true,
                                onClose,
                                footer = true,
                                children,
                            }: modalProps) => {
    //state for show/hide modal
    const [showModal, setShowModal] = React.useState(false);

    //reset show state
    React.useEffect(() => {
        setShowModal(isShowing);
    }, [isShowing]);

    //lock/unlock scroll bar
    React.useEffect(() => {
        showModal && (document.body.style.overflow = "hidden");
        !showModal && (document.body.style.overflow = "unset");
    }, [showModal]);

    //handler for modal
    const handleSubmit = () => {
        onSubmit();
        onClose();
        setShowModal(false);
    };

    return ReactDOM.createPortal(
        <>
            {showModal ? (
                <>
                    <Modal show={showModal}>
                        <Container
                        >
                            {/*content*/}
                            <div>
                                {/*header / title*/}
                                <Modal.Title >
                                    <div>
                                        <h3 className="pt-3 text-center">
                                            {title}
                                        </h3>
                                    </div>
                                </Modal.Title >
                                {/*footer / action button*/}
                                {footer ? (
                                    <>
                                        <Modal.Body >
                                            {children}
                                        </Modal.Body>
                                        <Modal.Footer
                                            className="flex items-center justify-end p-6 gap-3 border-t border-solid border-secondBg dark:border-white rounded-b">
                                            <Button
                                                variant="danger"
                                                className="slide-down"
                                                onClick={() => {
                                                    onClose();
                                                    setShowModal(false);
                                                }}
                                                type="button"
                                            >
                                                {cancelText}
                                            </Button>
                                            <Button onClick={handleSubmit} disabled={!canSubmit}>
                                                {okText}
                                            </Button>
                                        </Modal.Footer>
                                    </>
                                ) : (
                                    <Modal.Body>{children}</Modal.Body>
                                )}
                            </div>
                        </Container>
                    </Modal>
                    <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>,
        document.getElementById("modal-root")
    );
};
