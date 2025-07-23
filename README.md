# ServiceNow Mini Projects 🛠️

This repository consolidates my hands‑on ServiceNow mini‑projects, each in its own folder, demonstrating key platform skills like workflows, approvals, data modeling, and UI design.

---

## 📁 Repository Structure
```
SERVICENOW_MiniProjects/
├── Student_Management_ServiceNow/
│ ├── Student_Management_Report.docx
│ ├── README.md
│ ├── Flowchart.png
│ ├── BusinessRule_Script.js
│ ├── Screenshots
        
├── Leave_Management_ServiceNow/
│ ├── Leave_Management_Report.docx
│ ├── README.md
│ ├── FlowChart.png
│ ├── ScreenShots

├──  Incident_Management_ServiceNow/
│ ├── Incident_Management_Report.docx
│ ├── README.md
│ ├── Flowchart.png
│ ├── ScreenShots

├── Change_Management_ServiceNow/
│ ├── Change_Management_report.docx
│ ├── README.md
│ ├── Flowchart.png
│ ├── ScreenShots

├── Problem_Management_ServiceNow/
│ ├── Problem_Management_report.docx
│ ├── README.md
│ ├── Flowchart.png
│ ├── ScreenShots

├── Transform_Map_ServiceNow/
│ ├── Transform_Map_report.docx
│ ├── README.md
│ ├── Flowchart.png
│ ├── ScreenShots
│ ├── Test_data.xlsx
│ ├── Transform_Script.js

└── README.md
```

- Each folder contains one standalone mini‑project.
- Git history for each project is **preserved** via Git import.
- The root `README.md` gives a high‑level overview and links into each project folder.

---

## 🚀 Mini‑Projects Overview

### 1. Student Management (Student_Management_ServiceNow)
- **Purpose:** Manage student data, enrollments, and academic workflows using custom tables and automations.
- **Features:**
  - Custom [Student] table with attributes like Name, Class, Status
  - UI Pages for data entry and student record display
  - Approval workflow for batch enrollment
  - Notifications on approval status
- **Why it's useful:** Demonstrates fundamental ServiceNow concepts like table creation, Flow Designer usage, and email notifications.

---

### 2. Leave Management (Leave_Management_ServiceNow)
- **Purpose:** Handle employee leave requests and approvals within the ServiceNow platform.
- **Features:**
  - Leave request form with employee details, dates, and reason
  - Multi-level approval flow based on leave duration/type
  - Auto-rejection or escalation on timeout
  - Email notifications to approvers and requestors
- **Why it's useful:** Implements real-world HR workflow logic using Flow Designer, notifications, and conditions.

---

### 3. Incident Management (Incident_Workflow_ServiceNow)
- **Purpose:** Simulate a working model of incident ticket handling as per ITSM practices.
- **Features:**
  - Custom Incident form with impact, urgency, and description
  - Dynamic assignment based on category or priority
  - SLA timers simulated with Business Rules
  - Notification sent on incident closure
- **Why it's useful:** Demonstrates Flow Designer for dynamic assignment, SLA logic, and incident lifecycle tracking.

---

### 4. Change Management (Change_Management_ServiceNow)
- **Purpose:** Build a simplified change request system following the ITIL Change Management lifecycle.
- **Features:**
  - Change Request table with CI, Category, Risk, Impact fields
  - Approval mechanism for high-risk changes
  - Automated updates via Business Rules
  - Change status flow from draft to closure
- **Why it's useful:** Demonstrates advanced field management, risk categorization, and approval workflows in ITSM.

---

### 5. Problem Management (Problem_Management_ServiceNow)
- **Purpose:** Implement a structured system to track, analyze, and resolve the root causes of recurring incidents using the ITIL Problem Management lifecycle.
- **Features:**
  - Problem table with fields for Root Cause, Workaround, Known Error, and Related Incidents
  - UI Policies for dynamic field visibility based on state (e.g., Investigating, Resolved)
  - Business Rules to validate resolution, auto-assign managers, and manage state transitions
  - KB article generation for known errors with seamless Knowledge Base integration
  - **Why it's useful:** Demonstrates lifecycle automation, root cause tracking, knowledge reuse, and smart incident-problem linking in ITSM workflows.
 
  ---

  ### 6. Transform Map Automation (Transform_Map_ServiceNow)
  - **Purpose:** Automate the bulk import, transformation, and validation of Excel/CSV data into ServiceNow tables while enforcing data integrity and reducing manual errors.
  - **Features:**
        - Import Set table to temporarily hold uploaded Excel/CSV data
        - Transform Map with field mapping from source (Import Set) to target (custom table like u_student_records)
        - Transform Scripts to enforce validations and prevent duplicate records (e.g., based on email)
        - UI Policies (optional) to control form behavior and enforce field visibility or mandatory conditions if exposed via UI
        - System Logs to track skipped records, duplicate entries, and transformation success
        - Notifications (optional) to inform users or admins about the import status

## 📘 Quick Start Guide

1. Clone this repo:
   ```bash
   git clone https://github.com/MunagapatiBhavana/SERVICENOW_MiniProjects.git
   cd SERVICENOW_MiniProjects
   
## 🛠️ Technologies & Tools Used

- **ServiceNow** (Custom Tables, Flow Designer, Business Rules, Notifications)
- **JavaScript** (for scripting Business Rules & Client Scripts)
- **Flow Designer**
- **Data Modeling**
- **ITSM Concepts** (Incident, Change, Request Management)

## 🧭 How to Navigate
Folder Structure: Each mini‑project is self‑contained, ideal for demonstration, learning, or portfolio.

Documentation: Look for a README.md within each folder for setup instructions and screen‑shots.

Git History: All commit history for each project is preserved — check individual folder commits in repo log.

## 📬 Feedback or Updates
Feel free to raise issues, suggest enhancements, or submit pull requests. This repo is evolving — your feedback is encouraged!
