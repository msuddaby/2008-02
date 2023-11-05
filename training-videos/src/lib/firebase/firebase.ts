import admin from 'firebase-admin';
import { ServiceAccount, getApps, initializeApp } from 'firebase-admin/app';
import { serviceKey } from './serviceKey';


if (!getApps().length) {
    initializeApp({
        credential: admin.credential.cert(serviceKey as ServiceAccount),
        databaseURL: serviceKey.databaseurl,
    
    });
}

const db = admin.database();

export { db };