# 👨‍💼 Onboarding Service Catalog - ServiceNow


This project is a custom **Onboarding Service Catalog** built on the **ServiceNow** platform. It is designed to streamline the employee onboarding process by collecting personal and professional details and allowing employees to request essential resources like laptops, mice, ID cards, and more.

---

## 📌 Problem Statement
# 📝 Leave Management System - ServiceNow

This project is a **Leave Management System** built using **ServiceNow**. It allows employees to apply for leave, and managers to approve or reject leave requests. The system ensures seamless workflow automation, notifications, and data management.

New employees often struggle with manually submitting their personal and professional details and requesting necessary resources. This process can be time-consuming and unorganized.

**Solution:**  
Develop a structured onboarding catalog in ServiceNow where employees can:
- Fill in their personal and professional information
- Request office essentials and IT resources
- Track the status of their onboarding service requests

---

## 🛠️ Features

- 📋 **Employee Information Form**  
  Collect personal (name, contact, address) and professional (employee ID, department, manager) details.

- 💻 **Resource Request Options**  
  Request items such as:
  - Laptop
  - Mouse
  - Keyboard
  - ID Card
  - Access Cards

- 📬 **Automated Notifications**  
  Trigger emails for request submission and fulfillment.

- 🔁 **Service Workflow**  
  Each request follows a defined approval and fulfillment workflow.

- 🔒 **Role-based Access**  
  Different access levels for Employees, HR, and IT Admins.

---

## 📂 Modules & Tables

### Catalog Items
| Name                      | Description                                |
|---------------------------|--------------------------------------------|
| Employee Onboarding Form  | Collects personal & professional details   |
| Resource Request          | Allows selection of required items         |

### Tables Used
- `x_[scope]_Leave_man_Leave_Request` – Stores employee details
- `sc_request`, `sc_req_item`, `sc_task` – Handles catalog requests
- Custom tables for tracking delivery or approvals (optional)

---

## 🔁 Workflow Overview

1. Employee logs in and opens the **Onboarding Catalog**.
2. Fills out personal/professional info in the **Onboarding Form**.
3. Submits resource requests (e.g., laptop, mouse).
4. Requests are routed to respective departments for approval.
5. Approval triggers fulfillment tasks to IT/HR teams.
6. Employee receives email updates throughout the process.

---

## 🧪 Testing Instructions

1. Go to **Service Catalog > Onboarding Services**
2. Submit both forms:
   - **Personal & Professional Details**
   - **Select Requested Items**
3. Check the **Requests**, **Requested Items**, and **Tasks** tables.
4. Approve tasks (simulate as approver/IT admin).
5. Check email notifications and completion status.

---

## ✅ Status

✔️ Completed  
🛠️ Modular and easily extendable  
📬 Notifications and workflows tested

---

## 🧑‍💻 Author

**Munagapati Bhavana**  
B.Tech, GITAM University, Bangalore  
GitHub: [MunagapatiBhavana](https://github.com/MunagapatiBhavana)

---

## 📄 License

This project is provided for learning and demonstration purposes. You may modify and reuse it for enterprise use with attribution.
