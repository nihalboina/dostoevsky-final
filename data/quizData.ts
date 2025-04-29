import { Character, QuizQuestion } from "../types";

export const characters: Character[] = [
    {
        name: "Prince Myshkin",
        description: "You embody innocent goodness and trust, seeing beauty in a world others find corrupt. Your pure heart and empathy can be both your greatest strength and vulnerability.",
        color: "#3498db" // Light blue
    },
    {
        name: "Raskolnikov",
        description: "You possess a brilliant but tormented mind that questions social norms and moral boundaries. You struggle between intellectual justifications and your own conscience.",
        color: "#e74c3c" // Dark red
    },
    {
        name: "Nastasya Filippovna",
        description: "Your fierce independence hides deep emotional wounds. You alternate between self-destruction and defiance, challenging others with your unpredictable spirit.",
        color: "#9b59b6" // Purple
    },
    {
        name: "Sonya Marmeladov",
        description: "Your quiet strength lies in compassion and self-sacrifice. Even in suffering, you maintain moral clarity and offer redemption to others through your forgiveness.",
        color: "#2ecc71" // Green
    },
    {
        name: "The Dreamer",
        description: "You live in a rich inner world, longing for connection while observing life from a distance. Your sensitivity brings both melancholy and beautiful insights.",
        color: "#f1c40f" // Yellow/gold
    },
    {
        name: "Rogozhin",
        description: "Your passions run deep and uncontrolled. You experience love and hatred with equal intensity, driven by impulses that both frighten and fascinate those around you.",
        color: "#d35400" // Burnt orange
    }
];

export const questions: QuizQuestion[] = [
    {
        id: 1,
        prompt: "You are given unexpected kindness. You:",
        optionA: { text: "Accept it simply and trustingly.", character: "Prince Myshkin" },
        optionB: { text: "Question their motives and brace for betrayal.", character: "Raskolnikov" }
    },
    {
        id: 2,
        prompt: "You're asked to explain your biggest mistake. You:",
        optionA: { text: "Justify it through intellectual reasoning.", character: "Raskolnikov" },
        optionB: { text: "Frame it through your emotional scars and regrets.", character: "Nastasya Filippovna" }
    },
    {
        id: 3,
        prompt: "You witness someone being humiliated in public. You:",
        optionA: { text: "Step forward immediately to protect them.", character: "Sonya Marmeladov" },
        optionB: { text: "Feel a burning rage but hesitate, conflicted.", character: "Rogozhin" }
    },
    {
        id: 4,
        prompt: "In solitude, you tend to:",
        optionA: { text: "Dream vividly of love and belonging.", character: "The Dreamer" },
        optionB: { text: "Work through practical goals or obsessions.", character: "Raskolnikov" }
    },
    {
        id: 5,
        prompt: "Love, to you, feels most like:",
        optionA: { text: "A salvific, pure connection.", character: "Prince Myshkin" },
        optionB: { text: "A destructive force you can't resist.", character: "Rogozhin" }
    },
    {
        id: 6,
        prompt: "When you hurt someone unintentionally, you:",
        optionA: { text: "Blame yourself endlessly and seek forgiveness.", character: "Sonya Marmeladov" },
        optionB: { text: "Try to rationalize it as inevitable.", character: "Nastasya Filippovna" }
    },
    {
        id: 7,
        prompt: "At your lowest point, you are more likely to:",
        optionA: { text: "Collapse into passive despair.", character: "The Dreamer" },
        optionB: { text: "Take a drastic action, for better or worse.", character: "Rogozhin" }
    },
    {
        id: 8,
        prompt: "In debates about morality, you side more with:",
        optionA: { text: "Compassion, no matter the outcome.", character: "Sonya Marmeladov" },
        optionB: { text: "Justifying extreme actions for a 'greater good.'", character: "Raskolnikov" }
    },
    {
        id: 9,
        prompt: "Your idea of courage is:",
        optionA: { text: "Quiet endurance through suffering.", character: "Sonya Marmeladov" },
        optionB: { text: "Recklessly risking everything to break free.", character: "Nastasya Filippovna" }
    },
    {
        id: 10,
        prompt: "When facing a personal crisis, your instinct is to:",
        optionA: { text: "Hope that simple honesty will solve it.", character: "Prince Myshkin" },
        optionB: { text: "Strategize and manipulate outcomes.", character: "Rogozhin" }
    },
    {
        id: 11,
        prompt: "Your relationship with society is mostly:",
        optionA: { text: "Distant and melancholy — you feel unseen.", character: "The Dreamer" },
        optionB: { text: "Hostile — you feel judged and cornered.", character: "Raskolnikov" }
    },
    {
        id: 12,
        prompt: "When it comes to ambition, you believe:",
        optionA: { text: "Dreams matter even if they're never realized.", character: "The Dreamer" },
        optionB: { text: "Only action — even ruthless — defines worth.", character: "Rogozhin" }
    },
    {
        id: 13,
        prompt: "You think that suffering is:",
        optionA: { text: "Redemptive — it cleanses the soul.", character: "Sonya Marmeladov" },
        optionB: { text: "A punishment or cruelty of fate.", character: "Nastasya Filippovna" }
    },
    {
        id: 14,
        prompt: "You're given a second chance in life. You:",
        optionA: { text: "Try to live simply and do good.", character: "Prince Myshkin" },
        optionB: { text: "Feel unworthy of it and self-sabotage.", character: "Nastasya Filippovna" }
    },
    {
        id: 15,
        prompt: "In friendships, you are:",
        optionA: { text: "Unfailingly loyal even to flawed people.", character: "Prince Myshkin" },
        optionB: { text: "Passionate but jealous and possessive.", character: "Rogozhin" }
    }
]; 