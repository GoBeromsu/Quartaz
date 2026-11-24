---
aliases: []
date_created: 2024-07-12
date_modified: 2024-07-12
permalink: cicd-jenkins-github-actions-grafana
tags:
  - jenkins
  - github-actions
  - ci-cd
  - grafana
title: "Streamlining CI/CD with Jenkins, GitHub Actions, and Grafana"
---

![](/_attachments/medium-f74be3d59bea-01.jpg)

*Photo by [Dean Pugh](https://unsplash.com/@wezlar11?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

## Intro

In this post, I will share the technical insights gained from our company’s CI/CD automation project for the authentication server. This project primarily utilized Jenkins, Grafana, and GitHub Actions. Jenkins handled Continuous Deployment (CD), while GitHub Actions managed Continuous Integration (CI). Grafana was employed for visualization and sending webhooks to Jenkins.

We chose GitHub Actions for CI because it allows administrators to access the system from anywhere with an internet connection. It also provides a consistent platform for performing build and configuration checks.

For Continuous Deployment (CD), we decided to use Jenkins instead of GitHub Actions due to the need for separate instances for testing and deployment servers. Additionally, managing multiple servers across various pipelines would increase complexity and maintenance challenges if handled by GitHub Actions, especially with fan-out pipelines. Jenkins provided a more suitable solution, allowing us to thoroughly test on six test servers before deploying to three real servers, ensuring stability and reliability in our deployment process.

## Github Actions

In our CI process, we strategically implemented self-hosted runners to avoid the costs associated with cloud-hosted options and to maintain a secure, internal deployment environment. Using self-hosted runners allowed us to keep all network ports closed to the outside, significantly enhancing our security posture. Without this approach, we would have faced the risky prospect of exposing internal ports to external access, which is a major security vulnerability.

This setup enabled the seamless automation of deploying Radsecproxy, Promtail, and Prometheus. It ensured efficient updates and robust monitoring through Grafana, effectively bridging the gap between external and internal network requirements while maintaining the highest security standards!

First, Effective branch management is critical for smooth continuous deployment. In our approach, the `main`, `test`, and `dev` branches are utilized strategically to ensure code quality and operational stability.

### Branch Roles

`main` Branch

- **Purpose:** The `main` branch is the production branch.
- **Usage:** Deployed in the live environment, with all changes thoroughly tested before merging.

`test` Branch

- **Purpose:** Used for testing environments.
- **Usage:** Developers deploy to the test server using this branch. It serves as a proxy, triggering CI to automatically implement changes upon merging code into this branch.

`dev` Branch

- **Purpose:** Dedicated to development.
- **Usage:** New features and bug fixes are developed here. Once development is complete, changes are merged into the `test` branch for testing.

The merge sequence follows `Dev → Test → Main`. To manage separate deployments for testing and production servers, we utilize PR messages and labels.

We use two main labels to handle build triggers. PR messages with these labels trigger specific actions. When a PR is closed, the appropriate server (test or production) is updated accordingly.

![](/_attachments/medium-f74be3d59bea-02.png)

**`build:config`**

- **Purpose:** Triggers a build when the `radsecproxy` configuration file is modified.
- **Usage:** Applied when the `radsecproxy` settings change, requiring validation and build execution.

**`build:full`**

- **Purpose:** Rebuilds the entire `radsecproxy`.
- **Usage:** Used for significant changes or when comprehensive testing of the whole project is needed.

We implemented the following workflow to handle various scenarios involving the test and main servers, as well as build and config changes: !

![](/_attachments/medium-f74be3d59bea-03.png)

### 1. Radsecproxy Configuration Check

Ensuring the correct configuration of Radsecproxy is crucial for seamless operations. Here’s how we handle it:

**Checkout the Repository:**

- `uses: actions/checkout@v4`
- This step uses the `actions/checkout` action provided by GitHub Actions to checkout the current repository.

**Check Radsecproxy Configuration:**

- `radsecproxy -c radsecproxy.conf -p`
- This command checks the `radsecproxy.conf` configuration file. The `-c` option specifies the configuration file, and the `-p` option runs in dry-run mode, verifying the configuration without starting the service.

### 2. Docker Image Build Check

Validating the Docker image build process is essential for maintaining the integrity of our deployment pipeline.

**Checkout the Repository:**

- `uses: actions/checkout@v4`
- This step uses the `actions/checkout` action to checkout the repository.

**Check Docker Image Build:**

- `run: | timeout 3m bash -c "until docker build . -t test:latest; do sleep 10; done"`
- This command attempts to build the Docker image from the current directory (`.`) with the tag `test:latest`. It retries the build every 10 seconds, with each attempt limited to 3 minutes.

### 3. Docker Compose Configuration Check

Verifying the Docker Compose setup ensures that all services can be brought up correctly without any issues.

**Checkout the Repository:**

- `uses: actions/checkout@v4`
- This step uses the `actions/checkout` action to checkout the repository.

**Prepare Log File:**

- `sudo mkdir -p /var/log/radsecproxy sudo touch /var/log/radsecproxy/radsecproxy.log`
- These commands create a directory for the log file and an empty log file for Radsecproxy. The `sudo` command is used to execute these actions with administrator privileges.

**Dry Check Docker Compose:**

- `docker compose --dry-run up -d`
- This command runs `docker compose` in dry-run mode to verify the configuration without actually starting the containers. The `up -d` command is used to start services in the background, but with `--dry-run`, it only validates the setup.

By following these steps, we ensure that our deployment pipeline is robust and any issues are caught early in the configuration or build stages

And, The workflow initiates a Jenkins build based on specific labels. The conditions for each task branch are as follows:

### 1. Send-jenkins-full

When merged into the `test` branch with the `build:full` label, a full build is requested from Jenkins.

- **needs:** \[radsecproxy-check, docker-build-check, compose-check\]

```
uses: appleboy/jenkins-action@master
with:
  url: ${{ secrets.WEBHOOK_URL }}
  user: "berom"
  token: ${{ secrets.JENKINS_API_TOKEN }}
  job: "radsecproxy-test"
```

### 2. Send-jenkins-config

When merged into the `test` branch with the `build:config` label, a config build is requested from Jenkins.

- **needs:** \[radsecproxy-check\]
- Send to Jenkins — build config:

```
uses: appleboy/jenkins-action@master
with:
  url: ${{ secrets.WEBHOOK_URL }}
  user: "berom"
  token: ${{ secrets.JENKINS_API_TOKEN }}
  job: "radsecproxy-test-config"
```

### 3. Send-jenkins-full-real

When merged into the `main` branch with the `build:full` label, a full build for production is requested from Jenkins.

- **needs:** \[radsecproxy-check, docker-build-check, compose-check\]
- Send to Jenkins — build full:

```
uses: appleboy/jenkins-action@master
with:
  url: ${{ secrets.WEBHOOK_URL }}
  user: "berom"
  token: ${{ secrets.JENKINS_API_TOKEN }}
  job: "radsecproxy"
```

### 4. Send-jenkins-config-real

When merged into the `main` branch with the `build:config` label, a config build for production is requested from Jenkins.

- **needs:** \[radsecproxy-check\]
- **runs-on:** self-hosted

Send to Jenkins — build config:

```
uses: appleboy/jenkins-action@master
with:
  url: ${{ secrets.WEBHOOK_URL }}
  user: "berom"
  token: ${{ secrets.JENKINS_API_TOKEN }}
  job: "radsecproxy-config"
```

## Grafana

Grafana is used for visualization and alerts because there wasn’t an adequate method to monitor the state of Radsecproxy instances and hosts. Even if the container was alive, there was no way to detect if the internal process had died from the outside. By setting up Grafana to monitor Radsecproxy, we created a workflow that triggers an alert in emergency situations, leading to an immediate redeployment.

- **Purpose:** Monitors the state of the Radsecproxy instance.
- **Data Source:** Loki
- **Expression:**

```
sum(count_over_time({filename="/var/log/radsecproxy/radsecproxy.log", hostname="flr-1.company.com"} |~ Access-\w+ [1m])) or vector(0)
```

- **Alert Condition:** Average value less than 1
- **Wait Time:** 3 minutes (the alert triggers if the condition persists for 3 minutes)
- **Label:** Target: jenkins

Grafana checks the logs every minute, and if no entries are found, it sends an alert. This alert is initially pending, but if the condition persists for 3 minutes, an alert is sent to Jenkins to rerun the configuration pipeline. The only method to restart a dead process was through `Docker compose up -d`. To trigger Jenkins, we use the Generic Webhook Trigger, sending pings to the webhook URL configured as a contact point in Grafana, ensuring the alert system promptly addresses any issues.

## Jenkins

In our company’s CI/CD process, we use Jenkins for Continuous Deployment (CD). Our pipeline management relies heavily on Docker for dependency management, with each instance configured to perform git pulls using registered private keys.

We have configured GitHub Actions to use self-hosted runners, which allow internal network access, sending webhooks to Jenkins after successful CI processes. The configuration for sending a webhook from GitHub Actions to Jenkins is shown below:

```
send-jenkins-config:
  needs: [radsecproxy-check]
  if: success() && github.event.pull_request.merged == true && github.base_ref == 'main' && contains(github.event.pull_request.labels.*.name, 'build:config')
  runs-on: self-hosted
  steps:
    - name: Send to Jenkins - build config
      uses: appleboy/jenkins-action@master
      with:
        url: ${{ secrets.WEBHOOK_URL }}
        user: "berom"
        token: ${{ secrets.JENKINS_API_TOKEN }}
        job: "radsecproxy-config"
```

Jenkins handles the deployment process by using the SSH Steps plugin, which facilitates remote execution on target servers.

**Checkout from GitHub:** Clones the main branch from the GitHub repository

```
    stage('[github] get by github') {
          steps {
              git branch: 'main', credentialsId: 'berom-github-PAT', url: 'https://github.com/company/repo.git'
          }
    }
```

**Deploy to Test Server:** Transfers configuration files and restarts Docker on the test server.

```
    stage('[test] send radsecproxy-config and docker restart') {
        steps {
            script {
                def remote = [:]
                remote.host = '192.168.1.100'
                withCredentials([sshUserPrivateKey(credentialsId: 'deploy-key', usernameVariable: 'userName', keyFileVariable: 'identity')]) {
                    remote.user = userName
                    remote.name = userName
                    remote.identityFile = identity
                    remote.allowAnyHosts = true
                    sshPut remote: remote, from: "./radsecproxy.conf", into: "./radsecproxy"
                    sshCommand remote: remote, command: "cd radsecproxy && docker compose restart radsecproxy"
                }
            }
        }
    }
```

**Deploy to Production Server 1:** Transfers configuration files and restarts Docker on the first production server with retry logic.

```
    stage('[prod1] send radsecproxy-config and docker restart') {
        steps {
            script {
                retry(3) {
                    try {
                        def remote = [:]
                        remote.host = '192.168.1.101'
                        withCredentials([sshUserPrivateKey(credentialsId: 'prod-key', usernameVariable: 'userName', keyFileVariable: 'identity')]) {
                            remote.user = userName
                            remote.name = userName
                            remote.identityFile = identity
                            remote.allowAnyHosts = true
                            sshPut remote: remote, from: "./radsecproxy.conf", into: "./radsecproxy"
                            sshCommand remote: remote, command: "cd radsecproxy && docker-compose restart radsecproxy"
                        }
                    } catch (e) {
                        echo 'deploy 01 failed. retrying after 5 seconds...'
                        sleep(time: 5, unit: 'SECONDS')
                        throw e
                    }
                }
            }
        }
        post {
            failure {
                office365ConnectorSend webhookUrl: 'https://company.webhook.office.com/webhookb2/some-unique-url',
                    message: "[prod1] deploy 01 failed \n Job Name: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)",
                    status: 'Fail',
                    color: '#CE0000'
            }
        }
    }
```

**Success Notification:** Sends a success notification upon successful deployment.

```
    stage('success send') {
        steps {
            office365ConnectorSend webhookUrl: 'https://company.webhook.office.com/webhookb2/some-unique-url',
                    message: "deploy success \n Job Name: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)",
                    status: 'Success',
                    color: '#00FFDC'
        }
    }
```

Key Points to Note

- **Retry Mechanism:** In stages deploying to production servers, the process is wrapped in a retry block to handle potential connectivity issues, with a 5-second delay between retries.
- **Security:** Access credentials are managed securely with SSH private keys, ensuring that deployments are both secure and reliable.
- **Notifications:** Failure and success notifications are sent via webhooks to an Office 365 connector, ensuring that stakeholders are promptly informed about the deployment status.

---

*2024-07-12에 [Medium](https://beromkoh.medium.com/streamlining-ci-cd-with-jenkins-github-actions-and-grafana-f74be3d59bea)에 쓴 글을 옮겼습니다.*
