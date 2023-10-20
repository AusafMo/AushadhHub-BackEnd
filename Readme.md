gcloud builds submit --tag gcr.io/{projectid}/{function} .
<br>
gcloud run deploy --image gcr.io/{projectid}/{function}  --platform managed
<br>
enters with "siteURL/upload"
<br>
and
<br>
returns json