from fastapi import FastAPI, Query

app = FastAPI()

PRODUCTS = [
    {"id": 1, "name": "Laptop", "category": "Electronics"},
    {"id": 2, "name": "Smartphone", "category": "Electronics"},
    {"id": 3, "name": "Chair", "category": "Furniture"},
    {"id": 4, "name": "Notebook", "category": "Stationery"},
]

@app.get("/products")
def get_products(q: str = Query(None)):
    if q:
        q = q.lower()
        return [
            product for product in PRODUCTS
            if q in product["name"].lower() or q in product["category"].lower()
        ]
    return PRODUCTS