# Redux Extension with Thunks and JSON Server 🚀

Building upon our [previous basic example](https://medium.com/@tourlidavagia/mastering-redux-toolkit-part-1-of-3-from-basics-to-rtk-query-dec06d4f8cd2), we're now diving deeper by integrating thunks to handle asynchronous data operations.

## 🎙 Why Thunks?
Thunks and Higher-Order Functions go hand in hand. In essence, a thunk in Redux is like a higher-order function: it doesn't spit out an action object right away but dishes out a function capable of dispatching numerous actions, especially asynchronous ones.

## 🖥 Setting Up a Backend with JSON Server
To focus on Redux and thunks, we're using `JSON Server` to simulate a backend. With a simple `db.json` file, it creates a full REST API:

```json
{
  "movies": [
    {
      "id": 1,
      "title": "Vomito Soluta Trucido",
      "description": "Suscipit ullus tondeo.",
      "imageUrl": "https://picsum.photos/seed/gOdQQ/640/480"
    },
    {
      "id": 2,
      "title": "Tremo Cohaero Amiculum",
      "description": "Cotidie cupio corpus compono aggero.",
      "imageUrl": "https://picsum.photos/seed/w4v7WauzbU/640/480"
    },
    {
      "id": 3,
      "title": "Verecundia Fugit Velociter",
      "description": "Crastinus caterva summopere vinco.",
      "imageUrl": "https://loremflickr.com/640/480?lock=5472803241328640"
    },
    {
      "id": 4,
      "title": "Adsum Alius Spargo",
      "description": "Assumenda vigilo capto angulus uterque vilicus ante aegrotatio demonstro porro.",
      "imageUrl": "https://picsum.photos/seed/GE7g6/640/480"
    }
  ],
  "songs": [
    {
      "id": 1,
      "title": "Vomito Soluta Trucido",
      "description": "Suscipit ullus tondeo.",
      "imageUrl": "https://picsum.photos/seed/gOdQQ/640/480"
    },
    {
      "id": 2,
      "title": "Tremo Cohaero Amiculum",
      "description": "Cotidie cupio corpus compono aggero.",
      "imageUrl": "https://picsum.photos/seed/w4v7WauzbU/640/480"
    },
    {
      "id": 3,
      "title": "Verecundia Fugit Velociter",
      "description": "Crastinus caterva summopere vinco.",
      "imageUrl": "https://loremflickr.com/640/480?lock=5472803241328640"
    },
    {
      "id": 4,
      "title": "Adsum Alius Spargo",
      "description": "Assumenda vigilo capto angulus uterque vilicus ante aegrotatio demonstro porro.",
      "imageUrl": "https://picsum.photos/seed/GE7g6/640/480"
    }
  ]
}
```

## 🔗 API Endpoints

| Method | Endpoint   | Description                      |
|--------|------------|----------------------------------|
| GET    | `/movies`  | Retrieve all movies              |
| GET    | `/movies/1`| Retrieve movie with ID 1         |
| POST   | `/movies`  | Add a new movie                  |
| PUT    | `/movies/1`| Update movie with ID 1           |
| PATCH  | `/movies/1`| Partially update movie with ID 1 |
| DELETE | `/movies/1`| Delete movie with ID 1           |
|--------|------------|----------------------------------|
| GET    | `/songs`   | Retrieve all songs               |
| GET    | `/songs/1` | Retrieve song with ID 1          |
| POST   | `/songs`   | Add a new song                   |
| PUT    | `/songs/1` | Update song with ID 1            |
| PATCH  | `/songs/1` | Partially update song with ID 1  |
| DELETE | `/songs/1` | Delete song with ID 1            |

## 🚀 Server Initilization
Initiate the server using:

```bash
json-server --watch db.json --port 3005
```
## 📝 Quick Note:
Though the UI harks back to our old design, the mechanics, especially data handling, have undergone a complete overhaul, now being powered by thunks.

## 🛠 Setting Things Up

1. **Clone the project**:

   ```bash
   git clone https://github.com/tourlida/redux-toolkit-examples.git
   ```
2. **Navigate to the correct repo**:

   ```bash
   cd rtk-basic-example-using-thunks-boilerplate
   ```

3. **Install dependencies**:

   ```bash
   npm i
   ```
4. **Initialize the JSON server**:

   ```bash
    json-server --watch db.json --port 3005
   ```
5. **In another terminal, start the application:**:

   ```bash
   npm run dev
   ```