import React from 'react';


function ObsModal( { observation, i, setObservationModal} ) {
 
  return (
        <div>
            <img src={observation.modal} />
            <img src={observation.img} />
            <h1>{observation.response}</h1>
        </div>
  );
}

export default ObsModal;