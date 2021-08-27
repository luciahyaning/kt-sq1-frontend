import React, {useEffect, useState} from "react";
import {Container, Modal} from "react-bootstrap";
import ReactDOM from "react-dom";
import {Button} from "../button";


//props for this modal
interface modalProps {
    isShowing: boolean;
    data?: any;
    onSubmit: (data: any) => void;
    onClose: () => void;
    message: string;
    okButton: string;
    cancelButton: string;
}

export const ModalConfirmation = ({
                                      isShowing,
                                      data = null,
                                      onSubmit,
                                      onClose,
                                      message,
                                      okButton,
                                      cancelButton,
                                  }: modalProps) => {
    //state for this modal
    const [showModal, setShowModal] = useState(false);

    //reset props
    useEffect(() => {
        updateState(isShowing);
    });

    useEffect(() => {
        showModal && (document.body.style.overflow = "hidden");
        !showModal && (document.body.style.overflow = "unset");
    }, [showModal]);

    const updateState = (val: boolean) => {
        setShowModal(val);
    };

    const handleSubmitData = () => {
        onSubmit(data);
        onClose();
        setShowModal(false);
    };

    return ReactDOM.createPortal(
        <>
            {showModal ? (
                <>
                    <Modal show={showModal}>
                        <Container>
                            {/*content*/}
                            <Modal.Body
                            >
                                {/*body / input data*/}
                                <Modal.Body>
                                    {message}
                                </Modal.Body>
                                {/*footer / action button*/}
                                <Modal.Footer>
                                    <Button
                                        variant="neutral"
                                        onClick={() => {
                                            onClose();
                                            setShowModal(false);
                                        }}
                                    >
                                        {cancelButton}
                                    </Button>
                                    <Button className="danger" onClick={handleSubmitData}>
                                        {okButton}
                                    </Button>
                                </Modal.Footer>
                            </Modal.Body>
                        </Container>
                    </Modal>
                    {/*<div className="opacity-60 fixed inset-0 z-40 bg-black"></div>*/}
                </>
            ) : null}
        </>,
        document.getElementById("modal-root")
    );
};
