# ProxmoxFullStack
a Full-Stack Website using React &amp; Vite, with Flask as a backend.

# How to:
## Create a Python Virtual Environment  
`python -m venv .\venv\`

## Activate the Python Virtual Environment  
### Windows:
`.\venv\Scripts\activate`

### MacOS:
`source /venv/bin/activate`

## Install the necessary packages
`pip install -r requirements.txt`

## Build Frontend
Firstly, get dependencies  
`cd ./frontend/`  
`npm install`  

Transpile & Bundle Frontend to be served via Flask  
`npm run build`

## Finally to initalise the Deployment
`python backend/app.py`
