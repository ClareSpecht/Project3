from flask import Flask, jsonify, render_template
import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import func
import json
import pandas as pd

app = Flask(__name__)


engine = create_engine('sqlite:///Data Collection/happiness_db.sqlite', echo=False)
Base = automap_base()
Base.prepare(engine, reflect=True)
print(Base.classes.keys())
pets = Base.classes.pets
income = Base.classes.income
colleges = Base.classes.colleges
crime = Base.classes.crime
state_parks = Base.classes.state_parks
all_parks = Base.classes.all_parks
states = Base.classes.states


@app.route('/')
def home():
    return render_template( f"""Available Routes:\n
    """ f"""/api/v1/pets

        """ f"""/api/v1/happiness

        """ f"""/api/v1/income

        """ f"""/api/v1/crime

        """
        f"""/api/v1"""
    )

@app.route('/api/v1')
def apiv1():
    return 'Info about Version 1'

@app.route('/api/v1/pets')
def v1pets():
    pet_info = []
    session = Session(engine)
    pet_info = engine.execute('SELECT * FROM pets')
    session.close()
    return json.dumps([dict(pet) for pet in pet_info])

@app.route('/api/v1/income')
def v1income():
    income_info = []
    income_info = engine.execute('SELECT * FROM income')
    return json.dumps([dict(i) for i in income_info])

@app.route('/api/v1/crime')
def v1crime():
    crime_info = []
    crime_info = engine.execute('SELECT * FROM crime')
    return json.dumps([dict(crime) for crime in crime_info])

@app.route('/api/v1/colleges')
def v1colleges():
    college_info = []
    college_info = engine.execute('SELECT * FROM colleges')
    return json.dumps([dict(college) for college in college_info])

@app.route('/api/v1/happiness')
def v1happiness():
    happy_info = []
    happy_info = engine.execute('SELECT * FROM happiness')
    return json.dumps([dict(happy) for happy in happy_info])

@app.route('/api/v1/parks/all')
def v1parkall():
    park_info = []
    park_info = engine.execute('SELECT * FROM all_parks')
    return json.dumps([dict(park) for park in park_info])

@app.route('/api/v1/parks/state')
def v1parkstate():
    park_info = []
    park_info = engine.execute('SELECT * FROM state_parks')
    return json.dumps([dict(park) for park in park_info])

if __name__ == "__main__":
    app.run(host= 'localhost',port =5000,debug=True)