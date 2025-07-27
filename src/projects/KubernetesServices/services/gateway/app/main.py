from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

USERS_SERVICE_URL = "http://users:8000/users"
PRODUCTS_SERVICE_URL = "http://products:8000/products"

@app.get("/api/users")
async def get_users(q: str = None):
    params = {"q": q} if q else {}
    async with httpx.AsyncClient() as client:
        response = await client.get(USERS_SERVICE_URL, params=params)
        return response.json()

@app.get("/api/products")
async def get_products(q: str = None):
    params = {"q": q} if q else {}
    async with httpx.AsyncClient() as client:
        response = await client.get(PRODUCTS_SERVICE_URL, params=params)
        return response.json()