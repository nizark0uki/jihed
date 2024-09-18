from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route('/reconnaissance', methods=['GET'])
def run_reconnaissance():
    subprocess.Popen(['python3', 'my_python_projects/project1/main.py'])  # Non-blocking
    return jsonify({'message': 'Facial recognition started'}), 200

@app.route('/somnelance', methods=['GET'])
def run_somnelance():
    subprocess.Popen(['python3', 'my_python_projects/project2/main.py'])  # Non-blocking
    return jsonify({'message': 'Drowsiness detection started'}), 200

@app.route('/expressions', methods=['GET'])
def run_expressions():
    subprocess.Popen(['python3', 'my_python_projects/project3/main.py'])  # Non-blocking
    return jsonify({'message': 'Facial expression detection started'}), 200

@app.route('/all-in-one', methods=['GET'])
def run_all_in_one():
    subprocess.Popen(['python3', 'my_python_projects/project4/main.py'])  # Non-blocking
    return jsonify({'message': 'All-in-one detection started'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)



#how to run : python server.py