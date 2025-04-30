---
theme: default
layout: cover
class: "text-center"
highlighter: shiki
lineNumbers: true
fonts:
  sans: "Nunito"
themeConfig:
  websiteUrl: https://guisso.dev
  avatar: https://guisso.dev/5755568_4424276171815601475_hu0e7c20109915d8890daa45a87ae252d1_16018_288x288_fill_q96_box_center.jpg
  photo: "./guisso-photo.png"
---

#  Construindo um <span>Homelab</span> Poderoso com <span style="color: red;">Debian</span> e <span style="color: orange;">Proxmox</span>

Como um mini PC do AliExpress se tornou um poderoso homelab com Proxmox.

---

# O que é o <span style="color: orange;">Proxmox</span>?

<v-clicks>

- Plataforma de virtualização baseada em Debian.
- Permite criar e gerenciar **VMs** e **containers (LXC)** no mesmo ambiente.
- Usado em produção e também em projetos pessoais de self-hosting.
- Administração via navegador, suporte nativo a backups e snapshots.

</v-clicks>

---

# Por que escolhi o <span style="color: orange;">Proxmox</span>?

<v-clicks>

- No início da carreira, queria fazer Hackintosh para programar iOS.
- Descobri que era possível rodar dois sistemas simultaneamente usando Proxmox.
- Interesse em gerenciar containers LXC, por já gostar muito de Docker.
- Tentei montar um mini cloud gaming com Windows, mas tive dificuldades e desisti.
- Mesmo assim, me interessei pela estabilidade, administração fácil e sistema de backups do Proxmox.

</v-clicks>

---
layout: iframe
url: https://www.youtube.com/embed/lztH7BUxIoM?si=tSTU10d38W2lgzXi&amp;start=1044
---

iframe

---

# 🖥️ Hardware Atual do meu <span>Homelab</span>

