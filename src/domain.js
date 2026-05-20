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
        { "id": "list-size", "label": "List size", "type": "number", "sample": 1800, "placeholder": "Enter list size" },
        { "id": "dormancy-window", "label": "Dormancy window", "type": "text", "sample": "180+ days inactive", "placeholder": "Enter dormancy window" },
        { "id": "esp-target", "label": "ESP target", "type": "text", "sample": "Mailchimp", "placeholder": "Enter ESP target" },
        { "id": "send-cadence", "label": "Send cadence", "type": "text", "sample": "3-email sequence over 21 days", "placeholder": "Enter send cadence" },
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
        "Compliance variant selected",
        "Email workspace provisioned",
        "Segment health dashboard configured",
        "Deliverability risk scored",
        "Suppression sync plan created",
        "Owner voice snippets approved",
        "A/B subject test drafted",
        "Post-send reporting plan defined",
        "Winback sunset rule configured",
    ],
    "artifacts": [
        "Email sequence",
        "Subject lines",
        "Compliance checklist",
        "Segment health dashboard",
        "Deliverability risk report",
        "Post-send learning plan",
    ],
    "checks": [
        "Consent basis required",
        "Unsubscribe language required",
        "No purchased-list workflow",
        "Frequency cap enforced",
        "Dormant contacts need consent basis before send",
        "Suppression sync must happen before export",
        "Sunset rule required for non-responders",
    ],
    "sampleClient": "Oak & Olive Cafe",
    "modules": [
        { "name": "Segment health dashboard", "description": "Tracks list source, dormancy age, engagement, consent basis, bounce risk, and suppression status." },
        { "name": "Deliverability risk scorer", "description": "Flags stale lists, spammy copy, missing identity, high frequency, and weak unsubscribe language." },
        { "name": "A/B test planner", "description": "Subject, preview text, offer, segment, and send-time experiments with learning capture." },
        { "name": "Sunset automation map", "description": "Defines stop rules, re-permission guidance, suppression updates, and post-campaign list hygiene actions." },
        { "name": "ESP migration checklist", "description": "Mailchimp, Klaviyo, HubSpot, and CSV import fields with opt-out mapping and proof requirements." },
        { "name": "Revenue attribution notes", "description": "Owner-safe method for recording replies, bookings, sales, donations, and qualitative reactivation outcomes." }
    ],
    "saas": {
        "customerSegments": [
            "Student lifecycle marketing pods",
            "Small businesses with stale owned email lists",
            "Nonprofits reactivating donors and volunteers",
            "Mentors reviewing compliant reactivation workflows"
        ],
        "pricingTiers": [
            "Free: compliance checklist and sequence markdown",
            "Lifecycle Starter: segment health dashboard and suppression exports",
            "Growth: A/B tests, reporting, and ESP-specific packs",
            "Agency: multi-client compliance dashboard and white-label sequence library"
        ],
        "onboardingChecklist": [
            "Create email revival workspace",
            "Import list source inventory without raw secret data",
            "Map consent basis and jurisdiction per segment",
            "Sync suppression and unsubscribe requirements",
            "Approve owner voice and send cadence"
        ],
        "successMetrics": [
            "100% of sendable segments have consent basis",
            "Suppression list synced before send plan export",
            "Frequency cap and sunset rule configured",
            "Post-send learning plan defined before campaign launch"
        ],
        "dashboards": [
            "Consent and segment health",
            "Deliverability risk queue",
            "Suppression and unsubscribe sync",
            "Post-send learning and attribution"
        ],
        "dataModel": [
            "EmailWorkspace",
            "Segment",
            "ConsentBasis",
            "SuppressionRecord",
            "SequenceStep",
            "ComplianceVariant",
            "ABTest",
            "PostSendMetric"
        ],
        "permissions": [
            "Owner: sender identity and final approval",
            "Lifecycle editor: sequence and segment setup",
            "Compliance reviewer: consent and suppression validation",
            "Viewer: client-safe reporting only"
        ],
        "compliance": [
            "Purchased-list workflows blocked",
            "Unsubscribe language required in every sequence",
            "Jurisdiction variant selected before export",
            "Suppression list changes retained in audit trail"
        ],
        "lifecycle": [
            "Audit",
            "Segment",
            "Draft",
            "Validate",
            "Approve",
            "Send",
            "Learn",
            "Sunset"
        ],
        "retentionSignals": [
            "New inactive segment ready for reactivation",
            "Suppression sync overdue",
            "Post-send learning not recorded",
            "A/B test winner ready to template"
        ],
        "exportChannels": [
            "Email sequence markdown",
            "Subject line test plan",
            "Compliance checklist",
            "Suppression CSV",
            "Post-send learning report"
        ],
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
//# sourceMappingURL=domain.js.map