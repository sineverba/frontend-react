import { Button, Modal } from "react-bootstrap";

const ModalWindow = (props) => {
    return (
        <Modal show={props.show} onHide={props.closeModalDetail}>
            <Modal.Body>
                <h1>{props.idDetail}</h1>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.closeModalDetail}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalWindow;