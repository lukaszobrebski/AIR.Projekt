from rest_framework import serializers

from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
    	model = User
    	fields = ('user_name', 'user_password') #Excluded: user_id
    	
class NoteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Note
		fields = '__all__'
		
class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields = '__all__'
		
class TaskHistorySerializer(serializers.ModelSerializer):
	class Meta:
		model = TaskHistory
		fields = '__all__'
