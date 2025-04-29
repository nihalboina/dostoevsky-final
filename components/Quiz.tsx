'use client';
import { useState, useEffect } from 'react';
import { questions, characters } from '@/data/quizData';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';

interface QuizProps {
    onComplete: () => void;
}

export default function Quiz({ onComplete }: QuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
    const [answers, setAnswers] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState(false);
    const [scores, setScores] = useState<Record<string, number>>({});

    // Calculate scores when quiz is complete
    useEffect(() => {
        if (isComplete) {
            const newScores: Record<string, number> = {};

            answers.forEach(character => {
                newScores[character] = (newScores[character] || 0) + 1;
            });

            setScores(newScores);

            // Save to localStorage
            localStorage.setItem('dostoevsky-quiz-results', JSON.stringify(newScores));
        }
    }, [isComplete, answers]);

    // Try to load past results
    useEffect(() => {
        const savedResults = localStorage.getItem('dostoevsky-quiz-results');
        if (savedResults) {
            try {
                const parsedResults = JSON.parse(savedResults);
                if (parsedResults && typeof parsedResults === 'object') {
                    setScores(parsedResults);
                }
            } catch (e) {
                console.error('Failed to parse saved results', e);
            }
        }
    }, []);

    const handleAnswer = (character: string) => {
        const newAnswers = [...answers, character];
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsComplete(true);
        }
    };

    const handleRetake = () => {
        setCurrentQuestionIndex(-1);
        setAnswers([]);
        setIsComplete(false);
    };

    const handleSkip = () => {
        // Create a default result with equal scores for all characters
        const defaultScores: Record<string, number> = {};
        characters.forEach(char => {
            defaultScores[char.name] = 1;
        });

        // Save default scores to localStorage
        localStorage.setItem('dostoevsky-quiz-results', JSON.stringify(defaultScores));

        // Complete the quiz
        onComplete();
    };

    // Show intro screen if user hasn't started yet
    if (currentQuestionIndex === -1 && answers.length === 0 && !isComplete) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-indigo-900 p-6">
                <div className="w-full max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-xl text-center">
                    <h1 className="text-4xl font-serif mb-4 text-white">Which Dostoevsky Character Lives in You?</h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Answer 15 questions to discover your inner Dostoevsky character
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => setCurrentQuestionIndex(0)}
                            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg font-medium transition"
                        >
                            Start Quiz
                        </button>
                        <button
                            onClick={handleSkip}
                            className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white/30 rounded-lg text-white text-lg font-medium transition"
                        >
                            Skip Quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Show quiz questions
    if (!isComplete) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-indigo-900 p-6">
                <QuizQuestion
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    currentQuestion={currentQuestionIndex + 1}
                    totalQuestions={questions.length}
                />
            </div>
        );
    }

    // Show results
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-indigo-900 p-6">
            <QuizResults
                scores={scores}
                characters={characters}
                onRetake={handleRetake}
                onContinue={onComplete}
            />
        </div>
    );
} 