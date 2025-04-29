'use client';
import { motion } from 'framer-motion';

interface HeaderProps {
    onRetakeQuiz: () => void;
}

export default function Header({ onRetakeQuiz }: HeaderProps) {
    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-black/60 backdrop-blur"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-xl font-serif text-white">Dostoevsky's World</h1>
            <button
                onClick={onRetakeQuiz}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white transition-colors text-sm"
            >
                Retake Quiz
            </button>
        </motion.header>
    );
} 