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

        stage('delete test cases image') {
            steps {
                sh 'docker rmi $(docker images -q mytest)'
            }
        }

        stage('Clean workspace') {
            steps {
                sh "ls -1 | grep -v cucumber-report.json | xargs rm -rf"
            }
        }

        stage('Allure Report') {
            steps {
                sh 'npx allure generate allure-results --clean'
            }
        }
    }

    post {
        always {
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
