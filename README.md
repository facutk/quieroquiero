# ![QuieroQuiero](https://raw.githubusercontent.com/facutk/quieroquiero/master/fb/app/images/QQ_32.png) QuieroQuiero

## Instalación
###Prerequisitos

Linux
```sh
sudo apt-get install git nodejs npm
```

Windows

- [ruby](http://rubyinstaller.org/downloads/)
- [nodejs y npm](http://blog.teamtreehouse.com/install-node-js-npm-windows)
- [git](https://git-scm.herokuapp.com/download/win)


Web
```sh
npm update -g npm grunt grunt-cli yo generator-angular generator-ionic
gem install sass compass
git clone https://github.com/facutk/quieroquiero.git
cd quieroquiero/fb
# yo angular
npm install
bower install
npm install grunt-karma karma-phantomjs-launcher karma-jasmine --save-dev
grunt
cd dist
#firebase init
firebase deploy
```

App
```sh
gem install sass compass
npm update -g npm 
npm install -g grunt grunt-cli yo generator-angular generator-ionic
git clone https://github.com/facutk/quieroquiero.git
cd quieroquiero/qqApp
# yo ionic
npm install
bower install
npm install grunt-karma karma-phantomjs-launcher karma-jasmine --save-dev
grunt
ionic upload
#ionic platform add android
#cordova plugin add org.apache.cordova.inappbrowser
#cordova plugin add https://github.com/bez4pieci/Phonegap-Cookies-Plugin.git
#ionic run android
```

### Si algo falla
```sh
cd quieroquiero/fb
rm -r node_modules
npm cache clean
npm install
```
### Si están atras de una VPN
```sh
git config --global url."https://".insteadOf git://
```

## Desarrollo
### Web
```sh
cd quieroquiero/fb
grunt serve
# editar archivos
# CTRL + C
git add .
git commit -m "razon del cambio"
git push origin master
```

### App
```sh
cd quieroquiero/qqApp
grunt serve
# editar archivos
# CTRL + C
git add .
git commit -m "razon del cambio"
git push origin master
```

## Actualizar Servidor Producción 
```sh
cd quieroquiero/fb
grunt
cd dist
firebase deploy
```

TODO
----
-

Licencia
----
-

Versión
----
0.1