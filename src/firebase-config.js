const rebase = require('re-base')
const firebase = require('firebase')

// config copiado da plataforma do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBdg8uuA5rD6W-tEVuNx-jH96xMHbYxFRc",
    authDomain: "company-react-curso.firebaseapp.com",
    databaseURL: "https://company-react-curso.firebaseio.com",
    projectId: "company-react-curso",
    storageBucket: "company-react-curso.appspot.com",
    messagingSenderId: "1059878978953",
    appId: "1:1059878978953:web:a9a8ff791405b52f678d58"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const config = rebase.createClass(app.database());

// exportar o storage para salvar as imagens, importar no AdminPortfolio
export const storage = app.storage();

export default config;