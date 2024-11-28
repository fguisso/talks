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

# Transformando um <span>Mini PC</span> em um <span>Homelab</span> Completo com <span>Proxmox</span>

Como um mini PC do AliExpress se tornou um poderoso homelab com Proxmox.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Vamos começar! <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# <span>Serviços</span> que Transformam o <span>Homelab</span>

<v-clicks depth="2">

- **AdGuard**: Bloqueador de anúncios e rastreamento.
- **Paperlessngx**: Digitalização e organização de documentos.
- **Photoprism**: Gerenciamento inteligente de fotos.
- **VSCode Web**: Desenvolvimento remoto.
- **Nextcloud + Cospend**: Armazenamento e gestão colaborativa de finanças.

</v-clicks>

---

# <span>AdGuard</span>: Bloqueio e Controle da Rede

<v-clicks depth="2">

- **O que é**:
  - Bloqueia anúncios e rastreamento para toda a rede.
  - Aumenta a privacidade e o desempenho.
- **Funcionalidade extra**:
  - Reescrita de domínios para acesso rápido a serviços internos, como:
    - `pve.pandora:8006` para o Proxmox.
    - `photoprism.pandora:80` para o Photoprism.

</v-clicks>

---

# <span>Paperlessngx</span>: Organização de Documentos

<v-clicks depth="2">

- **O que é**:
  - Digitaliza e organiza documentos como notas fiscais e contratos.
  - Permite busca por texto em documentos digitalizados.
- **Benefícios**:
  - Elimina pilhas de papéis.
  - Fácil acesso e gerenciamento de documentos importantes.

</v-clicks>

---

# <span>Photoprism</span>: Inteligência para Fotos

<v-clicks depth="2">

- **O que é**:
  - Gerencia fotos e vídeos com indexação automática.
  - Busca por rostos, locais e datas.
- **Vantagens**:
  - Organização facilitada, mesmo em grandes volumes de mídia.
  - Funciona bem em hardware limitado.

</v-clicks>

---

# <span>VSCode Web</span>: Desenvolvimento Remoto

<v-clicks depth="2">

- **O que é**:
  - Ambiente de desenvolvimento acessado via navegador.
  - Inclui terminal integrado para execução de comandos.
- **Benefícios**:
  - Programação em qualquer lugar, usando tablet ou celular.
  - Rápida configuração de ambientes de desenvolvimento.

</v-clicks>

---

# <span>Nextcloud</span> + <span>Cospend</span>: Armazenamento e Finanças

<v-clicks depth="2">

- **Nextcloud**:
  - Armazenamento de arquivos e sincronização.
  - Compartilhamento seguro e colaborativo.
- **Cospend**:
  - Aplicação integrada ao Nextcloud.
  - Gerencia despesas colaborativas em grupos.
  - Ideal para projetos familiares ou entre amigos.
- **Collectives**:
  - Base de conhecimento.
  - Ótimo para organizar times & coisas de casal.
- **Benefícios**:
  - Controle total sobre arquivos e dados financeiros.
  - Substitui serviços comerciais como Google Drive e Splitwise.

</v-clicks>

---

# Automação com <span>tteck</span> e Expansões Futuras

<v-clicks depth="2">

- **Scripts tteck**:
  - Automação de deploys no Proxmox.
  - Configuração de serviços como AdGuard, Paperlessngx e Photoprism.
  - [Scripts proxmox TTECK](https://community-scripts.github.io/ProxmoxVE/)
- **Expansões futuras**:
  - **Jellyfin**: Streaming de mídia.
  - **Vaultwarden**: Gerenciamento seguro de senhas.
  - Outras integrações para aumentar a funcionalidade do homelab.

</v-clicks>

---
layout: iframe
url: https://community-scripts.github.io/ProxmoxVE/
---

---

# <span>Conclusão</span>

<v-clicks depth="2">

- **Transforme seu homelab** com serviços úteis e acessíveis.
- Controle total sobre dados, automação e gerenciamento.
- A tecnologia está ao seu alcance!

**Perguntas?** Vamos conversar!  
Me encontre em [https://guisso.dev](https://guisso.dev) ou no evento!

</v-clicks>
