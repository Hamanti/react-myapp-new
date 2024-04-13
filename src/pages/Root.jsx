import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Root = () => {

    useEffect(() => {

        document.title = "Shop"

    }, [])

    return (
        <>
            <Header />

            <div className="section">

                <Outlet />

            </div>
            
            <Footer />
        </>
    )
}

export default Root