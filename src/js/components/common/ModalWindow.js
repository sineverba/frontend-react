import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalWindow = (props) => {

    const { fetchItem, show, idDetail } = props;

    useEffect(() => {
        fetchItem(idDetail)
    }, [fetchItem, idDetail])

    return (
        <Modal show={show} onHide={props.closeModalDetail}>
            <Modal.Body>
                {props.componentDetail}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.closeModalDetail}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWindow;