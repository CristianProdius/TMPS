class Furniture:
    def __init__(self, name, type, chair, table):
        self.name = name
        self.type = type
        self.chair = chair
        self.table = table

    def __str__(self, type):
        return self.name + " " + self.type + " " + self.chair + " " + self.table