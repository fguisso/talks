# Talks

Este repo é usado para fazer build das minhas palestras usando Slidev e Github Pages para Deploy.

Você pode fazer um fork e utilizar da mesma forma.

## Como funciona?

Os slides ficam dentro do diretorio `slides`, desta forma:
```
slides
 ├── titulo-talk-1
 |  ├── public/
 |  └── titulo-talk-1.md
 └── titulo-talk-2
    ├── public/
    └── titulo-talk-2.md
```

É importante manter a nomeclatura pois o Github Actions vai utiliza-la para fazer o deploy na pasta correta.

O deploy acontece apenas quando tem mudanças dentro do diretorio `slides` e acontece apenas de um em uma talk, pois o Github Actions pega o nome da sua talk baseado nas mudanças do seu ultimo commit, veja na linha [22 do workflow](https://github.com/fguisso/talks/blob/486f65b8845770c7ef800c305c96be6e14388bf3/.github/workflows/github-pages-deploy.yaml#L22).

## Tudo pronto!

Show, tudo pronto, onde esta meus slides??

Eles estão na branch `gh-pages` então se for seu primeiro deploy, vc precisar ir até settings e habilitar o `gh-pages` como branch da sua pagina.

Você pode conferir a estrutura dos deploys na branch `gh-pages`. Veja o meu por exemplo [aqui](https://github.com/fguisso/talks/tree/gh-pages).

Com tudo isso pronto o Github Pages ira servir os arquivos estaticos do seu slide seguindo esta linha:
```
https://<usuario>.github.io/talks/<titulo-talk-1>

ex:
https://fguisso.github.io/talks/titulo-talk-1

```

Caso você já tenha um CNAME apontando para sua pagina `https://<usuario>.github.io` então o resultado sera `https://seu_dominio/talks/titulo-talk-1`.

Exemplo: https://guisso.dev/talks/xss-session

## Testar

Você precisa passar o --base e onde o slide esta:
```bash
slidev build --base /talks/titulo-talk-1 slides/titulo-talk-1/titulo-talk-1.md
```

Isso vai gerar um arquivo `dist` em lá no direto exato do seu slide.

# TODO

- [ ] Criar um `index.html` no root da branch `gh-pages` que vai contar a lista e links de cada nova palestra adicionada.
- [ ] Criar um workflow do github pages para refazer o build e deploy em todos os slides já criados. Isso serve por que hoje temos slides compartilhado entre todos como exemplo a mini bio, então sempre que eu trocar alguma informação na mini bio, quero refazer o deploy dos slides para alterar essa informação em todas as apresentações.
- [ ] Não sei ainda, mas talvez criar um `index.json` para ser consumido direto no meu blog pessoal.
- [ ] PESSOAL Criar um novo layout com as cores e temass do meu blog pessoal. 

# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show:

- `npm install`
- `npm run dev`
- visit http://localhost:3030

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev on [documentations](https://sli.dev/).
