from fastapi import APIRouter

from src.controller.home_controller import HomeController

api_router:APIRouter = APIRouter()
api_router.include_router(HomeController.router, tags=["home"])
