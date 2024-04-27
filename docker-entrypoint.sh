#!/bin/sh

# Instalar Husky hooks se não estiverem instalados
if [ ! -d ".husky" ]; then
  npx husky install
fi

# Executar comando passado para o Docker (ex. pnpm run dev)
exec "$@"
