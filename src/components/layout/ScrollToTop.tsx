import { useScrollPosition } from '../../hooks/useScrollPosition';

export function ScrollToTop() {
    const scrollY = useScrollPosition();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (scrollY <= 300) return null;

    return (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
            ↑
        </button>
    );
}

export default ScrollToTop;