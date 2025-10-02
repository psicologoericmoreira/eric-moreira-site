# Eric Moreira Site

Projeto Next.js profissional com foco em performance, SEO e qualidade de código através do TDD.

## 🚀 Tecnologias Instaladas

### Core
- **Next.js 15.5.4** - Framework React com SSR/SSG
- **React 19.1.0** - Biblioteca UI
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Framework de estilização

### Testes (TDD)
- **Jest 30.2.0** - Framework de testes
- **React Testing Library 16.3.0** - Testes de componentes React
- **@testing-library/jest-dom** - Matchers customizados para Jest
- **@testing-library/user-event** - Simulação de interações do usuário
- **ts-jest** - Suporte TypeScript para Jest
- **jest-environment-jsdom** - Ambiente DOM para testes

### Gerenciamento de Estado
- **Zustand 5.0.8** - Gerenciamento de estado global leve e eficiente

### SEO & Analytics
- **react-gtm-module 2.0.11** - Google Tag Manager
- **@types/react-gtm-module** - Tipos TypeScript para GTM
- **web-vitals 5.1.0** - Monitoramento de Core Web Vitals

### UI/UX
- **react-icons 5.5.0** - Biblioteca de ícones SVG
- **react-hot-toast 2.6.0** - Notificações e feedbacks
- **react-hook-form 7.63.0** - Gerenciamento de formulários
- **yup 1.7.1** - Validação de schemas
- **date-fns 4.1.0** - Manipulação de datas

### Backend & Comunicação
- **axios 1.12.2** - Cliente HTTP
- **express 5.1.0** - Framework para servidor Node.js
- **cors 2.8.5** - Cross-Origin Resource Sharing
- **nodemon 3.1.10** - Auto-restart do servidor (dev)

### Linting & Code Quality
- **ESLint 9** - Análise estática de código
- **eslint-config-next** - Configuração ESLint otimizada para Next.js

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento (com Turbopack)
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Executar linter
npm run lint

# Executar testes em modo watch (TDD)
npm run test
```

## 🧪 TDD - Test Driven Development

O projeto está configurado para TDD. Para começar a desenvolver com TDD:

1. **Execute os testes em modo watch:**
   ```bash
   npm run test
   ```

2. **Fluxo TDD:**
   - ✍️ Escreva um teste que falhe
   - ✅ Implemente o código mínimo para o teste passar
   - 🔄 Refatore mantendo os testes verdes
   - 🔁 Repita o ciclo

3. **Exemplo de teste:**
   ```typescript
   // __tests__/exemplo.test.tsx
   import { render, screen } from '@testing-library/react';
   import MeuComponente from '@/components/MeuComponente';

   describe('MeuComponente', () => {
     it('deve renderizar o título', () => {
       render(<MeuComponente />);
       expect(screen.getByText('Título')).toBeInTheDocument();
     });
   });
   ```

## 🔍 SEO & Meta Tags

Use o componente `Head` do Next.js para gerenciar meta tags:

```tsx
import Head from 'next/head';

function MinhaPage() {
  return (
    <>
      <Head>
        <title>Título da Minha Página</title>
        <meta name="description" content="Descrição da minha página para SEO" />
        {/* Open Graph, Twitter Cards, Canonical URLs */}
      </Head>
      {/* Conteúdo da página */}
    </>
  );
}
```

## 📊 Google Tag Manager

O GTM está configurado no arquivo `app/components/GTMProvider.tsx`. 

**✅ CONFIGURADO:** O GTM ID está definido como `GTM-WBV8BLX7`:

```typescript
// app/components/GTMProvider.tsx
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WBV8BLX7';
```

Para usar variável de ambiente (opcional), crie `.env.local`:
```bash
NEXT_PUBLIC_GTM_ID=GTM-WBV8BLX7
```

## 🖼️ Otimização de Imagens

Use o componente `Image` do Next.js para otimização automática:

```tsx
import Image from 'next/image';

function MeuComponente() {
  return (
    <Image
      src="/minha-imagem.jpg"
      alt="Descrição da Imagem"
      width={500}
      height={300}
      priority // Para imagens acima da dobra
    />
  );
}
```

## 🎨 Componentes de UI

### React Icons
```tsx
import { FaHeart } from 'react-icons/fa';

<FaHeart />
```

### React Hot Toast
```tsx
import toast from 'react-hot-toast';

toast.success('Sucesso!');
toast.error('Erro!');
```

### React Hook Form + Yup
```tsx
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
});

function MeuFormulario() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('nome')} />
      <input {...register('email')} />
    </form>
  );
}
```

## 🗄️ Gerenciamento de Estado (Zustand)

```tsx
import { create } from 'zustand';

interface StoreState {
  count: number;
  increment: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Contador() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}
```

## 📈 Web Vitals

Para monitorar Core Web Vitals:

```tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🌐 Cliente HTTP (Axios)

```tsx
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exemplo.com',
});

const response = await api.get('/endpoint');
```

## ✅ Checklist de Otimizações Implementadas

### Performance
- ✅ Next.js Image para otimização de imagens
- ✅ Web Vitals para monitoramento
- ✅ SSR/SSG para pré-renderização
- ✅ Turbopack para build mais rápido

### SEO
- ✅ Meta tags configuráveis via Head
- ✅ SSR/SSG para indexação
- ✅ Suporte a Schema.org (implementar conforme necessário)

### Analytics
- ✅ Google Tag Manager configurado
- ✅ Eventos customizados (implementar conforme necessário)

### Qualidade de Código
- ✅ TypeScript para tipagem estática
- ✅ ESLint para análise de código
- ✅ Jest + RTL para testes
- ✅ TDD workflow configurado

### UI/UX
- ✅ Tailwind CSS para estilização
- ✅ React Icons para ícones
- ✅ React Hot Toast para notificações
- ✅ React Hook Form + Yup para formulários

## 🚀 Próximos Passos

1. **Substituir o GTM ID** em `app/components/GTMProvider.tsx`
2. **Implementar Schema.org** para structured data
3. **Configurar robots.txt e sitemap.xml**
4. **Adicionar manifest.json para PWA**
5. **Implementar eventos customizados do GTM**
6. **Configurar estratégias de cache (Service Worker)**

## 📝 Estrutura de Pastas

```
eric-moreira-site/
├── app/
│   ├── components/
│   │   └── GTMProvider.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── __tests__/          # Seus testes aqui
├── jest.config.js
├── jest.setup.js
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📄 Licença

Projeto privado - Eric Moreira

---

**Desenvolvido com ❤️ usando Next.js e as melhores práticas de desenvolvimento web**