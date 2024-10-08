class Author:
    def __init__(self, name, birth_year, nationality):
        self.name = name
        self.birth_year = birth_year
        self.nationality = nationality

    def __str__(self):
        return f"{self.name} ({self.nationality}, born {self.birth_year})"