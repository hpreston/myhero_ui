FROM nginx
MAINTAINER Hank Preston <hank.preston@gmail.com>

EXPOSE 80

# Application and Environment Startup Script
COPY ./env_setup.sh /root
RUN chmod +x /root/env_setup.sh

# Web Application Code
COPY ./app /usr/share/nginx/html

# Configure environment and start nginx
CMD ["/root/env_setup.sh"]
