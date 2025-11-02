from django.urls import path
from .views import ApplyNowView

urlpatterns = [
    path('apply/', ApplyNowView.as_view(), name='apply-now'),
]