import { createApp, expressApp } from '../src/main';

let isReady = false;

async function ensureReady() {
  if (!isReady) {
    await createApp();
    isReady = true;
  }
}

export default async function handler(req: any, res: any) {
  await ensureReady();
  expressApp(req, res);
}
