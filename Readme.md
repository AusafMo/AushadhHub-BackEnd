**This Project is divided across two repositories, This repo deals with the app/model deployed on cloud**
<br>
For Frontend App see <a href = "https://github.com/AusafMo/AushadHubFrontEnd"> Frontend Repo </a>

# Model Deployment as a Fask WebApp on Google Cloud Services:

<br>

### Gcloud SDK shell commands to push, and deploy the service (should've set up GCloud beforehand, you don't need Docker on your machine though):
  * if you are running the shell in the same directory as your Dockerfile (which you probably should), replace Path/to/Dockerfile with `.` (a dot)
  * replace projectid with the ID associated with your project on the Gcloud console.
  * replace function with the name of the function you want your POST request from frontend to hit On.
    
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
