!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b ghpages
git add -A
git commit -m 'deploy v2'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Edu58/My-Portfolio.git main:ghpages

cd -
