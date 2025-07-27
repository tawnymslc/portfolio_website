from fastapi import FastAPI, Query

app = FastAPI()

USERS = [
    {"id": 1, "name": "Alice", "email": "alice@mail.com"}, 
    {"id": 2, "name": "Bob", "email": "bob@mail.com"}
]

@app.get("/users")
def get_users(q: str = Query(None)):
    if q:
        q = q.lower()
        return [user for user in USERS if q in user["name"].lower() or q in user["email"].lower()]
    return USERS