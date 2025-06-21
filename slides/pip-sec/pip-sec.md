---
theme: default
layout: cover
class: 'text-center'
highlighter: shiki
lineNumbers: true
fonts:
  sans: 'Nunito'
themeConfig:
  websiteUrl: https://guisso.dev
  avatar: https://guisso.dev/5755568_4424276171815601475_hu0e7c20109915d8890daa45a87ae252d1_16018_288x288_fill_q96_box_center.jpg
  photo: './guisso-photo.png'
---

# <span style="color:rgb(45, 101, 214)">Segurança</span> no <span>PyPI</span>

baixando pacotes ou problemas

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Vamos começar! <carbon:arrow-right class="inline"/>
  </span>
</div>

---
src: ../../pages/guisso-queisso.md
---
F Guisso
---

# <span>Por que</span> falar disso?

⚠️ Um simples `pip install` pode abrir a porta para:

<v-clicks>

- Roubo de dados sensíveis
- Roubo de chaves de servicos(`.env`)
- Roubo de dados do navegador e carteiras
- Acesso remoto à sua máquina(ghost, DDoS)
- Inclusão de backdoor em seus projetos(acesso a suas aplicações)

</v-clicks>

---

# <span style="color:rgb(208, 49, 49);">Entender</span> o <span>PyPI</span>

🐍 O `pip` e o PyPI são partes essenciais do ecossistema Python.

✅ É fácil para instalar e criar pacotes.
🚨 Mas também é fácil **subir um pacote malicioso**.

Qualquer pessoa com uma conta pode:

<v-clicks>

- Publicar um pacote com o nome que quiser.
- Colocar código que será executado na hora da instalação (`setup.py`, `pyproject.toml`).
- Usar nomes parecidos com pacotes populares para enganar usuários.

</v-clicks>

<v-click at="4">

É por isso que o PyPI, apesar de ser <span v-mark="{ at: 4, color: '#00aa22', type: 'underline' }">confiável</span> como plataforma, **é um alvo frequente para <span v-mark="{ at: 5, color: '#ff0000', type: 'circle' }">ataques</span>**.

</v-click>

---

# <span class="case">Caso 1</span> — Roubo de dados com Gmail e WebSockets

Shell reverso dentro do pacote

📦 Pacotes maliciosos como `loglib-modules` pareciam inofensivos.
📨 Mas ao instalar, eles **roubavam variáveis de ambiente** e enviavam tudo por:

- **Gmail SMTP** (mandando e-mails com `.env`, tokens, AWS keys)
- **WebSockets** (mantinham canal aberto para exfiltrar dados)

🕵️‍♂️ O código malicioso era difícil de notar, escondido em `setup.py`.

🔗 Fonte:  
https://www.bleepingcomputer.com/news/security/malicious-pypi-packages-abuse-gmail-websockets-to-hijack-systems/

