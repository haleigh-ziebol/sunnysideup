import React from 'react';


function ObsModal( { observation, i, setObservationModal} ) {
 
  return (
        <div className='box-item8'>
                <div className='box-item8'>
                    <button style={{backgroundColor: "#484E6B", color:"#EEFFF1" }} onClick={() => setObservationModal(false)} >X</button>
                </div>
            <img src={observation.img} />
        </div>
  );
}

export default ObsModal;