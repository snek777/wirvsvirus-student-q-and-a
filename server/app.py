from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route('/api/test')
def testController():
  return jsonify(
    test='TEST'
  )

app.run()