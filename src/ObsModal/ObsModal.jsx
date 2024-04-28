import React from 'react';


function ObsModal( { observation, i, setObservationModal} ) {
 
  return (
        <div className='box-item8'>
                <div>
                    <button style={{backgroundColor: "#484E6B", color:"#EEFFF1" }} onClick={() => setObservationModal(false)} >X</button>
                </div>
            <img src={observation.img} />
            <h1>{observation.response}</h1>
        </div>
  );
}

export default ObsModal;