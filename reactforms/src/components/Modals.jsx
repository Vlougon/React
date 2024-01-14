export default function ConfirmDeletion({ deleteClass, deleteFunction }) {

    const handleButton = (e) => {
        let deleteAction = false;

        if (e.target.textContent === 'Borrar') {
            deleteAction = true;
        }

        deleteFunction(deleteAction);
    };

    return (
        <div>
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">Confirmación de Borrado de {deleteClass}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleButton}></button>
                        </div>
                        <div className="modal-body">
                            ¿Estás seguro de querer eliminar la {deleteClass} seleccionada?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleButton}>Cerrar</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleButton}>Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}