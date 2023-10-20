gcloud builds submit --tag gcr.io/aushadhub/upload_file .
gcloud run deploy --image gcr.io/aushadhub/upload_file --platform managed