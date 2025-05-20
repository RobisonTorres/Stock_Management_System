# 📦 Stock Management System

A simple and effective inventory control application with user authentication and product management features. Built with Python and SQL Server.

---

## 🚀 Features

### 🔐 User Authentication
- Secure login screen  
- New user registration  

### 📊 Stock Management  
Manage inventory efficiently through a dedicated menu:  
- **Add** – Insert new products into stock  
- **Update** – Modify product details  
- **Delete** – Remove products from stock  
- **Show** – Display all products in stock  
- **Exit** – Return to the main menu  

### 📋 Product Overview  
- View all registered stock items in a dedicated screen

---

## 🛠 Prerequisites

Make sure the following tools are installed on your machine:

- [Python](https://www.python.org/)  
- [SQL Server](https://www.microsoft.com/en-us/sql-server/)  
- Python packages listed in `requirements.txt`

---

## 📦 Installation & Usage

Follow the steps below to get the system running:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RobisonTorres/Stock_Management_System.git
   cd Stock_Management_System
   ```

2. **Set up the SQL Server database**:
   ```sql
   CREATE DATABASE stock_db;
   ```
   ⚠️ Update the SQL Server connection string in `__init__.py` to match your environment.

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:
   ```bash
   python run_app.py
   ```

5. Open the provided link in your browser (e.g., `http://127.0.0.1:5000`) to access the application.

---

## 📂 Project Structure (Optional)

```
Stock_Management_System/
│
├── flowchart_app/           # flowchart application
├── stock_system/            # Core application code
├── requirements.txt         # Dependencies
├── run_app.py               # Entry point to run the app
└── README.md
```

---