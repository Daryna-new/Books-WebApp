pipeline {
     agent none
     stages {
        stage("Build") {
            agent { label 'ubuntu_jenkins' }
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Test") {
            agent { label 'ubuntu_jenkins' }
            steps {
                sh "sudo node -v"
                sh "sudo npm -v"
            }
        }
        stage("Deploy") {
            agent { label 'ubuntu_jenkins' }
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/ /var/www/jenkins-react-app/"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-APP/"
            }
        }
    }
}
