import AWS from "aws-sdk";
import { v4 as UUID } from "uuid";

const s3 = new AWS.S3({
  signatureVersion: "v4",
});

export const s3_service = async (fileData) => {
  const id = UUID();
  const filenameForS3 = `${fileData.name}.${fileData.extension}`;
  const key = `${id}-${filenameForS3}`;
  const params = {
    Bucket: process.env.NAME_BUCKET,
    Key: key,
    Expires: 15 * 60, // 15 minutes
    // ACL: 'public-read',
    ContentType: fileData.ContentType,
  };
  const url = await s3.getSignedUrlPromise("putObject", params);

  return {
    id,
    url,
    key,
    type: fileData.type,
  };
};

export const s3_service_view = async (filename, expires = 15) => {
  const params = {
    Bucket: process.env.NAME_BUCKET,
    Key: filename,
    Expires: expires * 60, // 15 minutes
  };

  return await s3.getSignedUrlPromise("getObject", params);
};
