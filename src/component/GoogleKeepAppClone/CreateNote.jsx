import React, { useState } from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [expand, setExpand] = useState(false)

    const inputEvent = (event) => {

        const { name, value } = event.target;

        setNote(pre => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const addBtn = () => {
        if (note.title) {

            props.passNote(note);
            setNote({
                title: "",
                content: ""
            });
        }
        else {
            alert("title can't be blank in Thapa keep app")
        }

        setExpand(false);

    }

    const expandBox = () => {
        setExpand(true);
    }

    const normal = () => {
        setExpand(false)
    }

    return (
        <div className="main-note text-center p-4" onDoubleClick={normal} >

            <form className='col-8 offset-2 col-lg-6 offset-lg-3  col-xl-4 offset-xl-4 '>

                {expand && <input className='form-control text-center mb-2 fs-5 fw-bold rounded-2 shadow-lg ' type="text" placeholder='Title' autoComplete='off' name='title' value={note.title} onChange={inputEvent} />
                }


                <textarea className='form-control rounded-4   shadow-lg ' name="content" rows={expand ? "5" : "2"} placeholder='Write a note.' value={note.content} onChange={inputEvent} onClick={expandBox} />


                {expand && <Tooltip title="Add">
                    <Button type='submit' className='btn-add float-end rounded-circle' variant='contained' onClick={addBtn} >
                        <AddIcon />
                    </Button>
                </Tooltip>}
            </form>

        </div>

    )
}

export default CreateNote