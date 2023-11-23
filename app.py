from flask import Flask, render_template, request
from chat import chat_with_watson  # Assuming chat_with_watson is a function in chat.py

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.form['user_input']
    
    # Call the chat function with Watson and get the result
    chat_result = chat_with_watson(user_input)

    return render_template('index.html', chat_result=chat_result, user_input=user_input)

if __name__ == '__main__':
    app.run(debug=True)
