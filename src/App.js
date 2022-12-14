import DataStoreContext from './Context/Datastore';
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import CustomModal from './Components/CustomModal';
function App() {
  const { data, handleModalShow } = useContext(DataStoreContext)
  const [currentModalData, setCurrentModalData] = useState({})
  const EditHandler = (e, storedData) => {
    let name;
    if (e.target.tagName == 'path') name = e.target.parentElement.parentElement.dataset.name
    else if (e.target.tagName == 'svg') name = e.target.parentElement.dataset.name
    else name = e.target.dataset.name
    setCurrentModalData(storedData.filter(i => i.name == name)[0])
    handleModalShow()
  }

  return (
    <div className='container'>
      <div className='row p-2'>
        {data.length > 0 && data.map((i, index) => {
          return <Card key={i.username} data={i} onEditHandler={EditHandler} />
        })}
      </div>
      <CustomModal currentModalData={currentModalData}></CustomModal>

    </div>
  );
}

export default App;
