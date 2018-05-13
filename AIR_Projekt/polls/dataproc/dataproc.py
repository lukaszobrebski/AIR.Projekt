'''
CAUTION!!!

This is unfinnished prototype and at this point serves as experimental field
so it is not functioning in any possible way.

Do not edit, run or use in project until further notice

Person responsible: Łukasz Obrębski
'''



import os
from abc import ABC, abstractmethod
from google.cloud import dataproc_v1


#Google Dataproc settings

# Don't change until you know what you're doing
SERVICE_ACCOUNT_KEY_DIR_PATH =     dir_path = os.path.dirname(os.path.realpath(__file__))
SERVICE_ACCOUNT_KEY_NAME =         "service_account_key.json"

REGION =       "europe-west3"
ZONE =         REGION + "-b"
SUB_NETWORK =  "default"

# Don't change at all
SERVICE_ACCOUNT_KEY_FULLPATH = SERVICE_ACCOUNT_KEY_DIR_PATH + '/' + SERVICE_ACCOUNT_KEY_NAME
PROJECT_ID = "clean-emblem-202911"

cluster_config = dataproc_v1.types.ClusterConfig()
cluster_config_gce = dataproc_v1.types.GceClusterConfig()
cluster_config.gce_cluster_config = cluster_config_gce
#cluster_config.gce_cluster_config = {'subnetworkUri': 'default'}
                                     #'zoneUri' : 'europe-west3-b'}
                                     
cluster = {'project_id' : PROJECT_ID,
           'cluster_name' : 'aiir-spark',
           'config' : cluster_config}


os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = SERVICE_ACCOUNT_KEY_FULLPATH
_clusterClient = dataproc_v1.ClusterControllerClient()
_jobClient = dataproc_v1.JobControllerClient()

response = _clusterClient.create_cluster(PROJECT_ID, REGION, cluster)
'''
# Iterate over all results
for element in client.list_clusters(project_id, region):
    # process element
    pass

# Or iterate over results one page at a time
for page in client.list_clusters(project_id, region, options=CallOptions(page_token=INITIAL_PAGE)):
    for element in page:
        # process element
        pass
        
'''



class DataProcServiceHandler():
    def __init__(self):
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = SERVICE_ACCOUNT_KEY_FULLPATH
        self._clusterClient = dataproc_v1.ClusterControllerClient()
        self._jobClient = dataproc_v1.JobControllerClient()
    
    def sendJob(self):
        pass
    def getJobStatus(self):
        pass


class Job(ABC):
    @abstractmethod
    def passible(self):
        pass
    
    
    
    