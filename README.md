# staticms

Static generated website integrated with a CMS, rebuilt by every insertion or
update. It is a simple little experiment.

## Running

Requirements are:

+ [docker]
+ [docker-compose]

To run it:

+ Run CMS and static server with `docker-compose up`
+ Go to [http://localhost:1337/admin](http://localhost:1337/admin) and create
  and admin account
+ Go to `Settings/Users & Permissions Plugin/Roles`
    + Select the Public role
    + Under Permissions, set the following to `Author` and `Post`:
        + count
        + findone
        + find
+ Go to `Collection Types/Authors`
    + Create a new Author clicking on `Add New Authors`
    + Warning: don't forget to fill every field
    + Click on `Save` to save the Author
    + Click on `Publish` so it becomes public
+ Go to `Collection Types/Posts`
    + Create a new Post clicking on `Add New Posts`
    + Warning: don't forget to fill every field
    + Click on `Save` to save the Post
    + Click on `Publish` so it becomes public
+ Go to [http://localhost/](http://localhost/) and see the static rendering
+ Experiment with it:
    + Edit posts, add more, and see what happens!

[docker]: https://docs.docker.com/get-docker/
[docker-compose]: https://docs.docker.com/compose/install/
