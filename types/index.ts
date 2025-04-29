export type Character = {
    name: string;
    description: string;
    color: string;
};

export type QuizQuestion = {
    id: number;
    prompt: string;
    optionA: { text: string; character: string };
    optionB: { text: string; character: string };
}; 