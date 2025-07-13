from fastapi import FastAPI
import httpx

app = FastAPI()

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