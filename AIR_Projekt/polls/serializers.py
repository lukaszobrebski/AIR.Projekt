from rest_framework import serializers

from polls.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
      model = User
      fields = ('user_name', 'user_password') #Excluded: user_id
    	
    def create(self, validated_data):
      return User(**validated_data)
    	
    def update(self, validated_data):
      instance.user_name = validated_data.get('user_name', instance.user_name)
      instance.user_password = validated_data.get('user_password', instance.user_password)
    	
    	
class NoteSerializer(serializers.ModelSerializer):
   class Meta:
      model = Note
      fields = '__all__'
		
   def create(self, validated_data):
      return Note(**validated_data)
		
   def update(self, validated_data):
      instance.title = validated_data.get('title', instance.title)
      instance.user_id = validated_data.get('user_id', instance.user_id)
      instance.event_id = validated_data.get('event_id', instance.event_id)
      instance.note_txt = validated_data.get('note_txt', instance.note_txt)
      instance.priority = validated_data.get('priority', instance.title)
      return instance
		
		
class TaskSerializer(serializers.ModelSerializer):
   class Meta:
      model = Task
      fields = '__all__'
		
   def create(self, validated_data):
      return Task(**validated_data)
		
   def update(self, validated_data):
      instance.task_id = validated_data.get('task_id', instance.task_id)
      instance.query = validated_data.get('query', instance.query)
      instance.occurence_num = validated_data.get('occurence_num', instance.occurence_num)
      instance.status = validated_data.get('status', instance.status)
      instance.start_time = validated_data.get('start_time', instance.start_time)
      instance.end_time = validated_data.get('end_time', instance.end_time)
      instance.user_id = validated_data.get('user_id', instance.user_id)
      instance.note_title = validated_data.get('note_title', instance.note_title)
      return instance
		
		
class TaskHistorySerializer(serializers.ModelSerializer):
   class Meta:
      model = TaskHistory
      fields = '__all__'
	
   def create(self, validated_data):
      return TaskHistory(**validated_data)
		
   def update(self, validated_data):
      instance.task_id = validated_data.get('task_id', instance.task_id)
      instance.query_time = validated_data.get('query_time', instance.query_time)
      instance.json_result = validated_data.get('json_result', instance.json_result)
      return instance


	