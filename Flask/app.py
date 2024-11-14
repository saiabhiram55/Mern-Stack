from flask import Flask , render_template , request ,jsonify

app = Flask(__name__)
@app.route('/')

def Home():
    return render_template("reg.html")


@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    phone = data.get('phone')
    application_date = data.get('applicationDate')
    branch = data.get('branch')
    password = data.get('password')
    return jsonify({
        'message': 'Form submitted successfully!',
        'data': data
    })

    
if __name__ =='__main__':
    app.run(debug=True)


