# Google test


### Table of contents

- [Google test](#google-test)
    - [Table of contents](#table-of-contents)
  - [Description](#description)
    - [Organization](#organization)
  - [Prerequisites](#prerequisites)
  - [How to use](#how-to-use)
    - [Diagram](#diagram)
    - [Instalation](#instalation)
    - [Run test cases](#run-test-cases)
    - [Docker execution](#docker-execution)
    - [Report execution](#report-execution)
    - [Jenkins](#jenkins)
  - [References](#references)


## Description

Acceptance testing following the Screenplay Pattern with Cucumber and WebdriverIO. The base of the framework has been built with JavaScript programming language and Gherkin.


## Organization

| Path | Description |
| :--- | :---: |
| data | It is where we put all the data that we need to execute the test cases, such as headers, selectos, etc. |
| facts | It is where we put all the classes that we need to initialize the execution of the test cases; we can say that it is related to the "Given step". |
| features | It is where we put all user stories written in Gherkins. |
| interactions | It is where we put all the classes related to the interactions with the SUT, such as  the clicking button or the input of values in form fields. |
| models | It is where we put all the POJOs or web pages. |
| questions | It is where we put all the classes to check if the task has been successful; we can say that it related to the "Then step". |
| steps-definitions | It is where we put all our steps that are written in the "features" section. |
| tasks | It is where we will put all the classes related to the business goal, the action that we do during the execution of the test case; we can say that it is related to the "When step". |


## Prerequisites

We need Node.js installed to execute the test. In particular, I used v19.8.1.


## How to use 


### Diagram
         
![image](https://drive.google.com/uc?export=view&id=1_iQV28qtIA___yy2scgtBaynSqaVS07I)


### Instalation

To install the framework, we must follow these steps:   

1. ``` 
    git clone https://github.com/granchetti/google-test.git
2. ```
    npm install
    
### Run test cases 

To run the test case, we must follow these steps:

```
npm run test
```

### Docker execution

We have to build a docker image in order to create the containers, for example:

1. ``` 
   docker build -t mytest -f dockerfile .
2. ```
   docker run -it mytest 

### Report execution

To create the report, we must follow these steps:

1. ``` 
   npx allure generate allure-results --clean
2. ```
   npx allure serve allure-results

### Jenkins

We have a Jenkinsfile with the configuration of a job in Jenkins.


## References

[WebdriverIO](https://webdriver.io/)
