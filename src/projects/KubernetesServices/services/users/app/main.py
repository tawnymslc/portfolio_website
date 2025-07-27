from fastapi import FastAPI

app = FastAPI()

@app.get("/users")
def get_users():
    return [
        {"id": 1, "name": "Alice", "email": "alice@mail.com"}, 
        {"id": 2, "name": "Bob", "email": "bob@mail.com"}
    ]