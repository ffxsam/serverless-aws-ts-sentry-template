import type { ValidatedAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import Sentry from '@libs/sentry';

import schema from './schema';
import type { APIGatewayProxyResult } from 'aws-lambda';

const hello = Sentry.AWSLambda.wrapHandler<
  ValidatedAPIGatewayProxyEvent<typeof schema>,
  APIGatewayProxyResult
>(async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
});

export const main = middyfy(hello);
