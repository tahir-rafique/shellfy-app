import { createContext, useEffect, useState } from "react";
import { client, databases } from "../lib/appwriteConfig";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from './../hooks/useUser';


const DATABASE_ID = "68ba820f000098d77a7b"
const COLLECTION_ID = "books"
// table or collection both are same in AppWrite database.

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.equal('userId', user.$id)
        ]
      )
      setBooks(response.documents)
      console.log(response.documents)
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchBooksById(id) {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      )

      return response
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(

        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
    } catch (error) {
      console.log(error.message);
    }
  }

   async function deleteBook(id) {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id,
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  
  useEffect(() => {
    let unsubscribe
    const channel = `database.${ DATABASE_ID }.collections.${ COLLECTION_ID }.documents`
    if (user) {
      fetchBooks()

      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response

        if (events[0].includes('create')) {
          setBooks((prevBooks) => [...prevBooks, payload]);
        }

        if (events[0].includes("delete")) {
          setBooks((prevBooks) => prevBooks.filter((book) => book.$id !== payload.$id))
        }

      })
    } else (
      setBooks([])
    )

    // clean-up run before the useEffect executed
    return () => {
      if (unsubscribe) unsubscribe()
    }

  }, [user])


  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBooksById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
