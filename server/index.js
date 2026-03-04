import express from 'express';
import cors from 'cors';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const app = express();
app.use(cors());
app.use(express.json());

// simple JSON file database
const dbFile = join(__dirname, 'db.json');

// read db from file or init empty
function readDb() {
  if (!existsSync(dbFile)) {
    return { people: [], offers: [] };
  }
  try {
    return JSON.parse(readFileSync(dbFile, 'utf8'));
  } catch {
    return { people: [], offers: [] };
  }
}

// write db to file
function writeDb(data) {
  writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf8');
}

let db = readDb();

// Initialize db with sample data if empty
function initDb() {
  if (db.people.length === 0) {
    db.people = [
      {
        id: 1,
        name: 'Maria Santos',
        email: 'maria@email.com',
        bio: 'Desenvolvedora frontend com 5 anos de experiência.',
        interests: ['React', 'UI/UX', 'TypeScript'],
      },
      {
        id: 2,
        name: 'João Silva',
        email: 'joao@email.com',
        bio: 'Designer gráfico apaixonado por branding.',
        interests: ['Photoshop', 'Ilustração', 'Branding'],
      },
      {
        id: 3,
        name: 'Ana Costa',
        email: 'ana@email.com',
        bio: 'Professora de inglês com certificação TESOL.',
        interests: ['Inglês', 'Espanhol', 'Gramática'],
      },
    ];
  }
  if (db.offers.length === 0) {
    db.offers = [
      {
        id: 1,
        name: 'Maria Santos',
        email: 'maria@email.com',
        bio: 'Desenvolvedora frontend com 5 anos de experiência.',
        interests: ['React', 'UI/UX', 'TypeScript'],
      },
      {
        id: 2,
        name: 'João Silva',
        email: 'joao@email.com',
        bio: 'Designer gráfico apaixonado por branding.',
        interests: ['Photoshop', 'Ilustração', 'Branding'],
      },
      {
        id: 3,
        name: 'Ana Costa',
        email: 'ana@email.com',
        bio: 'Professora de inglês com certificação TESOL.',
        interests: ['Inglês', 'Espanhol', 'Gramática'],
      },
    ];
    writeDb(db);
  }
}

initDb();

// helpers
const getNewId = (collection) => {
  const items = db[collection];
  return items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
};

// endpoints for people
app.get('/people', (req, res) => {
  res.json(db.people);
});

app.post('/people', (req, res) => {
  const person = { ...req.body, id: getNewId('people') };
  db.people.push(person);
  writeDb(db);
  res.status(201).json(person);
});

// endpoints for offers
app.get('/offers', (req, res) => {
  res.json(db.offers);
});

app.post('/offers', (req, res) => {
  const offer = { ...req.body, id: getNewId('offers') };
  const person = db.people.find((p) => p.id === parseInt(offer.personId));
  offer.personName = person?.name || offer.personName || '';
  db.offers.push(offer);
  writeDb(db);
  res.status(201).json(offer);
});

app.put('/offers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = db.offers.findIndex((o) => o.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const updated = { ...db.offers[idx], ...req.body };
  const person = db.people.find((p) => p.id === parseInt(updated.personId));
  updated.personName = person?.name || updated.personName;
  db.offers[idx] = updated;
  writeDb(db);
  res.json(updated);
});

app.delete('/offers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.offers = db.offers.filter((o) => o.id !== id);
  writeDb(db);
  res.status(204).end();
});

// catch-all
app.get('/', (req, res) => {
  res.send('Blog Avanti API');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
