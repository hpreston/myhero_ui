# -*- mode: ruby -*-
# vi: set ft=ruby :

# Specify Vagrant version and Vagrant API version
Vagrant.require_version ">= 2.0.1"
VAGRANTFILE_API_VERSION = "2"
ENV['VAGRANT_DEFAULT_PROVIDER'] = 'docker'

# Create and configure the Docker container(s)
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.ssh.insert_key = false

  # Configure the Docker provider for Vagrant
  config.vm.provider "docker" do |docker|

    # Specify the Docker image to use
    # or the location of the Dockerfile
    #docker.image = "nginx"
	  docker.build_dir = "."

    # Specify port mappings
    # If omitted, no ports are mapped!
    docker.ports = ['15080:80']

    # Note: links are left for reference, but as UI is a
    #   client side web app, container to container links
    #   are irrelevant
    # docker.link("myhero-app:myhero-app")
    # docker.link("myhero-spark:myhero-spark")
    # docker.link("myhero-tropo:myhero-tropo")

    # Environment Variables for Development
    # Note: The UI is a client side web app,
    #   so the App Server address points to localhost
    docker.env = {
      "myhero_app_key" => "DevApp",
      "myhero_app_server" => "http://localhost:15001",
      "myhero_spark_server" => "http://localhost:15003",
      "myhero_tropo_server" => "http://localhost:15005",
    }

    # Specify a friendly name for the Docker container
    docker.name = 'myhero-ui'
  end
end
