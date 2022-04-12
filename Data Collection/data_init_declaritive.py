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

park_table = pd.read_csv('Raw Data Files/all_parks.csv')

college_table = pd.read_csv('Raw Data Files/colleges.csv')

statepark_table = pd.read_csv('Raw Data Files/stateparks.csv')

crime_table = pd.read_csv('Raw Data Files/crime_data.csv')

happiness_table = pd.read_csv('Raw Data Files/happiness.csv')

with engine.connect() as con:
    con.execute('''create TABLE pets("index" INTEGER, name VARCHAR PRIMARY KEY,  abbreviation VARCHAR(2),"pet ownership" VARCHAR,"dog ownership" VARCHAR,"cat ownership" VARCHAR);''')

with engine.connect() as con:
    con.execute('''CREATE TABLE income("index" INTEGER, "State" VARCHAR PRIMARY KEY,  HouseholdIncome INTEGER);''')
    
with engine.connect() as con:
    con.execute('''create TABLE states('index' INTEGER, "State" VARCHAR PRIMARY KEY,  "State.1" VARCHAR,"State Capital" VARCHAR,Region VARCHAR);''')

with engine.connect() as con:
    con.execute('''CREATE TABLE all_parks("index" INTEGER, State VARCHAR,'0' VARCHAR,'1' VARCHAR,'2' VARCHAR,'3' VARCHAR,'4' VARCHAR,'5' VARCHAR,'6' VARCHAR,'7' VARCHAR,'8' VARCHAR,'9' VARCHAR,'10' VARCHAR,'11' VARCHAR,'12' VARCHAR,'13' VARCHAR,'14' VARCHAR,'15' VARCHAR,'16' VARCHAR,'17' VARCHAR,'18' VARCHAR,StateAbv VARCHAR(2) PRIMARY KEY,'State Capital' VARCHAR,Region VARCHAR);''')

with engine.connect() as con:
    con.execute('''create TABLE state_parks('index' INTEGER, Count INTEGER,Type VARCHAR,State VARCHAR PRIMARY KEY,'State.1' VARCHAR(2),'State Capital' VARCHAR,Region VARCHAR);''')

with engine.connect() as con:
    con.execute('''create TABLE crime('index' INTEGER, "State" VARCHAR PRIMARY KEY, state_abv VARCHAR(2),  "State Capital" VARCHAR,Region VARCHAR,Crime INTEGER);''')

with engine.connect() as con:
    con.execute('''create TABLE colleges('index' INTEGER, "StateABV" VARCHAR PRIMARY KEY,  Unviersity INTEGER, State VARCHAR, 'State Capital' VARCHAR, Region VARCHAR);''')

with engine.connect() as con:
    con.execute('''create TABLE happiness('index' INTEGER, 'Overall Rank' INTEGER,State VARCHAR,'Total Score' FLOAT,'Emotional & Physical Well-Being' FLOAT,'Work Environment' FLOAT,'Community & Environment' FLOAT);''')



#add tables to database
states_table.to_sql('states',engine, if_exists='append')

income_table.to_sql('income',engine, if_exists='append')

pet_table.to_sql('pets', engine, if_exists='append')

park_table.to_sql('all_parks', engine, if_exists='append')

statepark_table.to_sql('state_parks', engine, if_exists='append')

crime_table.to_sql('crime', engine, if_exists='append')

college_table.to_sql('colleges', engine, if_exists='append')

happiness_table.to_sql('happiness', engine, if_exists='append')