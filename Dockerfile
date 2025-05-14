# Several container technologies exist: Docker, containerd, podman,
# etc. On the computers of your campus, you may access the container
# software in rootless mode for security reasons. This could lead to
# the following extra constraints:
# • Your runtime needs to be located in /goinfre or /sgoinfre.
# • You are not able to use “bind-mount volumes” between the host
# and the container if non-root UIDs are used in the container.
# Depending on the current requirements of the subject (highlighted in
# green above) and the local configuration in clusters, you may need to
# adopt different strategies, such as: container solution in virtual
# machine, rebuild your container after your changes, craft your own
# image with root as unique UID.