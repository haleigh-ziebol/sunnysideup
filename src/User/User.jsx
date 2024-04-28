import React, {useState} from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

import './User.css'
import ObsModal from '../ObsModal/ObsModal';
import NavBar from '../NavBar/NavBar';

import Modal from '@mui/material/Modal';



function UserPage() {

    const [observationModal, setObservationModal] = useState(false);
    const [observationForModal, setObservationForModal] =useState({});
    const [obsI, setObsI] = useState(0);

    const handleClose = () => setObservationModal(false);

    const { isLoaded } = useLoadScript({

    googleMapsApiKey: '',
    });

    const mapStyle = {        
      height: "475px",
      width: "360px"
    };

    //sets observation modal
    const modalSelect = (observation, i) => {
      setObservationModal(true);
      setObsI(i)
      setObservationForModal(observation)
    }
  
    
    const observationList = [
      {
        id:1, 
        location: [45, -93.2],
        img: "avatars/egg1.svg",
        response: "I went for a walk by the lake!"
      },
      {
        id:2, 
        location: [44.97, -93.4],
        img: "avatars/egg2.svg",
        response: "Slept in late"
      },
      {
        id:3, 
        location: [44.90, -93.3],
        img: "avatars/egg3.svg",
        response: "DRANK A WHOLE GALLON OF SUNNY D!!!"
      },
      {
        id:4, 
        location: [44.80, -93.3],
        img: "avatars/egg4.svg",
        response: "Cuddled my cats- cuddle yours for me"
      },
      
    ]

  return (
    <div className='profilepage'>
      <div className='mapcontainer'>
        <Modal
          open={observationModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='box-item8'>
            <img src={observationForModal.img} width="200" height ="200"/>
            <h1>{observationForModal.response}</h1>
          </div>
        </Modal>
              {!isLoaded ? (
            <h1>Loading...</h1>
          ) : ( 
            <div>
              <GoogleMap
                mapContainerStyle={mapStyle}
                zoom={10}
                center={{lat: 44.961026, lng: -93.234539}}
              >
                { 
                  observationList.map((observation, i) => {
                    return <MarkerF 
                      position={{lat: parseFloat(observation.location[0]), lng: parseFloat(observation.location[1])}} 
                      key={observation.id}
                      onClick={() => modalSelect(observation, i)}
                      // icon={{
                      //   url: (require('./egg.svg').default),
                      //   scale:7
                      // }}
                    />
                  })
                } 
              </GoogleMap>
            </div>
          )
        }
      </div>
        <NavBar/>
    </div>
  );
}

export default UserPage;