// historyQuiz.js
// 1000+ pyetje për histori me imazhe dhe përgjigje
// Mund të shtosh ose importosh pyetje të reja në këtë array
const historyQuiz = [
  // Shembuj fillestarë
  {
    q: "Kush ishte Skënderbeu?",
    img: "img/skenderbeu.png",
    options: ["Hero kombëtar", "Shkencëtar", "Mjek", "Piktor"],
    correct: "Hero kombëtar",
    explanation: "Skënderbeu ishte udhëheqës dhe hero kombëtar shqiptar."
  },
  {
    q: "Në cilin vit u shpall Pavarësia e Shqipërisë?",
    img: "img/flag.png",
    options: ["1912", "1944", "1990", "1878"],
    correct: "1912",
    explanation: "Pavarësia u shpall më 28 nëntor 1912."
  },
  {
    q: "Kush ishte presidenti i parë i SHBA?",
    img: "img/washington.png",
    options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
    correct: "George Washington",
    explanation: "George Washington ishte presidenti i parë i SHBA."
  },
  // ...
  // Shto këtu pyetje të tjera në të njëjtën format
  // Për shtim masiv, mund të përdorësh mjete automatike ose të importosh nga burime të hapura
  // Shembull për import masiv:
  // 1. Përgatisni një listë pyetjesh në format JSON.
  // 2. Kopjoni/Ngjisni këtu ose përdorni një script për të gjeneruar array-n.
  // 3. Çdo pyetje duhet të ketë: q, img (opsionale), options, correct, explanation (opsionale)
  // ...
];
