import { Stack, App } from 'aws-cdk-lib';
import { HelloWorldStack } from "../lib/constructs/helloWorldStack";
export class TestStack extends Stack {
  private static instance: HelloWorldStack;

  public static getInstance(): HelloWorldStack {
    if (!TestStack.instance) {
      TestStack.instance = new HelloWorldStack(new App(), 'MyTestStack', {
        env: {
          account: '123456789012',
          region: 'eu-west-1',
        },
      });
    }
    return TestStack.instance;
  }
}


