import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base

import pandas as pd
from sympy import false

engine = create_engine("sqlite:///happiness_db.sqlite")


#create dataframe tables to insert
pet_table = pd.read_json('Raw Data Files/pet_data.json')

income_table = pd.read_csv('Raw Data Files/IncomeData.csv')

states_table = pd.read_csv('Raw Data Files/states.csv')

with engine.connect() as con:
    con.execute('''create TABLE pets("index" INTEGER, name VARCHAR PRIMARY KEY,  abbreviation VARCHAR(2),"pet ownership" VARCHAR,"dog ownership" VARCHAR,"cat ownership" VARCHAR);''')


with engine.connect() as con:
    con.execute('''CREATE TABLE income("index" INTEGER, "State" VARCHAR PRIMARY KEY,  HouseholdIncome INTEGER);''')
    
with engine.connect() as con:
    con.execute('''create TABLE states('index' INTEGER, "State" VARCHAR PRIMARY KEY,  "State.1" VARCHAR,"State Capital" VARCHAR,Region VARCHAR);''')



#add tables to database
states_table.to_sql('states',engine, if_exists='append')

income_table.to_sql('income',engine, if_exists='append')

pet_table.to_sql('pets', engine, if_exists='append')