
from typing import Optional

from src.entity.entity import Item


class HomeService():

  def read_root():
      return {"Hello": "World"}

  def read_item(item_id: int, q: Optional[str] = None):
      return {"item_id": item_id, "q": q}

  def update_item(item_id: int, item: Item, test: Item):
      # print(type(item.tabs))
      return {"item_name": item.tabs, "item_id": item_id, "test": test}
