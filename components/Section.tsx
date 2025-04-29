'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface SectionProps {
    title: string;
    quote: string;
    backgroundImage: string;
    textBoxes: string[];
    pullQuotes: string[];
    audioSrc?: string;
}

export default function Section({ title, quote, backgroundImage, textBoxes, pullQuotes, audioSrc }: SectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && ref.current) {
            import('locomotive-scroll').then((LocomotiveScroll) => {
                const scroll = new LocomotiveScroll.default({
                    el: ref.current as HTMLElement,
                    smooth: true,
                    multiplier: 1,
                    lerp: 0.05
                });

                return () => {
                    scroll.destroy();
                };
            });
        }
    }, []);

    return (
        <section
            ref={ref}
            className="h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <motion.h1
                className="text-4xl font-serif mb-8 p-4 bg-black bg-opacity-50 text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {title}
            </motion.h1>

            <motion.blockquote
                className="italic text-xl max-w-2xl text-white text-center bg-black bg-opacity-40 p-6 rounded"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                {quote}
            </motion.blockquote>

            {textBoxes.map((text, i) => (
                <motion.div
                    key={i}
                    className="absolute p-4 bg-white bg-opacity-70 text-gray-900 rounded shadow-lg"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.3 }}
                    style={{ top: `${30 + i * 15}%`, left: `${10 + i * 20}%` }}
                >
                    {text}
                </motion.div>
            ))}

            {pullQuotes.map((pq, i) => (
                <motion.p
                    key={i}
                    className="absolute italic text-lg text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.4 }}
                    style={{ bottom: `${20 + i * 10}%`, right: `${10 + i * 15}%` }}
                >
                    {pq}
                </motion.p>
            ))}

            {audioSrc && (
                <audio controls className="fixed bottom-4 left-4 opacity-70">
                    <source src={audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </section>
    );
}