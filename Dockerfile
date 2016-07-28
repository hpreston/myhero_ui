FROM nginx
COPY ./app /usr/share/nginx/html

COPY ./env_setup.sh /root
RUN chmod +x /root/env_setup.sh

#RUN echo $$BUILD_NUMBER
#RUN echo $$BUILD_NUMBER >> /usr/share/nginx/html/build.txt

EXPOSE 80

CMD ["/root/env_setup.sh"]
