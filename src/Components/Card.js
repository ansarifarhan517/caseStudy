import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faHeart as faHeartRegular, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faPhone, faTrash, faHeart as faHeartFill } from '@fortawesome/free-solid-svg-icons'
import DataStoreContext from '../Context/Datastore'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CustomModal from './CustomModal'


const Card = ({ data, onEditHandler }) => {
    const MySwal = withReactContent(Swal)

    const { data: storedData, setData } = useContext(DataStoreContext)



    const deleteHandler = (e) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                let name;
                if (e.target.tagName == 'path') name = e.target.parentElement.parentElement.dataset.name
                else if (e.target.tagName == 'svg') name = e.target.parentElement.dataset.name
                else name = e.target.dataset.name
                setData(storedData.filter(i => i.name != name))
                Swal.fire(
                    'Deleted!',
                    'Your Profile has been deleted.',
                    'success'
                )
            }
        })

    }

    const LikeHandler = (e) => {
        let name;
        if (e.target.tagName == 'path') name = e.target.parentElement.parentElement.dataset.name
        else if (e.target.tagName == 'svg') name = e.target.parentElement.dataset.name
        else name = e.target.dataset.name

        const result = storedData.reduce((acc, i, index) => {
            if (i.name == name) {
                if (storedData[index].liked) storedData[index].liked = !storedData[index].liked //For Toggle
                else storedData[index].liked = true
            }
            acc = storedData
            return acc
        }, {})
        setData([...result]) // To CreateNew Object to update State



    }
    return (
        <>
            <div className='col-sm-3'>
                <div className="card mb-2 rounded-0">
                    <img src={`https://avatars.dicebear.com/v2/avataaars/${data.username}.svg?options[mood][]=happy`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text"><span><FontAwesomeIcon icon={faEnvelope} /> </span>{data.email}</p>
                        <p className="card-text"><span><FontAwesomeIcon icon={faPhone} /> </span>{data.phone}</p>
                        <p className="card-text"><span><FontAwesomeIcon icon={faGlobe} /> </span>{data.website}</p>
                    </div>

                    <div className='card-footer'>
                        <div className='d-flex justify-content-between '>

                            <button type='button' className='btn btn-sm' onClick={LikeHandler} data-name={data.name}>
                                {data.liked ? <FontAwesomeIcon icon={faHeartFill} style={{ color: 'red' }} /> : <FontAwesomeIcon icon={faHeartRegular} style={{ color: 'red' }} />} </button>
                            <span>|</span>
                            <button type='button' className='btn btn-sm' onClick={(e) => onEditHandler(e, storedData)} data-name={data.name}> <FontAwesomeIcon icon={faPenToSquare} /></button>
                            <span>|</span>

                            <button type='button' className='btn btn-sm' onClick={deleteHandler} data-name={data.name}><FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Card