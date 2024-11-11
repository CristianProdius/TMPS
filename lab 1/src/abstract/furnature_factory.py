from factory.modern_factory import ModernFuniture
from factory.vintage_factory import VintageFurniture
from src.domain.furniture import Furniture

class FurnitureFactory:
   
    def create_furniture(furniture_type, name):
        if furniture_type == "modern":
            return ModernFuniture(name)
        elif furniture_type == "vintage":
            return VintageFurniture(name)
        
    