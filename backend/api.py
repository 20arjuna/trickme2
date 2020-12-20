from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/link', methods=['GET','POST'])
def reverse():
    print("got here baby!")
    print(request.json)
    question = request.json['question']
    #question = request.form.get("textInput", 0)
    #print(question)
    #question = question[::-1]
    print(question)
    return {'suggestions': question}
