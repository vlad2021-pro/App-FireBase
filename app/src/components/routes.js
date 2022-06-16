import { LOGIN_ROUTE ,  CHAT_ROUTE } from "./untils/const"
import Login from "./login"
import Chat from "./Chat"


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]


export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]