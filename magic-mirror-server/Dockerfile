FROM karsten13/magicmirror:latest
USER root
RUN apt-get update
RUN apt-get install build-essential -y
RUN apt-get install -y libdrm-dev librust-gobject-sys-dev libnss3 libdbus-1-3 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxi6 libxtst6 libxrandr2 libxss1 libxinerama1 libatk1.0-0 libxext6 libxfixes3 libxrender1 libgdk-pixbuf2.0-0 libgtk-3-0 libpango-1.0-0 libcairo2
RUN npm install simple-git

COPY ./magic-mirror-server/config /opt/magic_mirror/config
COPY ./magic-mirror-server/modules /opt/magic_mirror/modules
ADD ./magic-mirror-server/css/custom.css /opt/magic_mirror/css/custom.css
