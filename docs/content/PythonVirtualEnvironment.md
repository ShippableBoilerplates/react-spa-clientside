### Running AWS-EB CLI with Python Virtual Environment

When you have `docker` installed in your local development machine and you install AWSEB CLI via pip, you might get warning about a naming collision while using `docker` or `docker-compose`.

```terminal
ERROR: Dependency conflict: an older version of the 'docker-py' package is polluting the namespace.
Run the following command to remedy the issue: 
pip uninstall docker docker-py; pip install docker
```

The best way to avoid this issue is to use the Python package `virtualenv` to contain AWS EB CLI package, so that it's Docker files won't collide with the global installation of Docker in your local development machine.

AWS also provides a documentation on how to use their package with `virtualenv`

[Installing the EB CLI in a Virtual Environment](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-virtualenv.html)

Once you install the `virtualenv` package, you can create a virtual environment, activate it and install EB CLI there. Since the virtual environments are persistent, you'll only have to do install it once.

**Caveats:**

The EB CLI won't be in your path, so when you want to `deploy` you'll have to run your virtual environment to access EB CLI.

Example:

When I want to deploy from my local machine, I run:

```terminal
## Activate virtual environment
c:\eb-ve\Scripts\activate.bat

## Run any EB command I need
eb deploy

## Get out of the virtual environment when I'm done with EB
deactivate
```


