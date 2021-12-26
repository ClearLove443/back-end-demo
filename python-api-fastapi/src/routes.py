from fastapi import APIRouter

from src.controller import home_controller

api_router = APIRouter()
api_router.include_router(home_controller.router, tags=["home"])
