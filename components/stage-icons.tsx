/**
 * Simple SVG icons for each evolutionary stage
 *
 * Why SVGs: Scalable, lightweight, easy to style
 * Design: Minimal, geometric, recognizable
 */

export const StageIcons = {
  stone: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 30 L150 70 L140 130 L80 140 L50 100 L70 50 Z"
        fill="#8B8B8B"
        stroke="#666"
        strokeWidth="2"
      />
    </svg>
  ),

  wood: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="60"
        y="40"
        width="80"
        height="120"
        rx="8"
        fill="#A0826D"
        stroke="#8B6F47"
        strokeWidth="2"
      />
      <line
        x1="70"
        y1="60"
        x2="130"
        y2="60"
        stroke="#8B6F47"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="70"
        y1="80"
        x2="130"
        y2="80"
        stroke="#8B6F47"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="70"
        y1="100"
        x2="130"
        y2="100"
        stroke="#8B6F47"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  ),

  wheel: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="#6B5B4D"
        strokeWidth="8"
      />
      <circle cx="100" cy="100" r="15" fill="#6B5B4D" />
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="40"
        stroke="#6B5B4D"
        strokeWidth="3"
      />
      <line
        x1="100"
        y1="100"
        x2="160"
        y2="100"
        stroke="#6B5B4D"
        strokeWidth="3"
      />
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="160"
        stroke="#6B5B4D"
        strokeWidth="3"
      />
      <line
        x1="100"
        y1="100"
        x2="40"
        y2="100"
        stroke="#6B5B4D"
        strokeWidth="3"
      />
    </svg>
  ),

  car: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="80" width="120" height="40" rx="4" fill="#4A5568" />
      <rect x="60" y="60" width="80" height="30" rx="4" fill="#4A5568" />
      <circle
        cx="70"
        cy="130"
        r="15"
        fill="#2D3748"
        stroke="#1A202C"
        strokeWidth="2"
      />
      <circle
        cx="130"
        cy="130"
        r="15"
        fill="#2D3748"
        stroke="#1A202C"
        strokeWidth="2"
      />
    </svg>
  ),

  electrical: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 30 L120 80 L90 80 L110 130 L80 90 L100 90 Z"
        fill="#F59E0B"
        stroke="#D97706"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </svg>
  ),

  computer: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="50"
        y="50"
        width="100"
        height="70"
        rx="4"
        fill="#1F2937"
        stroke="#374151"
        strokeWidth="2"
      />
      <rect x="55" y="55" width="90" height="50" fill="#10B981" opacity="0.3" />
      <rect x="80" y="125" width="40" height="5" fill="#374151" />
      <rect x="60" y="130" width="80" height="10" rx="2" fill="#1F2937" />
    </svg>
  ),

  internet: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="60"
        ry="30"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="30"
        ry="60"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="100"
        x2="160"
        y2="100"
        stroke="#3B82F6"
        strokeWidth="2"
      />
      <circle cx="100" cy="100" r="8" fill="#3B82F6" />
    </svg>
  ),

  ai: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2"
      />
      <circle cx="70" cy="80" r="8" fill="#8B5CF6" />
      <circle cx="130" cy="80" r="8" fill="#8B5CF6" />
      <circle cx="100" cy="120" r="8" fill="#8B5CF6" />
      <circle cx="70" cy="120" r="8" fill="#8B5CF6" />
      <circle cx="130" cy="120" r="8" fill="#8B5CF6" />
      <line
        x1="70"
        y1="80"
        x2="130"
        y2="80"
        stroke="#8B5CF6"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="70"
        y1="80"
        x2="100"
        y2="120"
        stroke="#8B5CF6"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="130"
        y1="80"
        x2="100"
        y2="120"
        stroke="#8B5CF6"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="70"
        y1="120"
        x2="130"
        y2="120"
        stroke="#8B5CF6"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  ),
};

export const stages = [
  {
    id: "stone",
    name: "Stone",
    subtitle: "Raw material",
    icon: StageIcons.stone,
  },
  {
    id: "wood",
    name: "Wood",
    subtitle: "Shaped by intent",
    icon: StageIcons.wood,
  },
  {
    id: "wheel",
    name: "Wheel",
    subtitle: "Motion unlocked",
    icon: StageIcons.wheel,
  },
  {
    id: "car",
    name: "Car",
    subtitle: "Systemized movement",
    icon: StageIcons.car,
  },
  {
    id: "electrical",
    name: "Electrical Age",
    subtitle: "Power harnessed",
    icon: StageIcons.electrical,
  },
  {
    id: "computer",
    name: "Computer Age",
    subtitle: "Logic automated",
    icon: StageIcons.computer,
  },
  {
    id: "internet",
    name: "Internet Age",
    subtitle: "World connected",
    icon: StageIcons.internet,
  },
  {
    id: "ai",
    name: "AI Age",
    subtitle: "Intelligence amplified",
    icon: StageIcons.ai,
  },
];
