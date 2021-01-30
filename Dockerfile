FROM node:14

WORKDIR /app
COPY ./cms/package.json cms/
COPY ./static/package.json static/

RUN yarn --cwd "cms" install && \
    yarn --cwd "static" install

COPY ./cms/ cms/
RUN yarn --cwd "cms" build

COPY ./static/ static/

EXPOSE 1337
ENTRYPOINT ["yarn", "--cwd", "cms"]
CMD ["start"]
