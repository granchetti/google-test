FROM node:19.8.1


RUN apt-get update && apt-get install -y curl unzip gnupg


RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor | tee /usr/share/keyrings/google-chrome-archive-keyring.gpg >/dev/null


RUN echo "deb [signed-by=/usr/share/keyrings/google-chrome-archive-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list >/dev/null


RUN apt-get update && apt-get install -y google-chrome-stable


RUN CHROMEDRIVER_VERSION=`curl -sS https://chromedriver.storage.googleapis.com/LATEST_RELEASE` && \
    curl -sS -o /tmp/chromedriver_linux64.zip https://chromedriver.storage.googleapis.com/$CHROMEDRIVER_VERSION/chromedriver_linux64.zip && \
    unzip /tmp/chromedriver_linux64.zip chromedriver -d /usr/local/bin/ && \
    rm /tmp/chromedriver_linux64.zip


WORKDIR /app
ADD . /app
RUN npm install
RUN npm install allure-commandline

CMD npm run test
