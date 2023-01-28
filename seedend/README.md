# SEED_SCHOOL BACKEND

## Prerequirement

#### Docker & Docker-Compose
>Link for Ubuntu: https://docs.docker.com/engine/install/ubuntu/

>Link for Window: https://docs.docker.com/desktop/windows/install/

>Link to install Docker-Compose: https://docs.docker.com/compose/install/

#### Virtualenv

> pip install virtualenv

Optionally you can use anaconda. Just activate environment as if virtualenv

#### Python 3

#### POSTMAN

## Install Environment
**Step 1: Clone this respository**

>git clone <respository_link>

>cd Back_Seed

**Step 2: Init virtual environment for python**

>python3 -m venv env

>source env/bin/activate

**Step 3: Run docker-compose file to init Database**

>docker-compose up -d

>docker ps 

#### Run Back_End Server

##### Install django and its requirements
> pip install -r requirements.txt

##### Create first migration
> python SeedSchool/manage.py makemigrations Seed

##### Apply migration
> python SeedSchool/manage.py migrate

##### Run server
> python SeedSchool/manage.py runserver

### API

**Import file in POSTMAN: Seed_School.postman_collection.json
