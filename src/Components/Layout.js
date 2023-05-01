import { Outlet } from "react-router-dom";
import Nav from "./Nav";
// import classes from '../styles/Layout.module.css';
export default function Layout(){
    return (
        <>
        <Nav/>
        <Outlet/>
        </>
    );
}