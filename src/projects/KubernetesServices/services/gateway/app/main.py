from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can change to ["http://localhost:3000"] if you prefer
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

USERS_SERVICE_URL = "http://users:8000/users"
PRODUCTS_SERVICE_URL = "http://products:8000/products"

@app.get("/api/users")
async def get_users():
    async with httpx.AsyncClient() as client:
        response = await client.get(USERS_SERVICE_URL)
        return response.json()

@app.get("/api/products")
async def get_products():
    async with httpx.AsyncClient() as client:
        response = await client.get(PRODUCTS_SERVICE_URL)
        return response.json()