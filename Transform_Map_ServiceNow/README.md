# 📊 Transform Map – ServiceNow
This project is a customized data transformation and import automation system built on the ServiceNow platform. It streamlines the process of importing Excel data into ServiceNow tables using Import Sets and Transform Maps, with validation and duplication control to ensure data integrity.

# 📌 Problem Statement
In many organizations, bulk data (e.g., student records, user data, asset data) needs to be imported from external sources like Excel. Doing this manually is error-prone, time-consuming, and can introduce duplicates or inconsistencies, leading to data quality issues and inefficiency.

# ✅ Solution
Build a structured data import and transformation module in ServiceNow that allows:

Seamless upload of bulk Excel data

Automatic mapping to target tables

Validation checks and field-level control

Duplicate restriction mechanisms

Complete audit trail of imports

# 🛠️ Features
🗂️ Import Set & Target Table
Custom table: u_student_records (stores clean data)

Import Set table: u_import_student_data (temporary data loader)

Supports .xlsx or .csv upload formats

# 🧾 Change Request Form Customization
Capture essential data from uploaded Excel such as:

Name

Email (used for duplicate check)

Phone

Course

# 🔒 Transform Map Script & Data Validation
Field Mapping: Source → Target fields auto-mapped

Transform Script: Prevents inserting duplicate records (based on email)
```
(function transformRow(source, target, map, log, isUpdate) {
    var existing = new GlideRecord('u_student_records');
    existing.addQuery('email', source.email);
    existing.query();
    if (existing.next()) {
        log.info("Duplicate email found: " + source.email);
        return;
    }

    target.name = source.name;
    target.email = source.email;
    target.phone = source.phone;
    target.course = source.course;
})(source, target, map, log, isUpdate);
```
# ⚙️ UI Policies (Optional Enhancements)
Dynamically control visibility or mandatory fields during manual entry (if applicable)

Useful if the table is exposed via a catalog form or UI page

# 🔁 Workflow Overview
Navigate to System Import Sets > Load Data

Upload Excel file (e.g., StudentData.xlsx)

Loaded data goes to u_import_student_data

Use Transform Map to clean and insert data into u_student_records

Duplicate entries (based on email) are automatically skipped

Transformed data can be reviewed or exported as needed

# 📬 Notifications (Optional)
Configure email on successful bulk import

Alert when data is skipped due to validation

Log messages visible in System Log > All

# 📂 Modules & Tables
Module	Description
Import Sets	Bulk data loader from Excel/CSV
Transform Map	Field-level mapping and transformation
Script (transformRow)	Restricts duplicates and enforces logic
u_student_records	Custom target table storing clean data
u_import_student_data	Temporary import table
System Logs	Debug and trace validation results

# 🧪 Testing Instructions
Navigate to System Import Sets > Load Data

Upload StudentData.xlsx containing:

Name, Email, Phone, Course

Ensure all rows are loaded into u_import_student_data

Run the Transform Map

✅ For first-time entries: records are inserted into u_student_records

❌ For duplicate emails: records are skipped, and a log entry is generated

✅ Status
✔️ Completed
🛠️ Modular and easily reusable
🔒 Validations & duplication checks working
📬 Logs and import tracking verified

# 👩‍💻 Author
Munagapati Bhavana
B.Tech, GITAM University, Bangalore
📌 GitHub: MunagapatiBhavana

# 📄 License
This project is provided for educational and demonstration purposes.
You are free to customize, extend, and use this project in academic or enterprise scenarios with attribution.

