import { ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export function Layout({
    children
}: { children: ReactNode }){
    const isLogged = true;

    if(!isLogged)
        return <>
            {children}
        </>

    return <>
        <Sidebar />
        <main>
            <Header />
            {children}
        </main>
    </>
}