- **Processador**: AMD Ryzen 5 5600H
- **Memória**: 16GB RAM
- **Armazenamento**: 
    - 500GB SSD NVMe
    - 500GB HDD Sata
    - *Externo*: 1TB com case [**RAID1**](https://a.aliexpress.com/_mOk3SUj)

Se você estiver interessado, pode encontrar esse mini PC no [AliExpress](https://pt.aliexpress.com/item/1005003443853901.html).

---
layout: center
---

# Serviços <span>Internos</span>

---

# 🖼️ <span>Photoprism</span>: Inteligência para Fotos

<v-clicks>

- **Propósito**: Gerenciar fotos e vídeos estilo Woogle Photos.
- **Instalação**: Scripts [tteck](https://community-scripts.github.io/ProxmoxVE/scripts?id=photoprism).
- **Acesso**: Interno (VPN via Tailscale).

</v-clicks>

---
layout: image
image: https://www.photoprism.app/user/pages/02.features/02._ui/desktop-cards-view.jpg
backgroundSize: contain
--- 


---

# 📄 <span>Paperlessngx</span>: Organização de Documentos

<v-clicks>

- **Propósito**: Digitalizar e organizar documentos importantes.
- **Instalação**: Scripts [tteck](https://community-scripts.github.io/ProxmoxVE/scripts?id=paperless-ngx).
- **Acesso**: Interno (VPN via Tailscale).

</v-clicks>

---
layout: image
image: https://docs.paperless-ngx.com/assets/screenshots/documents-smallcards-dark.png
backgroundSize: contain
---


---

# 🎬 <span>Jellyfin</span>: Streaming Pessoal de Mídia

<v-clicks>

- **Propósito**: Assistir filmes, séries e músicas da minha coleção.
- **Instalação**: Scripts [tteck](https://community-scripts.github.io/ProxmoxVE/scripts?id=jellyfin).
- **Acesso**: Interno (VPN via Tailscale).

</v-clicks>

---
layout: image
image: https://jellyfin.org/assets/images/10.8-home-4a73a92bf90d1eeffa5081201ca9c7bb.png
backgroundSize: contain
---

---

# 📥 <span>qBittorrent Web</span>: Gerenciamento de Downloads

<v-clicks>

- **Propósito**: Controlar downloads de torrent remotamente.
- **Instalação**: Scripts [tteck](https://community-scripts.github.io/ProxmoxVE/scripts?id=qbittorrent).
- **Acesso**: Interno (VPN via Tailscale).

</v-clicks>

---

# ☁️  <span>Nextcloud </span>+ <span>Cospend</span>: Armazenamento e Finanças

<v-clicks>

- **Propósito**: Gerenciar arquivos e controlar finanças compartilhadas.
- **Instalação**: Scripts [tteck](https://community-scripts.github.io/ProxmoxVE/scripts?id=nextcloudpi)
- **Acesso**: Interno (VPN via Tailscale).

</v-clicks>

---

# 🐧 <span>VM Debian 12</span>: Ambiente de Empacotamento

<v-clicks>

- **Propósito**: Testar, empacotar e desenvolver projetos.
- **Instalação**: Scripts [tteck](https://community-scripts.github.io/ProxmoxVE/scripts?id=debian-vm).
- **Pós Instalação**: [Comandos úteis](https://github.com/orgs/community-scripts/discussions/836).
- **Acesso**: Interno (VPN via Tailscale).

</v-clicks>

---
layout: center
---

# Serviços <span>Externos</span>

---

# 🎟️ <span>Hi Events</span>: Gestão de Ingressos

<v-clicks depth="2">

- **Propósito**: Gerenciar inscrições e emissão de ingressos para eventos.
- **Instalação**: Script Docker & Docker Compose [tteck](https://community-scripts.github.io/ProxmoxVE/scripts?id=docker).
  - Docker Compose do projeto Hi Events
  - [all-in-one](https://hi.events/docs/getting-started/quick-start-self-hosted)
- **Acesso**: Externo (Cloudflare Tunnel).

</v-clicks>

---
layout: image
image: hi-events-flisol.png
backgroundSize: contain
---

---

# 📝 <span>Formbricks</span>: Coleta de Submissões

<v-clicks depth="2">

- **Propósito**: Coletar propostas de palestras para eventos.
- **Instalação**: Script Docker & Docker Compose [tteck](https://community-scripts.github.io/ProxmoxVE/scripts?id=docker).
  - [Formbricks Docker](https://formbricks.com/docs/self-hosting/setup/docker)
- **Acesso**: Externo (Cloudflare Tunnel).

</v-clicks>

---
layout: image
image: https://camo.githubusercontent.com/e2c25e9b7c1fce99c6314379fb0341980f44529b2ae136956be878071bf8558b/68747470733a2f2f6769746875622d70726f64756374696f6e2d757365722d61737365742d3632313064662e73332e616d617a6f6e6177732e636f6d2f3637353036352f3234393434313936372d63636238396561332d383262342d346266322d386432632d3532383732316563333133622e706e67
backgroundSize: contain
---

---

# 📊 Uso no <span>FLISoL</span> Natal 2025

<v-clicks depth="2">

- **Hi Events**: Gerenciou inscrições e check-in no evento com sucesso.
- **Formbricks**: Recebeu submissões de palestras online.
- **Resultados**:
  - Funcionamento estável durante todo o evento.
  - Baixo consumo de recursos.
  - Infraestrutura simples e eficiente.

</v-clicks>

---

# 🧰 Como subo novos serviços?

<v-clicks>

- Utilizo os **tteck Helper Scripts** para instalação rápida de containers.
- Projeto ativo, confiável e bem documentado.
- Acesse: [tteck Scripts](https://community-scripts.github.io/ProxmoxVE/)

</v-clicks>

---

# 🛡️ Sobre <span>VPN </span>e <span>Túnel</span>

<v-clicks>

- **Tailscale**: VPN mesh privada para acesso interno seguro.
- **Cloudflare Tunnel**: Exposição pública segura sem necessidade de IP fixo.

</v-clicks>

---

# 📈 <span>Conclusão</span>

<v-clicks depth="2">

- Um mini PC pode ser transformado em uma plataforma poderosa de aprendizado e automação.
- O Proxmox facilitou a gestão de virtualização e containers.
- Com tteck, Tailscale e Cloudflare Tunnel, o homelab ficou seguro, prático e eficiente.
- **Perguntas?** Me encontre em [https://guisso.dev](https://guisso.dev) ou no evento!

</v-clicks>

