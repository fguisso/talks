---
theme: default
title: "Software Livre, Comunidade e Soberania"
info: |
  Software livre não como categoria técnica, mas como prática de comunidade,
  instrumento de autonomia e disputa política. Do RN para o mundo.
transition: fade
colorSchema: light
highlighter: shiki
lineNumbers: false
fonts:
  provider: none
themeConfig:
  websiteUrl: https://guisso.dev
layout: cover
---

# Software Livre,<br/>Comunidade<br/>e Soberania

## Por que essa luta ainda importa

<AvatarBadge class="mt-2" />

<!--
Abrir devagar. A frase da PotiLivre: "Viver sem conhecer o passado é andar no escuro."
Hoje: software livre não como categoria técnica, mas como prática de comunidade,
instrumento de autonomia e disputa política. Começar pelo território, o RN.
-->

---
layout: statement
---

<div class="big-quote">Viver sem conhecer o passado é andar no escuro.</div>

<div class="text-muted mt-6 small">PotiLivre</div>

<!--
Slide-âncora. Ler a frase, deixar respirar.
"Vamos começar pelo território, pelo Rio Grande do Norte, por uma história de mais de 20 anos."
-->

---
layout: section
part: Bloco 01
duration: ~10 min
---

# A comunidade vem<br/>antes do código

Território, memória e por que tudo começa no Rio Grande do Norte.

---
layout: two-cols
---

# O que é a PotiLivre

A **Comunidade Potiguar de Software Livre**, fundada em **2013**, em Natal/RN.

::left::

<v-clicks>

- Organização **independente**, feita de **voluntários**
- **Missão:** ser o principal ponto de integração entre as comunidades de Software Livre do Estado
- **Visão:** estar presente no maior número de cidades possível, apoiando toda a comunidade de Software Livre do RN
- **Licença da comunidade:** `CC BY-NC-SA 4.0`

</v-clicks>

::right::

<div class="flex flex-col items-center mt-2">
  <Pic src="logos/potilivre.png" class="h-48 object-contain flip-target" :class="{ 'is-flipped': $clicks < 6 }" alt="Logo PotiLivre" />
  <div class="small text-muted mt-3 text-center" style="max-width: 30ch">
    O <strong>"P" espelhado</strong>, o <strong>"PotiLeft"</strong>: homenagem direta ao
    conceito de <strong>Copyleft</strong>.
  </div>
</div>

<div v-click class="mt-3">

> A logo já é um manifesto. Antes de qualquer palestra, a comunidade diz quem é pelo próprio símbolo.

</div>

<span v-click></span>

<!--
Click 6: a logo (que aparece espelhada, "no lado errado") volta à posição original.
Brincadeira visual com o copyleft / PotiLeft. A logo é o copyleft serifado: um P
espelhado dentro do círculo, tudo preto e branco. É o DNA visual desta palestra.
-->

---
layout: default
---

<div class="eyebrow">2004 – 2014 · o PSL-RN</div>

# Antes da PotiLivre: o PSL-RN

A história do software livre no RN não começa em 2013. Em 2004, **Gustavo "Bozo" Ribeiro** liderou a criação do **Projeto Software Livre Rio Grande do Norte (PSL-RN)**, o primeiro movimento organizado do estado.

<div class="grid grid-cols-2 gap-x-8 gap-y-1 mt-4 small">
<div>

| Ano | Marco |
|----|-------|
| **2004** | Fundação do PSL-RN · artigo "GPL sem medo" |
| **2005** | 1º FLISoL no RN · I Encontro Potiguar (I EPSL) |
| **2006** | I Encontro Nordestino (ENSL) · colabora no FISL |
| **2007** | II ENSL (Aracaju) · III EPSL |

</div>
<div>

| Ano | Marco |
|----|-------|
| **2009** | III ENSL (Salvador) |
| **2010** | IV EPSL · IV ENSL sediado em Natal |
| **2011** | V ENSL (Maceió) |
| **2014** | Encerramento do PSL-RN |

</div>
</div>

<div v-click class="mt-3">

> O PSL-RN criou os **"Dias Livres"**: micro-eventos de palestras em escolas, precursores dos eventos descentralizados que chegariam ao interior.

</div>

<!--
Bozo é figura recorrente: ele volta no slide das licenças. "GPL sem medo" foi um guia
prático pra dev brasileiro aplicar a GPL sem intimidação. Em 2004.
-->

---
layout: two-cols
---

<div class="eyebrow">2013 · em paralelo</div>

# Nasce a PotiLivre

Em 2013 surge a PotiLivre. Não como sucessora do PSL-RN, mas **em paralelo**: uma comunidade nova, com vida própria, somando forças ao movimento que já existia.

