import Footer        from '@/components/Footer/Footer';
import Header        from '@/components/Header/Header';

function Layout(props) {
    return (
        <div className="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
            <Header/>
                {props.children}
            <Footer/>
        </div>
    );
}

export default Layout;
