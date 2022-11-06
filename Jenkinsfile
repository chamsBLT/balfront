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
    
    stage('Orchestration w/k8s-minikube') {
        script {   
            sh "minikube start --force --driver=docker"
            
            /*// --> CONFIG
            sh "minikube kubectl -- apply -f mysql-secrets.yaml"
            sh "minikube kubectl -- apply -f mysql-configMap.yaml"
            // --> DATABASE
            sh "minikube kubectl -- apply -f database-dep-svc.yml"
            // --> BACKEND
            sh "minikube kubectl -- apply -f backend-dep-svc.yml"
            // --> FRONTEND*/
            sh "minikube kubectl -- apply -f frontend-dep-svc.yml"
            
            sh "minikube kubectl -- get all"
            url=sh "minikube service front-svc --url"
            
        }
    }
    
    stage("Notify w/e-mail") {
      script {
          mail bcc: '', 
          body: "Build ${BUILD_DISPLAY_NAME} on ${JOB_NAME} was successful. You can visit the web page directly : \$url ", cc: '', from: '', replyTo: '', subject: "${BUILD_NUMBER} was run successfully", to: 'chamseddine.balti@esprit.tn'
     }
   }
}
