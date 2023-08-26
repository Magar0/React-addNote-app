import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import Footer from "./Footer";
import "./style.css"
import { alignProperty } from "@mui/material/styles/cssUtils";


const MainApp = () => {

    const [data, setData] = useState([])


    const addNote = (note) => {

        setData(pre => {
            return [...pre, note]
        })
    }


    const deleteItem = (id) => {

        setData(pre => {
            return pre.filter((curElem, ind) => {
                return ind !== id;
            })
        })

    }

    return (
        <>
            < Header />
            < CreateNote passNote={addNote} />

            <section className="note-grp p-3">

                {data.map((curElem, ind) => {
                    // const {title,content}= curElem
                    return <Notes title={curElem.title} content={curElem.content} key={ind} id={ind} delete={deleteItem} />
                })}

            </section>


            <Footer />

        </>
    )
}

export default MainApp