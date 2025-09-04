import { Client, Account, Databases, Avatars } from "appwrite";
import "react-native-url-polyfill/auto"; // Expo fix

// Use env variables
export const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) // ✅ endpoint from .env
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID); // ✅ project ID from .env


export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);