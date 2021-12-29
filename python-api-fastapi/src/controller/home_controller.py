from typing import Optional

from fastapi import APIRouter
from src.entity.entity import Item
from src.service.home_service import HomeService
import requests
import base64
class HomeController():

  router = APIRouter()

  # @router.get("/")
  # def read_root():
  #     return HomeService.read_root()

  # @router.get("/items/{item_id}")
  # def read_item(item_id: int, q: Optional[str] = None):
  #     return HomeService.read_item(item_id,q)

  # @router.put("/items2/{item_id}")
  # def update_item(item_id: int, item: Item, test: Item):
  #     return HomeService.update_item(item_id,item,test)

  @router.get("/getbase64/{repostory}")
  def get_as_base64(repostory:str, user: Optional[str] = 'ClearLove443'):
      url = 'https://github.com/' + user + '/' + repostory + '/archive/refs/heads/master.zip'
      content = requests.get(url).content
      return base64.b64encode(content)