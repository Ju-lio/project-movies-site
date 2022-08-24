<!-- 1. [] Code style:
  - Configurar eslint: ng add @angular-eslint/schematics
  - Instalar o prettier: npm install prettier --save-dev
  - Criar o arquivo .prettierrc.json na raiz do projeto
  - Criar o arquivo .prettierignore
  - Copiar o conteúdo do arquivo .gitignore e colar no arquivo .prettierignore
  - Configurar o prettier como plugin do eslint: npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev
  - rodar no terminal: ng lint -->

2. [] Não utilizou módulos
  - Criar pasta modules na pasta app
  - ng g m home --routing
  - { path: 'home/:usr', loadchilden: () => import('./modules/home/home.module').then(m => m.HomeModule) }
3. [] Não utilizou lazy loading
4. [] Não utilizou rxjs
5. [] Não utilizou modelos
6. [] Uso incorreto do roteamento
7. [] *Não configurou rotas para "página não encontrada" ({ path: '**', component: Notfouncomponent })
8. [] Implementação da página de destaques deve ser melhorada: os itens devem ser passados dinamicamentes
9. [] Imagens quebrarão em produção
10. [] Clean Code:
  - Uso de let quando deveria utilizar const
  - Services não estão alocados em diretórios apropriados
  - Nomenclatura incorreta de variáveis
  - Revisar implementação para loadFilmes
  - Método getMidia deveria usar switch case e nao if else
  - Uso de for, quando deveria utilizar map
  - Revisar estratégia para unsubscribe: HomeComponent
11. Serviços não devem ser instanciados manualmente

{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}

"plugin:prettier/recommended"