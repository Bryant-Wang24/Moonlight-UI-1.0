rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Bryant-Wang24/moonlight-ui-website &&
git push -f -u origin master &&
cd -
echo https://bryant-wang24.github.io/moonlight-ui-website/index.html