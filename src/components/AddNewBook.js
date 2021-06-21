import React,{useContext,useState} from 'react'
import {BookContext} from "../contexts/BookContext"
import{ v5} from "uuid"
const AddNewBook = () => {

const {addNewBook}=useContext(BookContext)

const [bookName, setbookName] = useState("")
const [authorName, setauthorName] = useState("")

const handlesubmit=(e)=>{
    e.preventDefault()
    addNewBook({name:bookName,author:authorName,id:v5})
}

    return (
        <form onSubmit={handlesubmit}>
           <input type="text" placeholder="enter name of book" onChange={(t)=>setbookName(t.target.value)}/> 
           <input type="text" placeholder="enter author name" onChange={(t)=>setauthorName(t.target.value)} /> 
           <input type="submit" value="ADD NEW"/>
        </form>
    )
}

export default AddNewBook
