from rest_framework import serializers

from polls.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_name', 'pass_field') #Excluded: user_id
    	       
    def create(self, validated_data):
        return User.objects.create(**validated_data)
    	
    def update(self, instance, validated_data):
        instance.user_name = validated_data.get('user_name', instance.user_name)
        instance.user_password = validated_data.get('user_password', instance.user_password)
        instance.save()
        return instance
    	
    	
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = '__all__'		
		
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('query',
		'occurrence_num',
		'status',
		'start_time',
		'end_time',
    		'user_id', 
    		'note_title')
			
class TaskHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskHist
        fields = '__all__'
	
 

	