::left::

<div class="card-title">O que a define</div>
<v-clicks>

- **Comunidade nova**, fundada em paralelo ao PSL-RN, não como continuação
- Mantida **100% por voluntários**, sem hierarquia nem cargos
- **Ponto de integração** entre vários grupos locais: Python, PHP, Debian, segurança, design
- Aberta a **qualquer pessoa** que queira aprender, ensinar ou organizar

</v-clicks>

::right::

<div class="card card-fill h-full flex flex-col justify-center">

> Uma comunidade de voluntários. Sem cargo acima, sem reconhecimento individual.

<div class="mt-3 small text-ink">

A liderança se dá pela **manutenção**: quem cuida, conduz. E passa a responsabilidade adiante.

</div>

</div>

<!--
Ponto-chave: PotiLivre veio EM PARALELO ao PSL-RN, não como renascimento/sucessão.
Não citar fundadores nominalmente: ainda não há confirmação dessa informação.
O foco é o caráter da comunidade: voluntária, sem hierarquia, integradora.
-->

---
layout: default
hideFooter: true
---

<div class="eyebrow">10+ anos de atividade quase contínua</div>

# Uma década de eventos

<div class="grid grid-cols-3 gap-6 mt-2">

<div>
<div class="card-title">Era de formação · 2013–2016</div>

- **FLISoL Natal**, anual desde 2013
- **Software Freedom Day** em Natal (IMD/UFRN)
- **Python Day Natal**
- **PotiCon**: 1ª Conferência Potiguar de Software Livre *(2016)*

</div>

<div>
<div class="card-title">Expansão · 2017–2019</div>

- **PotiCon** 2ª e 3ª edições
- **PotiTour** Ceará-Mirim
- Encontros em **Mossoró** e **Caraúbas** (UFERSA)
- Chega ao **interior**: Pau dos Ferros, Russas/CE

</div>

<div>
<div class="card-title">Continuidade · 2023–2026</div>

- **Potiday Dados** *(2023)*
- **Debian Day Natal** *(2024, 2025)*
- **FLISoL** no IFRN Central
- **Dia do Software Livre** no SEBRAE/RN
- **FLISoL** quase ininterrupto desde 2013 (presencial em 2022)
- **FLISoL 2026**: a luta continua

</div>

</div>

<div class="grid grid-cols-3 gap-6 mt-6">
<div class="card card-ink"><span class="stat-num">28+</span><div class="stat-label">eventos documentados</div></div>
<div class="card card-fill"><span class="stat-num">11</span><div class="stat-label">cidades do RN alcançadas</div></div>
<div class="card card-fill"><span class="stat-num">10+</span><div class="stat-label">anos de atividade quase contínua</div></div>
</div>

<!--
Números exatos de participantes não estão todos documentados. FLISoL e PotiCon reúnem
dezenas a centenas. O ponto: continuidade e capilaridade pro interior.
-->

---
layout: two-cols
---

<div class="eyebrow">Mapeamento 2024</div>

# O retrato da comunidade

A própria PotiLivre se mapeou em 2024. **29 respostas, 11 cidades.**

::left::

<div class="space-y-3">
<div class="flow-step"><span class="n wide">62%</span><div>são de Natal, mas há gente de Parnamirim, São Gonçalo, Antônio Martins, Jardim de Piranhas…</div></div>
<div class="flow-step"><span class="n wide">100%</span><div>usam ou têm interesse em software livre</div></div>
<div class="flow-step"><span class="n wide">93%</span><div>têm graduação, especialização ou doutorado</div></div>
</div>

<div class="mt-3 small text-muted">
Faixa etária equilibrada: 41% entre 25–34, 31% entre 35–54, 28% entre 18–24.
</div>

::right::

<div class="card card-ink flex flex-col justify-center h-full">
<div class="stat-num" style="font-size:4rem">91,7%</div>
<div class="stat-label" style="font-size:0.85rem">se identificam como homens. A própria comunidade reconhece isso como <strong style="color:#fff">desafio de diversidade</strong>.</div>
</div>

<div v-click class="mt-4">

> Comunidade livre não é automaticamente comunidade justa. Ela precisa ser **conscientemente construída**, e o mapeamento é o primeiro passo.

</div>

<!--
Conectar com Ana Clara / PyLadies / HexQueens do slide anterior: já há sementes,
mas o número escancara o trabalho que falta. Honestidade da comunidade consigo mesma.
-->

---
layout: section
part: Bloco 02
duration: ~18 min
---

# O que é software livre<br/>e por que a licença importa

Liberdade não é preço. E licença não é burocracia, é estratégia.

---
layout: two-cols
---

