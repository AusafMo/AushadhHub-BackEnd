import requests
response = requests.post("http://127.0.0.1:5000/upload", files={'file': open("DrumStick.jpg", 'rb')})
print(response.json())