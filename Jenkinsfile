node ('slave') {
    
     stage('GIT Pull') {
        echo 'Pulling...';
                  git branch: 'master',
                  url : 'https://github.com/yasmine-sys/cd_angular.git',
                  credentialsId: 'github-cred';
    }
  
stage('Build') {
  script {   
     sh 'ansible-playbook ansible/build.yml -i ansible/inventory/host.yml'
     }
   }  
  
//stage('docker') {
   //  script {   
    // sh 'ansible-playbook ansible/docker.yml -i ansible/inventory/host.yml'
    // }
   //}  
}