<div class="eyebrow">A base de tudo</div>

# As 4 liberdades

Software livre não é sobre **preço**. É sobre **liberdade**.

::left::

<v-clicks>

<div class="flow-step"><span class="n">0</span><div>Executar o programa como quiser, para <strong>qualquer propósito</strong></div></div>
<div class="flow-step"><span class="n">1</span><div><strong>Estudar</strong> como funciona e adaptá-lo</div></div>
<div class="flow-step"><span class="n">2</span><div><strong>Redistribuir</strong> cópias para ajudar outras pessoas</div></div>
<div class="flow-step"><span class="n">3</span><div>Distribuir suas <strong>versões modificadas</strong></div></div>

</v-clicks>

::right::

<div class="card card-fill">
<div><strong>Livre ≠ Gratuito</strong></div>
<div><strong>Livre ≈ Código Aberto</strong> <span class="text-muted">(com diferenças filosóficas)</span></div>
</div>

<div class="mt-4 small">
<strong>1983</strong> · Richard Stallman inicia o Projeto <strong>GNU</strong>.<br/>
<strong>1991</strong> · Linus Torvalds lança o kernel <strong>Linux</strong>.<br/>
GNU + Linux = o sistema operacional livre de referência mundial.
</div>

<div class="logo-row mt-4">
  <Pic src="img/torvalds.jpg" class="h-16 rounded object-cover" style="filter:grayscale(1)" alt="Linus Torvalds" />
  <Brand name="gnu" h="40" />
  <Brand name="linux" h="40" />
</div>

<!--
As 4 liberdades são numeradas de 0 a 3 de propósito: começam no zero, como bom programa.
Stallman fundou o GNU/FSF; Torvalds escreveu o kernel.
-->

---
layout: default
hideFooter: true
---

<div class="eyebrow">Licenças livres · o espectro</div>

# De "faça o que quiser" a "abra até no SaaS"

<div class="mt-3 t-xs">

| Categoria | Licenças & exemplos | Copyleft | Patentes | Abre no SaaS |
|-----------|---------------------|:--------:|:--------:|:-----------:|
| **Permissivas**<br/><span class="tiny text-muted">use, feche, faça o que quiser; só mantenha o crédito</span><br/><Brand name="git" h="14" /> <Brand name="react" h="14" /> <Brand name="apache" h="14" /> <Brand name="kubernetes" h="14" /> | <span class="tag">MIT</span> <span class="tag">BSD</span> <span class="tag">Apache 2.0</span> | <span class="no">não</span> | <span class="yes">só Apache</span> | <span class="no">não</span> |
| **Copyleft fraco / por arquivo**<br/><span class="tiny text-muted">só o arquivo modificado segue livre</span><br/><Brand name="firefoxbrowser" h="14" /> <Brand name="libreofficewriter" h="14" /> | <span class="tag">LGPLv3</span> <span class="tag">MPL 2.0</span> <span class="tag">EPL 2.0</span> | <span class="yes">fraco</span> | <span class="yes">sim</span> | <span class="no">não</span> |
| **Copyleft forte**<br/><span class="tiny text-muted">todo derivado redistribuído também é livre</span><br/><Brand name="linux" h="14" /> <Brand name="git" h="14" /> <Brand name="wordpress" h="14" /> | <span class="tag">GPLv2</span> <span class="tag">GPLv3</span> | <span class="yes">forte</span> | <span class="yes">GPLv3</span> | <span class="no">não</span> |
| **Copyleft + rede**<br/><span class="tiny text-muted">abre o código mesmo rodando como serviço</span><br/><Brand name="nextcloud" h="14" /> <Brand name="mastodon" h="14" /> | <span class="tag tag-solid">AGPLv3</span> | <span class="yes">forte</span> | <span class="yes">sim</span> | <span class="yes">SIM</span> |

</div>

<div class="grid grid-cols-2 gap-6 mt-2 tiny">
<div class="card card-ink">
<strong style="color:#fff">AGPL fecha a "brecha SaaS"</strong>: se roda em servidor e outros acessam pela rede, você precisa abrir o código. É a licença do Nextcloud e do Mastodon.
</div>
<div class="card card-fill">
Hardware aberto também tem copyleft: <strong>CERN OHL</strong> (forte / fraca / permissiva).<br/>
Conteúdo e documentação: <strong>CC BY-SA</strong> (Wikipedia, OpenStreetMap).
</div>
</div>

<!--
Não decorar a tabela. A ideia: licença é um dial de "quão livre o derivado precisa ser".
Permissiva = adoção máxima. AGPL = proteção máxima. O resto está no meio.
-->

---
layout: default
---

<div class="eyebrow">O lado escuro · "fauxpen source"</div>

