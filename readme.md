#install yarn
(on mac)
brew install yarn

(on windows)
https://classic.yarnpkg.com/latest.msi

(on linux)
<--Add sources-->
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
<--install-->
sudo apt update && sudo apt install yarn





#install vue/cli using yarn
yarn global add @vue/cli

#install node packages
yarn install


<!-- configure scrips in package.json -->
#run server
yarn dev

#run build
yarn build