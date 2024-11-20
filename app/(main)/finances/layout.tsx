import Header from "./components/header"

const Financelayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Financelayout