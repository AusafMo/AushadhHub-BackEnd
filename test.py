import requests

resp = requests.post("http://127.0.0.1:8000/upload", files={'file': open('DrumStick.jpg', 'rb')})

print(resp.json())