import email
from django.db import models

# Create your models here.
class quiz(models.Model):
    name=models.CharField(max_length=100,verbose_name="Name")
    email=models.EmailField(verbose_name="Email")
    result=models.CharField(max_length=20,verbose_name="Result")