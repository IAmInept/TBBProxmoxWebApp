from flask import Flask, send_file, send_from_directory, jsonify, request
from proxmoxer import ProxmoxAPI
from flask_cors import CORS
import urllib3
app = Flask(__name__)
CORS(app)

@app.get("/")
def home():
    return send_file("../frontend/dist/index.html")
@app.get("/<path:name>")
def public(name):
    return send_from_directory("../frontend/dist/", name)
@app.get("/assets/<path:name>")
def assets(name):
    return send_from_directory("../frontend/dist/assets/", name)
    
@app.get("/api/proxmox")
def proxmoxTest():
	return jsonify(proxmox.nodes.turtle.qemu.get())
	
if __name__ == "__main__":
	
	urllib3.disable_warnings()
	proxmox = ProxmoxAPI("", user="", password="", verify_ssl=False)
	
	app.run(debug=True)
