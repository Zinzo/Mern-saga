import React from 'react';
  
import Modal from 'react-modal';

const BoardModal = (props) => {

    const { 
        isModalOpen,
        fetchCloseModal,
    } = props.datas;

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };

    return(
        <Modal
            isOpen={isModalOpen}
            contentLabel="Example Modal"
        >

            testtesttesttest

            <button onClick={()=>fetchCloseModal()}>
                closeModal
            </button>
        </Modal>
    )
    
}

export default BoardModal;