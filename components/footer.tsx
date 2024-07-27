export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 text-center bottom-0 left-0 w-full">
            <p className="text-sm">
                © {currentYear} Riley Fletcher. All rights reserved.
            </p>
        </footer>
    )
}