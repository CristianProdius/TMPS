from src.domain.furniture import Furniture

class VintageFurniture(Furniture):
   @staticmethod
    

    

class WoddenChair(Furniture):
    def __str__(self):
        return f"Wooden Chair: {super().__str__()}"
    
class MetalChair(Furniture):
    def __str__(self):
        return f"Metal Chair: {super().__str__()}"