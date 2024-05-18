from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer

# from .models import Note
# from .serializers import NoteSerializer
from .utils import get_note_list, get_note_detail, create_note, update_note, delete_note


@api_view(["GET"])
def get_routes(request):
    
    routes = [
        {
            "Endpoint": "/notes",
            "method": "GET",
            "body": "None",
            "description": "Returns an array of notes"
        },
        {
            "Endpoint": "/notes/id",
            "method": "GET",
            "body": "None",
            "description": "Returns a single note object"
        },
        {
            "Endpoint": "/notes/create",
            "method": "POST",
            "body": {"body": ""},
            "description": "Creates new note with data sent in post request"
        },
        {
            "Endpoint": "/notes/id/update",
            "method": "PUT",
            "body": {"body": ""},
            "description": "Updates an existing note with data sent in post request"
        },
        {
            "Endpoint": "/notes/id/delete",
            "method": "DELETE",
            "body": "None",
            "description": "Delete and existing note"
        }
    ]
    return Response(routes)

@api_view(["GET"])
def get_notes(request):
    return get_note_list(request)    
        
@api_view(["POST"])
def create_note(request):
    return create_note(request)
 
@api_view(["GET"])   
def get_note(request, pk):
    return get_note_detail(request, pk)

@api_view(["PUT"])
def update_note(request, pk):
    return update_note(request, pk)  
        
@api_view(["DELETE"])   
def delete_note(request, pk):
    return delete_note(request, pk)