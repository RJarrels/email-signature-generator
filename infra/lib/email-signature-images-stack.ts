import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class EmailSignatureImagesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "SignatureImagesBucket", {
      bucketName: `ifit-email-signature-images-${this.account}`,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: true,
        ignorePublicAcls: true,
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
      }),
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: false,
    });

    bucket.grantPublicAccess("images/*", "s3:GetObject");

    new cdk.CfnOutput(this, "BucketName", {
      value: bucket.bucketName,
      description: "S3 bucket name for email signature images",
      exportName: "EmailSignatureImagesBucketName",
    });

    new cdk.CfnOutput(this, "BucketUrl", {
      value: `https://${bucket.bucketName}.s3.${this.region}.amazonaws.com`,
      description: "Public S3 URL for email signature images",
      exportName: "EmailSignatureImagesBucketUrl",
    });
  }
}
