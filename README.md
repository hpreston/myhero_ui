# MyHero UI Service

This is the FrontEnd UI Service for a basic microservice demo application.

![ui](resources/web_ui_pic.jpg) 

This provides an alternative web front end to the original [hpreston/myhero_web](https://github.com/hpreston/myhero_web) into a voting system where users can vote for their favorite movie superhero.  

This UI is built with AngularJS and Bootstrap to provide a more Cloud Native style frontend.  

Details on deploying the entire demo to a Mantl cluster can be found at

* MyHero Demo - [hpreston/myhero_demo](https://github.com/hpreston/myhero_demo)

The application was designed to provide a simple demo for Cisco Mantl.  It is written as a simple Python Flask application and deployed as a docker container.

Other services are:

* Data - [hpreston/myhero_data](https://github.com/hpreston/myhero_data)
* App - [hpreston/myhero_app](https://github.com/hpreston/myhero_app)
* Web - [hpreston/myhero_web](https://github.com/hpreston/myhero_web)
* UI - [hpreston/myhero_ui](https://github.com/hpreston/myhero_ui)
* Ernst - [hpreston/myhero_ernst](https://github.com/hpreston/myhero_ernst)
  * Optional Service used along with an MQTT server when App is in "queue" mode
* Spark Bot - [hpreston/myhero_spark](https://github.com/hpreston/myhero_spark)
  * Optional Service that allows voting through IM/Chat with a Cisco Spark Bot
* Tropo App - [hpreston/myhero_tropo](https://github.com/hpreston/myhero_tropo)
  * Optional Service that allows voting through TXT/SMS messaging


The docker containers are available at

* Data - [hpreston/myhero_data](https://hub.docker.com/r/hpreston/myhero_data)
* App - [hpreston/myhero_app](https://hub.docker.com/r/hpreston/myhero_app)
* Web - [hpreston/myhero_web](https://hub.docker.com/r/hpreston/myhero_web)
* UI - [hpreston/myhero_ui](https://hub.docker.com/r/hpreston/myhero_ui)
* Ernst - [hpreston/myhero_ernst](https://hub.docker.com/r/hpreston/myhero_ernst)
  * Optional Service used along with an MQTT server when App is in "queue" mode
* Spark Bot - [hpreston/myhero_spark](https://hub.docker.com/r/hpreston/myhero_spark)
  * Optional Service that allows voting through IM/Chat with a Cisco Spark Bot
* Tropo App - [hpreston/myhero_tropo](https://hub.docker.com/r/hpreston/myhero_tropo)
  * Optional Service that allows voting through TXT/SMS messaging


# Environment Installation

The MyHero-UI service is built on AngularJS and leverages npm to install dependencies and local execution.  You'll want to have [Node.js](https://nodejs.org/en/download) installed if you plan to run locally, that is **NOT** within the Docker Container model.  


# Basic Usage

## Docker Container

The best option for running the service is as a Docker Container.  This removes the need to install Node on your local machine or edit any configuration files.  

After cloning the repository and entering the directory.  You can build the container like this: 

```
docker build -t myhero_ui:local . 
```

This will create a new docker image on your local machine for the service.  You can verify like this: 

```
docker images 

# OUTPUT
REPOSITORY                                     TAG                 IMAGE ID            CREATED             SIZE
myhero_ui                                      local               304e562b0ba0        5 seconds ago       184.8 MB
```

To run the container, a few pieces of information need to be provided.  This includes: 

* Required
	* Address of the MyHero_App service
	* Authentication Key of the MyHero_App service
* Optional - if used in your deployment 
	* Address of the MyHero_Spark Service
	* Address of the MyHero_Tropo Service 

**_Note: the addresses for the App, Spark, and Tropo services will be in the format of "http://app.domain".  If you are running the services all locally on your machine, they would be similar to "http://localhost:15001"._**

You provide this information as environment variables to the container.  These commands are an example: 

```
# First set some local environment variables for the details needed
export MYHERO_APP_SERVER=<your app server address> 
export MYHERO_APP_KEY=<your app server key>
export MYHERO_SPARK_SERVER=<your spark bot address>
export MYHERO_TROPO_SERVER=<your tropo app address> 

# This command will start a container and connect to the terminal so you can watch it
docker run -it \
	-e myhero_app_server=$MYHERO_APP_SERVER \
	-e myhero_app_key=$MYHERO_APP_KEY \
	-e myhero_spark_server=$MYHERO_SPARK_SERVER \
	-e myhero_tropo_server=$MYHERO_TROPO_SERVER \
	-p 8080:80 \
	myhero_ui:local

# OUTPUT
Configuring UI to use APP Server: <your app server address>

Starting Web Server
172.17.0.1 - - [19/Aug/2016:14:12:01 +0000] "GET / HTTP/1.1" 200 4839 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7" "-"

```

# Accessing

Once started up, you can browse on your local machine to `http://localhost:8080` to open the site.  Should look something like this.  

![ui](resources/web_ui_pic.jpg) 


# Local Development with Vagrant

I've included the configuration files needed to do local development with Vagrant in the repo.  Vagrant will still use Docker for local development and requires the following be installed on your laptop: 

* [Vagrant 2.0.1 or higher](https://www.vagrantup.com/downloads.html)
* [Docker](https://www.docker.com/community-edition)

To start local development run:

* `vagrant up`
* Now you can the web page at localhost:15080 (configured in Vagrantfile)
  * Environment Variables are configured in Vagrantfile for development
  * In development, the Spark and Tropo connections for demos will NOT work.  This is because of the challenges with developing those bots locally because of the need for the cloud services to access your service.  See those repo READMEs for more details.  

Each of the services in the application (i.e. myhero_web, myhero_app, and myhero_data) include Vagrant support to allow working locally on all three simultaneously.