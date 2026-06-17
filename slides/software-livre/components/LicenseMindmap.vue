<template>
  <div class="mm">
    <!-- left: the mind map (always visible) -->
    <div class="mm-tree">
      <div class="mm-root" :class="{ lit: step === 0 || step === 6 }">
        O que você quer que aconteça com o seu código?
      </div>
      <div class="mm-spine">
        <div
          v-for="(b, i) in branches"
          :key="i"
          class="mm-node"
          :class="{ active: step === i + 1, dim: step !== 0 && step !== i + 1 && step !== 6 }"
        >
          <span class="mm-tick"></span>
          <span class="mm-icon">{{ b.icon }}</span>
          <span class="mm-q">{{ b.q }}</span>
        </div>
      </div>
    </div>

    <!-- right: popup area -->
    <div class="mm-stage">
      <transition name="pop" mode="out-in">
        <!-- branch popup -->
        <div v-if="active" key="branch" class="mm-popup">
          <div class="mm-popup-head">
            <span class="mm-icon big">{{ active.icon }}</span>
            <span>{{ active.q }}</span>
          </div>
          <div class="mm-opts">
            <div v-for="(o, k) in active.opts" :key="k" class="mm-opt">
              <div class="mm-cond">
                {{ o.cond }}
                <div v-if="o.note" class="mm-note">{{ o.note }}</div>
              </div>
              <span class="tag tag-solid mm-lic">{{ o.lic }}</span>
            </div>
          </div>
        </div>

        <!-- final: 3 questions -->
        <div v-else-if="step === 6" key="final" class="mm-popup final">
          <div class="mm-popup-head"><span class="mm-icon big">✋</span><span>Antes de publicar, 3 perguntas</span></div>
          <div class="mm-opts">
            <div class="mm-opt"><div class="mm-cond"><strong>1. Tem licença?</strong><div class="mm-note">Sem licença = ninguém pode usar legalmente</div></div></div>
            <div class="mm-opt"><div class="mm-cond"><strong>2. É realmente livre?</strong><div class="mm-note">SSPL, BSL e ELv2 parecem, mas não são</div></div></div>
            <div class="mm-opt"><div class="mm-cond"><strong>3. Quem governa?</strong><div class="mm-note">Empresa única = risco. Fundação = proteção</div></div></div>
          </div>
        </div>

        <!-- idle hint -->
        <div v-else key="idle" class="mm-idle">
          <span>Avance <kbd>→</kbd> para percorrer a árvore de decisão.</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  step: { type: Number, default: 0 },
})

const branches = [
  {
    icon: '◆',
    q: 'Quero que qualquer um use, sem burocracia',
    opts: [
      { cond: 'Empresa pode fechar e vender? Tudo bem', lic: 'MIT' },
      { cond: 'Quero patentes cobertas também', lic: 'Apache 2.0' },
    ],
  },
  {
    icon: '↺',
    q: 'Quero que quem melhorar devolva para todos',
    opts: [
      { cond: 'Roda no computador de alguém', lic: 'GPLv3' },
      { cond: 'Roda num servidor e outros acessam', lic: 'AGPLv3', note: 'fecha a brecha do Google, AWS, etc.' },
    ],
  },
  {
    icon: '◳',
    q: 'É uma biblioteca: adoção com proteção',
    opts: [
      { cond: 'Pode usar em software fechado via linking', lic: 'LGPL' },
      { cond: 'Só os arquivos que mudarem devem ser abertos', lic: 'MPL 2.0' },
    ],
  },
  {
    icon: '⚙',
    q: 'É hardware: esquemas, PCB, impressora 3D',
    opts: [
      { cond: 'Copyleft forte', lic: 'CERN OHL-S' },
      { cond: 'Copyleft fraco', lic: 'CERN OHL-W' },
      { cond: 'Permissiva', lic: 'CERN OHL-P' },
    ],
  },
  {
    icon: '✎',
    q: 'É conteúdo: texto, arte, dados, documentação',
    opts: [
      { cond: 'Só quero crédito', lic: 'CC BY' },
      { cond: 'Quero que derivados fiquem abertos', lic: 'CC BY-SA' },
      { cond: 'Sem uso comercial', lic: 'CC BY-NC' },
    ],
  },
]

const active = computed(() =>
  props.step >= 1 && props.step <= branches.length ? branches[props.step - 1] : null
)
</script>

<style scoped>
.mm {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-top: 0.5rem;
  min-height: 62vh;
}

/* ── tree ── */
.mm-root {
  border: 2px solid var(--ink);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-family: var(--font-serif);
  font-size: 1.15rem;
  line-height: 1.2;
  font-weight: 500;
  max-width: 26ch;
  transition: background 0.3s ease, color 0.3s ease;
}
.mm-root.lit { background: var(--ink); color: var(--paper); }

.mm-spine {
  margin-top: 0.7rem;
  margin-left: 1.1rem;
  border-left: 2px solid var(--line);
  padding-left: 0;
}
.mm-node {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.8rem 0.5rem 1.4rem;
  margin: 0.45rem 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--paper);
  font-size: 0.86rem;
  font-weight: 500;
  transition: all 0.3s ease;
}
.mm-tick {
  position: absolute;
  left: -1.4rem;
  width: 1.4rem; height: 2px;
  background: var(--line);
}
.mm-node .mm-icon { font-size: 0.95rem; opacity: 0.7; }
.mm-node.active {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
  transform: translateX(6px);
}
.mm-node.active .mm-tick { background: var(--ink); height: 3px; }
.mm-node.active .mm-icon { opacity: 1; }
.mm-node.dim { opacity: 0.34; }

/* ── popup stage ── */
.mm-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56vh;
}
.mm-popup {
  width: 100%;
  border: 2px solid var(--ink);
  border-radius: 12px;
  background: var(--paper);
  box-shadow: 14px 16px 0 rgba(12, 12, 12, 0.08);
  padding: 1.1rem 1.3rem;
}
.mm-popup-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.15;
  padding-bottom: 0.7rem;
  margin-bottom: 0.7rem;
  border-bottom: 1px solid var(--line);
}
.mm-popup-head .mm-icon.big { font-size: 1.4rem; }
.mm-opts { display: flex; flex-direction: column; gap: 0.55rem; }
.mm-opt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.mm-cond { font-size: 0.92rem; color: var(--ink-soft); }
.mm-note { font-size: 0.74rem; color: var(--muted); margin-top: 0.1rem; }
.mm-lic { flex-shrink: 0; font-size: 0.78rem; }
.final .mm-opt { justify-content: flex-start; }

.mm-idle {
  color: var(--muted-2);
  font-size: 0.95rem;
  font-family: var(--font-serif);
  font-style: italic;
  text-align: center;
}
.mm-idle kbd {
  font-family: var(--font-mono);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 0 0.35rem;
  font-style: normal;
}

/* popup transition */
.pop-enter-active, .pop-leave-active { transition: opacity 0.28s ease, transform 0.28s ease; }
.pop-enter-from { opacity: 0; transform: translateY(10px) scale(0.97); }
.pop-leave-to { opacity: 0; transform: translateY(-8px) scale(0.98); }
</style>
