import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

const Notes = (props) => {

  const myStyle = {
    color: "orange"
  }

  return (
    <>
      <div className="card my-2 mb-4">
        <div className="card-body">
          <h5 style={myStyle} className="card-title text-decoration-underline text-center">{props.title}</h5>
          <p className="card-text">{props.content}</p>

          <Tooltip title="Remove">
            <Button className='btn-dlt float-end' variant='text' onClick={() => props.delete(props.id)} > <DeleteIcon /> </Button>
          </Tooltip>

        </div>
      </div>

    </>
  )
}

export default Notes;