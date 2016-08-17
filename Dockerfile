FROM hpreston/myhero_ui:gsx
EXPOSE 80

ENV myhero_spark_server="http://gsx-spark.green.browndogtech.com" \
    myhero_app_server="http://gsx-app.green.browndogtech.com" \
    myhero_app_key="SecureApp"
