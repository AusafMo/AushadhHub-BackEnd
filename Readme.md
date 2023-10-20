gcloud builds submit --tag gcr.io/aushadapi/upload_file .
gcloud run deploy --image gcr.io/aushadapi/upload_file --platform managed