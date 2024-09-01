FROM karsten13/magicmirror:latest
COPY ./magic-mirror-server/config /opt/magic_mirror/config
COPY ./magic-mirror-server/modules /opt/magic_mirror/modules
ADD ./magic-mirror-server/css/custom.css /opt/magic_mirror/css/custom.css
RUN npm install simple-git