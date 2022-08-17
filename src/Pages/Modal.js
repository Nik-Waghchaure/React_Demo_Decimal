import { Box } from '@mui/system';
import Button from '@material-ui/core/Button';
import React from 'react';
import Modal from 'react-modal';

import './Modal.css';
import { Stack, Typography } from '@mui/material';

const popUpBox = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const Modalex = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }


  return (
   <Box >
      <Button className='modalheadd' onClick={openModal}>Open Modal</Button>
      <Modal
      closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={modalIsOpen}
        style={popUpBox}
      >
        <Box >
          <Stack>
            <Button onClick={closeModal}>close</Button>
            <Typography> Modal Opened</Typography>
          </Stack>
        </Box>
      </Modal>

    </Box>
  )
}

export default Modalex
