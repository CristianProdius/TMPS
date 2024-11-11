from src.domain.author import Author

#Used to create Author objects with a fluent interface.
class AuthorBuilder:
    def __init__(self):
        self.name = None
        self.birth_year = None
        self.nationality = None

    def set_name(self, name):
        self.name = name
        return self

    def set_birth_year(self, birth_year):
        self.birth_year = self
        return self

    def set_nationality(self, nationality):
        self.nationality = nationality
        return self

    def build(self):
        return Author(self.name, self.birth_year, self.nationality)