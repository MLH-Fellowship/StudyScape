from __future__ import print_function
from flask import *


app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def public():
    if session != {}:
        return render_template('dashboard.html')
    else:
        return render_template('index.html')

@app.route('/dashboard', methods = ['GET', 'POST'])
def dashboard():
    return render_template('dashboard.html')

@app.route('/add', methods = ['GET', 'POST'])
def enter_task():
    if request.method =='POST':
        task = request.form['task']
        return render_template('dashboard.html', task = task)

if __name__ == '__main__':
    app.run(debug = True)