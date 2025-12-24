import "server-only";
import { getApps, initializeApp, cert, type App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

/**
 * Firebase Admin initialization:
 * - Local dev: can use FIREBASE_SERVICE_ACCOUNT_JSON
 * - Deployed environments (Firebase App Hosting / GCP): should use Application Default Credentials (ADC)
 */
function initAdminApp(): App {
  const existing = getApps();
  if (existing.length > 0) return existing[0];

  const json = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  if (json && json.trim().length > 0) {
    const serviceAccount = JSON.parse(json);
    return initializeApp({
      credential: cert(serviceAccount),
    });
  }

  // Fall back to ADC (recommended for Firebase App Hosting / GCP)
  return initializeApp();
}

export const adminApp = initAdminApp();
export const adminDb = getFirestore(adminApp);
