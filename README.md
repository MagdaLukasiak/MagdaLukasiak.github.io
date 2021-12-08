##Docker deploy
Refere here: [doc](https://docs.docker.com/docker-hub/)

### Login to docker

`docker login`

### Build image

`docker build -t kl4532/portfolio-magda-ng .` 

### Test image

`docker run -p 8080:80 kl4532/portfolio-magda-ng`

### Push to docker-hub registry

`docker push kl4532/portfolio-magda-ng`


