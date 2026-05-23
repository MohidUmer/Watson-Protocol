#!/bin/bash
# ============================================================================
# Master Entrypoint Template for EHCP Challenges
# ============================================================================
# Launches the challenge service. The flag is defined in flag.js.

set -euo pipefail

exec node app.js
