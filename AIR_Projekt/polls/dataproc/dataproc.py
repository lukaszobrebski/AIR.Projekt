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
from google.oauth2 import service_account

#Google Dataproc settings

#-Don't change until you know what you're doing

SERVICE_ACCOUNT_KEY =              os.path.dirname(os.path.realpath(__file__)) + '/service_account_key.json'
REGION =                           "europe-west3"
ZONE =                             REGION + "-b"
SUB_NETWORK =                      "default"
PROJECT_ID =                       "clean-emblem-202911"

#temporary
workersCount = 4
#----------------------------------------------


print(SERVICE_ACCOUNT_KEY)

credentials   = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_KEY)
clusterClient = dataproc_v1.ClusterControllerClient(credentials = credentials)
jobClient     = dataproc_v1.JobControllerClient(credentials=credentials)

cluster_config = dataproc_v1.types.ClusterConfig()

cluster_config.master_config.num_instances = 1
cluster_config.master_config.machine_type_uri = 'n1-standard-1'
cluster_config.master_config.disk_config.boot_disk_size_gb = 32
                               
cluster_config.worker_config.num_instances = workersCount
cluster_config.worker_config.machine_type_uri = 'n1-standard-1'
cluster_config.worker_config.disk_config.boot_disk_size_gb = 32

cluster_config.gce_cluster_config.zone_uri = ZONE


cluster = {'project_id' : PROJECT_ID,
           'cluster_name' : 'aiir-1',
           'config' : cluster_config}
           
#Do not run! It will break the project file structure         
#response = clusterClient.create_cluster(PROJECT_ID, 'global', cluster)



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
    
    
    
    