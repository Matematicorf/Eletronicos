import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// 1. IMPORTAÇÕES DO FIREBASE (Adicionado o provideFirestore e getFirestore)
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore'; 

const firebaseConfig = {
  apiKey: "AizaSydXa1cj0E9wseNlXGfSicLm2s16EnRj1hw",
  authDomain: "sistema-eco.firebaseapp.com",
  projectId: "Eletrônicos atacados LIda",
  storageBucket: "sistema-eco.firebasestorage.app",
  messagingSenderId: "63480033611",
  appId: "1:63480033611:web:52257f8db3559d420738ce",
  measurementId: "G-L6NXRDRG5S"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    
    // 2. INCLUSÃO DOS PROVEDORES DO FIREBASE NA LISTA ATUAL
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), // <-- ADICIONEI ESTA LINHA PARA ATIVAR O FIRESTORE
 ]
};