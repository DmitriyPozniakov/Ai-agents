window.agents = [
    {
        name: 'Customer Service AI Agent',
        description: 'Manages customer inquiries, handles subscription requests, processes order statuses, and manages product return requests.',
        workflow_1: 'Manages customer inquiries.',
        workflow_2: 'Handles subscription requests.',
        workflow_3: 'Processes order statuses and manages product return requests.'
    },
    {
        name: 'Data Extraction AI Agent',
        description: 'Extracts data from sales orders, invoices, lab reports, and medical documents.',
        workflow_1: 'Extracts data from sales orders.',
        workflow_2: 'Extracts data from invoices.',
        workflow_3: 'Extracts data from lab reports and medical documents.'
    },
    {
        name: 'Email Categorization & Triage AI Agent',
        description: 'Automates sorting of incoming emails into categories and prioritizes them for quick action.',
        workflow_1: 'Automates sorting of incoming emails.',
        workflow_2: 'Categorizes emails.',
        workflow_3: 'Prioritizes them for quick action.'
    },
    {
        name: 'Appointment Management AI Agent',
        description: 'Schedules, sets, and coordinates appointments.',
        workflow_1: 'Schedules appointments.',
        workflow_2: 'Sets appointments.',
        workflow_3: 'Coordinates appointments.'
    },
    {
        name: 'Interview Scheduler AI Agent',
        description: 'Manages appointment scheduling specifically for interviews.',
        workflow_1: 'Schedules interviews.',
        workflow_2: 'Coordinates interviews.',
        workflow_3: 'Manages appointment calendar for interviews.'
    },
    {
        name: 'Data Entry AI Agent',
        description: 'Handles catalog entry and document extraction tasks.',
        workflow_1: 'Handles catalog entry.',
        workflow_2: 'Performs document extraction tasks.',
        workflow_3: 'Validates entered data.'
    },
    {
        name: 'Customer Experience AI Agent',
        description: 'Manages loyalty programs, processes customer feedback, and assists with FAQs.',
        workflow_1: 'Manages loyalty programs.',
        workflow_2: 'Processes customer feedback.',
        workflow_3: 'Assists with FAQs.'
    },
    {
        name: 'Financial Compliance and Reporting AI Agent',
        description: 'Generates financial reports and conducts credit analyses.',
        workflow_1: 'Generates financial reports.',
        workflow_2: 'Conducts credit analyses.',
        workflow_3: 'Ensures regulatory compliance.'
    },
    {
        name: 'Billing Management AI Agent',
        description: 'Manages billings, renewals, billing support, and subscription requests.',
        workflow_1: 'Manages billings.',
        workflow_2: 'Handles renewals and billing support.',
        workflow_3: 'Processes subscription requests.'
    },
    {
        name: 'Transaction Monitoring AI Agent',
        description: 'Sends payment reminders, processes payments, and observes financial activities.',
        workflow_1: 'Sends payment reminders.',
        workflow_2: 'Processes payments.',
        workflow_3: 'Observes financial activities.'
    },
    {
        name: 'Accounts Receivable AI Agent',
        description: 'Parses invoices and manages accounts receivable processes.',
        workflow_1: 'Parses invoices.',
        workflow_2: 'Manages receivable processes.',
        workflow_3: 'Tracks outstanding balances.'
    },
    {
        name: 'Budget Management AI Agent',
        description: 'Generates budgets by consolidating financial data and applying automated validation and templates.',
        workflow_1: 'Consolidates financial data.',
        workflow_2: 'Applies validation and templates.',
        workflow_3: 'Generates budgets.'
    },
    {
        name: 'Document Review AI Agent',
        description: 'Extracts information from IDs and other documents.',
        workflow_1: 'Extracts information from IDs.',
        workflow_2: 'Analyzes documents.',
        workflow_3: 'Validates extracted data.'
    },
    {
        name: 'Contract Management AI Agent',
        description: 'Drafts and manages contracts.',
        workflow_1: 'Drafts contracts.',
        workflow_2: 'Manages contract lifecycles.',
        workflow_3: 'Tracks contract renewals.'
    },
    {
        name: 'Data Collection AI Agent',
        description: 'Verifies patient data, enters product data, and supports lab data management.',
        workflow_1: 'Verifies patient data.',
        workflow_2: 'Enters product data.',
        workflow_3: 'Supports lab data management.'
    },
    {
        name: 'Invoice Processing AI Agent',
        description: 'Parses and processes invoices.',
        workflow_1: 'Parses invoices.',
        workflow_2: 'Processes invoice data.',
        workflow_3: 'Matches invoice with records.'
    },
    {
        name: 'Patient Intake Scheduler AI Agent',
        description: 'Manages patient onboarding processes.',
        workflow_1: 'Collects onboarding data.',
        workflow_2: 'Schedules patient intake.',
        workflow_3: 'Coordinates onboarding logistics.'
    },
    {
        name: 'Payroll Calculation AI Agent',
        description: 'Processes payroll and manages payment calculations.',
        workflow_1: 'Processes payroll.',
        workflow_2: 'Calculates employee payments.',
        workflow_3: 'Manages deductions and taxes.'
    },
    {
        name: 'Onboarding AI Agent',
        description: 'Handles employee onboarding tasks like document collection and HR profile creation.',
        workflow_1: 'Collects documents.',
        workflow_2: 'Creates HR profiles.',
        workflow_3: 'Guides new hires.'
    },
    {
        name: 'Compliance Monitoring AI Agent',
        description: 'Conducts compliance checks and reviews.',
        workflow_1: 'Conducts checks.',
        workflow_2: 'Monitors compliance rules.',
        workflow_3: 'Reviews documentation.'
    },
    {
        name: 'Legal Document Classifier AI Agent',
        description: 'Manages renewal processes and classifies legal documents.',
        workflow_1: 'Classifies legal documents.',
        workflow_2: 'Manages renewal processes.',
        workflow_3: 'Ensures document compliance.'
    },
    {
        name: 'Social Media Content AI Agent',
        description: 'Collects and manages content for social media platforms.',
        workflow_1: 'Collects social content.',
        workflow_2: 'Manages publication schedules.',
        workflow_3: 'Analyzes engagement data.'
    },
    {
        name: 'Procurement Management AI Agent',
        description: 'Generates sales proposals and verifies vendors.',
        workflow_1: 'Generates sales proposals.',
        workflow_2: 'Verifies vendors.',
        workflow_3: 'Manages procurement processes.'
    },
    {
        name: 'ETL (Extract, Transform, Load) AI Agent',
        description: 'Enters product data and extracts information from IDs and documents.',
        workflow_1: 'Extracts data from IDs.',
        workflow_2: 'Transforms and validates data.',
        workflow_3: 'Enters product data.'
    },
    {
        name: 'Accounts Reconciliation AI Agent',
        description: 'Parses invoices and generates financial reports for reconciliation purposes.',
        workflow_1: 'Parses invoices.',
        workflow_2: 'Generates reports.',
        workflow_3: 'Reconciles financial records.'
    },
    {
        name: 'Supply Chain Monitoring AI Agent',
        description: 'Processes orders, handles product return requests, and manages order fulfillment.',
        workflow_1: 'Processes orders.',
        workflow_2: 'Handles return requests.',
        workflow_3: 'Manages order fulfillment.'
    },
    {
        name: 'Debt Collection AI Agent',
        description: 'Manages debt resolution processes.',
        workflow_1: 'Manages collections.',
        workflow_2: 'Follows up with debtors.',
        workflow_3: 'Resolves payment disputes.'
    },
    {
        name: 'RFP AI Agent',
        description: 'Reviews RFP requirements, conducts compliance checks, and drafts proposals.',
        workflow_1: 'Reviews requirements.',
        workflow_2: 'Conducts compliance checks.',
        workflow_3: 'Drafts proposals.'
    },
    {
        name: 'Lab Results Extraction AI Agent',
        description: 'Extracts data from laboratory reports, identifies reference ranges, and structures results for analysis.',
        workflow_1: 'Extracts data from reports.',
        workflow_2: 'Identifies reference ranges.',
        workflow_3: 'Structures results.'
    },
    {
        name: 'Property Management AI Agent',
        description: 'Resolves property damage issues, handles property underwriting requests, and manages tenant inquiries.',
        workflow_1: 'Resolves damage issues.',
        workflow_2: 'Handles underwriting requests.',
        workflow_3: 'Manages tenant inquiries.'
    },
    {
        name: 'Order Tracking AI Agent',
        description: 'Manages order fulfillment, creates order confirmations, and handles order status updates.',
        workflow_1: 'Manages fulfillment.',
        workflow_2: 'Creates confirmations.',
        workflow_3: 'Handles status updates.'
    },
    {
        name: 'Return Handling AI Agent',
        description: 'Schedules returns, handles product return requests, and coordinates exchanges.',
        workflow_1: 'Schedules returns.',
        workflow_2: 'Handles return requests.',
        workflow_3: 'Coordinates exchanges.'
    },
    {
        name: 'Loan Processing AI Agent',
        description: 'Processes loan payments and manages related tasks.',
        workflow_1: 'Processes loan payments.',
        workflow_2: 'Manages payment plans.',
        workflow_3: 'Validates financial data.'
    },
    {
        name: 'Inventory Management AI Agent',
        description: 'Checks inventory, enters catalog data, and handles order statuses.',
        workflow_1: 'Checks inventory.',
        workflow_2: 'Enters catalog data.',
        workflow_3: 'Handles order statuses.'
    },
    {
        name: 'Invoice Reconciliation AI Agent',
        description: 'Parses invoices and manages reconciliation processes.',
        workflow_1: 'Parses invoices.',
        workflow_2: 'Matches records.',
        workflow_3: 'Reconciles balances.'
    },
    {
        name: 'Suspicious Activity Reporting AI Agent',
        description: 'Generates financial reports and drafts proposals related to suspicious activities.',
        workflow_1: 'Generates reports.',
        workflow_2: 'Identifies anomalies.',
        workflow_3: 'Drafts compliance proposals.'
    },
    {
        name: 'SEO Content Creation AI Agent',
        description: 'Collects and creates content optimized for search engines.',
        workflow_1: 'Collects SEO keywords.',
        workflow_2: 'Creates optimized content.',
        workflow_3: 'Publishes and monitors rankings.'
    },
    {
        name: 'Insurance Claim AI Agent',
        description: 'Handles first notice of loss (FNOL), processes claim requests, and manages property underwriting requests.',
        workflow_1: 'Handles FNOL.',
        workflow_2: 'Processes claims.',
        workflow_3: 'Manages underwriting requests.'
    },
    {
        name: 'Know Your Customer (KYC) AI Agent',
        description: 'Validates power of attorney documents and customer registers.',
        workflow_1: 'Validates POA documents.',
        workflow_2: 'Manages customer registers.',
        workflow_3: 'Ensures regulatory compliance.'
    },
    {
        name: 'Healthcare AI Agent',
        description: 'Schedules appointments, manages prescription refill requests, and provides symptom checking and triage.',
        workflow_1: 'Schedules appointments.',
        workflow_2: 'Manages refill requests.',
        workflow_3: 'Provides symptom triage.'
    },
    {
        name: 'Order Management AI Agent',
        description: 'Processes orders, handles order statuses, and provides updates.',
        workflow_1: 'Processes orders.',
        workflow_2: 'Handles statuses.',
        workflow_3: 'Provides updates.'
    },
    {
        name: 'Patient Service AI Agent',
        description: 'Coordinates appointments, extracts lab report data, and manages subscription requests.',
        workflow_1: 'Coordinates appointments.',
        workflow_2: 'Extracts lab data.',
        workflow_3: 'Manages subscriptions.'
    },
    {
        name: 'Product Listing AI Agent',
        description: 'Creates and manages product listings, ensuring quality assurance.',
        workflow_1: 'Creates listings.',
        workflow_2: 'Manages product data.',
        workflow_3: 'Ensures QA.'
    },
    {
        name: 'Sales Operations AI Agent',
        description: 'Generates sales proposals, schedules returns, and manages order fulfillment.',
        workflow_1: 'Generates proposals.',
        workflow_2: 'Schedules returns.',
        workflow_3: 'Manages fulfillment.'
    },
];

localStorage.setItem('agents-info', JSON.stringify(window.agents));