# Quando "open" deixa de ser livre

Licenças *source-available*: você vê o código, mas **não pode** usá-lo livremente. A OSI **não** reconhece nenhuma como open source.

<div class="mt-2 t-xs">

| Licença | O que restringe | Quem usou | O fork que nasceu |
|---------|-----------------|-----------|-------------------|
| **SSPL** | Quem oferece como serviço deve abrir **todo o stack**, inviabilizando nuvem concorrente | MongoDB, Elastic, Redis | OpenSearch · Valkey |
| **BSL / BUSL 1.1** | Proíbe uso comercial por "concorrentes". Vira open source só após 4 anos | HashiCorp / Terraform | **OpenTofu** |
| **Elastic License v2** | Não pode oferecer serviço gerenciado concorrente | Elasticsearch | **OpenSearch** (AWS) |
| **RSALv2** | Idem SSPL, para o Redis | Redis *(2024, revertido em 2025)* | **Valkey** (Linux Foundation) |
| **Proprietária** | Sem acesso, sem modificação, sem redistribuição | Office, Adobe, Oracle DB | dependência total |

</div>

<div class="logo-row mt-3 justify-center">
<Brand name="mongodb" h="19" label="MongoDB" />
<Brand name="elastic" h="19" label="Elastic" />
<Brand name="redis" h="19" label="Redis" />
<Brand name="terraform" h="19" label="Terraform" />
<span class="text-muted">→</span>
<Brand name="opensearch" h="19" label="OpenSearch" />
<Brand name="opentofu" h="19" label="OpenTofu" />
</div>

<!--
Em todos os casos a comunidade respondeu com fork sob fundação neutra.
Guardar o gancho: isso vira o Bloco 3 inteiro.
-->

---
layout: two-cols
---

<div class="eyebrow">Caso real · fguisso/gapes</div>

# Licença é estratégia de circulação

Um projeto, dois objetivos diferentes → **duas licenças**.

::left::

<div class="card mb-3">
<div class="card-title">⬡ Software principal</div>
<div class="small">Acesso amplo, gratuito, sempre moderno.</div>
<div class="mt-2"><span class="tag">AGPLv3</span></div>
<div class="tiny text-muted mt-1">Ninguém fecha o código; todos têm a versão mais recente.</div>
</div>

<div class="card">
<div class="card-title">⬢ SDK / integração</div>
<div class="small">Adoção máxima por grandes empresas e IA.</div>
<div class="mt-2"><span class="tag">Apache 2.0 / MIT</span></div>
<div class="tiny text-muted mt-1">Se fosse GPL, empresas evitariam por risco jurídico → o projeto não chegaria longe.</div>
</div>

::right::

<div class="h-full flex flex-col justify-center">

> Licença não é só ideologia. **Licença é estratégia.**

<div class="mt-4 lead">

A pergunta não é *"qual é mais livre?"*, e sim *"como esse código vai ganhar espaço sem ser **capturado** no caminho?"*

</div>

<div class="card card-ink mt-5">
<div class="card-title"><Brand name="git" h="18" /> O projeto, aberto</div>
<div class="small">Código, licenças e SDK no GitHub: <a href="https://github.com/fguisso/gapes" style="color:#fff">github.com/fguisso/gapes</a></div>
</div>

</div>

<!--
Exemplo concreto e meu. Núcleo blindado por copyleft; bordas (SDK) abertas pra integração.
É o mesmo raciocínio que a Apache Foundation usa.
-->

---
layout: default
clicks: 6
hideFooter: true
---

<div class="eyebrow">Mapa mental · qual licença escolher</div>

# Uma árvore de decisão

<LicenseMindmap :step="$clicks" />

<div style="display:none"><span v-click></span><span v-click></span><span v-click></span><span v-click></span><span v-click></span><span v-click></span></div>

<!--
Mapa mental interativo: cada seta abre o popup de um ramo (MIT/Apache, GPL/AGPL,
LGPL/MPL, CERN OHL, Creative Commons) e o ramo anterior volta ao mapa. O último
clique mostra as 3 perguntas antes de publicar.
-->

---
layout: two-cols
---

<div class="eyebrow">2004 · "GPL sem medo"</div>

# Licença é proteção histórica

No artigo **[GPL sem medo](https://www.dicas-l.com.br/arquivo/gpl_sem_medo_como_libertar_seu_codigo.php)** (2004), Gustavo "Bozo" Ribeiro explicou algo que poucos entendiam.

::left::

<div class="card card-ink">

> **Domínio público ≠ Software livre.**
>
> Código *sem licença* pode ser apropriado por qualquer um, que vira o "autor" sem que você possa contestar.

<div class="small mt-2" style="color:#fff">A GPL <strong style="color:#fff">protege contra oportunistas</strong>.</div>

</div>

::right::

<div class="card-title">Os passos do artigo</div>

<v-clicks>

<div class="flow-step"><span class="n">1</span><div>Aviso de copyright + declaração GPL em cada arquivo</div></div>
<div class="flow-step"><span class="n">2</span><div>Arquivo <code>COPYING</code> com o texto integral da GPL</div></div>
<div class="flow-step"><span class="n">3</span><div><code>README</code> com seus dados de contato</div></div>
<div class="flow-step"><span class="n">4</span><div>Cópia em português da licença, para entendimento</div></div>
<div class="flow-step"><span class="n">5</span><div><span class="tag">hoje</span> Um passo que não estava no tutorial: o arquivo <code>LICENSE</code> na raiz do repositório, convenção atual do GitHub e do mundo open source.</div></div>

</v-clicks>

<!--
Bozo é o fio condutor: do PSL-RN ao artigo. O 5º passo é acréscimo nosso: na época
o padrão era COPYING; hoje a convenção do GitHub é o arquivo LICENSE na raiz.
-->

---
layout: section
part: Bloco 03
duration: ~12 min
---

# Quando a licença muda,<br/>muda a geografia do poder

Três projetos amados. Três viradas de licença. Três forks.

---
layout: default
---

<div class="eyebrow">O padrão recorrente</div>

# Captura corporativa, em 6 atos

<div class="grid grid-cols-2 gap-8 mt-2">

<div class="small">

| Projeto | De → Para | Ano | Fork |
|---------|-----------|-----|------|
| <Brand name="elastic" h="15" /> **Elasticsearch** | Apache 2.0 → SSPL/ELv2 | 2021 | OpenSearch |
| <Brand name="terraform" h="15" /> **Terraform** | MPL 2.0 → BSL 1.1 | 2023 | OpenTofu |
| <Brand name="redis" h="15" /> **Redis** | BSD → SSPL/RSAL | 2024 | Valkey |
| <Brand name="mongodb" h="15" /> **MongoDB** | AGPL → SSPL | 2018 | DocumentDB |

<div class="logo-row mt-4" style="gap:0.9rem">
<span class="text-muted tiny">forks:</span> <Brand name="opensearch" h="22" /><Brand name="opentofu" h="22" />
</div>

</div>

<div>
<v-clicks>

<div class="flow-step"><span class="n">1</span><div>Empresa lança projeto open source</div></div>
<div class="flow-step"><span class="n">2</span><div>Ganha comunidade, adoção, contribuições</div></div>
<div class="flow-step"><span class="n">3</span><div>Nuvem concorrente oferece o projeto como serviço</div></div>
<div class="flow-step"><span class="n">4</span><div>Empresa muda a licença para "fauxpen source"</div></div>
<div class="flow-step"><span class="n">5</span><div>Comunidade forka sob uma <strong>fundação neutra</strong></div></div>
<div class="flow-step"><span class="n">6</span><div>O fork mantém o espírito aberto</div></div>

</v-clicks>
</div>

</div>

<div v-click class="mt-3">

> *"Looks like Elastic has sucked all the benefit they could from open source and is now spitting out the bones."*

<div class="text-muted small mt-1" style="font-style:normal">Simon Phipps · Open Source Initiative</div>

</div>

---
layout: two-cols
---

<div class="eyebrow">A lição</div>

# O que protege um bem comum

::left::

<div class="card-title text-muted">Quando a governança é centralizada demais</div>
<v-clicks>

- A empresa **recolhe para si** o valor criado pela comunidade
- Contribuidores que trabalharam sob a promessa do bem comum ficam **sem defesa**
- A **confiança**, o ativo mais importante, é destruída

</v-clicks>

::right::

<div class="card-title">O que protege</div>
<v-clicks>

- **Copyleft genuíno** (GPL/AGPL) desde o início
- **Governança neutra**: Linux Foundation, Apache, CNCF
- **Fundações independentes** que não se compram junto com a empresa

</v-clicks>

<div v-click class="card card-fill mt-3">

> **A comunidade venceu:** Elastic (2024) e Redis (2025) voltaram a licenças open source aprovadas pela OSI, sob pressão dos forks.

</div>

---
layout: section
part: Bloco 04
duration: ~12 min
---

# Soberania, conhecimento<br/>e hardware livre

Quem controla o formato controla a memória. Quem controla a patente controla o futuro.

---
layout: two-cols
---

<div class="eyebrow">Soberania digital</div>

# Dependência tecnológica é dependência política

O `ODF` (ISO/IEC 26300, 2006) é aberto e de todos. O `.docx` é proprietário. **Quem controla o formato controla a memória dos documentos.**

::left::

<div class="small">

| Contexto | Situação |
|----------|----------|
| **Brasil** 24–25 | R$ **10,35 bi**/ano com Google, Microsoft e Oracle. 45ª posição em soberania digital (de 57) |
| **Schleswig-Holstein** | 80% dos desktops públicos em LibreOffice. €15 mi economizados. ODF oficial |
| **Dinamarca** | Ministério migra para LibreOffice em 2025 |

</div>

<div class="logo-row mt-3">
<Brand name="odf" h="26" label="OpenDocument" /><Brand name="libreofficewriter" h="24" label="LibreOffice" />
</div>

::right::

<div class="card card-ink h-full flex flex-col justify-center">
<div class="tiny" style="color:#fff;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:0.5rem">Ministra da Dinamarca</div>

> We must never make ourselves so dependent on so few that we can no longer act freely.

</div>

<!--
ANOTAÇÃO PESSOAL, contar ao vivo:
Minha mulher precisou abrir um HD externo com fotos antigas da família, formatado em NTFS
(proprietário da Microsoft). Sem Windows em casa, o MacBook não lia. Teve que achar outro PC,
copiar tudo, reformatar em formato aberto pra recuperar as memórias. Fotos de família quase
perdidas por causa de um formato fechado. O formato que você escolhe hoje decide se você abre
seus arquivos daqui a 10 anos.
-->

---
layout: two-cols
---

<div class="eyebrow">1986 – 2013</div>

# Aaron Swartz

O custo de lutar pelo conhecimento livre.

::left::

<Pic src="img/swartz.jpg" class="rounded-lg object-cover w-full" style="max-height:300px;filter:grayscale(1)" alt="Aaron Swartz" />

<div class="tiny text-muted mt-1 text-center">Aaron Swartz · CC BY-SA, Wikimedia Commons</div>

::right::

<div class="small">

- Aos **14 anos**: especificação do **RSS 1.0**
- Arquitetura técnica do **Creative Commons**
- Co-definiu a sintaxe do **Markdown**
- **Open Library** (Internet Archive)
- Figura central na derrota do **SOPA/PIPA** (2012)

</div>

<div class="card card-ink mt-3 tiny">
<div class="card-title">O caso JSTOR / MIT</div>
Em 2010–11 baixou <strong style="color:#fff">4 milhões de artigos</strong> do JSTOR (produzidos com dinheiro público) pela rede do MIT. O JSTOR não processou; o governo federal acusou em 13 pontos, com pena de até <strong style="color:#fff">50 anos</strong> e US$ 1 milhão. Sob essa pressão, tirou a própria vida em <strong style="color:#fff">11 de janeiro de 2013</strong>, aos 26 anos.
</div>

<div v-click class="mt-3">

> *"Information is power. But like all power, there are those who want to keep it for themselves."*

</div>

<!--
Tom mais grave aqui. Legado: acelerou o acesso aberto, JSTOR abriu parte do acervo, Europa criou o Plan S.
A pergunta sem resposta fácil: quem tem o direito de cercar o conhecimento produzido coletivamente?
-->

---
layout: two-cols
---

<div class="eyebrow">Hardware livre</div>

# Quando a patente cai, a democratização começa

A história da impressora 3D em uma linha do tempo.

::left::

<div class="tiny">

| Ano | Marco |
|-----|-------|
| 1988 | Scott Crump patenteia o **FDM** e funda a Stratasys |
| 1991 | Primeiras FDM comerciais: dezenas de milhares de dólares |
| 2005 | Adrian Bowyer cria o **RepRap**, impressora 3D open source (GPL) que imprime as próprias peças |
| **2009** | **A patente FDM expira** |
| 2009+ | MakerBot, Ultimaker, **Prusa**: preço cai ~100× |

</div>

<div class="card card-ink mt-2 tiny">
Duas décadas de patente = tecnologia cara e centralizada. <strong style="color:#fff">A patente expira e a comunidade transforma a fabricação pessoal.</strong>
</div>

::right::

<Pic src="img/reprap.jpg" class="rounded-lg object-cover w-full" style="max-height:190px;filter:grayscale(1)" alt="RepRap" />
<div class="tiny text-muted mt-1 text-center">RepRap "Mendel" · Wikimedia Commons</div>

<div class="card card-fill mt-3">
<div class="card-title"><Brand name="cern" h="20" /> CERN OHL v2 (2020)</div>
<div class="tiny">As liberdades do software livre aplicadas ao hardware. Aprovada pela OSI em 2021.<br/>
<span class="tag">OHL-S forte</span> <span class="tag">OHL-W fraca</span> <span class="tag">OHL-P permissiva</span></div>
</div>

---
layout: two-cols
---

<div class="eyebrow">Hardware Livre USP · IME-USP</div>

# A centrífuga que custa uma fração

Microcentrífuga de laboratório **open source** (2016), para o iGEM USP-UNIFESP. A comercial equivalente custa **mais de R$ 3.000**.

::left::

<div class="card-title">A versão livre usa</div>

- **Arduino** + ESC + motor de aeromodelo
- **MDF** cortado a laser
- 8 microtubos · **2.000–15.000 RPM** · 110/220V

<div class="logo-row mt-2"><Brand name="arduino" h="24" label="Arduino" /></div>

<div v-click class="card mt-3 tiny" style="line-height:1.42">
<div class="card-title">⚠ Arduino + Qualcomm · status jun/2026</div>
<strong>Ainda livre:</strong> IDE, bibliotecas e esquemáticos seguem GPL/LGPL; placas físicas e uso offline sem restrições.<br/>
<strong>Mudou e preocupa:</strong> Arduino Cloud e serviços online com termos restritivos e coleta de dados via Qualcomm; sem garantia de patentes; contribuir exige aceitar política de 6.000 palavras.<br/>
<strong>Alternativas:</strong> ESP32, RP2040/Pico, Teensy, MicroPython, PlatformIO.
</div>

::right::

<div class="card card-ink h-full flex flex-col justify-center">

- 🥈 **Medalha de Prata** no iGEM 2016
- Citada pelo blog da **Adafruit**
- Código, esquemas e manual **livres no GitHub**

<div class="mt-3" style="color:#fff">

> Hardware livre não é hobby. É **democratização do acesso à ciência.**

</div>

</div>

---
layout: default
hideFooter: true
---

<div class="eyebrow">Hardware livre · ciência aberta</div>

# Não é só a centrífuga

Quando esquemas **e** código são abertos, equipamento científico caro vira acessível. Todos abaixo são **hardware livre e software livre**.

<div class="mt-3 t-xs">

| Equipamento | Para quê | Comercial | Aberto | Projeto |
|-------------|----------|-----------|--------|---------|
| **Termociclador PCR** | amplificar DNA: diagnóstico (até COVID), genética, forense | US$ 5k a 50k+ | US$ 50 a 499 | [OpenPCR](https://openpcr.org) · [NinjaPCR](https://github.com/hisashin/NinjaPCR) |
| **Bomba de seringa** | medicação precisa em UTI e cirurgia | US$ 500 a 10k | 5 a 10% do custo | [Poseidon](https://github.com/pachterlab/poseidon) |
| **Microscópio de fluorescência** | neurociência: zebrafish, moscas, vermes | dezenas a centenas de mil € | €100 | [FlyPi](https://doi.org/10.1371/journal.pbio.2002702) |
| **EEG** | atividade cerebral, interface cérebro-máquina | milhares de US$ | US$ 200 a 500 | [OpenBCI](https://openbci.com) |
| **Espectrômetro** | composição química de amostras | US$ 10k a 100k+ | fração do custo | [Public Lab](https://publiclab.org/wiki/spectrometer) |
| **Ventilador mecânico** | suporte respiratório (COVID-19) | US$ 25k a 50k | projetos emergenciais | [MIT E-Vent](https://e-vent.mit.edu) |

</div>

<div class="card card-fill mt-3 tiny">
Em quase todos, <strong>hardware e software são abertos</strong>: esquemas em CAD/KiCad e firmware em Arduino ou Raspberry Pi. O FlyPi, criado pelo brasileiro <strong>André Maia Chagas</strong>, já foi ensinado a montar em universidades de Quênia, Uganda, Gana, Nigéria, África do Sul, Sudão e Tanzânia. Abrir o projeto baixa a barreira da ciência de milhares de dólares para dezenas.
</div>

---
layout: section
part: Bloco 05
duration: ~5 min
---

# Por que essa luta<br/>ainda importa

---
layout: statement
fist: true
---

<div style="max-width: 32ch">
<div class="flow-step"><span class="n">⬡</span><div class="lead" style="font-size:1.15rem">Abrimos o <strong>código</strong> → abrimos a <strong>ferramenta</strong>.</div></div>
<div class="flow-step"><span class="n">⬡</span><div class="lead" style="font-size:1.15rem">Abrimos o <strong>formato</strong> → abrimos a <strong>memória</strong>.</div></div>
<div class="flow-step"><span class="n">⬡</span><div class="lead" style="font-size:1.15rem">Abrimos o <strong>hardware</strong> → fabricamos o <strong>futuro</strong>.</div></div>
<div class="flow-step"><span class="n">⬡</span><div class="lead" style="font-size:1.15rem">Construímos <strong>comunidade</strong> → liberdade <strong>sustentável</strong>.</div></div>
</div>

<div v-click class="mt-6">

> Quem decide como **trabalhamos**, **estudamos**, **publicamos**, **governamos** e como **lembramos**?

</div>

<!--
Ler com pausas. Cada linha é um bloco da palestra recapitulado.
Comunidade: nenhuma liberdade é sustentável sem vida coletiva.
Licença: toda liberdade sem proteção institucional pode ser recapturada.
Luta: sem disputa política, a tecnologia volta sempre pra mão de poucos.
-->

---
layout: default
---

<div class="eyebrow">Chamada à ação</div>

# O que fazer a partir de agora

<div class="grid grid-cols-3 gap-5 mt-2">

<div class="card">
<div class="card-title">Estudantes & devs</div>
<v-clicks>

- Conheça as licenças **antes** de publicar o próximo projeto
- Contribua com um projeto livre, inclusive a **PotiLivre**
- Vá aos eventos: FLISoL, Debian Day, PotiCon

</v-clicks>
</div>

<div class="card">
<div class="card-title">Gestores & instituições</div>
<v-clicks>

- Adote **ODF** como formato padrão
- Avalie **LibreOffice** nos desktops
- Exija **soberania tecnológica** nas licitações de TI

</v-clicks>
</div>

<div class="card card-ink">
<div class="card-title">Para todos</div>
<v-clicks>

- **Questione** quem controla as ferramentas que você usa
- **Apoie** comunidades como a PotiLivre: elas existem por amor

</v-clicks>
</div>

</div>

<div v-click class="mt-5 text-center">
<div class="logo-row justify-center">
<Brand name="gnu" h="30" /><Brand name="linux" h="30" /><Brand name="debian" h="30" /><Brand name="python" h="30" /><Brand name="libreofficewriter" h="28" /><Brand name="nextcloud" h="30" /><Brand name="mastodon" h="30" />
</div>
</div>

---
layout: center
---

<Pic src="logos/potilivre.png" class="mx-auto mb-6" style="height:150px;filter:grayscale(1)" alt="PotiLivre" />

> Mude, mas comece devagar, porque a direção é mais importante que a velocidade.

<div class="text-muted mt-5 small">Clarice Lispector · frase usada pela PotiLivre</div>

<div class="mt-10">
  <AvatarBadge class="inline-flex" />
</div>

<!--
Encerramento. Respirar. Agradecer. Convidar pra próxima FLISoL.
-->

---
layout: default
---

<div class="eyebrow">Apêndice · fontes & links</div>

# Para ir mais fundo

<div class="grid grid-cols-2 gap-x-10 small mt-2">

| Comunidade & licenças | Link |
|-----------------------|------|
| PotiLivre | [potilivre.org](https://potilivre.org) |
| FLISoL Natal | [flisol.potilivre.org](https://flisol.potilivre.org) |
| GPL sem medo (2004) | [dicas-l.com.br](https://www.dicas-l.com.br/arquivo/gpl_sem_medo_como_libertar_seu_codigo.php) |
| OpenTofu · OpenSearch | [opentofu.org](https://opentofu.org) · [opensearch.org](https://opensearch.org) |
| Valkey | [valkey.io](https://valkey.io) |
| CERN OHL | [ohwr.org](https://ohwr.org/cernohl) |

| Hardware & ciência aberta | Link |
|---------------------------|------|
| Hardware Livre USP | [hardwarelivreusp.org](https://hardwarelivreusp.org) |
| OpenPCR · NinjaPCR | [openpcr.org](https://openpcr.org) · [NinjaPCR](https://github.com/hisashin/NinjaPCR) |
| Poseidon · FlyPi | [Poseidon](https://github.com/pachterlab/poseidon) · [FlyPi](https://doi.org/10.1371/journal.pbio.2002702) |
| OpenBCI · MIT E-Vent | [openbci.com](https://openbci.com) · [e-vent.mit.edu](https://e-vent.mit.edu) |
| Aaron Swartz | [archive.org](https://archive.org/details/AaronSwartz) |
| Estudo R$ 10 bi | [Intercept Brasil](https://www.intercept.com.br) (jul/2025) |

</div>

<div class="mt-5 tiny text-muted">
Conteúdo com base em fontes públicas e em pesquisa de junho/2026.
Logos via Simple Icons e Wikimedia Commons. Fontes Inter, Newsreader, Instrument Serif e JetBrains Mono (SIL OFL 1.1), auto-hospedadas, sem CDN.
Licença deste documento: <strong>CC BY-SA 4.0</strong>.
</div>


