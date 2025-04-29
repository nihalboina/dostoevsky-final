"use client";
import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Quiz from '../components/Quiz';
import Header from '../components/Header';

export default function Home() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if quiz was previously completed
  useEffect(() => {
    const savedResults = localStorage.getItem('dostoevsky-quiz-results');
    if (savedResults) {
      setQuizCompleted(true);
    }
    setIsLoading(false);
  }, []);

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  const handleRetakeQuiz = () => {
    setQuizCompleted(false);
    // Optionally clear localStorage if you want to force a fresh start
    // localStorage.removeItem('dostoevsky-quiz-results');
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-indigo-900">
        <div className="animate-pulse text-4xl font-serif text-white">Loading...</div>
      </div>
    );
  }

  // Show quiz if not completed
  if (!quizCompleted) {
    return <Quiz onComplete={handleQuizComplete} />;
  }

  // Show main content after quiz completion
  return (
    <>
      <Header onRetakeQuiz={handleRetakeQuiz} />
      <main className="w-full flex flex-col items-center justify-center">
        <Section
          title="White Nights"
          quote="It seems to me that if I were to die tonight..."
          backgroundImage="https://images.unsplash.com/photo-1556610961-2fecc5927173?q=80&w=3467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          textBoxes={[
            'The dreamer\'s hopeful loneliness under the pale streetlights.',
            'His yearning for connection in a city of millions.'
          ]}
          pullQuotes={['"I walked along, listening to my own steps..."']}
          audioSrc="/ambient.mp3"
        />
        <Section
          title="Crime and Punishment"
          quote="To go wrong in one's own way is better..."
          backgroundImage="https://images.unsplash.com/photo-1596311087104-86dba6be2aad?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          textBoxes={[
            'Raskolnikov\'s guilt echoing through oppressive corridors.',
            'The clash between theory and conscience.'
          ]}
          pullQuotes={['"I did not bow down to you... I bowed down to human suffering."']}
          audioSrc="/ambient.mp3"
        />
        <Section
          title="The Idiot"
          quote="Beauty will save the world."
          backgroundImage="https://images.unsplash.com/photo-1614434125356-3e1793685665?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3NpYW58ZW58MHx8MHx8fDA%3D"
          textBoxes={[
            'Myshkin\'s innocent light piercing through society\'s darkness.',
            'The fragile hope of a pure heart.'
          ]}
          pullQuotes={['"He entered the carriage with a childlike smile..."']}
          audioSrc="/ambient.mp3"
        />
      </main>
    </>
  );
}
