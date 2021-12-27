from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from src.config import settings
from src.routes import api_router

app:FastAPI = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)
