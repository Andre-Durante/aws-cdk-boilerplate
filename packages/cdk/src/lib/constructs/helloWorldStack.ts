import { Construct } from 'constructs';
import { aws_lambda as lambda, aws_iam as iam, Duration, StackProps, Stack } from 'aws-cdk-lib';

export class HelloWorldStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const helloWorldLambdaRole = new iam.Role(this, "HelloWorldLambdaRole", {
      roleName: `HelloWorldLambdaRole`,
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    });

    helloWorldLambdaRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaVPCAccessExecutionRole")
    );
    helloWorldLambdaRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")
    );

    const helloWorldFn = new lambda.Function(this, "HelloWorldLambda", {
      functionName: "HelloWorldLambdaFn",
      code: lambda.Code.fromAsset(
        `${__dirname}/../../../../../dist/packages/cdk`
      ),
      handler: "main.handler",
      runtime: lambda.Runtime.NODEJS_18_X,
      tracing: lambda.Tracing.ACTIVE,
      role: helloWorldLambdaRole,
      memorySize: 512,
      timeout: Duration.minutes(1),
    });
  }
}
