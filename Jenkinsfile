node ('slave') {
    
     stage('GIT Pull') {
         git branch: 'master',
         url : 'https://github.com/chamsBLT/balfront.git',
         credentialsId: 'github-cred';
    }
  
    stage('Build w/ansible') {
        script {   
            sh 'ansible-playbook ansible/build.yml -i ansible/inventory/host.yml -vvv'
        }
    }  
  
    stage('Docker w/ansible') {
        script {   
            sh 'ansible-playbook ansible/docker.yml -i ansible/inventory/host.yml -vvv'
        }
    }  
}
