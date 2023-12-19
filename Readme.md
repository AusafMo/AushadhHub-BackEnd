🙋‍♂️
**This Project is divided across three repositories, This repo deals with the app/model deployed on cloud**
<br>
- For Frontend App see <a href = "https://github.com/AusafMo/AushadHubFrontEnd"> Frontend Repo </a>
- For Model Training see <a href = "https://github.com/AusafMo/NoteBook-Medicinal-Herb-Model-ResNet"> Training Notebook </a>
## What is this? :
- The Project aims to solve the problem of identification of medicinal herbs.
- The Machine Learning Model uses ResNet, with a validation accuracy of 98% and testing accuracy of 96%.
- The training and testing dataset contains over 1500 images across 30 medicinal herb species.

## Tech Stack Used :
  * Python 3
  * Flask
  * NumPy
  * Pandas
  * PyTorch
  * Tensorflow-Keras
  * FineTuned ResNet50 model trained on Mendeley Medicinal Leaf Dataset
  * Dataset:
        <a href = "https://data.mendeley.com/datasets/nnytj2v3n5/1">
                  ```
                  S, Roopashree; J, Anitha (2020),
                  “Medicinal Leaf Dataset”,
                  Mendeley Data, V1, doi: 10.17632/nnytj2v3n5.1
                  ```     
        </a>
  * Google Cloud
  * GitHub

# Model Deployment as a Flask WebApp on Google Cloud Services ☁️ : 

<br>

### Gcloud SDK shell commands to push, and deploy the service (should've set up GCloud beforehand, you don't need Docker on your machine though):
  * if you are running the shell in the same directory as your Dockerfile (which you probably should), replace `Path/to/Dockerfile` with `.` (a period or fullstop)
  * replace `projectid` with the ID associated with your project on the Gcloud console.
  * replace `function` with the name of the function you want your POST request from frontend to hit On.
    
      ```
       gcloud builds submit --tag gcr.io/{projectid}/{function} Path/to/Dockerfile
      ```   
      ```
       gcloud run deploy --image gcr.io/{projectid}/{function}  --platform managed
      ```
<br>

### Example Post request :

  ```
      import requests
      response = requests.post("YourServiceURLfromGcloud", files={'file': open("imgPath", 'rb')})
  ```
For instance, a post request for my deployed service on GCP is the following :
```
  response = requests.post("https://aushadhub-prcsxigeha-el.a.run.app/upload", files={'file': open("imgPath", 'rb')})
```
 * if you're encountering 403 Error (proxy or tunnel connection error), make sure you are not using Python-Anywhere to host your front-end, else try adding header and/or proxy to your requests :
   
   ```
   header = { Define your header, to find it just run "navigator.userAgent" on your Chrome dev console }
   proxy = { define your proxy, you may find it on the internet }
   response = requests.post("https://aushadhub-prcsxigeha-el.a.run.app/upload", files={'file': open("imgPath", 'rb')}, header=header, proxies=proxies)
   ```   
<br>

### Return Type (JSON):
  `
    {
    "prediction": "predName",
    "info": "description",
    "confidence_level": "probability"
    }
  `

### Example Code for unpacking returned JSON :
  ```
        import json
        responsedata = response.json()

        prediction = responsedata['prediction']
        confidence_level = responsedata['confidence_level']
        info = responsedata['info']
  ```
#### In Action :
 


https://github.com/AusafMo/AushadhHubCloudModel/assets/75237046/eac3f9db-1847-438c-a5c8-3cceb9e0b8ae



    
