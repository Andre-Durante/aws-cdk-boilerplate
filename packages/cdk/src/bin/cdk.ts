import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloWorldStack } from '../lib/constructs/helloWorldStack';

const app = new cdk.App();
new HelloWorldStack(app, 'HelloWorldStack', {
  env: {
    region: "eu-west-1",
    account: "123456789012"
  }
});
