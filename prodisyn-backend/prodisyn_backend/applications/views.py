from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .models import Application
from .serializers import ApplicationSerializer

class ApplyNowView(APIView):
    def post(self, request):
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            application = serializer.save()

            # Send confirmation email
            subject = "Application Received - Prodisyn Innovations"
            message = f"""
Hi {application.first_name},

Thank you for applying for the {application.course} program at Prodisyn Innovations.
We’ve received your application and our team will get back to you shortly.

Best regards,
Prodisyn Innovations Team
            """
            send_mail(subject, message, 'roshands00270@gmail.com', [application.email])

            return Response({"message": "Application submitted successfully!"}, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# Create your views here.
