import Header from "./header";
import Footer from "./footer";
import WhatsappFloating from "./whatsapp-floating";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="page-container">
            <Header/>
            <div>
                {children}
            </div>
            <WhatsappFloating />
            <Footer/>
        </div>
    );
}
