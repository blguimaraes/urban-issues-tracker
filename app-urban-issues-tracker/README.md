# Visão Geral do Projeto

Este projeto é um aplicativo de rastreamento de problemas urbanos. Ele permite que os usuários registrem ocorrências em um mapa, anexem fotos, categorizem problemas e acompanhem seu status. O app foi desenvolvido utilizando **Expo** e **React Native**, com suporte a navegação via **expo-router**.

# Instruções de Instalação

Siga os passos abaixo para configurar o projeto em sua máquina:

### 1. Requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** e **npm** (ou **yarn**)
- **Expo CLI**, que pode ser instalado com o comando:
  ```sh
  npm install -g expo-cli
  ```

### 2. Clonando o Repositório

Baixe o código-fonte do projeto executando:

```sh
git clone https://github.com/blguimaraes/urban-issues-tracker.git
```

Entre no diretório do projeto:

```sh
cd urban-issues-tracker/app-urban-issues-tracker
```

### 3. Instalando Dependências

Instale as dependências do projeto com:

```sh
npm install
```

# Executando o Projeto

Para rodar o projeto no seu dispositivo móvel usando Expo Go:

1. Instale o aplicativo **Expo Go** no seu smartphone (disponível na Play Store/App Store).
2. Inicie o servidor de desenvolvimento:
   ```sh
   npx expo start
   ```
3. Escaneie o QR Code exibido no terminal com o aplicativo **Expo Go**.
4. O app será carregado no seu dispositivo.

# Observações Importantes

- Este projeto usa **react-native-maps**, que **não** é compatível com navegadores. Por isso, ele **não pode ser executado no web**.
- Se for necessário rodar no emulador, configure um emulador do **Android Studio** ou **Xcode**.

# Solução de Problemas

Caso encontre problemas durante a instalação ou execução do projeto, consulte:

- [Documentação do Expo](https://docs.expo.dev/)
- [Documentação do React Native Maps](https://github.com/react-native-maps/react-native-maps)

Se o problema persistir, abra uma **issue** no repositório do projeto no GitHub.

---

Se precisar de ajustes ou adicionar algo específico, me avise! 🚀
