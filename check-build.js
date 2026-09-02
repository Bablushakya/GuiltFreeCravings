// Quick build check script
const { execSync } = require('child_process');

console.log('🔍 Checking for TypeScript errors...\n');

try {
  execSync('npx tsc --noEmit', { stdio: 'inherit', cwd: __dirname });
  console.log('\n✅ No TypeScript errors found!');
  process.exit(0);
} catch (error) {
  console.log('\n❌ TypeScript errors found. Please fix them before deploying.');
  process.exit(1);
}
