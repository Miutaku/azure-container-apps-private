FROM karsten13/magicmirror:latest
USER root
RUN apt-get update && apt-get install -y librust-gobject-sys-dev libnss3
RUN npm install simple-git

COPY ./magic-mirror-server/config /opt/magic_mirror/config
COPY ./magic-mirror-server/modules /opt/magic_mirror/modules
ADD ./magic-mirror-server/css/custom.css /opt/magic_mirror/css/custom.css
