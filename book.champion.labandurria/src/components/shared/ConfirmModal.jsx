import { Button, Modal } from 'react-bootstrap';

const ConfirmModal = ({ show, onHide, onConfirm, bookTitle }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Realmente desea eliminar el libro <strong>{bookTitle}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Sí, deseo eliminarlo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;