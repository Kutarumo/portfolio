const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Définir le répertoire des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour la page À propos
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Route pour la page Mon parcours
app.get('/parcours', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'parcours.html'));
});

// Route pour la page Mes stages
app.get('/stages', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'stages.html'));
});

// Route pour la page Mon CV
app.get('/cv', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cv.html'));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port ${PORT}`);
});
