# Dev web server for the static NetLink site.
# nginx:alpine + python3 — python3 is only used to build the downloadable ZIP packages
# (tools/build-zips.py) at container startup. The app source is bind-mounted at runtime;
# nothing is copied into the image, so edits show up without a rebuild.
FROM nginx:alpine
RUN apk add --no-cache python3
