# Aprendizado-React-Native
Este repositório estará alguns projetos de aprendizado e dicas para instalação e preparação de ambiente

## Instalação do Node.js e Yarn
Node.js: 
https://nodejs.org/en/

Yarn: 
https://classic.yarnpkg.com/en/docs/install/#windows-stable

## Instalação de choco (Chocolatey)

O Chocolatey é um gerenciador de pacotes para plataformas Windows

No powerShell como administrador, cole o seguinte código para baixar o choco:

### `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`

## Instalação de dependencias para funcionar o emulador android

Reinicie o powerShell depois de instalar o choco e instale as seguintes bibliotecas:

### `choco install -y openjdk8`

Se você prefere instalar o node por linha de comando junto do openjdk8, digite:

### `choco install -y nodejs.install openjdk8`

# React native com Typescript (passo a passo)

Caso você tenha já instalado o react-native-cli, desinstale-o (é recomendado)

### `npm uninstall -g react-native-cli`

No terminal do windows (modo adm) instalar a biblioteca react-native-community/cli (instalação global com -g)
### `npm i -g @react-native-community/cli`


Após a instalação do pacote, inicializar o projeto
### `npx react-native init MyApp --template react-native-template-typescript`

# React native puro

Para instalação do react-native puro sem definição de tipos (sem TypeScript)
### `npx react-native init MyApp`

## Projeto de exemplo 1: natscript (React Native + JavaScript)

## Projeto de exemplo 2: natypes (React Native + TypeScript)

Para inicializar o projeto utilize:

### `npx react-native run-android`

ou

### `react-native run-android`

OBS.Apenas a primeira inicialização será demorada