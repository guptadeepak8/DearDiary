from django.db import models

# Create your models here.

class login_data(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField()
    
    class Meta:
        db_table = "login_data"      