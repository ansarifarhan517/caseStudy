import { createContext, useEffect, useState } from "react";
import React from 'react'
const DataStoreContext = createContext()

export const DatastoreProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);
    useEffect(() => {
        (async function () {
            try {
                let result = await fetch('https://jsonplaceholder.typicode.com/users')
                if (result.status !== 200) throw new Error('Api Data Error')
                setData(await result.json())

            } catch (error) {

                alert(error)

            }
        })();


    }, [])

    let value = {
        data,
        showModal,
        handleModalClose,
        handleModalShow,
        setData
    }

    return (
        <DataStoreContext.Provider value={value}>
            {children}
        </DataStoreContext.Provider>
    )
}

export default DataStoreContext