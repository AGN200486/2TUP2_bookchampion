import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ConfirmModal from '../shared/ConfirmModal';

const BookItem = ({ id, title, author, rating, pageCount, imageUrl, available, onDelete}) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    const [bookTitle, setBookTitle] = useState(title);

    const handleConfirmDelete = () => {
        onDelete(id); // Ejecuta la función que está en App.jsx
        handleCloseModal();
    };

    const handleClick = () => {
        setBookTitle("Actualizado!");
    };

    return (
        <>
        <Card className="mx-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{bookTitle}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>
                    <div>{rating} estrellas</div>
                    <p>{pageCount} páginas</p>
                    <p>{available ? "Disponible" : "Reservado"}</p>
                </div>
                <Button variant="dark" onClick={handleClick}>
                    Cambiar titulo
                </Button>

                <Button variant="danger" onClick={handleOpenModal}>
                    Eliminar Libro
                </Button>
            </Card.Body>
        </Card>
        <ConfirmModal 
                show={showModal} 
                onHide={handleCloseModal} 
                onConfirm={handleConfirmDelete} 
                bookTitle={title}
        />
        </>
    );
};

export default BookItem;
