
![exemplo](https://github.com/Laudier2/conversor-de-moedas/blob/master/public/bg.gif)

<h1 align="center">
  <center>Reactjs com o poder do contextAPI 2022
</center>
</h1>

<p align="center">Nessa tutorial criamos um conversor de moedas <a href="https://laudierstdev.ga">Converte Moedas</a></p>

## 👨🏼‍💻 Instrutor

- [José Santana](https://laudierstdev.ga)

## ✋🏻 Pré-requisitos

- [Reactjs](https://nodejs.org/en/)
- [Yarn](classic.yarnpkg.com/en/docs/install)
- [Conversor de Moedas](https://conversordemoeda.ga)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd conversor-de-moedas`;
3. Rode `yarn install` ;
4. Rode `yarn start`;
5. Acesse a URL `http://localhost:3000`;

## Como mostrar log da aplicação?

```yarn test
```

## As requisições estaõ sendo feitas atravez do context do react

```js
import { createContext } from 'react';

const RecebeValoresContext = createContext()

export default RecebeValoresContext;
```

## E aquir estamos recebendo e monitorando todos os valores criado e atualizados

```js
import React, { useEffect, useState } from 'react';
import api from '../api/api';
import ConsumeContextData from './ConsumeContextData'

const AppProvider = ({ children }) => {

    const [data, setDate] = useState([])

    useEffect(() => {
        (async () => {
            const req = await api.get("https://economia.awesomeapi.com.br/json/all")
            setDate(req.data)
        })()
    }, [])

    return (
        <ConsumeContextData.Provider value={{ data }}>
            {children}
        </ConsumeContextData.Provider>
    );
}

export default AppProvider;
```

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💖 José Santana de Jesus 👋 [Entre na nossa comunidade!](laudierst.tk)
