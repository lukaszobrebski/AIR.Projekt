from rest_framework import serializers

from polls.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_name', 'user_password') #Excluded: user_id
    	       
    def create(self, validated_data):
        return User.objects.create(**validated_data)
    	
    def update(self, instance, validated_data):
        instance.user_name = validated_data.get('user_name', instance.user_name)
        instance.user_password = validated_data.get('user_password', instance.user_password)
        instance.save()
        return instance
    	
    	
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
	
 

	