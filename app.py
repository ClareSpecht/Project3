from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/')
def home():
    return 'Documentation'



if __name__ == "__main__":
    app.run(host= 'localhost',port =5000,debug=True)