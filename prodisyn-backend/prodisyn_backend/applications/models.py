from django.db import models

class Application(models.Model):

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    course = models.CharField(max_length=100)
    experience = models.TextField(blank=True, null=True)
    education = models.TextField(max_length=200)
    portfolio = models.URLField(blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    appllied_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.course}"

# Create your models here.
