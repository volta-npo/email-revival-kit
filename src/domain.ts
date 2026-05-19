export const domain = {
  "kind": "email-sequence",
  "title": "Email Revival Kit",
  "purpose": "A purpose-built email sequence interface for a respectful reactivation toolkit for businesses with stale customer lists.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Email sequence plan",
  "metricLabels": [
    "Consent Health",
    "Sequence Readiness",
    "Frequency Safety"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Oak & Olive Cafe",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "inactive contacts re-engaged ethically",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "input-asset",
      "label": "Input asset",
      "type": "text",
      "sample": "List sources inventoried",
      "placeholder": "Enter input asset"
    },
    {
      "id": "output-format",
      "label": "Output format",
      "type": "text",
      "sample": "Email sequence",
      "placeholder": "Enter output format"
    },
    {
      "id": "review-threshold",
      "label": "Review threshold",
      "type": "number",
      "sample": 85,
      "placeholder": "Enter review threshold"
    },
    {
      "id": "approved-channel",
      "label": "Approved channel",
      "type": "text",
      "sample": "Owner handoff packet",
      "placeholder": "Enter approved channel"
    }
  ],
  "rows": [
    "List sources inventoried",
    "Consent basis marked",
    "Segments created",
    "Suppression list reviewed",
    "Reintro sequence generated",
    "Subject lines generated",
    "Unsubscribe language added",
    "Send plan exported",
    "Consent source and jurisdiction recorded",
    "Suppression import/export completed",
    "Frequency cap enforced",
    "Compliance variant selected"
  ],
  "artifacts": [
    "Email sequence",
    "Subject lines",
    "Compliance checklist"
  ],
  "checks": [
    "Consent basis required",
    "Unsubscribe language required",
    "No purchased-list workflow",
    "Frequency cap enforced"
  ],
  "sampleClient": "Oak & Olive Cafe",
  "modules": [
    { "name": "Consent basis manager", "description": "Consent source, timestamp, jurisdiction, proof, and permitted campaign type for each list segment." },
    { "name": "Suppression center", "description": "Import/export suppression lists, unsubscribe proof, bounce source, and segment exclusion reason." },
    { "name": "Frequency limiter", "description": "Campaign cadence, cool-down, max sends, and reactivation stop conditions." },
    { "name": "Compliance variants", "description": "CAN-SPAM, GDPR, CASL, unsubscribe, sender identity, and data minimization checklists." }
  ],
  "saas": {
    "playbooks": [
      "Consent audit before campaign",
      "Suppression import/export workflow",
      "Frequency cap review",
      "Jurisdiction-specific compliance checklist"
    ],
    "automations": [
      "Suppression CSV export",
      "Consent-source warnings",
      "Frequency cap calculation",
      "Compliance variant selection"
    ],
    "revenueModel": "Lifecycle email workspace with compliance add-ons, segment seats, and campaign export packs",
    "integrationTargets": [
      "Mailchimp lists",
      "Klaviyo segments",
      "HubSpot suppression lists",
      "CSV CRM imports"
    ]
  }
};
