import {createContext,useState} from "react"


 export const BookContext = createContext ();

 function BookContextProvider({children}){
     const [book, setBook] = useState([
        {name: "Gods are not to blame",author:"Okonko",id:1},
        {name: "Country mouse",author:"Serwaa",id:2}
    ])

    const addNewBook=(newbook)=>{
        setBook([newbook, ...book])
    }

    const deleteBook=(id)=>{
        setBook(book.filter((b)=>b.id!==id))
    }
     return(
         <BookContext.Provider value={{book,addNewBook,deleteBook}}>
             {children}

         </BookContext.Provider>
     )
 }

 export default BookContextProvider;
