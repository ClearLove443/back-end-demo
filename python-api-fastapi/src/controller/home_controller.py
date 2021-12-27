from typing import Optional

from fastapi import APIRouter
from src.entity.entity import Item
from src.service.home_service import HomeService


class HomeController():

  router = APIRouter()

  @router.get("/")
  def read_root():
      return HomeService.read_root()

  @router.get("/items/{item_id}")
  def read_item(item_id: int, q: Optional[str] = None):
      return HomeService.read_item(item_id,q)

  @router.put("/items2/{item_id}")
  def update_item(item_id: int, item: Item, test: Item):
      return HomeService.update_item(item_id,item,test)
