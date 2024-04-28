import React from 'react';


function ObsModal( { observation, i, setObservationModal} ) {
 
  return (
        <div>
            <h1>{observation.response}</h1>
        </div>
  );
}

export default ObsModal;