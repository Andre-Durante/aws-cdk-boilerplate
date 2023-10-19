import { assertions as assert } from 'aws-cdk-lib';
import { TestStack } from './TestStack';

describe('HelloWorldLambda stack tests', () => {
  let template: assert.Template;
  beforeAll(() => {
    const testStack = TestStack.getInstance();
    console.log('Test Stack:', testStack); // Add this line for debugging
    template = assert.Template.fromStack(testStack);
  });
  test('Stack contains expected count of resources', () => {
    template.resourceCountIs('AWS::Lambda::Function', 1);
    template.resourceCountIs('AWS::IAM::Role', 1);
  });
});
