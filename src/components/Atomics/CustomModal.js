import React from "react";

const CustomModal = ( props ) => {
  // console.log(props)
  return (
    <>
      <div className={`modal fade d-block show`} id="exampleModal" >
        <div className={`modal-dialog modal-dialog-centered modal-${props.size} `} role="document">
          <div className="modal-content book_modal">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" onClick={() => props._oncloseModal()}>
                  ×
                </span>
              </button>
            </div>
            <div className="modal-body">
              {
                  props.children 
              }
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-round btn-default"
                data-dismiss="modal"
                onClick={() => props._oncloseModal()}
              >
                Close
              </button>
              {props?.updation ? 
               (<button type="button" className="btn btn-round btn-primary" onClick={() => props.onSaveButton() } disabled={props.isDisabled || false } >
                Save changes
              </button> ):null
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
