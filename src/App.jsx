import React from 'react';
import Header from './components/Header';
import ScreenCard from './components/ScreenCard';
import PromptBlock from './components/PromptBlock';
import Footer from './components/Footer';

function Bullet({ children }) {
  return <li className="ml-5 list-disc text-gray-700">{children}</li>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />

      {/* 1. Sign-Up Screen */}
      <ScreenCard title="Sign-Up Screen" index={1}>
        <div className="space-y-3 text-sm">
          <div className="text-gray-600">Primary User Actions:</div>
          <ul className="mb-2 ml-4 list-outside space-y-1">
            <Bullet>Create account → navigates to Organization Onboarding Wizard</Bullet>
            <Bullet>Link “Already have an account? Log in” → navigates to Login Screen</Bullet>
            <Bullet>SSO buttons (Google, Microsoft) → navigates to Organization Onboarding Wizard (success) or error toast</Bullet>
          </ul>
        </div>
        <PromptBlock label="v0.dev Prompt" id="sign-up-screen-v0">
{"Create a clean, modern B2B SaaS wireframe component for Sign-Up Screen. Layout: Full-height centered card with two-column responsive layout that stacks on mobile. Left: marketing blurb with 3 bullet value props and a tiny illustration placeholder. Right: sign-up form card. Header: top simple brand bar with logo left and 'Log in' link right. Footer: tiny legal text. Interactive Components: Top Bar (left logo clickable to Dashboard; right link 'Log in' clickable to Login Screen). Right Card (Form): Heading 'Create your account'; Inputs top-to-bottom with labels: Work Email (type=email), Password (type=password with show/hide icon), Full Name (type=text), Role (dropdown: Compliance Manager, Security Lead, Auditor, Admin), Accept Terms (checkbox with link to Terms). Primary CTA button 'Create account' (full width, blue, size=lg) → navigate to Organization Onboarding Wizard. Secondary SSO buttons: 'Continue with Google', 'Continue with Microsoft' (outlined, icons left). Below form: tiny text 'Already have an account? Log in' → Login Screen. Form validation: inline error below fields (red) for required, invalid email, weak password; disable primary button until Terms checked. Hover states: buttons darken 8%, inputs border-blue focus with shadow. Success: brief success banner then navigation. Typography: H1 for form title, H2 for left blurb title, body-sm for inputs and help. Spacing: generous with 24px between groups. Style: Low-fidelity wireframe, grayscale with blue accent for primary CTAs. Clickable Elements: Logo→Dashboard, Log in link→Login Screen, Create account→Organization Onboarding Wizard, SSO buttons→Organization Onboarding Wizard on success, Terms link→new tab. Form States: default, focus, error with helper text; disabled Create account when unchecked Terms. Navigation: After successful sign-up, go to Organization Onboarding Wizard."}
        </PromptBlock>
        <PromptBlock label="Uizard Prompt" id="sign-up-screen-uizard">
{"Design a B2B SaaS wireframe for Sign-Up Screen. Screen Layout: Top narrow header bar with logo left and 'Log in' text button right. Main: two columns; Left column (40%) contains title 'Simplify compliance', 3 bullet points, gray illustration box (300x180). Right column (60%) contains a form card centered vertically: fields stacked Email, Password, Full Name, Role dropdown, Terms checkbox; primary button below; two SSO buttons under a divider; small text link to Log in. UI Components: Logo (top-left), Text Link 'Log in' (top-right), Card with title and form fields, Buttons (Primary blue, Secondary outline), Divider with 'or', Illustration placeholder. Interactive Areas: All text fields, dropdown, checkbox, 'Create account' primary button, SSO buttons, 'Log in' link, Terms link. Visual Hierarchy: Primary = 'Create account' button; Secondary = SSO buttons; Tertiary = marketing copy. Color: Grayscale wireframe with blue accent on primary actions. Annotations: Hover states darken buttons; input focus shows blue border; errors show red text under fields; disable primary until Terms checked. Connection Points: 'Create account'→Organization Onboarding Wizard; 'Log in' (top and bottom)→Login Screen; Logo→Dashboard (post-auth for prototype)."}
        </PromptBlock>
      </ScreenCard>

      {/* 2. Login Screen */}
      <ScreenCard title="Login Screen" index={2}>
        <div className="space-y-3 text-sm">
          <div className="text-gray-600">Primary User Actions:</div>
          <ul className="mb-2 ml-4 list-outside space-y-1">
            <Bullet>Log in with email/password → Dashboard</Bullet>
            <Bullet>Forgot password → Password Reset Screen</Bullet>
            <Bullet>SSO → Dashboard</Bullet>
          </ul>
        </div>
        <PromptBlock label="v0.dev Prompt" id="login-screen-v0">
{"Create a clean, modern B2B SaaS wireframe component for Login Screen. Layout: Centered single card with brand header above. Interactive Components: Inputs: Work Email (email), Password (password with show/hide). Checkbox: 'Remember me'. Link: 'Forgot password?' → Password Reset Screen. Primary button: 'Log in' (blue) → Dashboard. Secondary buttons: 'Continue with Google', 'Continue with Microsoft' (outline). Footer text: 'New to PolicyPilot? Sign up' → Sign-Up Screen. Typography: H1 'Welcome back', small helper text. Spacing: generous. Style: Low-fidelity grayscale with blue accent. Clickable Elements: Log in button→Dashboard; SSO→Dashboard; Forgot password→Password Reset Screen; Sign up link→Sign-Up Screen. Form States: disabled Log in until email+password present; error banner for invalid credentials; success banner then navigate. Navigation: routes as above."}
        </PromptBlock>
        <PromptBlock label="Uizard Prompt" id="login-screen-uizard">
{"Design a B2B SaaS wireframe for Login Screen. Screen Layout: Centered form card (480px) with title, input stack, actions row with checkbox left and 'Forgot password?' link right, primary button, divider, SSO buttons, footer sign-up link. UI Components: Logo top, Title 'Welcome back', Email field, Password field, Remember me checkbox, Forgot password link, Primary button, Divider with 'or', Two SSO buttons, Footer link. Interactive Areas: inputs, checkbox, links, buttons. Visual Hierarchy: Primary = 'Log in'; Secondary = SSO; Tertiary = Sign-up link. Color: Grayscale with blue accents. Annotations: Hover states; error banner on failure. Connection Points: 'Log in'→Dashboard; 'Forgot password?'→Password Reset Screen; 'Sign up'→Sign-Up Screen."}
        </PromptBlock>
      </ScreenCard>

      {/* 3. Password Reset */}
      <ScreenCard title="Password Reset Screen" index={3}>
        <div className="space-y-3 text-sm">
          <div className="text-gray-600">Primary User Actions:</div>
          <ul className="mb-2 ml-4 list-outside space-y-1">
            <Bullet>Request reset link → confirmation state</Bullet>
            <Bullet>Back to Login</Bullet>
          </ul>
        </div>
        <PromptBlock label="v0.dev Prompt" id="password-reset-v0">
{"Create a clean, modern B2B SaaS wireframe component for Password Reset Screen. Layout: Single narrow card centered. Interactive Components: Title 'Reset your password'; Input: Work Email (email). Primary button: 'Send reset link' (blue) → success state banner 'Check your email'. Secondary link: 'Back to login' → Login Screen. Typography: H2 title. Spacing: generous. Style: Low-fidelity grayscale with blue accent. Clickable Elements: Send reset link→success state; Back to login→Login Screen. Form States: default, error (unknown email), success (info banner). Navigation: After success, allow navigating to Login via link."}
        </PromptBlock>
        <PromptBlock label="Uizard Prompt" id="password-reset-uizard">
{"Design a B2B SaaS wireframe for Password Reset Screen. Screen Layout: Centered small card with title, description text, email field, primary button, secondary text link. UI Components: Email input, Primary button, Text link. Interactive Areas: input, buttons. Visual Hierarchy: Primary = Send reset link; Secondary = Back to login. Color: Grayscale with blue accent. Annotations: Show success banner placeholder above card after submission. Connection Points: Primary→Success state on same screen; 'Back to login'→Login Screen."}
        </PromptBlock>
      </ScreenCard>

      {/* 4. Organization Onboarding Wizard */}
      <ScreenCard title="Organization Onboarding Wizard" index={4}>
        <div className="space-y-3 text-sm">
          <div className="text-gray-600">Primary User Actions:</div>
          <ul className="mb-2 ml-4 list-outside space-y-1">
            <Bullet>Complete step 1: Organization details → Next</Bullet>
            <Bullet>Complete step 2: Framework selection → Finish to Dashboard</Bullet>
            <Bullet>Skip and go to Dashboard</Bullet>
          </ul>
        </div>
        <PromptBlock label="v0.dev Prompt" id="onboarding-v0">
{"Create a clean, modern B2B SaaS wireframe component for Organization Onboarding Wizard. Layout: Full-width wizard with top progress indicator (Step 1 of 2). Left panel: brief benefits; Right main panel: step content with form. Interactive Components: Breadcrumb/progress with two steps (Org Details, Frameworks); Step 1 fields: Organization Name (text), Industry (dropdown), Company Size (dropdown), Region (dropdown), Data Residency (dropdown), Upload Logo (button). Buttons: 'Next' (blue) → Step 2; 'Skip for now' (link) → Dashboard; 'Save & exit' (ghost) → Dashboard. Step 2 fields: Select compliance frameworks (checkbox list: ISO 27001, SOC 2, GDPR, PCI-DSS, HIPAA), Default policy owner (dropdown), Invite teammates (emails chips input). Buttons: 'Back' (ghost) → Step 1; 'Finish setup' (blue) → Dashboard. Hover/focus states defined. Typography: H2 step titles. Spacing: generous with grouped sections. Style: Low-fidelity grayscale with blue accents. Clickable Elements: progress steps (clickable to navigate), all buttons and checkboxes. Form States: required validation on Org Name; error messages under fields. Navigation: Finish→Dashboard; Skip→Dashboard; Save & exit→Dashboard; Step nav supports back/next."}
        </PromptBlock>
        <PromptBlock label="Uizard Prompt" id="onboarding-uizard">
{"Design a B2B SaaS wireframe for Organization Onboarding Wizard. Screen Layout: Top horizontal stepper with two steps. Main area split: Left narrow column with tips list; Right wide column showing form for current step. UI Components: Stepper, Section headers, Input fields as specified, Checkbox group for frameworks, Chips input for invites, Buttons row bottom-right (Back, Next/Finish), Secondary links (Skip, Save & exit). Interactive Areas: step bullets clickable, inputs, checkboxes, buttons, links. Visual Hierarchy: Primary = Next/Finish; Secondary = Back; Tertiary = Skip/Save. Color: Grayscale with blue primary. Annotations: Disabled Finish until at least one framework selected; show inline validation. Connection Points: Finish/Skip/Save→Dashboard; Step 1 Next→Step 2; Back→Step 1."}
        </PromptBlock>
      </ScreenCard>

      {/* 5. Dashboard */}
      <ScreenCard title="Dashboard (Main Compliance Overview)" index={5}>
        <div className="space-y-3 text-sm">
          <div className="text-gray-600">Primary User Actions:</div>
          <ul className="mb-2 ml-4 list-outside space-y-1">
            <Bullet>Start a new policy → Policy Generator Wizard</Bullet>
            <Bullet>Continue editing a policy → Policy Editor</Bullet>
            <Bullet>View version history and recent activity</Bullet>
            <Bullet>Open Settings</Bullet>
          </ul>
        </div>
        <PromptBlock label="v0.dev Prompt" id="dashboard-v0">
{"Create a clean, modern B2B SaaS wireframe component for Dashboard (Main Compliance Overview). Layout: App shell with top nav (logo, global search, user menu) and left sidebar (Dashboard, Policies, Frameworks, Activity, Settings). Main content grid with four sections: 1) Framework Progress cards (ISO 27001, SOC 2, GDPR, PCI-DSS) showing % completion and 'View details' links; 2) My Tasks list (actionable to-do items with due dates and 'Open' buttons → Policy Editor); 3) Recent Activity feed (audit trail items clickable to policy/version); 4) Quick Actions panel with primary CTA 'Generate new policy' (blue) → Policy Generator Wizard and secondary 'Import policy' (outline). Interactive Components: Sidebar nav items hover/active; Search input with placeholder; User menu with links Profile, Org Settings, Log out. Typography: H1 'Compliance overview'. Spacing: generous. Style: Low-fidelity grayscale with blue accents. Clickable Elements: Generate new policy→Policy Generator Wizard; My Tasks item→Policy Editor; Framework cards→Policy Editor filtered; Activity items→Policy Editor (specific version); Settings in user menu→Settings & Profile Management. Form States: none beyond search focus. Navigation: as above."}
        </PromptBlock>
        <PromptBlock label="Uizard Prompt" id="dashboard-uizard">
{"Design a B2B SaaS wireframe for Dashboard (Main Compliance Overview). Screen Layout: Left vertical sidebar, Top horizontal navbar, Main grid with four widgets (Progress, Tasks, Activity, Quick Actions). UI Components: Sidebar with icons+labels, Top search bar, Avatar menu, Cards with progress bars and buttons, List with checkboxes for tasks, Activity timeline. Interactive Areas: sidebar items, search, buttons and links within cards, avatar menu. Visual Hierarchy: Primary = 'Generate new policy'; Secondary = tasks; Tertiary = activity. Color: Grayscale with blue primary. Annotations: Hover states for nav; Active state highlights current section. Connection Points: Generate new policy→Policy Generator Wizard; Task item→Policy Editor; Framework card→Policy Editor; Settings→Settings & Profile Management."}
        </PromptBlock>
      </ScreenCard>

      {/* 6. Policy Generator Wizard */}
      <ScreenCard title="Policy Generator Wizard (2-step flow)" index={6}>
        <div className="space-y-3 text-sm">
          <div className="text-gray-600">Primary User Actions:</div>
          <ul className="mb-2 ml-4 list-outside space-y-1">
            <Bullet>Complete Step 1: Select framework and template</Bullet>
            <Bullet>Complete Step 2: Provide context → Generate → Policy Editor</Bullet>
          </ul>
        </div>
        <PromptBlock label="v0.dev Prompt" id="generator-v0">
{"Create a clean, modern B2B SaaS wireframe component for Policy Generator Wizard (2-step flow). Layout: Modal or full-page wizard with top stepper (Step 1: Template, Step 2: Context). Step 1 components: Dropdown 'Framework' (ISO 27001, SOC 2, GDPR, PCI-DSS), Grid of template cards (Access Control, Incident Response, Data Retention...) each with radio select and short description, Tag filter chips. Buttons: 'Next' (blue) → Step 2; 'Cancel' (ghost) → Dashboard. Step 2 components: Text inputs - Policy Title, Scope (textarea), Stakeholders (chips), Systems in scope (multiselect), Maturity level (dropdown). Right side shows Live Preview placeholder panel updating with inputs. Buttons: 'Back' (ghost) → Step 1; Primary 'Generate policy' (blue) → Policy Editor with generated draft. Validation: require Framework and Template; require Title. Hover/active states. Typography: H2 per step. Spacing: generous. Style: Low-fidelity grayscale with blue accents. Clickable Elements: template cards, filters, navigation buttons. Navigation: Generate→Policy Editor; Cancel→Dashboard."}
        </PromptBlock>
        <PromptBlock label="Uizard Prompt" id="generator-uizard">
{"Design a B2B SaaS wireframe for Policy Generator Wizard (2-step flow). Screen Layout: Top stepper with two steps; Content: two-column layout on Step 2 (left form, right live preview), single-column card grid on Step 1. UI Components: Dropdowns, Cards with radio, Chips, Text fields, Textarea, Buttons row bottom. Interactive Areas: card selection, dropdowns, chips, text inputs, navigation buttons. Visual Hierarchy: Primary = Next/Generate; Secondary = Back; Tertiary = Cancel. Color: Grayscale with blue primary. Annotations: Disable Next until Framework + Template selected; Disable Generate until Title present. Connection Points: Generate→Policy Editor; Cancel→Dashboard; Back/Next between steps."}
        </PromptBlock>
      </ScreenCard>

      {/* 7. Policy Editor */}
      <ScreenCard title="Policy Editor (Split-screen with version control)" index={7}>
        <div className="space-y-3 text-sm">
          <div className="text-gray-600">Primary User Actions:</div>
          <ul className="mb-2 ml-4 list-outside space-y-1">
            <Bullet>Edit markdown with live preview</Bullet>
            <Bullet>View and revert versions</Bullet>
            <Bullet>Export or share</Bullet>
          </ul>
        </div>
        <PromptBlock label="v0.dev Prompt" id="editor-v0">
{"Create a clean, modern B2B SaaS wireframe component for Policy Editor (Split-screen with version control). Layout: App shell with top bar (policy title, breadcrumbs Dashboard > Policies > [Policy]), right-aligned actions (Export, Share, Save). Main split: Left editor (markdown textarea with toolbar: H1-3, Bold, Italic, Bullet, Numbered, Checklist, Table, Insert Snippet), Right live preview panel. Left sidebar collapsible with: Document outline (headings list clickable to anchors), Version history list with timestamps, authors, labels (Draft, Published) and 'Revert' buttons; Filters by date/author. Bottom status bar: autosave indicator, last saved time. Interactive Components: Toolbar buttons with hover tooltips; Editor supports inline validation (e.g., missing required sections). Version item click loads preview; Revert triggers confirm modal then creates new version and updates preview. Primary Save button (blue) persists and enables Export. Typography: H1 title, H2 section headers. Spacing: generous. Style: Low-fidelity grayscale with blue accents. Clickable Elements: breadcrumbs, toolbar, outline items, version rows, Revert buttons, Save, Export→PDF Export Preview, Share→share modal (non-navigational). Form States: default, dirty (unsaved), saving (spinner), saved (check), error (banner). Navigation: Export→PDF Export Preview; Breadcrumbs→Dashboard; Version click stays; Revert shows confirmation toast."}
        </PromptBlock>
        <PromptBlock label="Uizard Prompt" id="editor-uizard">
{"Design a B2B SaaS wireframe for Policy Editor (Split-screen with version control). Screen Layout: Left slim sidebar (280px) with tabs: Outline, Versions; Center editor pane; Right preview pane. Top bar with breadcrumbs left and Action buttons right (Save - primary blue, Export - secondary, Share - ghost). UI Components: Tabs, Lists, Buttons, Markdown toolbar, Textarea, Preview box, Status footer. Interactive Areas: breadcrumb links, toolbar buttons, textarea, version list rows, Revert buttons, Save/Export/Share. Visual Hierarchy: Primary = Save; Secondary = Export; Tertiary = Share/Outline. Color: Grayscale + blue accents. Annotations: Hover on version row reveals Revert; Disabled Export until saved; Autosave indicator at bottom. Connection Points: Export→PDF Export Preview; Breadcrumb 'Dashboard'→Dashboard."}
        </PromptBlock>
      </ScreenCard>

      {/* 8. PDF Export Preview */}
      <ScreenCard title="PDF Export Preview" index={8}>
        <div className="space-y-3 text-sm">
          <div className="text-gray-600">Primary User Actions:</div>
          <ul className="mb-2 ml-4 list-outside space-y-1">
            <Bullet>Adjust export settings and branding</Bullet>
            <Bullet>Download PDF</Bullet>
            <Bullet>Back to Editor</Bullet>
          </ul>
        </div>
        <PromptBlock label="v0.dev Prompt" id="export-v0">
{"Create a clean, modern B2B SaaS wireframe component for PDF Export Preview. Layout: Two-column: Left settings panel (fixed width) and Right large document preview with pagination. Interactive Components: Settings sections with toggles and inputs: Branding (Logo upload, Company name, Primary color picker), Layout (Page size dropdown, Margins slider, Header/Footer toggles, Page numbers toggle), Content (Include table of contents toggle, Include change log toggle, Watermark text input). Buttons at bottom: 'Download PDF' (blue) → downloads; 'Back to editor' (ghost) → Policy Editor. Preview area: thumbnail page navigator on left of preview, Current page view with zoom controls (+/-, fit to page). Hover states for buttons; disabled Download until preview rendered. Typography: H2 'Export settings'. Spacing: generous. Style: Low-fidelity grayscale with blue accents. Clickable Elements: all toggles, dropdowns, sliders, buttons, page thumbnails. Form States: default and disabled; show loading skeleton while rendering. Navigation: Back→Policy Editor."}
        </PromptBlock>
        <PromptBlock label="Uizard Prompt" id="export-uizard">
{"Design a B2B SaaS wireframe for PDF Export Preview. Screen Layout: Left narrow settings panel in stacked sections with labels and controls; Right large preview canvas with top toolbar for Zoom and page navigation, and a left mini-column of page thumbnails. UI Components: Toggles, Dropdowns, Sliders, Color picker, Upload button, Buttons row bottom. Interactive Areas: each control in settings, page thumbnails, zoom controls, Download and Back buttons. Visual Hierarchy: Primary = Download PDF; Secondary = Back to editor; Tertiary = individual toggles. Color: Grayscale with blue accent. Annotations: Disable Download until saved; indicate company logo placeholder; show page count. Connection Points: Download (no navigation), Back→Policy Editor."}
        </PromptBlock>
      </ScreenCard>

      {/* 9. Settings & Profile Management */}
      <ScreenCard title="Settings & Profile Management" index={9}>
        <div className="space-y-3 text-sm">
          <div className="text-gray-600">Primary User Actions:</div>
          <ul className="mb-2 ml-4 list-outside space-y-1">
            <Bullet>Edit personal profile</Bullet>
            <Bullet>Manage organization settings separately</Bullet>
            <Bullet>Manage team roles and SSO</Bullet>
          </ul>
        </div>
        <PromptBlock label="v0.dev Prompt" id="settings-v0">
{"Create a clean, modern B2B SaaS wireframe component for Settings & Profile Management. Layout: Two-tier tabs: Top tabs for 'Profile', 'Organization', 'Security', 'Billing'; Left sub-navigation for each section. Profile: fields (Name, Job Title, Work Email [read-only], Timezone, Notification toggles), Avatar upload, Save button (blue). Organization: fields (Org Name, Logo upload, Default framework, Data residency), Team table (Name, Role dropdown, Status, 'Invite' button), 'Invite member' modal. Security: SSO providers toggles (SAML/OIDC), Enforce 2FA toggle, API keys card (list with Create/Delete actions). Billing: Plan card, Usage, Update payment button. Interactive Components: tab clicks navigate between sections; tables editable; Save/Invite buttons. Typography: H2 section titles. Spacing: generous with clear grouping. Style: Low-fidelity grayscale with blue accents. Clickable Elements: Save buttons (persist toast), Invite (opens modal), Role dropdowns, Toggle switches, Tab items. Form States: dirty indicators, disabled Save until changes, success banner on save, error inline on invalid. Navigation: Back to Dashboard via breadcrumb at top-left."}
        </PromptBlock>
        <PromptBlock label="Uizard Prompt" id="settings-uizard">
{"Design a B2B SaaS wireframe for Settings & Profile Management. Screen Layout: Top breadcrumb 'Dashboard / Settings'; Horizontal tabs for Profile, Organization, Security, Billing. Within each, left side column shows subsection links; right main panel shows forms or tables. UI Components: Text fields, Read-only field, Avatar uploader, Toggles, Dropdowns, Tables with inline role controls, Buttons (Save primary, Invite secondary). Interactive Areas: tabs, left subsection links, inputs, toggles, role dropdowns, buttons. Visual Hierarchy: Primary = Save; Secondary = Invite; Tertiary = table edits. Color: Grayscale with blue primary. Annotations: Separate personal vs organization settings; success toast after save. Connection Points: Breadcrumb 'Dashboard'→Dashboard; Invites stay in place; No external navigation from sub-tabs."}
        </PromptBlock>
      </ScreenCard>

      <Footer />
    </div>
  );
}
