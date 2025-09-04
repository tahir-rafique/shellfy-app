import { createContext, useEffect, useState } from "react" // 1.  react context-hook ko import kea

import { account } from '../lib/appwriteConfig';
import { ID } from 'react-native-appwrite';

export const UserContext = createContext()  // 2. context-hook sy ek "context" create kea, aur usy export kar dea tak ky har jaga use kar sakain jdr chahyian,

export function UserProvider({ children }) {
    // 3. ek Provider func banaya, jo 2 cheezain karta hai, 
    //    1st it allows us to create, track, and update state for context( in our case is user State).

    const [user, setUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
        } catch (error) {
            // console.log(error.message)
            throw Error(error.message);
        }
    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) {
            throw Error(error.message);
        }
    }

    async function logout() {
        await account.deleteSession("current")
        setUser(null)
    }

    async function gerInitialUserValue() {
        try {
            const response = await account.get();
            setUser(response)
        } catch (error) {
            setUser(null)
        } finally {
            setAuthChecked(true)
        }

    }
    useEffect(() => {
        gerInitialUserValue();
    }, [])

    return (
        // 4. created "context" ko use karna hai, aur built in "Provider" add karna hai, aur "values" prop bajna hai with values and func which we want to access in the whole app.
        <UserContext.Provider value={{ user, login, logout, register, authChecked}}>
        
            {children}
        </UserContext.Provider>
    );
}

// Wrap the UserProvider component around the root layout stack


//  next steps inside Custom hook file