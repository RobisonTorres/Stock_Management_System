from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

app = Flask(__name__)
app.config['SECRET_KEY'] = '8a758850e'  # To prevent attacks.  

# Database connection.
DRIVER_NAME = 'ODBC Driver 17 for SQL Server'
SERVER_NAME = 'RobisonTorres\\SQLEXPRESS'
DATABASE_NAME = 'stock_db'

# SQLAlchemy connection string
app.config['SQLALCHEMY_DATABASE_URI'] = f"mssql+pyodbc://@{SERVER_NAME}/{DATABASE_NAME}?trusted_connection=yes&driver={DRIVER_NAME}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # This prevents warnings.
#app.config['SQLALCHEMY_ECHO'] = True  # For SQL debugging.

db = SQLAlchemy(model_class=Base)
db.init_app(app)

from stock_system import routes