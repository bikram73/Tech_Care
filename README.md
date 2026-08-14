# Coalition Technologies - Front-End Developer Skill Assessment
## Tech.Care Patient Healthcare Dashboard

A single-page patient healthcare monitoring dashboard built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Chart.js**, reproducing the Adobe XD design specification for Coalition Technologies.

---

## 1. Project Overview & Architecture

The application dynamically fetches real-time patient data from the Coalition Technologies API using Basic Authentication, extracts and displays clinical records for **Jessica Taylor**, and visualizes her blood pressure trends and vital statistics.

```
coalition-patient-dashboard/
│
├── index.html
├── netlify.toml               # Netlify build and redirect configuration
├── package.json
├── vite.config.ts
├── public/
│   └── _redirects             # SPA routing fallback for Netlify
│
├── src/
│   ├── main.tsx
│   ├── App.tsx                # Single-page layout orchestrator
│   ├── types.ts               # Complete TypeScript interfaces
│   │
│   ├── components/
│   │   ├── Header.tsx         # Navigation header with user badge
│   │   ├── PatientSidebar.tsx # Patient list with Jessica highlighted
│   │   ├── PatientListItem.tsx
│   │   ├── DiagnosisHistory.tsx
│   │   ├── BloodPressureChart.tsx # Chart.js systolic/diastolic visualizer
│   │   ├── VitalCard.tsx      # Respiratory, Temp, Heart Rate cards
│   │   ├── DiagnosticList.tsx # Medical conditions status table
│   │   ├── PatientProfile.tsx # Full profile information card
│   │   ├── LabResults.tsx     # Lab test reports with download actions
│   │   ├── Icons.tsx          # Medical vector icons
│   │   ├── LoadingState.tsx   # Elegant loading indicator
│   │   └── ErrorState.tsx     # Graceful error handler & retry trigger
│   │
│   ├── services/
│   │   └── patientApi.ts      # Dynamic Basic Auth & API integration
│   │
│   ├── data/
│   │   └── fallbackData.ts    # High-fidelity schema fallback
│   │
│   └── styles/
│       ├── variables.css      # Design token variables
│       ├── global.css         # Typography & scrollbar styling
│       └── responsive.css     # Breakpoint layout utilities
│
└── README.md
```

---

## 2. API Integration & Dynamic Authentication

- **Endpoint**: `https://fedskillstest.coalitiontechnologies.workers.dev`
- **Username**: `coalition`
- **Password**: `skills-test`

Authentication headers are dynamically calculated at runtime without hardcoded Base64 strings:

```typescript
const username = "coalition";
const password = "skills-test";
const credentials = btoa(`${username}:${password}`);

fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
  method: "GET",
  headers: {
    Authorization: `Basic ${credentials}`,
    Accept: "application/json",
  },
});
```

---

## 3. Key Features

- **Blood Pressure Graph (Chart.js)**: Displays 6-month historical blood pressure curves with custom datasets for Systolic (`#E85CB7`) and Diastolic (`#8066D9`), matching the exact Y-axis range (60–180) and monthly intervals.
- **Dynamic Vital Metric Cards**: Real-time cards for Respiratory Rate, Body Temperature, and Heart Rate with status indicator badges.
- **Diagnostic List Table**: Tabulated overview of medical diagnoses, descriptions, and statuses (Under Observation, Cured, Inactive, Untreated).
- **Patient Profile**: Full demographic information, emergency contacts, insurance provider, and avatar.
- **Lab Results**: Interactive list of lab tests with download icons.
- **Netlify Ready**: Pre-configured with `netlify.toml` and `public/_redirects` for instant deployment.

---

## 4. Local Development & Deployment

### Run Locally:
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production:
```bash
npm run build
```

### Deploy to Netlify:
1. Connect your repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
