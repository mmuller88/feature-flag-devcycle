import { web } from 'projen';
import { TrailingComma } from 'projen/lib/javascript';

const project = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'feature-flag-devcycle',
  projenrcTs: true,

  deps: ['@devcycle/devcycle-react-sdk'],

  // eslint: true,
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
      trailingComma: TrailingComma.ALL,
    },
  },
});
project.synth();
