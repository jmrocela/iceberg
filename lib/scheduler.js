/*

[POST]      /job                                adds a job
[GET]       /job/jobName                        gets job info
[PUT]       /job/jobName                        updates a job. update dependency
[DELETE]    /job/jobName                        deletes a job
[GET]       /jobs                               list all jobs
[DELETE]    /jobs                               deletes all jobs
[GET]       /scheduler/job/jobName/(:instance)  get job status or an array of instances for that job
[PUT]       /scheduler/job/jobName/(:instance)  starts a job. if not async, throw an error
[DELETE]    /scheduler/job/jobName/(:instance)  kills a job
[GET]       /errors                             get error log
[POST]      /error/jobName                      add an error to a job

*/