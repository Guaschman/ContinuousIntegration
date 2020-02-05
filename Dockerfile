FROM ubuntu

WORKDIR /CI_testing
COPY myScript.sh .
RUN chmod +x myScript.sh
RUN ./myScript.sh
