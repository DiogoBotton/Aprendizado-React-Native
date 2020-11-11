# Aprendizado-React-Native
Este repositório estará alguns projetos de aprendizado e dicas para instalação e preparação de ambiente

## Instalação do Node.js e Yarn (Configuração de ambiente)
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

# Configuração de variáveis de ambiente

Para acessar um tutorial do próprio facebook do React Native, clique no link abaixo:

http://reactnative.dev/docs/environment-setup

## Passo 1: Variavel de ambiente ANDROID_HOME (também pode ser chamado de ANDROID_SDK_ROOT)

No windows 10, pesquisar por "Editar variaveis de ambientes do sistema"

Clicar em "Variaveis de Ambiente"

Clique em "Novo"

Aparecerá uma janela para colocar a CHAVE da variavel e o seu valor

### Como chave do valor coloque `ANDROID_HOME`

### Como valor coloque `%LOCALAPPDATA%\Android\Sdk`

## Passo 2: Variavel de ambiente para plataform-tools

Procure a variável de nome "Path" e clique em "Editar"

Abrirá uma nova janela, com isto clique em "Novo" e acrescente

### `%LOCALAPPDATA%\Android\Sdk\platform-tools`

E pronto, as variáveis de ambiente estarão agora todas configuradas e prontas para emular o android!

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

OBS.Apenas a primeira inicialização será demorada

# Utilizando EXPO CLI

Utilizando o Expo é bem mais fácil e leve

Abra o cmd (prompt de comando) do windows como administrador e digite:

### `npm install -g expo-cli`

Para verificar se foi instalado corretamente digite:

### `expo --version`

## Criando projeto com Expo Cli

No terminal, digite:

Isto inicializará o yarn para o projeto

### `yarn init -y`

Após isso, adicione o expo localmente no projeto

### `yarn add expo expo-cli`

Terminado a instalação da biblioteca, digite para criar o projeto:

### `expo init MyApp`

Siga as intruções e code feliz =)