FROM nginx
COPY ./app /usr/share/nginx/html

#RUN echo $$BUILD_NUMBER
#RUN echo $$BUILD_NUMBER >> /usr/share/nginx/html/build.txt

EXPOSE 80



