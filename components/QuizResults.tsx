'use client';
import { motion } from 'framer-motion';
import type { Character } from '@/types';
import Link from 'next/link';

interface QuizResultsProps {
    scores: Record<string, number>;
    characters: Character[];
    onRetake: () => void;
    onContinue: () => void;
}

export default function QuizResults({ scores, characters, onRetake, onContinue }: QuizResultsProps) {
    // Calculate percentages and sort characters by score
    const totalAnswers = Object.values(scores).reduce((sum, score) => sum + score, 0);

    const characterScores = characters.map(character => {
        const score = scores[character.name] || 0;
        const percentage = Math.round((score / totalAnswers) * 100);
        return { ...character, score, percentage };
    }).sort((a, b) => b.percentage - a.percentage);

    const topMatch = characterScores[0];

    return (
        <motion.div
            className="w-full max-w-3xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-serif mb-2 text-center text-white">Your Inner Dostoevsky Character</h2>
            <p className="text-center text-gray-300 mb-8">Based on your answers</p>

            <div className="mb-8 p-6 border border-white/20 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50">
                <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: topMatch.color }}>
                    {topMatch.name}
                </h3>
                <p className="text-center text-gray-300 mb-4">{topMatch.percentage}% match</p>
                <p className="text-center text-white">{topMatch.description}</p>
            </div>

            <div className="mb-8">
                <h4 className="text-xl font-serif mb-4 text-white">All Character Matches</h4>
                <div className="space-y-4">
                    {characterScores.map((char) => (
                        <div key={char.name} className="w-full">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-white">{char.name}</span>
                                <span className="text-sm font-medium text-white">{char.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="h-2.5 rounded-full"
                                    style={{ width: `${char.percentage}%`, backgroundColor: char.color }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={onRetake}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition"
                >
                    Retake Quiz
                </button>
                <button
                    onClick={onContinue}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition"
                >
                    Continue to Site
                </button>
            </div>
        </motion.div>
    );
} 