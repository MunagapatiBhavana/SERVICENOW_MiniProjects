# 🎓 Student Management Application - ServiceNow

A custom ServiceNow application built to manage and store student records within an educational institution. This mini-project demonstrates the use of scoped applications, custom tables, form configurations, and update sets for instance migration.

---

## 🛠️ Features

- Custom Table: `student_registration`
- UI Policy: Phone Number mandatory if Year > 1
- Business Rule: Auto-generates unique Student ID (STU20250001 format)
- Field validations and mandatory rules
- Scoped under: `Student Management`

- 📁 Custom Scoped Application: `Student Management`
- 🗃️ Custom Table: `Student_registration`
- 📝 Fields:
  - Student ID
  - Full Name
  - Email
  - Department
  - Year of Study
  - Phone Number
  - Enrollment Date
- 🎛️ Form & List View Configurations
- 🔐 Optional UI Policies and Business Rules
- ⬆️ Update Set Export for Migration to Higher Instances

---
## 🛠️ Modules Used
- Tables and Columns
- UI Policies
- Business Rules
- Application Scope: `x_993446_student_m_student_registration`
  
---

## 🧪 How to Test
1. Navigate to Student Registration
2. Create a new student (Year > 1 → phone required)
3. Check auto-generated Student ID

## 🚀 How to Deploy

1. Open **ServiceNow Studio**
2. Create a new application: `Student Management`
3. Create a custom table named `Student_registration`
4. Add the required fields and configure form and list layouts
5. Add UI Policies / Business Rules
6. Create an Update Set to track your changes
7. Export and import the update set on another instance

---

## 🔁 Update Set Info

- Name: `Student Management Setup`
- Type: Local Update Set
- Includes: Table, Forms, Layouts, Application Configurations

---

## 📦 Technologies Used

- 🧩 ServiceNow Platform
- 🖥️ Studio & Application Scope
- ⚙️ Update Sets for Deployment

---

## 👩‍💻 Author

**Bhavana Munagapati**  
[GitHub](https://github.com/MunagapatiBhavana)

---

## 📄 License

This project is for educational and demo purposes only.
