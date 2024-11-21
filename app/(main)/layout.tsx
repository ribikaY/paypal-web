import Footer from '@/components/footer'
import Header from '@/components/header/header'

const MainLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout