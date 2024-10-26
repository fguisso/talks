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

# Threat Modeling <span>Express</span>

Uma Nova Abordagem para Segurança Ágil

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Vamos começar! <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: quote
---

# O que é <span>Threat Modeling</span>?

> Threat Modeling é o processo de identificar <span v-mark.underline.red>ameaças, vulnerabilidades,</span> <span v-mark.underline.blue>contramedidas e controles</span> em sistemas e/ou produtos, com o objetivo de minimizar os riscos e fortalecer a segurança ao longo do ciclo de vida do desenvolvimento.

---

# Origem do <span>Threat Modeling</span>

- 1960s: Exploração de vulnerabilidades em sistemas compartilhados.
- 1988: Robert Barnard desenvolve o primeiro perfil de atacante.
- 1994: Edward Amoroso propõe a árvore de ameaças ("threat tree").
- 1998: Bruce Schneier apresenta "attack trees" para sistematizar a análise de riscos cibernéticos.
- 1999: STRIDE é criado pela Microsoft.
- 2003: OCTAVE introduz uma metodologia centrada em operações.
- 2014: Ryan Stillions desenvolve o DML (Detection Maturity Level).
- **2020**: Publicação do <span v-mark.circle.orange> [Manifesto de Threat Modeling](https://www.threatmodelingmanifesto.org/)</span>, destacando os valores e princípios essenciais para todos os modeladores de ameaças.
- **2024**: Lançamento do documento de <span v-mark.circle.orange>  [Capacidades de Threat Modeling](https://www.threatmodelingmanifesto.org/capabilities/)</span>, fornecendo um catálogo para maximizar o valor da prática de Threat Modeling.
---

# Crescimento no <span>Mercado</span>

<v-clicks>

- **Tendências atuais:**
  - Empresas adotando práticas de Threat Modeling no início do desenvolvimento.
- **Benefícios:**
  - Diminui a complexida de entendimento sobre os problemas de segurança para a empresa.
  - Aumenta a visibilidade das ameaças desde o design.
  - Reduz custos de correção.
- **Impacto:** Comparado a outros testes de segurança, como pentests, o Threat Modeling pode atuar de forma preventiva.

</v-clicks>

---
layout: iframe-right
url: https://www.threatmodcon.com/
---
# <span>Conferência</span> Internacional de Threat Modeling 2023

Definindo o futuro do Threat Modeling

<v-clicks>

- **ThreatModCon**: Primeiro e único evento dedicado ao Threat Modeling.
- Mais de <span v-mark="{ at: 5, type:'underline', color:'green'}"> 100 empresas</span> e <span v-mark="{at: 6, type: 'circle', color: 'lightgreen'}"> 20 palestrantes</span> internacionais discutindo as novas tendências.
- Exploração de aplicações diversas do Threat Modeling em segurança cibernética.

</v-clicks>

---

# Abordagens <span>Tradicionais</span>

<v-clicks>

- **<span v-mark="{ at: 6, type:'box', color:'orange'}">STRIDE</span>**: Criado em 1999 pela Microsoft para identificar ameaças de forma sistemática.
- **PASTA**: Simulação de ataques e análise de ameaças com foco em compliance.
- **Trike**: Modelo baseado em auditoria e gerenciamento de riscos.
- **VAST**: Usa diagramas de fluxo e DevOps para integrar o Threat Modeling.
- **Hybrid**: Combina várias metodologias, como SQUARE e Security Cards.

</v-clicks>

<v-click><img src="./synopsys.png" width="300"/></v-click>
---

# Threat Modeling <span>Express</span>

<v-clicks depth="2">

- **Princípios fundamentais:**
  - Enfoque <span v-mark="{at: 5, type: 'underline', color:'lightgreen'}">ágil</span> e iterativo.
  - <span v-mark="{at: 6, type: 'underline', color:'lightgreen'}">Colaboração</span> constante entre times de <span v-mark="{at: 7, type: 'box', color:'orange'}">segurança e desenvolvimento</span>.
  - Fácil adaptação a ambientes DevSecOps.

</v-clicks>

---
layout: quote
---

# Processo do <span>Threat Modeling Express</span>

---

# Preparação e Engajamento da <span>Equipe</span>

<v-clicks>

- **Passo 1:** Alinhar a equipe com os objetivos de segurança.
- Criar uma cultura de segurança compartilhada e comunicação contínua.

</v-clicks>

---

# Criação do <span>Data Flow</span>

<v-clicks>

- **Passo 2:** Mapear os principais fluxos de dados no sistema.
- Identificar onde os atores, processos, bancos de dados e perímetros.

</v-clicks>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2160 471.5999999999999">

  <g id="user" v-click="3">
      <g stroke-linecap="round" transform="translate(10 170) rotate(0 155 80)">
          <path d="M0 0 L310 0 L310 160 L0 160" stroke="none" stroke-width="0" fill="#343a40" />
          <path
              d="M0 0 C71.5 0, 143 0, 310 0 M0 0 C113.87 0, 227.74 0, 310 0 M310 0 C310 54.5, 310 108.99, 310 160 M310 0 C310 53.36, 310 106.71, 310 160 M310 160 C214.69 160, 119.38 160, 0 160 M310 160 C214.99 160, 119.98 160, 0 160 M0 160 C0 106.98, 0 53.95, 0 0 M0 160 C0 106.89, 0 53.78, 0 0"
              stroke="#343a40" stroke-width="2" fill="none" />
      </g>
      <g
          transform="translate(125.60366719563802 225.69999999999982) rotate(0 39.396332804361975 24.299999999999955)">
          <text x="39.39633280436198" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
              font-size="36px" fill="#ffffff" text-anchor="middle" style="white-space: pre;"
              direction="ltr" dominant-baseline="alphabetic">User</text>
      </g>
  </g>

<g id="arrow-user-mobile" v-click="4" stroke-linecap="round">
    <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
        <path d="M0 0 C57.85 0, 115.71 0, 180 0 M0 0 C45.27 0, 90.54 0, 180 0" stroke="#ffffff"
            stroke-width="4" fill="none" />
    </g>
    <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
        <path
            d="M156.51 8.55 C164.06 5.8, 171.61 3.05, 180 0 M156.51 8.55 C162.42 6.4, 168.32 4.25, 180 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
    <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
        <path
            d="M156.51 -8.55 C164.06 -5.8, 171.61 -3.05, 180 0 M156.51 -8.55 C162.42 -6.4, 168.32 -4.25, 180 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
</g>

<g id="mobile-app" v-click="5">
  <g stroke-linecap="round" transform="translate(530 170) rotate(0 150 80)">
      <path
          d="M32 0 C123.14 0, 214.28 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 56.44, 300 80.88, 300 128 C300 149.33, 289.33 160, 268 160 C187.69 160, 107.38 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 101.1, 0 74.2, 0 32 C0 10.67, 10.67 0, 32 0"
          stroke="none" stroke-width="0" fill="#ced4da" />
      <path
          d="M32 0 C82.39 0, 132.78 0, 268 0 M32 0 C95.12 0, 158.23 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 61.86, 300 91.72, 300 128 M300 32 C300 57.98, 300 83.96, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C185.33 160, 102.66 160, 32 160 M268 160 C179.22 160, 90.45 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 93.93, 0 59.86, 0 32 M0 128 C0 101.67, 0 75.34, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
          stroke="#343a40" stroke-width="2" fill="none" />
  </g>
  <g
      transform="translate(584.9100004831951 225.69999999999982) rotate(0 95.08999951680502 24.299999999999955)">
      <text x="95.08999951680501" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
          font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
          direction="ltr" dominant-baseline="alphabetic">Mobile App</text>
  </g>
</g>

<g id="arrow-mobile-proxy" v-click="6" stroke-linecap="round">
    <g transform="translate(831 250) rotate(0 39.5 0)">
        <path d="M0 0 C25.39 0, 50.77 0, 79 0 M0 0 C27.11 0, 54.23 0, 79 0" stroke="#ffffff"
            stroke-width="4" fill="none" />
    </g>
    <g transform="translate(831 250) rotate(0 39.5 0)">
        <path d="M55.51 8.55 C63.06 5.8, 70.61 3.06, 79 0 M55.51 8.55 C63.57 5.62, 71.63 2.68, 79 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
    <g transform="translate(831 250) rotate(0 39.5 0)">
        <path
            d="M55.51 -8.55 C63.06 -5.8, 70.61 -3.06, 79 0 M55.51 -8.55 C63.57 -5.62, 71.63 -2.68, 79 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
</g>

<g id="reverse-proxy" v-click="7">
    <g stroke-linecap="round" transform="translate(930 170) rotate(0 150 80)">
        <path
            d="M32 0 C105.04 0, 178.07 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 66.9, 300 101.8, 300 128 C300 149.33, 289.33 160, 268 160 C194.77 160, 121.54 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 105.86, 0 83.72, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C125.82 0, 219.65 0, 268 0 M32 0 C113.16 0, 194.31 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 56.36, 300 80.72, 300 128 M300 32 C300 67.79, 300 103.58, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C198.12 160, 128.25 160, 32 160 M268 160 C173.98 160, 79.97 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 107.61, 0 87.23, 0 32 M0 128 C0 92.65, 0 57.3, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1014.2280006408691 201.4000000000001) rotate(0 65.77199935913086 48.59999999999991)">
        <text x="65.77199935913086" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">Reverse</text>
        <text x="65.77199935913086" y="84.744" font-family="Nunito, Segoe UI Emoji" font-size="36px"
            fill="#343a40" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">Proxy</text>
    </g>
  </g>

<g id="arrow-proxy-api" v-click="8" stroke-linecap="round">
    <g transform="translate(1231 250) rotate(0 39.5 0)">
        <path d="M0 0 C25.73 0, 51.45 0, 79 0 M0 0 C19.98 0, 39.97 0, 79 0" stroke="#ffffff"
            stroke-width="4" fill="none" />
    </g>
    <g transform="translate(1231 250) rotate(0 39.5 0)">
        <path
            d="M55.51 8.55 C63.16 5.77, 70.81 2.98, 79 0 M55.51 8.55 C61.45 6.39, 67.39 4.22, 79 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
    <g transform="translate(1231 250) rotate(0 39.5 0)">
        <path
            d="M55.51 -8.55 C63.16 -5.77, 70.81 -2.98, 79 0 M55.51 -8.55 C61.45 -6.39, 67.39 -4.22, 79 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
</g>

<g id="api-rest" v-click="9">
    <g stroke-linecap="round" transform="translate(1330 170) rotate(0 150 80)">
        <path
            d="M32 0 C117.69 0, 203.37 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 61.71, 300 91.42, 300 128 C300 149.33, 289.33 160, 268 160 C182.21 160, 96.41 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 98.21, 0 68.42, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C120.07 0, 208.13 0, 268 0 M32 0 C117.55 0, 203.09 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 66.34, 300 100.67, 300 128 M300 32 C300 54.3, 300 76.59, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C190.44 160, 112.89 160, 32 160 M268 160 C195.15 160, 122.31 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 96.55, 0 65.1, 0 32 M0 128 C0 103.43, 0 78.85, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1408.670666885376 225.69999999999982) rotate(0 71.32933311462398 24.299999999999955)">
        <text x="71.32933311462402" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">API Rest</text>
    </g>
  </g>

<g id="arrow-api-db" v-click="10" stroke-linecap="round">
    <g transform="translate(1630 250) rotate(0 70 0)">
        <path d="M0 0 C40.85 0, 81.71 0, 140 0 M0 0 C29.48 0, 58.95 0, 140 0" stroke="#ffffff"
            stroke-width="4" fill="none" />
    </g>
    <g transform="translate(1630 250) rotate(0 70 0)">
        <path
            d="M116.51 8.55 C123.36 6.06, 130.22 3.56, 140 0 M116.51 8.55 C121.45 6.75, 126.4 4.95, 140 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
    <g transform="translate(1630 250) rotate(0 70 0)">
        <path
            d="M116.51 -8.55 C123.36 -6.06, 130.22 -3.56, 140 0 M116.51 -8.55 C121.45 -6.75, 126.4 -4.95, 140 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
</g>

<g id="database" v-click="11">
  <g stroke-linecap="round" transform="translate(1790 170) rotate(0 155 80)">
      <path d="M0 0 L310 0 L310 160 L0 160" stroke="none" stroke-width="0" fill="#868e96" />
      <path
          d="M0 0 C101.06 0, 202.11 0, 310 0 M0 0 C107.76 0, 215.51 0, 310 0 M310 0 C310 44.89, 310 89.78, 310 160 M310 0 C310 44.29, 310 88.57, 310 160 M310 160 C197.15 160, 84.29 160, 0 160 M310 160 C242.02 160, 174.05 160, 0 160 M0 160 C0 117.85, 0 75.71, 0 0 M0 160 C0 104.56, 0 49.12, 0 0"
          stroke="#343a40" stroke-width="2" fill="none" />
  </g>
  <g
      transform="translate(1866.653000640869 225.69999999999982) rotate(0 78.3469993591309 24.299999999999955)">
      <text x="78.34699935913086" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
          font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
          direction="ltr" dominant-baseline="alphabetic">Database</text>
  </g>
</g>

<g id="trust-boundary" v-click="12">
  <g stroke-linecap="round" transform="translate(1270 68.33333333333348) rotate(0 440 190)">
      <path
          d="M0 0 C241.4 0, 482.79 0, 880 0 M880 0 C880 114.26, 880 228.53, 880 380 M880 380 C600.52 380, 321.03 380, 0 380 M0 380 C0 265.67, 0 151.34, 0 0"
          stroke="#2f9e44" stroke-width="4.5" fill="none" stroke-dasharray="8 12" />
  </g>
  <g transform="translate(1270 10) rotate(0 232.24966599146524 24.299999999999955)">
      <text x="0" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji" font-size="36px"
          fill="#2f9e44" text-anchor="start" style="white-space: pre;" direction="ltr"
          dominant-baseline="alphabetic">Trust Boundary / VPN / DMZ</text>
  </g>
</g>

</svg>

---

# Identificação de <span>Ativos</span>

<v-clicks>

- **Passo 3:** Determinar os ativos mais críticos para a segurança do sistema.
- Avaliar quais partes do sistema requerem proteção especial.

</v-clicks>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2160 471.5999999999999">

  <g id="user">
      <g stroke-linecap="round" transform="translate(10 170) rotate(0 155 80)">
          <path d="M0 0 L310 0 L310 160 L0 160" stroke="none" stroke-width="0" fill="#343a40" />
          <path
              d="M0 0 C71.5 0, 143 0, 310 0 M0 0 C113.87 0, 227.74 0, 310 0 M310 0 C310 54.5, 310 108.99, 310 160 M310 0 C310 53.36, 310 106.71, 310 160 M310 160 C214.69 160, 119.38 160, 0 160 M310 160 C214.99 160, 119.98 160, 0 160 M0 160 C0 106.98, 0 53.95, 0 0 M0 160 C0 106.89, 0 53.78, 0 0"
              stroke="#343a40" stroke-width="2" fill="none" />
      </g>
      <g
          transform="translate(125.60366719563802 225.69999999999982) rotate(0 39.396332804361975 24.299999999999955)">
          <text x="39.39633280436198" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
              font-size="36px" fill="#ffffff" text-anchor="middle" style="white-space: pre;"
              direction="ltr" dominant-baseline="alphabetic">User</text>
      </g>
  </g>

<g id="arrow-user-mobile" stroke-linecap="round">
    <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
        <path d="M0 0 C57.85 0, 115.71 0, 180 0 M0 0 C45.27 0, 90.54 0, 180 0" stroke="#ffffff"
            stroke-width="4" fill="none" />
    </g>
    <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
        <path
            d="M156.51 8.55 C164.06 5.8, 171.61 3.05, 180 0 M156.51 8.55 C162.42 6.4, 168.32 4.25, 180 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
    <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
        <path
            d="M156.51 -8.55 C164.06 -5.8, 171.61 -3.05, 180 0 M156.51 -8.55 C162.42 -6.4, 168.32 -4.25, 180 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
</g>

<g id="mobile-app">
  <g stroke-linecap="round" transform="translate(530 170) rotate(0 150 80)">
      <path
          d="M32 0 C123.14 0, 214.28 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 56.44, 300 80.88, 300 128 C300 149.33, 289.33 160, 268 160 C187.69 160, 107.38 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 101.1, 0 74.2, 0 32 C0 10.67, 10.67 0, 32 0"
          stroke="none" stroke-width="0" fill="#ced4da" />
      <path
          d="M32 0 C82.39 0, 132.78 0, 268 0 M32 0 C95.12 0, 158.23 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 61.86, 300 91.72, 300 128 M300 32 C300 57.98, 300 83.96, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C185.33 160, 102.66 160, 32 160 M268 160 C179.22 160, 90.45 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 93.93, 0 59.86, 0 32 M0 128 C0 101.67, 0 75.34, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
          stroke="#343a40" stroke-width="2" fill="none" />
  </g>
  <g
      transform="translate(584.9100004831951 225.69999999999982) rotate(0 95.08999951680502 24.299999999999955)">
      <text x="95.08999951680501" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
          font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
          direction="ltr" dominant-baseline="alphabetic">Mobile App</text>
  </g>
</g>

<g id="arrow-mobile-proxy" stroke-linecap="round">
    <g transform="translate(831 250) rotate(0 39.5 0)">
        <path d="M0 0 C25.39 0, 50.77 0, 79 0 M0 0 C27.11 0, 54.23 0, 79 0" stroke="#ffffff"
            stroke-width="4" fill="none" />
    </g>
    <g transform="translate(831 250) rotate(0 39.5 0)">
        <path d="M55.51 8.55 C63.06 5.8, 70.61 3.06, 79 0 M55.51 8.55 C63.57 5.62, 71.63 2.68, 79 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
    <g transform="translate(831 250) rotate(0 39.5 0)">
        <path
            d="M55.51 -8.55 C63.06 -5.8, 70.61 -3.06, 79 0 M55.51 -8.55 C63.57 -5.62, 71.63 -2.68, 79 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
</g>

<g id="reverse-proxy">
    <g stroke-linecap="round" transform="translate(930 170) rotate(0 150 80)">
        <path
            d="M32 0 C105.04 0, 178.07 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 66.9, 300 101.8, 300 128 C300 149.33, 289.33 160, 268 160 C194.77 160, 121.54 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 105.86, 0 83.72, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C125.82 0, 219.65 0, 268 0 M32 0 C113.16 0, 194.31 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 56.36, 300 80.72, 300 128 M300 32 C300 67.79, 300 103.58, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C198.12 160, 128.25 160, 32 160 M268 160 C173.98 160, 79.97 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 107.61, 0 87.23, 0 32 M0 128 C0 92.65, 0 57.3, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1014.2280006408691 201.4000000000001) rotate(0 65.77199935913086 48.59999999999991)">
        <text x="65.77199935913086" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">Reverse</text>
        <text x="65.77199935913086" y="84.744" font-family="Nunito, Segoe UI Emoji" font-size="36px"
            fill="#343a40" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">Proxy</text>
    </g>
  </g>

<g id="arrow-proxy-api" stroke-linecap="round">
    <g transform="translate(1231 250) rotate(0 39.5 0)">
        <path d="M0 0 C25.73 0, 51.45 0, 79 0 M0 0 C19.98 0, 39.97 0, 79 0" stroke="#ffffff"
            stroke-width="4" fill="none" />
    </g>
    <g transform="translate(1231 250) rotate(0 39.5 0)">
        <path
            d="M55.51 8.55 C63.16 5.77, 70.81 2.98, 79 0 M55.51 8.55 C61.45 6.39, 67.39 4.22, 79 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
    <g transform="translate(1231 250) rotate(0 39.5 0)">
        <path
            d="M55.51 -8.55 C63.16 -5.77, 70.81 -2.98, 79 0 M55.51 -8.55 C61.45 -6.39, 67.39 -4.22, 79 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
</g>

<g id="api-rest">
    <g stroke-linecap="round" transform="translate(1330 170) rotate(0 150 80)">
        <path
            d="M32 0 C117.69 0, 203.37 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 61.71, 300 91.42, 300 128 C300 149.33, 289.33 160, 268 160 C182.21 160, 96.41 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 98.21, 0 68.42, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C120.07 0, 208.13 0, 268 0 M32 0 C117.55 0, 203.09 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 66.34, 300 100.67, 300 128 M300 32 C300 54.3, 300 76.59, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C190.44 160, 112.89 160, 32 160 M268 160 C195.15 160, 122.31 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 96.55, 0 65.1, 0 32 M0 128 C0 103.43, 0 78.85, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1408.670666885376 225.69999999999982) rotate(0 71.32933311462398 24.299999999999955)">
        <text x="71.32933311462402" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">API Rest</text>
    </g>
  </g>

<g id="arrow-api-db" stroke-linecap="round">
    <g transform="translate(1630 250) rotate(0 70 0)">
        <path d="M0 0 C40.85 0, 81.71 0, 140 0 M0 0 C29.48 0, 58.95 0, 140 0" stroke="#ffffff"
            stroke-width="4" fill="none" />
    </g>
    <g transform="translate(1630 250) rotate(0 70 0)">
        <path
            d="M116.51 8.55 C123.36 6.06, 130.22 3.56, 140 0 M116.51 8.55 C121.45 6.75, 126.4 4.95, 140 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
    <g transform="translate(1630 250) rotate(0 70 0)">
        <path
            d="M116.51 -8.55 C123.36 -6.06, 130.22 -3.56, 140 0 M116.51 -8.55 C121.45 -6.75, 126.4 -4.95, 140 0"
            stroke="#ffffff" stroke-width="4" fill="none" />
    </g>
</g>

<g id="database">
  <g stroke-linecap="round" transform="translate(1790 170) rotate(0 155 80)">
      <path d="M0 0 L310 0 L310 160 L0 160" stroke="none" stroke-width="0" fill="#868e96" />
      <path
          d="M0 0 C101.06 0, 202.11 0, 310 0 M0 0 C107.76 0, 215.51 0, 310 0 M310 0 C310 44.89, 310 89.78, 310 160 M310 0 C310 44.29, 310 88.57, 310 160 M310 160 C197.15 160, 84.29 160, 0 160 M310 160 C242.02 160, 174.05 160, 0 160 M0 160 C0 117.85, 0 75.71, 0 0 M0 160 C0 104.56, 0 49.12, 0 0"
          stroke="#343a40" stroke-width="2" fill="none" />
  </g>
  <g
      transform="translate(1866.653000640869 225.69999999999982) rotate(0 78.3469993591309 24.299999999999955)">
      <text x="78.34699935913086" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
          font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
          direction="ltr" dominant-baseline="alphabetic">Database</text>
  </g>
</g>

<g id="trust-boundary">
  <g stroke-linecap="round" transform="translate(1270 68.33333333333348) rotate(0 440 190)">
      <path
          d="M0 0 C241.4 0, 482.79 0, 880 0 M880 0 C880 114.26, 880 228.53, 880 380 M880 380 C600.52 380, 321.03 380, 0 380 M0 380 C0 265.67, 0 151.34, 0 0"
          stroke="#2f9e44" stroke-width="4.5" fill="none" stroke-dasharray="8 12" />
  </g>
  <g transform="translate(1270 10) rotate(0 232.24966599146524 24.299999999999955)">
      <text x="0" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji" font-size="36px"
          fill="#2f9e44" text-anchor="start" style="white-space: pre;" direction="ltr"
          dominant-baseline="alphabetic">Trust Boundary / VPN / DMZ</text>
  </g>
</g>

  <g id="asset-1" v-click="3" v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(550 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C20.06 0, 40.13 0, 60 0 M0 0 C17.66 0, 35.31 0, 60 0 M60 0 C60 10.12, 60 20.24, 60 31.6 M60 0 C60 11.94, 60 23.87, 60 31.6 M60 31.6 C47.42 31.6, 34.84 31.6, 0 31.6 M60 31.6 C43.88 31.6, 27.76 31.6, 0 31.6 M0 31.6 C0 21.67, 0 11.74, 0 0 M0 31.6 C0 25.1, 0 18.61, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(569.1413332621256 135) rotate(0 10.858666737874344 10.799999999999955)">
        <text x="10.85866673787435" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A1</text>
    </g>
  </g>

 <g id="asset-1-db" v-click="4" v-motion :initial="{ x: 100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(1790 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C14.22 0, 28.44 0, 60 0 M0 0 C17.1 0, 34.21 0, 60 0 M60 0 C60 8.43, 60 16.86, 60 31.6 M60 0 C60 10.22, 60 20.44, 60 31.6 M60 31.6 C43.97 31.6, 27.94 31.6, 0 31.6 M60 31.6 C45.88 31.6, 31.76 31.6, 0 31.6 M0 31.6 C0 25.06, 0 18.53, 0 0 M0 31.6 C0 19.68, 0 7.75, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1809.1413332621257 135) rotate(0 10.858666737874387 10.799999999999955)">
        <text x="10.85866673787435" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A1</text>
    </g>
  </g>
  
  <g id="asset-2" v-click="5" v-motion :initial="{ x: 100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(630 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C16.59 0, 33.17 0, 60 0 M0 0 C23.56 0, 47.11 0, 60 0 M60 0 C60 8.22, 60 16.45, 60 31.6 M60 0 C60 7.47, 60 14.94, 60 31.6 M60 31.6 C44.6 31.6, 29.2 31.6, 0 31.6 M60 31.6 C39.01 31.6, 18.02 31.6, 0 31.6 M0 31.6 C0 19.53, 0 7.46, 0 0 M0 31.6 C0 21.92, 0 12.23, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(649.0053330103556 135) rotate(0 10.994666989644372 10.799999999999955)">
        <text x="10.994666989644369" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A2</text>
    </g>
  </g>
  
  <g id="asset-3" v-click="6" v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(1350 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C22.57 0, 45.13 0, 60 0 M0 0 C21.77 0, 43.54 0, 60 0 M60 0 C60 10.32, 60 20.64, 60 31.6 M60 0 C60 8.29, 60 16.57, 60 31.6 M60 31.6 C42.35 31.6, 24.71 31.6, 0 31.6 M60 31.6 C42.93 31.6, 25.86 31.6, 0 31.6 M0 31.6 C0 22.72, 0 13.84, 0 0 M0 31.6 C0 22.47, 0 13.35, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1369.1333330472312 135) rotate(0 10.86666695276898 10.799999999999955)">
        <text x="10.866666952768961" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A3</text>
    </g>
  </g>
  
  </svg>

<v-clicks at="3">

- <span class="text-orange-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">A1</span> Token de sessão do usuário
- <span class="text-orange-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">A1</span> Token de sessão do usuário
- <span class="text-orange-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">A2</span> Dados pessoais
- <span class="text-orange-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">A3</span> Credenciais do banco de dados

</v-clicks>
---

# Atores de <span>Ameaça</span>

<v-clicks>

- **<span v-mark="{at: 1, type: 'underline', color:'red'}">Cibercriminosos</span>**: Cometem crimes cibernéticos, como ataques de ransomware e phishing, visando principalmente ganhos financeiros.
- **<span v-mark="{at: 2, type: 'underline', color:'red'}">Atores patrocinados por estados</span>**: Trabalham em nome de governos para roubar dados sensíveis ou realizar espionagem e ataques cibernéticos contra infraestruturas críticas.
- **<span v-mark="{at: 3, type: 'underline', color:'red'}">Hacktivistas</span>**: Utilizam técnicas de hacking para promover agendas políticas ou sociais, como liberdade de expressão ou expor violações de direitos humanos.
- **<span v-mark="{at: 4, type: 'underline', color:'red'}">Curiosos</span>**: Atacam sistemas por diversão, para testar seus limites ou aprender mais sobre redes e sistemas. Inclui os "script kiddies", que usam ferramentas prontas para explorar vulnerabilidades.
- **<span v-mark="{at: 5, type: 'underline', color:'red'}">Ameaças internas</span>**: Atores internos que podem causar danos, seja por erro humano ou de forma maliciosa, como funcionários insatisfeitos que abusam de seus privilégios.
- **<span v-mark="{at: 6, type: 'underline', color:'red'}">Ciberterroristas</span>**: Atuam com motivações políticas ou ideológicas, utilizando ataques cibernéticos para ameaçar ou causar violência, seja em nome de estados ou grupos independentes.

</v-clicks>

---

# Atores de  Ameaça que nos <span v-mark.highlight.red>esquecemos</span>

<v-clicks>

Além dessas categorias tradicionais, em nossa empresa discutimos outras possibilidades de atores de ameaças. Um exemplo interessante são os **fãs de reality shows**, como os fãs de BBB. Eles organizam mutirões de votos em massa, podem derrubar votações ou promover campanhas de difamação online.

Se interessar, confira esta palestra da OWASP Global AppSec 2023 de onde tiramos a ideia de novos atores de ameaça:  
[The Threat Actors We Forgot to Model: Profiling Socially Motivated Cyber Criminals](https://owasp2023globalappsecwashin.sched.com/event/1M6Qh/the-threat-actors-we-forgot-to-model-profiling-socially-motivated-cyber-criminals)

Essa palestra explora como atores de ameaças motivados socialmente podem causar grandes impactos e são muitas vezes esquecidos nos modelos de ameaças.

</v-clicks>

---

# Tipos de <span>Ameaças</span>

<v-click>

Ao enumerar as ameaças, é fundamental se colocar na posição de cada **ator de ameaça** e pensar nas diversas maneiras de causar problemas ao sistema ou acessar os ativos ao longo de cada etapa do **dataflow**.

</v-click>

<v-clicks at="2">

- **Abra a mente**: É essencial sair do seu ponto de vista habitual e pensar como um atacante, considerando as vulnerabilidades do sistema.
- Pergunte-se: "Se eu fosse um atacante, o que eu faria para comprometer este sistema?"
- Avalie cada parte do fluxo de dados, identificando onde as ameaças podem surgir.
- Pense em diferentes vetores de ataque, incluindo métodos menos óbvios, como a exploração de insiders, falhas humanas e atores motivados socialmente.

</v-clicks>

<v-click at="6">

Ao pensar dessa forma, você conseguirá enumerar ameaças mais abrangentes e mitigar potenciais riscos que poderiam ser negligenciados em uma análise superficial.

</v-click>

---

# Adicionando as <span>ameaças</span>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2160 471.5999999999999">

  <g id="user">
      <g stroke-linecap="round" transform="translate(10 170) rotate(0 155 80)">
          <path d="M0 0 L310 0 L310 160 L0 160" stroke="none" stroke-width="0" fill="#343a40" />
          <path
              d="M0 0 C71.5 0, 143 0, 310 0 M0 0 C113.87 0, 227.74 0, 310 0 M310 0 C310 54.5, 310 108.99, 310 160 M310 0 C310 53.36, 310 106.71, 310 160 M310 160 C214.69 160, 119.38 160, 0 160 M310 160 C214.99 160, 119.98 160, 0 160 M0 160 C0 106.98, 0 53.95, 0 0 M0 160 C0 106.89, 0 53.78, 0 0"
              stroke="#343a40" stroke-width="2" fill="none" />
      </g>
      <g
          transform="translate(125.60366719563802 225.69999999999982) rotate(0 39.396332804361975 24.299999999999955)">
          <text x="39.39633280436198" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
              font-size="36px" fill="#ffffff" text-anchor="middle" style="white-space: pre;"
              direction="ltr" dominant-baseline="alphabetic">User</text>
      </g>
  </g>

  <g id="mobile-app">
    <g stroke-linecap="round" transform="translate(530 170) rotate(0 150 80)">
        <path
            d="M32 0 C123.14 0, 214.28 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 56.44, 300 80.88, 300 128 C300 149.33, 289.33 160, 268 160 C187.69 160, 107.38 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 101.1, 0 74.2, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C82.39 0, 132.78 0, 268 0 M32 0 C95.12 0, 158.23 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 61.86, 300 91.72, 300 128 M300 32 C300 57.98, 300 83.96, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C185.33 160, 102.66 160, 32 160 M268 160 C179.22 160, 90.45 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 93.93, 0 59.86, 0 32 M0 128 C0 101.67, 0 75.34, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(584.9100004831951 225.69999999999982) rotate(0 95.08999951680502 24.299999999999955)">
        <text x="95.08999951680501" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">Mobile App</text>
    </g>
  </g>

  <g id="database">
    <g stroke-linecap="round" transform="translate(1790 170) rotate(0 155 80)">
        <path d="M0 0 L310 0 L310 160 L0 160" stroke="none" stroke-width="0" fill="#868e96" />
        <path
            d="M0 0 C101.06 0, 202.11 0, 310 0 M0 0 C107.76 0, 215.51 0, 310 0 M310 0 C310 44.89, 310 89.78, 310 160 M310 0 C310 44.29, 310 88.57, 310 160 M310 160 C197.15 160, 84.29 160, 0 160 M310 160 C242.02 160, 174.05 160, 0 160 M0 160 C0 117.85, 0 75.71, 0 0 M0 160 C0 104.56, 0 49.12, 0 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1866.653000640869 225.69999999999982) rotate(0 78.3469993591309 24.299999999999955)">
        <text x="78.34699935913086" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">Database</text>
    </g>
  </g>
  
  <g id="api-rest">
    <g stroke-linecap="round" transform="translate(1330 170) rotate(0 150 80)">
        <path
            d="M32 0 C117.69 0, 203.37 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 61.71, 300 91.42, 300 128 C300 149.33, 289.33 160, 268 160 C182.21 160, 96.41 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 98.21, 0 68.42, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C120.07 0, 208.13 0, 268 0 M32 0 C117.55 0, 203.09 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 66.34, 300 100.67, 300 128 M300 32 C300 54.3, 300 76.59, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C190.44 160, 112.89 160, 32 160 M268 160 C195.15 160, 122.31 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 96.55, 0 65.1, 0 32 M0 128 C0 103.43, 0 78.85, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1408.670666885376 225.69999999999982) rotate(0 71.32933311462398 24.299999999999955)">
        <text x="71.32933311462402" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">API Rest</text>
    </g>
  </g>

  <g id="reverse-proxy">
    <g stroke-linecap="round" transform="translate(930 170) rotate(0 150 80)">
        <path
            d="M32 0 C105.04 0, 178.07 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 66.9, 300 101.8, 300 128 C300 149.33, 289.33 160, 268 160 C194.77 160, 121.54 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 105.86, 0 83.72, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C125.82 0, 219.65 0, 268 0 M32 0 C113.16 0, 194.31 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 56.36, 300 80.72, 300 128 M300 32 C300 67.79, 300 103.58, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C198.12 160, 128.25 160, 32 160 M268 160 C173.98 160, 79.97 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 107.61, 0 87.23, 0 32 M0 128 C0 92.65, 0 57.3, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1014.2280006408691 201.4000000000001) rotate(0 65.77199935913086 48.59999999999991)">
        <text x="65.77199935913086" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">Reverse</text>
        <text x="65.77199935913086" y="84.744" font-family="Nunito, Segoe UI Emoji" font-size="36px"
            fill="#343a40" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">Proxy</text>
    </g>
  </g>
    
  <g id="arrow-user-mobile" stroke-linecap="round">
      <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
          <path d="M0 0 C57.85 0, 115.71 0, 180 0 M0 0 C45.27 0, 90.54 0, 180 0" stroke="#ffffff"
              stroke-width="4" fill="none" />
      </g>
      <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
          <path
              d="M156.51 8.55 C164.06 5.8, 171.61 3.05, 180 0 M156.51 8.55 C162.42 6.4, 168.32 4.25, 180 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
      <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
          <path
              d="M156.51 -8.55 C164.06 -5.8, 171.61 -3.05, 180 0 M156.51 -8.55 C162.42 -6.4, 168.32 -4.25, 180 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
  </g>
  
  <g id="arrow-mobile-proxy" stroke-linecap="round">
      <g transform="translate(831 250) rotate(0 39.5 0)">
          <path d="M0 0 C25.39 0, 50.77 0, 79 0 M0 0 C27.11 0, 54.23 0, 79 0" stroke="#ffffff"
              stroke-width="4" fill="none" />
      </g>
      <g transform="translate(831 250) rotate(0 39.5 0)">
          <path d="M55.51 8.55 C63.06 5.8, 70.61 3.06, 79 0 M55.51 8.55 C63.57 5.62, 71.63 2.68, 79 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
      <g transform="translate(831 250) rotate(0 39.5 0)">
          <path
              d="M55.51 -8.55 C63.06 -5.8, 70.61 -3.06, 79 0 M55.51 -8.55 C63.57 -5.62, 71.63 -2.68, 79 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
  </g>
  
  <g id="arrow-proxy-api" stroke-linecap="round">
      <g transform="translate(1231 250) rotate(0 39.5 0)">
          <path d="M0 0 C25.73 0, 51.45 0, 79 0 M0 0 C19.98 0, 39.97 0, 79 0" stroke="#ffffff"
              stroke-width="4" fill="none" />
      </g>
      <g transform="translate(1231 250) rotate(0 39.5 0)">
          <path
              d="M55.51 8.55 C63.16 5.77, 70.81 2.98, 79 0 M55.51 8.55 C61.45 6.39, 67.39 4.22, 79 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
      <g transform="translate(1231 250) rotate(0 39.5 0)">
          <path
              d="M55.51 -8.55 C63.16 -5.77, 70.81 -2.98, 79 0 M55.51 -8.55 C61.45 -6.39, 67.39 -4.22, 79 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
  </g>
  
  <g id="arrow-api-db" stroke-linecap="round">
      <g transform="translate(1630 250) rotate(0 70 0)">
          <path d="M0 0 C40.85 0, 81.71 0, 140 0 M0 0 C29.48 0, 58.95 0, 140 0" stroke="#ffffff"
              stroke-width="4" fill="none" />
      </g>
      <g transform="translate(1630 250) rotate(0 70 0)">
          <path
              d="M116.51 8.55 C123.36 6.06, 130.22 3.56, 140 0 M116.51 8.55 C121.45 6.75, 126.4 4.95, 140 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
      <g transform="translate(1630 250) rotate(0 70 0)">
          <path
              d="M116.51 -8.55 C123.36 -6.06, 130.22 -3.56, 140 0 M116.51 -8.55 C121.45 -6.75, 126.4 -4.95, 140 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
  </g>
  
  <g id="trust-boundary">
    <g stroke-linecap="round" transform="translate(1270 68.33333333333348) rotate(0 440 190)">
        <path
            d="M0 0 C241.4 0, 482.79 0, 880 0 M880 0 C880 114.26, 880 228.53, 880 380 M880 380 C600.52 380, 321.03 380, 0 380 M0 380 C0 265.67, 0 151.34, 0 0"
            stroke="#2f9e44" stroke-width="4.5" fill="none" stroke-dasharray="8 12" />
    </g>
    <g transform="translate(1270 10) rotate(0 232.24966599146524 24.299999999999955)">
        <text x="0" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji" font-size="36px"
            fill="#2f9e44" text-anchor="start" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">Trust Boundary / VPN / DMZ</text>
    </g>
  </g>
  
  <g id="asset-1">
    <g stroke-linecap="round" transform="translate(550 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C20.06 0, 40.13 0, 60 0 M0 0 C17.66 0, 35.31 0, 60 0 M60 0 C60 10.12, 60 20.24, 60 31.6 M60 0 C60 11.94, 60 23.87, 60 31.6 M60 31.6 C47.42 31.6, 34.84 31.6, 0 31.6 M60 31.6 C43.88 31.6, 27.76 31.6, 0 31.6 M0 31.6 C0 21.67, 0 11.74, 0 0 M0 31.6 C0 25.1, 0 18.61, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(569.1413332621256 135) rotate(0 10.858666737874344 10.799999999999955)">
        <text x="10.85866673787435" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A1</text>
    </g>
  </g>

  <g id="asset-2">
    <g stroke-linecap="round" transform="translate(630 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C16.59 0, 33.17 0, 60 0 M0 0 C23.56 0, 47.11 0, 60 0 M60 0 C60 8.22, 60 16.45, 60 31.6 M60 0 C60 7.47, 60 14.94, 60 31.6 M60 31.6 C44.6 31.6, 29.2 31.6, 0 31.6 M60 31.6 C39.01 31.6, 18.02 31.6, 0 31.6 M0 31.6 C0 19.53, 0 7.46, 0 0 M0 31.6 C0 21.92, 0 12.23, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(649.0053330103556 135) rotate(0 10.994666989644372 10.799999999999955)">
        <text x="10.994666989644369" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A2</text>
    </g>
  </g>
 
  <g id="asset-3">
    <g stroke-linecap="round" transform="translate(1350 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C22.57 0, 45.13 0, 60 0 M0 0 C21.77 0, 43.54 0, 60 0 M60 0 C60 10.32, 60 20.64, 60 31.6 M60 0 C60 8.29, 60 16.57, 60 31.6 M60 31.6 C42.35 31.6, 24.71 31.6, 0 31.6 M60 31.6 C42.93 31.6, 25.86 31.6, 0 31.6 M0 31.6 C0 22.72, 0 13.84, 0 0 M0 31.6 C0 22.47, 0 13.35, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1369.1333330472312 135) rotate(0 10.86666695276898 10.799999999999955)">
        <text x="10.866666952768961" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A3</text>
    </g>
  </g>
  
  <g id="asset-1-db">
    <g stroke-linecap="round" transform="translate(1790 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C14.22 0, 28.44 0, 60 0 M0 0 C17.1 0, 34.21 0, 60 0 M60 0 C60 8.43, 60 16.86, 60 31.6 M60 0 C60 10.22, 60 20.44, 60 31.6 M60 31.6 C43.97 31.6, 27.94 31.6, 0 31.6 M60 31.6 C45.88 31.6, 31.76 31.6, 0 31.6 M0 31.6 C0 25.06, 0 18.53, 0 0 M0 31.6 C0 19.68, 0 7.75, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1809.1413332621257 135) rotate(0 10.858666737874387 10.799999999999955)">
        <text x="10.85866673787435" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A1</text>
    </g>
  </g>

  <g id="threat-1" v-click v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(550 350) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
        <path
            d="M0 0 C23.8 0, 47.59 0, 60 0 M0 0 C15.08 0, 30.16 0, 60 0 M60 0 C60 7.96, 60 15.92, 60 31.6 M60 0 C60 7, 60 14, 60 31.6 M60 31.6 C44.77 31.6, 29.55 31.6, 0 31.6 M60 31.6 C39.12 31.6, 18.23 31.6, 0 31.6 M0 31.6 C0 20.99, 0 10.38, 0 0 M0 31.6 C0 21.1, 0 10.61, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(569.8696665843328 355) rotate(0 10.130333415667224 10.799999999999955)">
        <text x="10.130333415667216" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">T1</text>
    </g>
  </g>
  
  <g id="threat-2" v-click v-motion :initial="{ x: 100, y:50}" :enter="{ x:0, y:0}">
  <g stroke-linecap="round" transform="translate(630 350) rotate(0 30 15.799999999999955)">
      <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
      <path
          d="M0 0 C21.99 0, 43.98 0, 60 0 M0 0 C22.45 0, 44.89 0, 60 0 M60 0 C60 10.14, 60 20.27, 60 31.6 M60 0 C60 10.87, 60 21.73, 60 31.6 M60 31.6 C41.25 31.6, 22.5 31.6, 0 31.6 M60 31.6 C41.6 31.6, 23.19 31.6, 0 31.6 M0 31.6 C0 22.07, 0 12.53, 0 0 M0 31.6 C0 22.82, 0 14.05, 0 0"
          stroke="#ffffff" stroke-width="1" fill="none" />
  </g>
  <g transform="translate(649.7336663325627 355) rotate(0 10.266333667437237 10.799999999999955)">
      <text x="10.266333667437236" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
          fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
          dominant-baseline="alphabetic">T2</text>
  </g>
  </g>
  
  <g id="threat-3" v-click v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
  <g stroke-linecap="round" transform="translate(950 350) rotate(0 30 15.799999999999955)">
      <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
      <path
          d="M0 0 C18.4 0, 36.81 0, 60 0 M0 0 C18.1 0, 36.2 0, 60 0 M60 0 C60 8.78, 60 17.55, 60 31.6 M60 0 C60 8.91, 60 17.81, 60 31.6 M60 31.6 C39.95 31.6, 19.9 31.6, 0 31.6 M60 31.6 C38.19 31.6, 16.37 31.6, 0 31.6 M0 31.6 C0 19.56, 0 7.51, 0 0 M0 31.6 C0 20.24, 0 8.87, 0 0"
          stroke="#ffffff" stroke-width="1" fill="none" />
  </g>
  <g transform="translate(969.8616663694381 355) rotate(0 10.138333630561817 10.799999999999955)">
      <text x="10.138333630561828" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
          fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
          dominant-baseline="alphabetic">T3</text>
  </g>
  </g>
  
  <g id="threat-4" v-click v-motion :initial="{ x: 100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(1350 350) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
        <path
            d="M0 0 C17.94 0, 35.87 0, 60 0 M0 0 C17.89 0, 35.78 0, 60 0 M60 0 C60 11.98, 60 23.97, 60 31.6 M60 0 C60 6.52, 60 13.05, 60 31.6 M60 31.6 C38.7 31.6, 17.4 31.6, 0 31.6 M60 31.6 C37.1 31.6, 14.2 31.6, 0 31.6 M0 31.6 C0 24.97, 0 18.33, 0 0 M0 31.6 C0 24, 0 16.4, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1369.5176665703457 355) rotate(0 10.482333429654432 10.799999999999955)">
        <text x="10.482333429654439" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">T4</text>
    </g>
  </g>
  
  <g id="threat-5" v-click v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(1790 350) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
        <path
            d="M0 0 C15.7 0, 31.4 0, 60 0 M0 0 C22.48 0, 44.95 0, 60 0 M60 0 C60 11.04, 60 22.09, 60 31.6 M60 0 C60 7.64, 60 15.27, 60 31.6 M60 31.6 C42.02 31.6, 24.04 31.6, 0 31.6 M60 31.6 C36.72 31.6, 13.44 31.6, 0 31.6 M0 31.6 C0 22.55, 0 13.5, 0 0 M0 31.6 C0 20.51, 0 9.43, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1809.6776663859685 355) rotate(0 10.322333614031436 10.799999999999955)">
        <text x="10.322333614031473" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">T5</text>
    </g>
  </g>
  
  </svg>

  <v-clicks at="1">

  - <span class="text-red-700 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">T1</span> Interceptação de Dados Sensíveis
  - <span class="text-red-700 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">T2</span> Exposição de Token de Sessão
  - <span class="text-red-700 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">T3</span> Indisponibilidade de serviço
  - <span class="text-red-700 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">T4</span> Exposição de Credenciais
  - <span class="text-red-700 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">T5</span> Acesso Não Autorizado a Informações Pessoais

  </v-clicks>

---

# Definição de <span>Controles</span>

<v-clicks depth="2">

- **Controles técnicos e processuais:** 
  - Implementar controles para mitigar ameaças identificadas.
  - Criar tarefas claras para o time de desenvolvimento executar.

</v-clicks>

---

# Definição de <span>Controles</span>

<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2160 471.5999999999999">

  <g id="user">
      <g stroke-linecap="round" transform="translate(10 170) rotate(0 155 80)">
          <path d="M0 0 L310 0 L310 160 L0 160" stroke="none" stroke-width="0" fill="#343a40" />
          <path
              d="M0 0 C71.5 0, 143 0, 310 0 M0 0 C113.87 0, 227.74 0, 310 0 M310 0 C310 54.5, 310 108.99, 310 160 M310 0 C310 53.36, 310 106.71, 310 160 M310 160 C214.69 160, 119.38 160, 0 160 M310 160 C214.99 160, 119.98 160, 0 160 M0 160 C0 106.98, 0 53.95, 0 0 M0 160 C0 106.89, 0 53.78, 0 0"
              stroke="#343a40" stroke-width="2" fill="none" />
      </g>
      <g
          transform="translate(125.60366719563802 225.69999999999982) rotate(0 39.396332804361975 24.299999999999955)">
          <text x="39.39633280436198" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
              font-size="36px" fill="#ffffff" text-anchor="middle" style="white-space: pre;"
              direction="ltr" dominant-baseline="alphabetic">User</text>
      </g>
  </g>

  <g id="mobile-app">
    <g stroke-linecap="round" transform="translate(530 170) rotate(0 150 80)">
        <path
            d="M32 0 C123.14 0, 214.28 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 56.44, 300 80.88, 300 128 C300 149.33, 289.33 160, 268 160 C187.69 160, 107.38 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 101.1, 0 74.2, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C82.39 0, 132.78 0, 268 0 M32 0 C95.12 0, 158.23 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 61.86, 300 91.72, 300 128 M300 32 C300 57.98, 300 83.96, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C185.33 160, 102.66 160, 32 160 M268 160 C179.22 160, 90.45 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 93.93, 0 59.86, 0 32 M0 128 C0 101.67, 0 75.34, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(584.9100004831951 225.69999999999982) rotate(0 95.08999951680502 24.299999999999955)">
        <text x="95.08999951680501" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">Mobile App</text>
    </g>
  </g>

  <g id="database">
    <g stroke-linecap="round" transform="translate(1790 170) rotate(0 155 80)">
        <path d="M0 0 L310 0 L310 160 L0 160" stroke="none" stroke-width="0" fill="#868e96" />
        <path
            d="M0 0 C101.06 0, 202.11 0, 310 0 M0 0 C107.76 0, 215.51 0, 310 0 M310 0 C310 44.89, 310 89.78, 310 160 M310 0 C310 44.29, 310 88.57, 310 160 M310 160 C197.15 160, 84.29 160, 0 160 M310 160 C242.02 160, 174.05 160, 0 160 M0 160 C0 117.85, 0 75.71, 0 0 M0 160 C0 104.56, 0 49.12, 0 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1866.653000640869 225.69999999999982) rotate(0 78.3469993591309 24.299999999999955)">
        <text x="78.34699935913086" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">Database</text>
    </g>
  </g>
  
  <g id="api-rest">
    <g stroke-linecap="round" transform="translate(1330 170) rotate(0 150 80)">
        <path
            d="M32 0 C117.69 0, 203.37 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 61.71, 300 91.42, 300 128 C300 149.33, 289.33 160, 268 160 C182.21 160, 96.41 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 98.21, 0 68.42, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C120.07 0, 208.13 0, 268 0 M32 0 C117.55 0, 203.09 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 66.34, 300 100.67, 300 128 M300 32 C300 54.3, 300 76.59, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C190.44 160, 112.89 160, 32 160 M268 160 C195.15 160, 122.31 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 96.55, 0 65.1, 0 32 M0 128 C0 103.43, 0 78.85, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1408.670666885376 225.69999999999982) rotate(0 71.32933311462398 24.299999999999955)">
        <text x="71.32933311462402" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">API Rest</text>
    </g>
  </g>

  <g id="reverse-proxy">
    <g stroke-linecap="round" transform="translate(930 170) rotate(0 150 80)">
        <path
            d="M32 0 C105.04 0, 178.07 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 66.9, 300 101.8, 300 128 C300 149.33, 289.33 160, 268 160 C194.77 160, 121.54 160, 32 160 C10.67 160, 0 149.33, 0 128 C0 105.86, 0 83.72, 0 32 C0 10.67, 10.67 0, 32 0"
            stroke="none" stroke-width="0" fill="#ced4da" />
        <path
            d="M32 0 C125.82 0, 219.65 0, 268 0 M32 0 C113.16 0, 194.31 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 56.36, 300 80.72, 300 128 M300 32 C300 67.79, 300 103.58, 300 128 M300 128 C300 149.33, 289.33 160, 268 160 M300 128 C300 149.33, 289.33 160, 268 160 M268 160 C198.12 160, 128.25 160, 32 160 M268 160 C173.98 160, 79.97 160, 32 160 M32 160 C10.67 160, 0 149.33, 0 128 M32 160 C10.67 160, 0 149.33, 0 128 M0 128 C0 107.61, 0 87.23, 0 32 M0 128 C0 92.65, 0 57.3, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0"
            stroke="#343a40" stroke-width="2" fill="none" />
    </g>
    <g
        transform="translate(1014.2280006408691 201.4000000000001) rotate(0 65.77199935913086 48.59999999999991)">
        <text x="65.77199935913086" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji"
            font-size="36px" fill="#343a40" text-anchor="middle" style="white-space: pre;"
            direction="ltr" dominant-baseline="alphabetic">Reverse</text>
        <text x="65.77199935913086" y="84.744" font-family="Nunito, Segoe UI Emoji" font-size="36px"
            fill="#343a40" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">Proxy</text>
    </g>
  </g>
    
  <g id="arrow-user-mobile" stroke-linecap="round">
      <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
          <path d="M0 0 C57.85 0, 115.71 0, 180 0 M0 0 C45.27 0, 90.54 0, 180 0" stroke="#ffffff"
              stroke-width="4" fill="none" />
      </g>
      <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
          <path
              d="M156.51 8.55 C164.06 5.8, 171.61 3.05, 180 0 M156.51 8.55 C162.42 6.4, 168.32 4.25, 180 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
      <g transform="translate(330 250) rotate(0 89.99999999999999 0)">
          <path
              d="M156.51 -8.55 C164.06 -5.8, 171.61 -3.05, 180 0 M156.51 -8.55 C162.42 -6.4, 168.32 -4.25, 180 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
  </g>
  
  <g id="arrow-mobile-proxy" stroke-linecap="round">
      <g transform="translate(831 250) rotate(0 39.5 0)">
          <path d="M0 0 C25.39 0, 50.77 0, 79 0 M0 0 C27.11 0, 54.23 0, 79 0" stroke="#ffffff"
              stroke-width="4" fill="none" />
      </g>
      <g transform="translate(831 250) rotate(0 39.5 0)">
          <path d="M55.51 8.55 C63.06 5.8, 70.61 3.06, 79 0 M55.51 8.55 C63.57 5.62, 71.63 2.68, 79 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
      <g transform="translate(831 250) rotate(0 39.5 0)">
          <path
              d="M55.51 -8.55 C63.06 -5.8, 70.61 -3.06, 79 0 M55.51 -8.55 C63.57 -5.62, 71.63 -2.68, 79 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
  </g>
  
  <g id="arrow-proxy-api" stroke-linecap="round">
      <g transform="translate(1231 250) rotate(0 39.5 0)">
          <path d="M0 0 C25.73 0, 51.45 0, 79 0 M0 0 C19.98 0, 39.97 0, 79 0" stroke="#ffffff"
              stroke-width="4" fill="none" />
      </g>
      <g transform="translate(1231 250) rotate(0 39.5 0)">
          <path
              d="M55.51 8.55 C63.16 5.77, 70.81 2.98, 79 0 M55.51 8.55 C61.45 6.39, 67.39 4.22, 79 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
      <g transform="translate(1231 250) rotate(0 39.5 0)">
          <path
              d="M55.51 -8.55 C63.16 -5.77, 70.81 -2.98, 79 0 M55.51 -8.55 C61.45 -6.39, 67.39 -4.22, 79 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
  </g>
  
  <g id="arrow-api-db" stroke-linecap="round">
      <g transform="translate(1630 250) rotate(0 70 0)">
          <path d="M0 0 C40.85 0, 81.71 0, 140 0 M0 0 C29.48 0, 58.95 0, 140 0" stroke="#ffffff"
              stroke-width="4" fill="none" />
      </g>
      <g transform="translate(1630 250) rotate(0 70 0)">
          <path
              d="M116.51 8.55 C123.36 6.06, 130.22 3.56, 140 0 M116.51 8.55 C121.45 6.75, 126.4 4.95, 140 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
      <g transform="translate(1630 250) rotate(0 70 0)">
          <path
              d="M116.51 -8.55 C123.36 -6.06, 130.22 -3.56, 140 0 M116.51 -8.55 C121.45 -6.75, 126.4 -4.95, 140 0"
              stroke="#ffffff" stroke-width="4" fill="none" />
      </g>
  </g>
  
  <g id="trust-boundary">
    <g stroke-linecap="round" transform="translate(1270 68.33333333333348) rotate(0 440 190)">
        <path
            d="M0 0 C241.4 0, 482.79 0, 880 0 M880 0 C880 114.26, 880 228.53, 880 380 M880 380 C600.52 380, 321.03 380, 0 380 M0 380 C0 265.67, 0 151.34, 0 0"
            stroke="#2f9e44" stroke-width="4.5" fill="none" stroke-dasharray="8 12" />
    </g>
    <g transform="translate(1270 10) rotate(0 232.24966599146524 24.299999999999955)">
        <text x="0" y="36.144000000000005" font-family="Nunito, Segoe UI Emoji" font-size="36px"
            fill="#2f9e44" text-anchor="start" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">Trust Boundary / VPN / DMZ</text>
    </g>
  </g>
  
  <g id="asset-2">
    <g stroke-linecap="round" transform="translate(630 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C16.59 0, 33.17 0, 60 0 M0 0 C23.56 0, 47.11 0, 60 0 M60 0 C60 8.22, 60 16.45, 60 31.6 M60 0 C60 7.47, 60 14.94, 60 31.6 M60 31.6 C44.6 31.6, 29.2 31.6, 0 31.6 M60 31.6 C39.01 31.6, 18.02 31.6, 0 31.6 M0 31.6 C0 19.53, 0 7.46, 0 0 M0 31.6 C0 21.92, 0 12.23, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(649.0053330103556 135) rotate(0 10.994666989644372 10.799999999999955)">
        <text x="10.994666989644369" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A2</text>
    </g>
  </g>
 
  <g id="asset-3">
    <g stroke-linecap="round" transform="translate(1350 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C22.57 0, 45.13 0, 60 0 M0 0 C21.77 0, 43.54 0, 60 0 M60 0 C60 10.32, 60 20.64, 60 31.6 M60 0 C60 8.29, 60 16.57, 60 31.6 M60 31.6 C42.35 31.6, 24.71 31.6, 0 31.6 M60 31.6 C42.93 31.6, 25.86 31.6, 0 31.6 M0 31.6 C0 22.72, 0 13.84, 0 0 M0 31.6 C0 22.47, 0 13.35, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1369.1333330472312 135) rotate(0 10.86666695276898 10.799999999999955)">
        <text x="10.866666952768961" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A3</text>
    </g>
  </g>
  
  <g id="asset-1-db">
    <g stroke-linecap="round" transform="translate(1790 130) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#f08c00" />
        <path
            d="M0 0 C14.22 0, 28.44 0, 60 0 M0 0 C17.1 0, 34.21 0, 60 0 M60 0 C60 8.43, 60 16.86, 60 31.6 M60 0 C60 10.22, 60 20.44, 60 31.6 M60 31.6 C43.97 31.6, 27.94 31.6, 0 31.6 M60 31.6 C45.88 31.6, 31.76 31.6, 0 31.6 M0 31.6 C0 25.06, 0 18.53, 0 0 M0 31.6 C0 19.68, 0 7.75, 0 0"
            stroke="#f08c00" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1809.1413332621257 135) rotate(0 10.858666737874387 10.799999999999955)">
        <text x="10.85866673787435" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">A1</text>
    </g>
  </g>

  <g id="threat-1">
    <g stroke-linecap="round" transform="translate(550 350) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
        <path
            d="M0 0 C23.8 0, 47.59 0, 60 0 M0 0 C15.08 0, 30.16 0, 60 0 M60 0 C60 7.96, 60 15.92, 60 31.6 M60 0 C60 7, 60 14, 60 31.6 M60 31.6 C44.77 31.6, 29.55 31.6, 0 31.6 M60 31.6 C39.12 31.6, 18.23 31.6, 0 31.6 M0 31.6 C0 20.99, 0 10.38, 0 0 M0 31.6 C0 21.1, 0 10.61, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(569.8696665843328 355) rotate(0 10.130333415667224 10.799999999999955)">
        <text x="10.130333415667216" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">T1</text>
    </g>
  </g>
  
  <g id="threat-2">
  <g stroke-linecap="round" transform="translate(630 350) rotate(0 30 15.799999999999955)">
      <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
      <path
          d="M0 0 C21.99 0, 43.98 0, 60 0 M0 0 C22.45 0, 44.89 0, 60 0 M60 0 C60 10.14, 60 20.27, 60 31.6 M60 0 C60 10.87, 60 21.73, 60 31.6 M60 31.6 C41.25 31.6, 22.5 31.6, 0 31.6 M60 31.6 C41.6 31.6, 23.19 31.6, 0 31.6 M0 31.6 C0 22.07, 0 12.53, 0 0 M0 31.6 C0 22.82, 0 14.05, 0 0"
          stroke="#ffffff" stroke-width="1" fill="none" />
  </g>
  <g transform="translate(649.7336663325627 355) rotate(0 10.266333667437237 10.799999999999955)">
      <text x="10.266333667437236" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
          fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
          dominant-baseline="alphabetic">T2</text>
  </g>
  </g>
  
  <g id="threat-3">
  <g stroke-linecap="round" transform="translate(950 350) rotate(0 30 15.799999999999955)">
      <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
      <path
          d="M0 0 C18.4 0, 36.81 0, 60 0 M0 0 C18.1 0, 36.2 0, 60 0 M60 0 C60 8.78, 60 17.55, 60 31.6 M60 0 C60 8.91, 60 17.81, 60 31.6 M60 31.6 C39.95 31.6, 19.9 31.6, 0 31.6 M60 31.6 C38.19 31.6, 16.37 31.6, 0 31.6 M0 31.6 C0 19.56, 0 7.51, 0 0 M0 31.6 C0 20.24, 0 8.87, 0 0"
          stroke="#ffffff" stroke-width="1" fill="none" />
  </g>
  <g transform="translate(969.8616663694381 355) rotate(0 10.138333630561817 10.799999999999955)">
      <text x="10.138333630561828" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
          fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
          dominant-baseline="alphabetic">T3</text>
  </g>
  </g>
  
  <g id="threat-4">
    <g stroke-linecap="round" transform="translate(1350 350) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
        <path
            d="M0 0 C17.94 0, 35.87 0, 60 0 M0 0 C17.89 0, 35.78 0, 60 0 M60 0 C60 11.98, 60 23.97, 60 31.6 M60 0 C60 6.52, 60 13.05, 60 31.6 M60 31.6 C38.7 31.6, 17.4 31.6, 0 31.6 M60 31.6 C37.1 31.6, 14.2 31.6, 0 31.6 M0 31.6 C0 24.97, 0 18.33, 0 0 M0 31.6 C0 24, 0 16.4, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1369.5176665703457 355) rotate(0 10.482333429654432 10.799999999999955)">
        <text x="10.482333429654439" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">T4</text>
    </g>
  </g>
  
  <g id="threat-5">
    <g stroke-linecap="round" transform="translate(1790 350) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#e03131" />
        <path
            d="M0 0 C15.7 0, 31.4 0, 60 0 M0 0 C22.48 0, 44.95 0, 60 0 M60 0 C60 11.04, 60 22.09, 60 31.6 M60 0 C60 7.64, 60 15.27, 60 31.6 M60 31.6 C42.02 31.6, 24.04 31.6, 0 31.6 M60 31.6 C36.72 31.6, 13.44 31.6, 0 31.6 M0 31.6 C0 22.55, 0 13.5, 0 0 M0 31.6 C0 20.51, 0 9.43, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1809.6776663859685 355) rotate(0 10.322333614031436 10.799999999999955)">
        <text x="10.322333614031473" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">T5</text>
    </g>
  </g>
  
  <g id="control-1" v-click="1" v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(550 390) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#1971c2" />
        <path
            d="M0 0 C15.19 0, 30.39 0, 60 0 M0 0 C16.32 0, 32.64 0, 60 0 M60 0 C60 10.21, 60 20.42, 60 31.6 M60 0 C60 6.62, 60 13.24, 60 31.6 M60 31.6 C39.78 31.6, 19.56 31.6, 0 31.6 M60 31.6 C40.81 31.6, 21.61 31.6, 0 31.6 M0 31.6 C0 19.45, 0 7.3, 0 0 M0 31.6 C0 23.8, 0 15.99, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(569.8000001907349 395) rotate(0 10.199999809265137 10.799999999999955)">
        <text x="10.199999809265137" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">C1</text>
    </g>
  </g>
  
  <g id="control-2" v-click="2" v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(550 430) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#1971c2" />
        <path
            d="M0 0 C23.29 0, 46.58 0, 60 0 M0 0 C20.55 0, 41.1 0, 60 0 M60 0 C60 9.69, 60 19.39, 60 31.6 M60 0 C60 6.52, 60 13.04, 60 31.6 M60 31.6 C45.5 31.6, 31 31.6, 0 31.6 M60 31.6 C37.29 31.6, 14.57 31.6, 0 31.6 M0 31.6 C0 22.77, 0 13.94, 0 0 M0 31.6 C0 23.25, 0 14.91, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(569.6879996935527 435) rotate(0 10.312000306447345 10.799999999999955)">
        <text x="10.312000306447347" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">C2</text>
    </g>
  </g>
  
  <g id="control-3" v-click="3" v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(630 390) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#1971c2" />
        <path
            d="M0 0 C22.12 0, 44.24 0, 60 0 M0 0 C20.5 0, 41.01 0, 60 0 M60 0 C60 10.27, 60 20.55, 60 31.6 M60 0 C60 8.57, 60 17.14, 60 31.6 M60 31.6 C39.69 31.6, 19.38 31.6, 0 31.6 M60 31.6 C40.67 31.6, 21.35 31.6, 0 31.6 M0 31.6 C0 20.61, 0 9.62, 0 0 M0 31.6 C0 19.13, 0 6.67, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(649.8000001907349 395) rotate(0 10.199999809265137 10.799999999999955)">
        <text x="10.199999809265137" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">C3</text>
    </g>
  </g>
  
  <g id="control-4" v-click="4" v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(950 390) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#1971c2" />
        <path
            d="M0 0 C14.34 0, 28.68 0, 60 0 M0 0 C18.42 0, 36.84 0, 60 0 M60 0 C60 11.31, 60 22.62, 60 31.6 M60 0 C60 7.84, 60 15.68, 60 31.6 M60 31.6 C36.19 31.6, 12.38 31.6, 0 31.6 M60 31.6 C45.57 31.6, 31.13 31.6, 0 31.6 M0 31.6 C0 22.47, 0 13.34, 0 0 M0 31.6 C0 21.31, 0 11.02, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(969.4719999313354 395) rotate(0 10.52800006866454 10.799999999999955)">
        <text x="10.52800006866455" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">C4</text>
    </g>
  </g>
  
  <g id="control-5" v-click="5" v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(1350 390) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#1971c2" />
        <path
            d="M0 0 C12.42 0, 24.83 0, 60 0 M0 0 C19.5 0, 39 0, 60 0 M60 0 C60 11.05, 60 22.1, 60 31.6 M60 0 C60 8.5, 60 17.01, 60 31.6 M60 31.6 C36.92 31.6, 13.84 31.6, 0 31.6 M60 31.6 C41.89 31.6, 23.77 31.6, 0 31.6 M0 31.6 C0 21.2, 0 10.8, 0 0 M0 31.6 C0 21.37, 0 11.15, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1369.6319997469584 395) rotate(0 10.3680002530416 10.799999999999955)">
        <text x="10.368000253041584" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">C5</text>
    </g>
  </g>
  
  <g id="control-6" v-click="6" v-motion :initial="{ x: -100, y:-50}" :enter="{ x:0, y:0}">
    <g stroke-linecap="round" transform="translate(1790 390) rotate(0 30 15.799999999999955)">
        <path d="M0 0 L60 0 L60 31.6 L0 31.6" stroke="none" stroke-width="0" fill="#1971c2" />
        <path
            d="M0 0 C18.2 0, 36.4 0, 60 0 M0 0 C21.03 0, 42.07 0, 60 0 M60 0 C60 9.58, 60 19.15, 60 31.6 M60 0 C60 11.06, 60 22.12, 60 31.6 M60 31.6 C44.6 31.6, 29.21 31.6, 0 31.6 M60 31.6 C47.75 31.6, 35.5 31.6, 0 31.6 M0 31.6 C0 24.68, 0 17.76, 0 0 M0 31.6 C0 22.04, 0 12.49, 0 0"
            stroke="#ffffff" stroke-width="1" fill="none" />
    </g>
    <g transform="translate(1809.6639998118083 395) rotate(0 10.336000188191747 10.799999999999955)">
        <text x="10.336000188191731" y="16.064" font-family="Nunito, Segoe UI Emoji" font-size="16px"
            fill="#ffffff" text-anchor="middle" style="white-space: pre;" direction="ltr"
            dominant-baseline="alphabetic">C6</text>
    </g>
  </g>
  

  </svg>

<div class="grid grid-cols-2 gap-4" style="font-size: 0.9em;">
  <div>
  
  <v-clicks>

  - <span class="text-blue-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">C1</span> TLS Pinning para garantir a autenticidade do certificado do servidor e mitigar ataques man-in-the-middle (MitM).
  - <span class="text-blue-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">C2</span> Criptografia de dados sensíveis em trânsito para proteger as informações contra interceptação direta.
  - <span class="text-blue-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">C3</span> Armazenamento seguro de tokens em áreas protegidas, como Keychain (iOS) ou Keystore (Android).

  </v-clicks>

  </div>
  <div>
  
  <v-clicks at="4">

  - <span class="text-blue-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">C4</span> Rate limiting e controle de solicitações para limitar a quantidade de requisições por IP ou origem.
  - <span class="text-blue-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">C5</span> Armazenamento de credenciais criptografadas em um sistema de gerenciamento de segredos, como AWS Secrets Manager ou HashiCorp Vault.
  - <span class="text-blue-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-1em line-height-1em transform translate-x-[-0.3em]">C6</span> Controles de acesso granulares com base no princípio do menor privilégio, para limitar acesso aos dados e operações estritamente necessários.

  </v-clicks>

  </div>
</div>

  

  
---

# <span>Ferramentas</span> e <span>Técnicas</span>

<v-clicks depth="2">

- Dataflow: Visualize fluxos de dados e identifique ameaças.
  - **[Excalidraw](https://excalidraw.com/)**
  - **[Draw.io](htpps://draw.io)**
  - **[Miro](https://miro.com/)**
  - **[MermaidJS](http://mermaid.js.org/)**
- Gerenciar Ameaças
  - **Integração com Jira e Trello**: Gerencie tarefas relacionadas ao Threat Modeling.
  - **Threat Modeling API**  <span class="text-blue-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-0.5em line-height-1em transform translate-y-[-0.5em] translate-x-[-0.3em]">Interno</span> 
  - **[ThreatMax](https://github.com/fguisso/threatmax)**  <span class="text-orange-400 bg-$prism-background px-2 py-1 rounded font-mono inline-block text-0.5em line-height-1em transform translate-y-[-0.5em] translate-x-[-0.3em]">Em construção</span>

</v-clicks>
---

# Outras <span>Ferramentas</span>

<v-clicks>

- **Microsoft Threat Modeling Tool**: Baseada em DFD e STRIDE.
- **IriusRisk**: Ferramenta que mantém o modelo de ameaças durante o ciclo de vida.
- **securiCAD**: Simulação automática de ataques para análise de risco.
- **OWASP Threat Dragon**: Focada em desenvolvimento seguro com integração STRIDE.
- **OWASP pytm**: Framework em Python para Threat Modeling como código.

</v-clicks>

---

# Superando <span>Desafios</span>

<v-clicks depth="2">

- **Resistência inicial das equipes:** 
  - Educar e engajar todos os membros desde o início.
  
- **Adaptação de ferramentas e processos:**
  - Integração contínua com ferramentas já utilizadas pela equipe.

</v-clicks>

---

# Medindo o <span>Sucesso</span>

<v-clicks depth="2">

- **Métricas relevantes:**
  - Número de ameaças identificadas e mitigadas.
  - Redução de vulnerabilidades em produção.

- **Avaliação do impacto:**
  - Aumento na percepção de segurança e eficácia das contramedidas.

</v-clicks>

---

# O <span>Futuro</span> do Threat Modeling

<v-clicks depth="2">

- **Integração com DevSecOps:**
  - Tornar o Threat Modeling parte do pipeline de CI/CD.
  
- **Tendências emergentes:**
  - Automação do processo de Threat Modeling.
  - Uso de IA para detectar ameaças em tempo real.

</v-clicks>

---

# <span>C</span>onclusão

<v-clicks depth="2">

- **Recapitulação:** 
  - Threat Modeling Express oferece uma abordagem ágil e colaborativa para segurança.

- **Chamada à ação:**
  - Comece a implementar o Threat Modeling Express em seus projetos hoje mesmo.

</v-clicks>

---

# <span>O</span>brigado<span>!</span>
### Contatos e Slides em https://guisso.dev
