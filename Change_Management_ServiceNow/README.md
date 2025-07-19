## 👨‍💼 Change Management – ServiceNow
This project is a customized Change Management system built on the ServiceNow platform. It streamlines the change process lifecycle by allowing users to request changes, route them for approvals, track implementation status, and apply automated workflows, validations, and visibility rules.

## 📌 Problem Statement
In many IT environments, changes to infrastructure or applications are often untracked, poorly communicated, or lack formal approval. This leads to downtime, security issues, and lack of audit trail.

## ✅ Solution
Build a structured Change Management module in ServiceNow that allows:

Users to initiate and track change requests

Teams to assess risk and plan implementation

Automated approvals based on risk levels

Field-level visibility and validation rules

Lifecycle workflow aligned with ITIL practices

## 🛠️ Features
📝 Change Request Form Customization
Capture essential data like:

Change Type (Standard, Normal, Emergency)

Business Impact (Custom)

Risk Level (Low, Medium, High)

Implementation Plan

Backout Plan

CAB Approval Required (Custom)

🔒 UI Policies for Field Behavior
Make fields mandatory based on Risk Level or Change Type

Show/Hide fields like Backout Plan when Risk Level = High

Make fields read-only post approval

## ⚙️ Business Rules
Prevent submission if critical data is missing (e.g., Backout Plan for High Risk)

Automatically update change status when assigned

Send validation messages for incomplete changes

## 🔁 Lifecycle Workflow
Tracks the change through stages:

sql
Copy
Edit
New → Assess → Authorize → Scheduled → Implement → Review → Closed
Includes:

Conditional approval paths

Auto-transition rules

Workflow visual representation

## 📬 Notifications
Email triggered when:

Change is assigned

Status is moved to "Implement" or "Closed"

High-risk changes require CAB review

## 📂 Modules & Tables
Module	Description
Change	Core ServiceNow module for Change Requests
Custom UI Policies	Visibility & mandatory field control
Business Rules	Server-side validations
Workflow Editor	Defines lifecycle transitions & approvals

## Tables Used:

change_request – Core Change data

sys_user – User and assignment info

sys_journal_field – Work notes and comments

## 🔁 Workflow Overview
User navigates to Change > Create New

Selects Change Type, fills in impact, risk, and plan

Based on logic:

Risk Level determines approval path

Mandatory fields enforced dynamically

Change progresses through lifecycle with approvals

Resolved and closed after review

Email notifications sent to approvers, implementers

## 🧪 Testing Instructions
Navigate to Change > Create New

Fill all mandatory fields

For Low Risk: Observe auto-approval

For Medium Risk: Ensure Manager approval is required

For High Risk: Leave Backout Plan empty → Error must display

Add plan → Submit → CAB approval triggered

Complete change → Verify state transitions and email logs

✅ Status
✔️ Completed
🛠️ Modular and easily extendable
📬 Email and automation rules verified

## 👩‍💻 Author
Munagapati Bhavana
B.Tech, GITAM University, Bangalore
📌 GitHub: MunagapatiBhavana

## 📄 License
This project is provided for educational and demonstration purposes.
Feel free to customize and extend it for academic or enterprise use with attribution.

