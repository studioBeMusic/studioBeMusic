import "server-only";

import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

if (!serviceAccountJson) {
  throw new Error(
    "FIREBASE_SERVICE_ACCOUNT_JSON is required to initialize Firebase Admin."
  );
}

const serviceAccount = JSON.parse(serviceAccountJson);

const app: App =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp({
        credential: cert(serviceAccount),
      });

const db = getFirestore(app);

export { app, db };
