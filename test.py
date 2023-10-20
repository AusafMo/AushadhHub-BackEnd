from flask import Flask, render_template, request, jsonify
import os
import requests
import json
app = Flask(__name__)


def is_image_file(filename):
    # Get the file extension (e.g., ".jpg",)
    file_extension = os.path.splitext(filename)[1].lower()
    
    # Check if the extension is either ".jpg" or ".png"
    return file_extension in ('.jpg', '.jpeg')


# Home Route
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/upload', methods=['POST', 'GET'])
def upload_file():
    if 'file' not in request.files:
        return 'No file' 
    file = request.files['file']
    
    if file.filename == '':
        return 'No file selected'
    
    if file and is_image_file(file.filename):
    
        img_path = 'static/upload/' + file.filename
        file.save(img_path)

        response = requests.post("https://getprediction-o22v7v4baq-el.a.run.app/upload", files={'file': open(img_path, 'rb')})
        responsedata = response.json()

        img_path = '../' + img_path

        prediction = responsedata['prediction']
        confidence_level = responsedata['confidence_level']
        info = responsedata['info']

        # data = {"prediction" : classes[0][1], "confidence_level" : p[0]*100, "info" : info}

        return render_template("result.html", img_path = img_path, prediction_name = prediction, confidence_level = confidence_level, description = info )



"""##################################### MAIN APP CALL #########################################"""
if __name__ == "__main__":
    app.run( debug = True)
# print(resp.json())