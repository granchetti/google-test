pipeline {
    agent any
    stages {
        stage('Build test cases image') {
            steps {
                sh 'docker build -t mytest -f dockerfile .'
            }
        }

        stage('Execute test cases') {
            steps {
                sh 'docker run -it --tty=false --rm -v $(pwd):/app/target mytest'
            }
        }

    }

    post {
        always {
            sh 'export LD_LIBRARY_PATH=/usr/lib/x86_64-linux-gnu:$LD_LIBRARY_PATH'
            sh 'npx allure generate allure-results --clean'
            archiveArtifacts artifacts: 'allure-results/*.json', fingerprint: true
            allure([
                includeProperties: false, 
                jdk: '', 
                properties: [], 
                reportBuildPolicy: 'ALWAYS', 
                results: [[path: 'allure-results']]
            ])
        }
    }
}
