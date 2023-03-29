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
}
