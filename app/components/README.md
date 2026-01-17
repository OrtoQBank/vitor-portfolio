# Componentes do Site

Esta pasta contém todos os componentes organizados da página principal.

## Estrutura de Componentes

### 🎨 Layout Principal
- **Header.tsx** - Navegação fixa no topo com logo e links
- **HeroSection.tsx** - Seção hero com gradiente e CTAs (inclui Header)
- **Footer.tsx** - Rodapé com informações de contato e links

### 📊 Seções de Conteúdo
- **TrustBadges.tsx** - Badges de certificações (SBOT, SBCJ, etc.)
- **DifferenceSection.tsx** - Seção de destaque com título grande
- **Testimonials.tsx** - Depoimentos de pacientes
- **Stats.tsx** - Estatísticas em números (2000+ cirurgias, etc.)
- **Specialties.tsx** - Áreas de especialização (Artrose e Lesões Esportivas)
- **Treatments.tsx** - Grid com procedimentos realizados
- **About.tsx** - Sobre o médico com cards de credenciais
- **FAQ.tsx** - Perguntas frequentes com accordions

### 🎯 CTAs (Call to Action)
- **FeaturedCTA.tsx** - CTA intermediário com gradiente
- **FinalCTA.tsx** - CTA final com botões de contato

## Como Usar

### Importação Individual
```tsx
import HeroSection from "./components/HeroSection";
import About from "./components/About";
```

### Importação via Barrel (index.ts)
```tsx
import { HeroSection, About, Footer } from "./components";
```

## Estrutura da Página Principal

```tsx
<HeroSection />        // Hero com gradiente + imagem do doutor
<TrustBadges />        // Certificações
<DifferenceSection />  // Destaque "Dr. Vitor. Segurança..."
<Testimonials />       // Depoimentos
<Stats />              // Estatísticas
<Specialties />        // Especialidades
<FeaturedCTA />        // CTA intermediário
<Treatments />         // Procedimentos
<About />              // Sobre o médico
<FAQ />                // Perguntas frequentes
<FinalCTA />           // CTA final
<Footer />             // Rodapé
```

## Customização

Cada componente é independente e pode ser:
- ✅ Reordenado
- ✅ Removido
- ✅ Customizado individualmente
- ✅ Reutilizado em outras páginas
