from flask import Flask, jsonify
import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import func
import json
import pandas as pd

app = Flask(__name__)


engine = create_engine('sqlite:///Data Collection/happiness_comparisons.sqlite', echo=False)
Base = automap_base()
Base.prepare(engine, reflect=True)
print(Base.classes.keys())
pets = Base.classes.pets


@app.route('/')
def home():
    return ( f"""Available Routes:
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


if __name__ == "__main__":
    app.run(host= 'localhost',port =5000,debug=True)