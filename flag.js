// Watson Protocol - Flag Module
// Centralize the challenge flag here so every runtime caller goes through this module.
const FLAG = 'SHERLOCK{W4TS0N_PR0T0C0L_S3CR3T_K3Y}';
const CLEARANCE_LEVEL = 'OMEGA_7';

function getFlag() {
  return FLAG;
}

module.exports = {
  getFlag,
  clearanceLevel: CLEARANCE_LEVEL
};
