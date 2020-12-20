from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/reverse_string')
def reverse():
    question = request.form.get("textInput", 0)
    question = question[::-1]
    return {'string': question}
