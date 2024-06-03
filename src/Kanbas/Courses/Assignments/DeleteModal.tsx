import React from 'react';

export default function DeleteModal({ showModal, handleClose, handleDelete }: 
    { showModal: any; handleClose: any; handleDelete: any }) {
  
    return (
      <div className={showModal ? "modal fade show" : "modal fade"} style={showModal ? { display: "block" } : { display: "none" }} id="wd-delete-assignment-dialog" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Assignment</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this assignment?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                No
              </button>
              <button type="button" className="btn btn-danger" onClick={handleDelete}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }