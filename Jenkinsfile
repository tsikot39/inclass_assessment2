pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = credentials('NETLIFY_SITE_ID')
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test -- --watchAll=false'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh '''
                        npm install netlify-cli
                        npx netlify deploy --prod --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN
                    '''
                }
            }
        }
    }
}
