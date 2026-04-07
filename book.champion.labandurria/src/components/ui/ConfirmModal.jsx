import React from "react";

function ConfirmModal({ show, onCancel, onConfirm }) {
  if (!show) return null;

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          
          <div className="modal-header">
            <h5 className="modal-title">Confirmar eliminación</h5>
            <button className="btn-close" onClick={onCancel}></button>
          </div>

          <div className="modal-body">
            <p>¿Deseás eliminar este libro?</p>
          </div>

          <div className="modal-footer">
            <button 
              className="btn btn-secondary" 
              onClick={onCancel}
            >
              Cancelar
            </button>

            <button 
              className="btn btn-danger" 
              onClick={onConfirm}
            >
              Sí, deseo eliminarlo
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;