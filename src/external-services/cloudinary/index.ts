import { v2 } from "cloudinary";
import { v4 as UUID } from "uuid";
import axios from "axios";

v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
}) as any;

export const upload_photo = async (file: any) => {
  const URL = "https://api.cloudinary.com/v1_1/erkvital/image/upload";
  const timestamp = Math.round(new Date().getTime() / 1000);
  const id = UUID();

  const signature = v2.utils.api_sign_request(
    {
      invalidate: true,
      public_id: `hall_${id}`,
      timestamp: timestamp,
      upload_preset: `hall_photo`,
    },
    process.env.API_SECRET || ""
  );

  const data = {
    timestamp: timestamp,
    api_key: process.env.API_KEY,
    file: file,
    upload_preset: "hall_photo",
    public_id: `hall_${id}`,
    signature: signature,
    invalidate: true,
  };

  const headers = {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip, deflate",
  };

  const result = (await axios.post(URL, data, { headers })) as any;

  const photo_url = result.secure_url;

  return photo_url;
};
