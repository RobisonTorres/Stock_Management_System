# **Stock Management System**

## **Features**

- **User Authentication**  
  - Login screen  

  - New user registration  

- **Stock Management**  
  - Dedicated menu for managing stock items with the following operations:  
    - **Add**: Insert new products into the stock.  
    - **Update**: Modify details of existing products.  
    - **Delete**: Remove products from the stock.  
    - **Show**: Display all products currently in stock.  
    - **Exit**: Return to the main menu.

<p align="center"><img text-align:center src=image_app/stock_menu.png></p>

- **Product Overview**  
  - A screen to view all stock items.  

## **Prerequisites**

Ensure you have the following installed:

- Python  
- SQL Server  
- Required Python packages (see `requirements.txt`)  

## **Installation & Usage**

Follow these steps to set up and run the application:

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/RobisonTorres/Stock_Management_System.git
   ```  

2. **Set up the database** in SQL Server by executing:
   ```sql
   CREATE DATABASE stock_db;
   ```
  2.1 Don't forget to change the sql server connection in __init__.py.
  
3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```  

4. **Run the application**:
   ```bash
   python run_app.py
   ```  

5. Click on the link provided in the terminal to access the application, e.g: http://127.0.0.1:5000. 