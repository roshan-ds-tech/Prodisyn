from django.contrib import admin
from .models import Application

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email','phone', 'course','education', 'appllied_on')
# Register your models here.
