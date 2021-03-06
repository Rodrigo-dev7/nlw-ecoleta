# Projeto construido durante a Next Level Week #01






🍃 O Projeto foi desenvolvido durante a semana internacional do Meio Ambiente, Ecoleta serve para conectar empresa ou entidades que coletam resíduos orgânicos ou inorgânicos as pessoas que precisam descarta esses reśiduos.

- [x]  Ambiente de desenvolvimento
    - [x]  Node.js & NPM
    - [x]  VScode





<p align="center">
  <img   width="150" height="170" heigth="20px" src="https://user-images.githubusercontent.com/60434681/84028576-59b54900-a967-11ea-8b7a-f11031e3295c.png?raw=true" alt="Nodejs logo"/>
</p>




# Back-End

- [x]  Exlicando Conceitos

- [x]  Rotas e recursos

    ```
    // Rotas: Endereço completo da requisição
    // Recursos: Qual entidade estamos acessando no sistema
    ```

- [x]  Métodos HTTP

    ```
    // GET: Buscar uma ou mais informação do back-end
    // POST: Criar uma nova informação no back-end
    // PUT: Atualizar uma informação existente no bsck-end
    // DELETE: Remove uma informação do back-end
    ```

- [x]  Tipos de parâmetros

    ```
    // Recursos Param: Parâmetros que vem na prôpria rota que identificam um recurso
    // Query Param: Parâmetros que vem na prôpria rota  geralmente opcionais para filtros e paginação
    // Request Body: Parâmetros para criação/atualização de  informações
    ```

- [x]  Qual banco de dados vamos utilizar?
    - [x]  KNEX.JS

        [Knex.js - A SQL Query Builder for Javascript](http://knexjs.org/)

        ```tsx
        Execute esses dois comandos abaixo para criar seu banco

        // knex:migrate
        // knex:seed
        ```

- [x]  Identificando entidades da nossa aplicação
    - [x]  point  (Pontos de coletas)
        - [x]  image
        - [x]  name
        - [x]  email
        - [x]  whatsapp
        - [x]  latitude
        - [x]  longitude
        - [x]  city
        - [x]  uf
    - [x]  items (Relacionamentos dos itens que um ponto coleta)
        - [x]  point_id
        - [x]  item_id

- [x]  Funcionalidades  da aplicação
    - [x]  Cadastro do ponto de coleta
    - [x]  Lista do itens de coleta
    - [x]  Listar pontos(filtros por estado/cidade/items)
    - [x]  Listar um ponto de coleta especifico
- [x]  Adicionado CORS




<p align="center">
  <img    src="https://user-images.githubusercontent.com/60434681/84029786-591db200-a969-11ea-992b-c760347c1dbb.png?raw=true" alt="React logo"/>
</p>


# Front-End

- [x]  Explicando conceitos
    - [x]  JSX

        ```markdown
        Quando o código HTML é integrado dentro do JavaScript.
        ```

    - [x]  Components (Header)

        ```markdown
        Um componente no React é basicamente uma função que retorna HTML,
         podendo retorna funcionalidade JavaScript e CSS.
        ```

    - [x]  Propriedades

        ```markdown
        São atributos repassados de um componente pai para o filho.
        ```

    - [x]  Estado e imutabilidades

        ```markdown
        Trata-se de uma informação a ser mantida pelo componente. 
        Toda vez que o estado é alterado, o componente faz a renderização 
        novamente exibindo as novas informações em tela.
        ```

### Aplicação Ecoleta

- Home
![home](https://user-images.githubusercontent.com/60434681/84028374-f7f4df00-a966-11ea-9ef6-cddde1061d76.png)

- Cadastro


![cadastro](https://user-images.githubusercontent.com/60434681/84028362-f3c8c180-a966-11ea-9b66-5888ddc3fee5.png)

- Mapa & itens

![map](https://user-images.githubusercontent.com/60434681/84028382-faefcf80-a966-11ea-8edd-bd0b0b8a1834.png)



- [x]  Buscando dados de cidades do IBGE

    [API de localidades](https://servicodados.ibge.gov.br/api/docs/localidades)

    ```markdown
    1º API - Estados: https://servicodados.ibge.gov.br/api/v1/localidades/estados
    2º API - Municiopios: https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
    ```

    - [x]  Cadastro de pontos de coletas da API




<p align="center">
  <img   width="200" height="140" src="https://user-images.githubusercontent.com/60434681/84029797-5e7afc80-a969-11ea-8d42-2b8672f1f89b.png?raw=true" alt="Reacr native logo"/>
</p>



# Mobile

## Expo

    

[Introduction to Expo](https://docs.expo.io/)

- Com as ferramentas, serviços e React da Expo, você pode criar, implantar e iterar rapidamente em aplicativos nativos do Android, iOS e da web a partir da mesma base de código JavaScript.

- [x]  Instalar Expo

    ```markdown
    // Instalar o expo de formar global na sua maquina.
    // "npm install expo-cli"
    ```

- [x]  Criar projeto com Expo

    ```markdown
    //  expo init (nome do prjeto)
    ```

- [x]  Diferenças de React Native para ReactJS
    - [x]  Elementos

        ```tsx
        // REACT NATIVE
        <View>
        	<Text>Heelo World</Text>
        </View>

        // REACTJS

        <div>
        	<h1>Hello World</h1>
        </div>
        ```

    - [x]  Estilização

        ```tsx
        import React from 'react';
        import { StyleSheet, Text, View } from 'react-native';

        export default function App() {
          return (
            <View style={styles.container}>
              <Text>Hello World!</Text>
            </View>
          );
        }

        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
        });
        ```
