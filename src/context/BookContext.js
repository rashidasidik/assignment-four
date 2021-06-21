import React from 'react'
import {createContext,  useState} from "react"

export const BookContext= createContext()
function BookContextProvider({children}){
    const[book, setBook]= useState([
        { name:" the gods are not to be belem",auther:"aminu" ,id: 1},
        { name:" the gods are not to be belem",auther:"aminu" ,id: 1}
    ])
    return(
<BookContext.Provider value={{}}>
    {children}
</BookContext.Provider>
    )
}
export default BookContextProvider