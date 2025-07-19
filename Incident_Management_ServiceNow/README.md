# 👨‍💼 Incident Management - ServiceNow

This project is a customized **Incident Management** system built on the ServiceNow platform. It is designed to streamline IT incident handling by allowing users to log incidents, route them to appropriate teams, track resolution status, and enforce field-level controls and process workflows.

---

## 📌 Problem Statement

In many organizations, IT teams receive support tickets through emails or informal channels, leading to lost records, miscommunication, and delayed resolutions.

---

## ✅ Solution

Build a structured **Incident Management** module in ServiceNow that helps:

- Users log and track incidents
- IT teams efficiently manage and resolve them
- Automate workflows and field visibility
- Enforce proper data collection and SLA adherence

---

## 🛠️ Features

### 📝 Incident Form Customization
- Collect critical information like:
  - Issue Summary
  - Impact
  - Urgency
  - Assigned To
  - Root Cause (Custom field)
  - Resolution Notes (Custom field)

### 🔒 UI Policies for Field Behavior
- Make fields mandatory or read-only based on state
- Show/hide fields conditionally (e.g., show `Root Cause` only when state is `Resolved`)

### ⚙️ Business Rules
- Automatically change status when assigned
- Prevent form submission if required fields are missing

### 🔁 Lifecycle Workflow
- Tracks incident through standard states:
  - New → In Progress → On Hold → Resolved → Closed

### 📬 Notifications
- Trigger email alerts on assignment or resolution

---

## 📂 Modules & Tables

| Module              | Description                                      |
|---------------------|--------------------------------------------------|
| Incident             | Core ServiceNow module to manage incidents       |
| Custom UI Policies   | For field conditions and visibility              |
| Business Rules       | Automations and validations                     |

**Tables Used**:
- `incident` – Core Incident data
- `sys_user` – User records
- `sys_journal_field` – Comments & work notes

---

## 🔁 Workflow Overview

1. User logs in and navigates to **Incident > Create New**
2. Fills in issue details, selects priority, and submits
3. Based on form logic:
   - Fields are shown/hidden or made mandatory
   - State may auto-update to `In Progress`
4. IT team reviews, updates resolution, and closes
5. Email notifications sent on assignment, resolution, and closure

---

## 🧪 Testing Instructions

1. Go to `Incident > Create New`
2. Fill out all mandatory fields
3. Assign incident to an IT user
4. Observe automatic state change to `In Progress`
5. Set state to `Resolved` and ensure `Root Cause` becomes visible/mandatory
6. Add resolution notes and close the ticket
7. Check email log for notifications

---

## ✅ Status

✔️ Completed  
🛠️ Modular and easy to expand  
📬 Email and automation rules tested

---

## 👩‍💻 Author

**Munagapati Bhavana**  
B.Tech, GITAM University, Bangalore  
📌 GitHub: [MunagapatiBhavana](https://github.com/MunagapatiBhavana)

---

## 📄 License

This project is provided for educational and demonstration purposes.  
Feel free to modify and extend it for academic or enterprise use with attribution.

