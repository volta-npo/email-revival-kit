export const config = {
  "number": 29,
  "slug": "email-revival-kit",
  "title": "Email Revival Kit",
  "category": "Marketing & Content",
  "tagline": "A respectful reactivation toolkit for businesses with stale customer lists.",
  "persona": "Marketing teams helping owners restart email without spamming.",
  "gap": "Email platforms exist, but small businesses need strategy, consent hygiene, and simple restart sequences.",
  "niche": "Dormant local customer relationships.",
  "metric": "inactive contacts re-engaged ethically",
  "modules": [
    "List hygiene checklist",
    "Reintroduction sequence",
    "Offer planning board",
    "Unsubscribe-safe copy notes"
  ],
  "theme": {
    "accent": "#db2777",
    "accent2": "#f9a8d4",
    "emoji": "\ud83d\udce3",
    "metricLabel": "Content readiness",
    "workflow": [
      "Capture owner voice",
      "Generate channel-ready assets",
      "Review for local fit",
      "Export approved content"
    ],
    "privacy": "Do not publish quotes, photos, or testimonials without explicit owner/client approval."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "list-hygiene-checklist",
      "label": "List hygiene checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify list hygiene checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "reintroduction-sequence",
      "label": "Reintroduction sequence",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify reintroduction sequence with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "offer-planning-board",
      "label": "Offer planning board",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify offer planning board with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "unsubscribe-safe-copy-notes",
      "label": "Unsubscribe-safe copy notes",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify unsubscribe-safe copy notes with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Email Revival Kit and capture baseline evidence.",
      "Complete the list hygiene checklist workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Oak & Olive Cafe",
    "chapter": "Dallas",
    "studentLead": "Volta Student Lead",
    "notes": "Neighborhood marketing project with owner-approved content assets. Email Revival Kit sample.",
    "evidencePrefix": "Email Revival Kit",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
