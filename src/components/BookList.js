import React,{useContext} from 'react'
import {BookContext} from "../contexts/BookContext"

const BookList =()=> {
    const {book, deleteBook}=useContext(BookContext)
    return (
        <div style={{display :"flex", justifyContent:"center",flexDirection:"column",alignItem:"center"}}>
            
            {book.map((b) => (
                <div key = { b.id} style= {{borderLeft:"10px solid royalblue",width:"30%", margin:10,boxShadow:"4px 5px #000"}}>
                    <h3>{b. name}</h3>
                    <h3>{b. author}</h3>
                    <button onClick={()=>deleteBook(b.id)} >X</button>
                     </div>

            ))}

            
        </div>
    )
}
export default BookList
