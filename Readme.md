# Web Rebels 2017 Conference

This is the source code for the Web Rebels 2017 Conference web site.



# Before we start

Where you check out your code from github is entirely up to you and every time
this document refer to ```{project_path}``` it does refer to the path where you
have chosen to check out this project.



# Development

This is a [node.js](http://nodejs.org/) application.


## Getting up and running

Install [node.js](http://nodejs.org/) according to the documentation of the
node.js project.

### Install dependencies:

    cd {project_path}
    npm install

### Start the server:

    cd {project_path}
    npm start

You should now be able to access the application at
[http://localhost:8000/](http://localhost:8000/)



# Deployment to production

This application is hosted at [Zeit](https://zeit.co/). To deploy to production you
need to install their client; [now](https://zeit.co/now)  which is the commandline
tool to administer applications running at Zeit.

Now is installed by the following command:

    npm install now -g

Now is then installed globally so it can be executed from any path.

To deploy (or run any other operation on our app), one need to log in. Login is
done by the following command:

    now --login

You will then be prompted to provide an email for verification, do provide the
kontor@webrebels.org email. Zeit will then send an email to this account which
should appear in your email (if your a member of the kontor mail list).
Click the link in this email and you should be verified.


To deploy this application to Zeit, run the following commands:

    cd {project_path}
    now -e NODE_ENV=production

The application will then be deployed but its not live yet. All deploys at Zeit
are imutable so we need to point the domain to the new deploy.

When deploying, the client will respond with URL to the imutable deploy.
Copy this URL and do the following:

    now alias http://theUrlToTheImutableDeploy www.webrebels.org

Then, the new deploy should be live.
