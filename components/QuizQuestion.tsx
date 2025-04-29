'use client';
import { motion } from 'framer-motion';
import type { QuizQuestion } from '@/types';

interface QuizQuestionProps {
    question: QuizQuestion;
    onAnswer: (character: string) => void;
    currentQuestion: number;
    totalQuestions: number;
}

export default function QuizQuestion({
    question,
    onAnswer,
    currentQuestion,
    totalQuestions
}: QuizQuestionProps) {
    return (
        <motion.div
            className="w-full max-w-3xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="mb-6 text-center">
                <div className="text-sm text-gray-400 mb-2">Question {currentQuestion} of {totalQuestions}</div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
                    ></div>
                </div>
            </div>

            <h3 className="text-2xl font-serif mb-8 text-center text-white">{question.prompt}</h3>

            <div className="flex flex-col space-y-4">
                <button
                    onClick={() => onAnswer(question.optionA.character)}
                    className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-left transition-all duration-300 text-white"
                >
                    <span className="inline-block w-8 h-8 mr-3 bg-indigo-600 rounded-full text-white font-bold flex items-center justify-center">A</span>
                    {question.optionA.text}
                </button>

                <button
                    onClick={() => onAnswer(question.optionB.character)}
                    className="p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-left transition-all duration-300 text-white"
                >
                    <span className="inline-block w-8 h-8 mr-3 bg-indigo-600 rounded-full text-white font-bold flex items-center justify-center">B</span>
                    {question.optionB.text}
                </button>
            </div>
        </motion.div>
    );
} 