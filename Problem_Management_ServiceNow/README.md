## 👩‍💻 Problem Management – ServiceNow
This project is a customized Problem Management module built on the ServiceNow platform. It supports proactive identification, analysis, and resolution of root causes for recurring incidents. The system tracks the full lifecycle of problems, from detection to closure, using intelligent workflows, validations, and automated knowledge base integration.

## 📌 Problem Statement
In IT operations, many recurring incidents go unresolved due to lack of root cause analysis and poor visibility of problem trends. Without a structured Problem Management process, organizations suffer repeated service disruptions, increased downtime, and inefficient resource usage.

## ✅ Solution
Build a robust Problem Management module in ServiceNow that:

Enables tracking and investigation of underlying issues behind incidents

Automates state transitions and validations throughout the lifecycle

Records workarounds and known errors

Integrates with Knowledge Base for reuse of solutions

Provides visibility through dashboards and reporting

## 🛠️ Features
📝 Problem Form Customization
Capture essential data like:

Related Incidents

Impact, Urgency, and Priority

Root Cause Analysis

Workaround (if available)

Known Error (checkbox)

State (New, Investigating, Resolved, Closed)

## 🔒 UI Policies for Field Behavior
Show Workaround only when State = Investigating

Enable Root Cause and Known Error fields only when State = Resolved

Make fields read-only when problem is Closed

## ⚙️ Business Rules
Prevent resolution if Root Cause is empty

Auto-assign Problem Manager based on Priority

Auto-update State when Workaround is defined

Insert validation messages for incomplete records

## 🔁 Lifecycle Workflow
Tracks the problem through key stages:

New → Categorized → Investigating → Workaround Defined (optional) → Known Error Recorded → Resolved → Closed

Includes:

Auto-status transitions

Validation at each stage

Known Error article generation button

# 📬 Notifications
Trigger emails when:

Problem is assigned to a manager

State moves to Resolved or Closed

Workaround is recorded or updated

# 📂 Modules & Tables
Module	Description
Problem Core	Base module for tracking problems
Custom UI Policies	Show/hide & mandatory field logic
Business Rules	Server-side validations & auto-flows
Flow Designer	Automated lifecycle transitions

# Tables Used:

problem – Core problem data

incident_problem – Linking incidents to problems

kb_knowledge – For known error article generation

sys_user – For assignments and notifications

# 🔁 Workflow Overview
User navigates to Problem > Create New

Adds related incidents, describes symptoms, selects impact and urgency

Analyst investigates and enters workaround (if any)

On identifying Root Cause, sets State to Resolved and checks Known Error

Optional: Generates a KB article for reuse

Manager reviews and closes the problem

Dashboard updated and stakeholders notified

# 🧪 Testing Instructions
Go to Problem > Create New

Leave Root Cause empty → Try to resolve → Error message should appear

Set State = Investigating → Workaround becomes visible

Fill workaround → Save → Observe auto-logic

Change State to Resolved → Root Cause and Known Error become editable

Submit → KB article generation button appears

Close problem → Email notifications sent

✅ Status
✔️ Completed
🛠️ Fully functional and modular
📬 Notifications and business logic verified

# 👩‍💻 Author
Munagapati Bhavana
B.Tech, GITAM University, Bangalore
📌 GitHub: MunagapatiBhavana

# 📄 License
This project is for educational and demonstration purposes. You are free to customize and extend it for academic or enterprise use with proper attribution.
