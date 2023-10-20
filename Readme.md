gcloud builds submit --tag gcr.io/aushadapi-402616/upload_file .
gcloud run deploy --image gcr.io/aushadapi-402616/upload_file --platform managed