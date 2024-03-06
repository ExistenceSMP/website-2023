#!/bin/sh

# Install deno
curl -fsSL https://deno.land/x/install/install.sh | sh

echo "import 'lume/cli.ts'" | /vercel/.deno/bin/deno run --unstable -A - --config _lume.ts