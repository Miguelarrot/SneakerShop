function ModalSignIn ({show,onClose}){

    if(!show) return (null);
    return (
        <>
        <div
        className={`modal fade ${show ?'show':''}`}
        style={{display : show ? 'block':'none'}}
        tabIndex={-1}
        onClick={onClose}>
            <div className="modal-dialog modal-lg"
            onClick={(e)=> e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Iniciar Sesion</h5>
                        <button
                        type="button"
                        className="btn-close"
                        aria-label="Cerrar"
                        onClick={onClose}>
                        </button>
                    </div>
                    <div className="modal-body">
                        <label htmlfor="exampleFormControlInput1" 
                        className="form-label">Ingrese su correo</label>
                        <input 
                        type="email"
                        className="form-control"
                        >
                        </input>
                        <label htmlfor="exampleFormControlInput2" 
                        className="form-label">Ingrese su contraseña</label>
                        <input type="password" className="form-control"></input>
                    </div>
                </div>
            </div>
        </div>
        {show && <div className="modal-backdrop fade show" onClick={onClose}></div>}
        </>
    );
}
export default ModalSignIn;