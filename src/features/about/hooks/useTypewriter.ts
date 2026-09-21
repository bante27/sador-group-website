import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
    phrases: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseAfterTyping?: number;
    pauseBeforeDeleting?: number;
}

export const useTypewriter = ({
    phrases,
    typingSpeed = 75,
    deletingSpeed = 40,
    pauseAfterTyping = 1800,
    pauseBeforeDeleting = 500,
}: UseTypewriterOptions) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setCurrentText(phrases[0] || '');
            return;
        }

        const fullText = phrases[currentPhraseIndex];

        let timer: NodeJS.Timeout;

        if (isPaused) {
            timer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseAfterTyping);
            return () => clearTimeout(timer);
        }

        if (!isDeleting && currentText === fullText) {
            setIsPaused(true);
            return;
        }

        if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            timer = setTimeout(() => { }, pauseBeforeDeleting);
            return () => clearTimeout(timer);
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;

        timer = setTimeout(() => {
            setCurrentText((prev) =>
                isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
            );
        }, speed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseAfterTyping, pauseBeforeDeleting]);

    return {
        currentText,
        isDeleting,
    };
};
