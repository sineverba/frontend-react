import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Loading from "./Loading";

const ModalWindow = (props) => {

    const { fetchItem, show, idDetail } = props;

    useEffect(() => {
        if (show) {
            fetchItem(idDetail);
        }
    }, [fetchItem, show, idDetail])

    return (
        <Modal show={show} onHide={props.closeModalDetail}>
            <Modal.Body>
                {
                    props.isLoadingItem ?

                    <Loading />

                    :

                    props.componentDetail

                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.closeModalDetail}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWindow;