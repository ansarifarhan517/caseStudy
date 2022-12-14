import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useEffect, useState } from 'react'
import DataStoreContext from '../Context/Datastore';

const CustomModal = ({ currentModalData }) => {
    const { showModal, handleModalClose, data, setData } = useContext(DataStoreContext)
    const [userData, setUserData] = useState({ name: currentModalData.name, email: currentModalData.email, phone: currentModalData.phone, website: currentModalData.website })

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(userData)
    }

    const handleInput = (e) => {

        let key = e.target.name, value = e.target.value, temp = [...data]

        temp.forEach((i, index) => {
            if (currentModalData.id == i.id) temp[index][key] = value
        })
        setUserData(temp)

    }

    return (
        <Modal show={showModal} onHide={handleModalClose} centered>
            <form onSubmit={handleSubmit}>

                <Modal.Header closeButton>
                    <Modal.Title>Basic Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="mb-3 row">
                        <label htmlFor="name" className="col-sm-2 col-form-label text-end pe-0"><span className='text-danger'>*</span>Name:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" name='name' onChange={handleInput} defaultValue={currentModalData.name} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label text-end pe-0"><span className='text-danger'>*</span>Email:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" name='email' onChange={handleInput} defaultValue={currentModalData.email} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label text-end pe-0"><span className='text-danger'>*</span>Phone:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="phone" name='phone' onChange={handleInput} defaultValue={currentModalData.phone} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="website" className="col-sm-2 col-form-label text-end pe-0"><span className='text-danger'>*</span>Website:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="website" name='website' onChange={handleInput} defaultValue={currentModalData.website} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalClose} type='submit'>
                        OK
                    </Button>
                </Modal.Footer>
            </form>

        </Modal>
    )
}

export default CustomModal