

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Florists</a>
                <a className="link link-hover">Catering</a>
                <a className="link link-hover">Entertainment</a>
                <a className="link link-hover">Wedding rings and jewellery</a>
            </nav>
            <nav>
                <header className="footer-title">For couples</header>
                <a className="link link-hover">Manager tools</a>
                <a className="link link-hover">Wedding suppliers</a>
                <a className="link link-hover">Ideas inspiration</a>
                <a className="link link-hover">Wedding gift lists</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;