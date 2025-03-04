from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SelectField, SubmitField
from wtforms.validators import DataRequired, Length, EqualTo

class LoginForm(FlaskForm):
    
    username = StringField(render_kw = {'placeholder': 'Username'}, 
                           validators=[DataRequired(), Length(min=2, max=20)])
    
    password = PasswordField(render_kw = {'placeholder': 'Password'}, 
                           validators=[DataRequired(), Length(min=2, max=80)])
    
    role = SelectField(choices = [('Employee', 'Employee'), ('Manager', 'Manager')])
    submit = SubmitField('Login')

class CreateUserForm(FlaskForm):
    
    first_name = StringField(render_kw = {'placeholder': 'First Name'}, 
                           validators=[DataRequired(), Length(min=2, max=20)])
    
    last_name = StringField(render_kw = {'placeholder': 'Last Name'}, 
                           validators=[DataRequired(), Length(min=2, max=20)])
    
    password = PasswordField(render_kw = {'placeholder': 'Password'}, 
                           validators=[DataRequired(), Length(min=2, max=80)])
    
    confirm_password = PasswordField(render_kw = {'placeholder': 'Confirm Password'}, 
                           validators=[DataRequired(), Length(min=2, max=80), EqualTo('password')])
    
    role = SelectField(choices = [('Employee', 'Employee'), ('Manager', 'Manager')])
    submit_create = SubmitField('Create')