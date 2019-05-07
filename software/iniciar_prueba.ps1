docker build -t joel .

docker run --name joel-cont -d -p 80:80 -it joel /bin/bash

docker exec -i joel-cont service apache2 start

Start-Process "http://localhost:80/joel/index.html"

PAUSE