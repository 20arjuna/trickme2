from flask import Flask, render_template, request
app = Flask(__name__)

# question = ""
# globalVar = ""
@app.route('/link', methods=['POST', 'GET'])
def get_input():
    question = ""
    print("got here baby!")
    print(request.json)
    question = request.json['question']

    file1 = open("input.txt","w")
    file1.write(question)
    file1.close()
    #question = request.form.get("textInput", 0)
    #print(question)
    #question = question[::-1]
    print(question)
    return {'output': question}

@app.route('/suggestions', methods=['GET', 'POST'])
def post_output():
    question = ""
    file1 = open("input.txt","r")
    question = file1.read()
    file1.close()
    print("GET REQUEST: " + question)
    return {'output': question}
