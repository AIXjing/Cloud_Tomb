# Clound tomb backend

## How to use cloud run

https://cloud.google.com/run/docs/quickstarts/build-and-deploy#writing

Add a `.gcloudignore` file to ignore folder such as `target`. 
Then build the image on gcloud:
```
gcloud builds submit --tag gcr.io/cloud-tomb-294219/cloud-tomb

gcloud run deploy --image gcr.io/cloud-tomb-294219/cloud-tomb --port 3030 --platform managed
```

## How to add your own domian:
```
gcloud domains list-user-verified

gcloud domains verify cloudtombs.com

# follow the instruction, use `TXT`, `hostname` set as "@", 

gcloud beta run domain-mappings create --service cloud-tomb --domain cloudtombs.com
```