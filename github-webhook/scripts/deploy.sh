cd ../logs
echo $1 >> ./deploy.logs
cd ../../
git stash
git pull
cd ./backend
docker-compose up -d