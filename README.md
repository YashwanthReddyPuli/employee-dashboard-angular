# 👥 Employee DBMS - Angular Dashboard

A professional, modular **Employee Management Dashboard** built with **Angular** and **TypeScript**. This project demonstrates advanced Angular architecture, dynamic data manipulation, and responsive UI design tailored for enterprise resource planning.

## 👨‍💻 Team Details

Meet the developers behind this project:

- **PULI BALAJI YASHWANTH REDDY**
- **JINS THOMAS**
- **ANUSHKA PRAVAKAR**
- **NEVITA SHARON Y**

## 🎯 Project Scope & Features

### 1. TypeScript Foundations & Data Modeling
- **Strict Typing**: Full implementation of a robust `Employee` interface
- **Data Fields**: Comprehensive tracking including ID, Name, Role, Department, and Salary

### 2. Angular Architecture
- **Module-Based Design**: Organized via `AppModule` with clean component declarations
- **Component Communication**: Implementation of `@Input()` and `@Output()` decorators for data flow

### 3. Advanced Dashboard Features
- **Operational Overview**: Real-time metrics like Total Headcount and Total Monthly Payroll
- **Dynamic Data Controls**:
  - **Sorting**: Logic to sort records by Name or Salary
  - **Filtering**: Isolate departments via dropdown menus
- **Full CRUD Operations**:
  ➕ **Create**: Add new records with form validation  
  📖 **Read**: Real-time data visualization  
  ✏️ **Update**: Editing existing employee details  
  🗑️ **Delete**: Removing records from the database
- **Data Precision**: Salary inputs restricted to manual numeric entry

## 🛠️ Technologies Used

| Category     | Technology          |
|--------------|---------------------|
| **Framework** | Angular            |
| **Language**  | TypeScript         |
| **Styling**   | Modern CSS3        |
| **Environment** | Node.js, Angular CLI |
| **Editor**    | Visual Studio Code |

## 💻 Installation & Setup

Follow these steps to get the project running locally:

```bash
# Clone the repository
git clone https://github.com/YashwanthReddyPuli/employee-dashboard-angular.git

# Navigate to the project directory
cd employee-dashboard-angular

# Install dependencies
npm install

# Run the application
ng serve

View the dashboard: Open http://localhost:4200 in your browser.
📂 Project Structure

src/app/
├── navbar/             # Top-aligned navigation component
├── employee-list/      # Stats, filtering, sorting, and CRUD
├── employee.ts                 # Core TypeScript interface
├── app.component.ts         # Root application logic
└── app.module.ts                 # Module definitions
🚀 Quick Start

    Ensure you have Node.js (v14+) and Angular CLI installed

    Clone and install as shown above

    Access the dashboard at http://localhost:4200
