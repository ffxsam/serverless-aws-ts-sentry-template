import * as Sentry from '@sentry/serverless';
import { camelCase } from 'change-case';
import { ExtraErrorData, RewriteFrames } from '@sentry/integrations';

Sentry.AWSLambda.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.STAGE === 'dev' ? 'development' : 'production',
  tracesSampleRate: 1,
  integrations: [
    new RewriteFrames({
      iteratee: frame => {
        if (/^\/var\/task\/src\//.test(frame.filename)) {
          frame.filename = frame.filename.replace(
            /^\/var\/task\/src\//,
            'app:///' + camelCase(__dirname.split('/').slice(-1)[0]) + '/src/'
          );
        }

        return frame;
      },
    }),
    new ExtraErrorData({ depth: 5 }),
  ],
});

export default Sentry;
