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
  - [References](#references)


## Description

Acceptance testing following the Screenplay Pattern with Cucumber and WebdriverIO. The base of framework is built with JavaScript programming language and Gherkin.


## Organization

| Path | Description |
| :--- | :---: |
| data | It is where we put all the data that we need to execute the test cases, such as headers, selectos, etc. |
| facts | It is where we put all the classes that we need to initialize the execution of the test cases; we can say that it is associated with the "Given step". |
| features | Features is the place where we put all user stories written in Gherkins. |
| interactions | It is where we put all the classes related to the interactions with the SUT, such as clicking button or entering values in form fields. |
| models | It is where we will put all the POJOs or web pages, such as Google Home, Google Search, etc. |
| questions | It is where we put all the classes to check if the task was successful; we can say that it is associated with the "Then step". |
| steps-definitions | It is where we put all our steps that are written in the "features" section. |
| tasks | It is where we will put all the classes related to the business goal, the action that we do during the execution of the test case; we can say that it is associated with the "When step". |


## Prerequisites

We need Node.js installed to execute the test. In particular, I used v19.8.1.


## How to use 


### Diagram
         
![image](https://drive.google.com/uc?export=view&id=1_iQV28qtIA___yy2scgtBaynSqaVS07I)


### Instalation

To install the framework, you must follow the following steps:   

1. ``` 
    git clone https://github.com/granchetti/google-test.git
2. ```
    npm install
    
### Run test cases 

To run the test case , you must follow the following step:

```
npm run test
```

### Docker execution

we have to build the docker image and then we can create the containers with the different devices passed as a parameter when building the container, example:

1. ``` 
   docker build . -t test
2. ```
   docker run -it -e DEVICE="Galaxy S8" --name Galaxy_S8 test npm test
   
   
## References

[WebdriverIO](https://webdriver.io/)
