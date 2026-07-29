#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { EmailSignatureImagesStack } from "../lib/email-signature-images-stack";

const app = new cdk.App();

new EmailSignatureImagesStack(app, "EmailSignatureImagesStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "ap-northeast-1",
  },
});
