# Usando node:alpine como base
FROM node:alpine AS base

# Instalar dependências necessárias para o ambiente de execução
RUN apk add --no-cache libc6-compat

# Configurando o diretório de trabalho
WORKDIR /app

# Instalar o pnpm globalmente e preparar para instalação de pacotes
RUN npm install -g pnpm

# Instalar as dependências baseadas no arquivo de lock
COPY package.json pnpm-lock.yaml* ./
RUN if [ -f pnpm-lock.yaml ]; then \
      pnpm install --frozen-lockfile; \
    else \
      echo "Lockfile not found." && exit 1; \
    fi

FROM base AS development
# Copiando os arquivos do projeto
COPY . .

# Executando comandos preparatórios se necessário
RUN if [ -f pnpm-lock.yaml ]; then \
      pnpm run prepare; \
    fi

# Expondo a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["pnpm", "run", "dev"]