<style>
.case {
  background-color:rgb(168, 43, 182);
  background-image: linear-gradient(85deg,rgb(181, 78, 212) 15%,rgb(102, 20, 140) 55%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

---

# <span class="pipmalware">Caso 2</span> — Shell reverso escondido no pacote

Criptomoedas em perigo

🎭 O pacote `secrevtwo` parecia ser uma lib de log.  
💣 Mas ao instalar, ele executava um **shell reverso** que dava controle total da sua máquina para o atacante.

🔍 Técnicas usadas:
- Código malicioso dentro do `setup.py`
- Uso de `socket`, `subprocess` e `os.system`
- Obfuscação leve para passar despercebido

💡 Bastava rodar `pip install secrevtwo` — sem nem importar o pacote.

🔗 Fonte:  
https://www.sonatype.com/blog/can-you-spot-this-cryptic-reverse-shell-found-in-pypi-packages

<style>
.pipmalware {
  background-color: rgb(43, 182, 143);
  background-image: linear-gradient(45deg, rgb(78, 212, 132) 25%, rgb(20, 140, 122) 55%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

---

# <span style="background: linear-gradient(45deg, rgb(78, 212, 132), rgb(20, 140, 122)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Caso 3</span> — Roubo de carteiras de criptomoedas

Instalou e pedeu cas cryptos


💰 O pacote `semantic-types` foi publicado no PyPI com um objetivo bem específico:  
**roubar chaves privadas de carteiras Solana**.

🔍 Como funcionava:
- Escaneava arquivos locais da carteira (como `keypair.json`)
- Pegava as **chaves privadas** armazenadas no sistema
- E aqui vem a parte criativa 👇

---

# <span style="background: linear-gradient(45deg, rgb(78, 212, 132), rgb(20, 140, 122)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Caso 3</span> — Roubo de carteiras de criptomoedas

🧨 Os dados eram exfiltrados via **transações na blockchain Solana**:
- O malware colocava os dados roubados no campo de metadados de uma transação
- A transação era publicada na blockchain
- O atacante apenas precisava monitorar a rede para coletar os dados

✅ Sem IP malicioso. Sem webhook. Sem firewall bloqueando.
❌ E os dados ficam **permanentemente gravados** em um ledger público.

🔗 Fonte:  
https://cybersecuritynews.com/weaponized-pypi-package-steals-solana-private-keys/

---

# <span style="background: linear-gradient(45deg, rgb(78, 212, 132), rgb(20, 140, 122)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Caso 4</span> — GitHub também virou armadilha

Como esses ataques funcionam?

🐙 O grupo chamado <strong>Banana Squad</strong> publicou mais de **60 repositórios falsos** no GitHub, todos parecendo ferramentas Python legítimas.

💣 Na verdade, esses repositórios continham código malicioso para:
- Roubar dados de navegadores e carteiras cripto
- Coletar arquivos sensíveis do sistema
- Exfiltrar dados de forma furtiva

😬 Os repositórios enganaram milhares de usuários com visual profissional e comandos úteis(de CLI conhecidas), mas camuflavam malware em trechos de código.

🔗 Fonte:  
https://hackread.com/banana-squad-data-stealing-malware-github-repositories/

---

# <span style="background: linear-gradient(45deg, rgb(78, 212, 132), rgb(20, 140, 122)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Typosquatting</span>

Escrita errada

🔡 Atacantes criam pacotes com nomes muito parecidos com pacotes legítimos — contando com erros de digitação ou distração.

🧪 Exemplos reais:
- `reqeusts` em vez de `requests`
- `urlib3` em vez de `urllib3`
- `tensorlfow` em vez de `tensorflow`

👀 Visualmente parecem corretos, mas:
- São controlados por outra pessoa
- Podem conter código malicioso no `setup.py` ou no próprio pacote

📦 Muitas vezes têm poucos downloads, nenhuma documentação e só um mantenedor — sinais de alerta!

---

# <span style="background: linear-gradient(45deg, rgb(78, 212, 132), rgb(20, 140, 122)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obfuscação</span> — linhas que ninguém lê

Boas práticas que salvam

📏 Algumas linhas em pacotes maliciosos têm mais de 1000 caracteres.  
😵 O objetivo é simples: **esconder o código fora da tela**.

👁️ Repositórios do Banana Squad, por exemplo, usavam esse truque no meio de funções legítimas.

🧪 Exemplo visual:
```python
def calcular_media(valores):
    total = sum(valores)
                                                                                                                                                                                                                                                        exec("import os; os.system('cat /etc/passwd')")
    media = total / len(valores)
    print(f"A média dos valores é: {media}")
```

---

# <span style="background: linear-gradient(45deg, rgb(78, 212, 132), rgb(20, 140, 122)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obfuscação</span> — código embaralhado

Execução no setup.py

😵 Nem todo código estranho precisa ser complexo — às vezes ele só **esconde sua intenção com variáveis e strings embaralhadas**.

🧪 Exemplo realista:
```python
x1 = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100]
mensagem = ''.join([chr(i) for i in x1])
getattr(__builtins__, 'eval')("print(mensagem)")
```


`OUTPUT: Hello, world`

---

# <span style="background: linear-gradient(45deg, rgb(78, 212, 132), rgb(20, 140, 122)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Como se proteger</span>
Segurança na prática


🔒 O PyPI adotou várias medidas para proteger a comunidade, e você pode se beneficiar dessas boas práticas:

**✅ Autenticação forte:**
- Use 2FA na sua conta PyPI (obrigatório para quem publica pacotes)

**🔑 Tokens de acesso:**
- Use **API tokens** específicos para publicação
- Evite usar senha diretamente
- Rotacione os tokens com frequência

**📦 Alertas e quarentena:**
- Pacotes maliciosos podem ser denunciados
- O PyPI pode colocar versões em **quarentena** para revisão

---

# <span style="background: linear-gradient(45deg, rgb(78, 212, 132), rgb(20, 140, 122)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Como se proteger</span>
Nosso papel como comunidade

🤝 A segurança do PyPI depende da colaboração de todos nós:

**📣 Denuncie pacotes suspeitos:**
- Existe um canal oficial para reportar
- Equipe de segurança atua rápido

**🧠 Compartilhe conhecimento:**
- Muitos casos são descobertos por desenvolvedores atentos
- Se viu algo estranho, fale sobre!

**📢 Acompanhe o time de segurança:**
- Blog oficial do PyPI

---

# <span style="background: linear-gradient(45deg, rgb(78, 212, 132), rgb(20, 140, 122)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">pip install segurança</span> — Fechamento

🙏 Obrigado por chegar até aqui!

🌱 A segurança no Python (e em qualquer linguagem) começa com:
- Curiosidade
- Atenção aos detalhes
- Compartilhamento com a comunidade

💡 Antes de rodar `pip install`, pense:
- Você conferiu o pacote?
- Ele parece legítimo?
- Você confiaria nele em produção?

🛠️ Use as ferramentas. Fale sobre o que encontrar.  
🧠 E lembre: **você é a primeira linha de defesa no seu projeto.**

---
layout: cover
---
# <span class="anime">Obrigado!</span>

[Contatos](https://guisso.dev/links)

[Mais sobre o assunto](https://www.reversinglabs.com/blog/the-changing-face-of-open-source-security)

<style>
h1{
  user-select: none;
  font-size: 100px;
  color: white;
  background: repeating-linear-gradient(-45deg, red 0%, yellow 7.14%, rgb(0,255,0) 14.28%,
              rgb(0,255,255) 21.4%, cyan 28.56%, blue 35.7%, magenta 42.84%, red 50%);
  background-size: 600vw 600vw;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: slide 10s linear infinite forwards;
}
@keyframes slide {
  0%{
    background-position-x: 0%;
  }
  100%{
    background-position-x: 600vw;
  }
}

</style>
