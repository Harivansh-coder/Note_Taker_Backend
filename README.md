# Note Taking App API Documentation

## Authentication Endpoints

### **POST /v1/auth/signin**

**Endpoint:**

```
localhost:8080/v1/auth/signin
```

**Request Body:**

```json
{
  "email": "hello@gmail.com",
  "password": "123456"
}
```

### **POST /v1/auth/signup**

**Endpoint:**

```
localhost:8080/v1/auth/signup
```

**Request Body:**

```json
{
  "name": "abc",
  "email": "abc@gmail.com",
  "password": "123456"
}
```

---

## Notes Endpoints

### **GET /v1/notes**

**Endpoint:**

```
localhost:8080/v1/notes
```

**Authorization:**

- Bearer Token

---

### **GET /v1/notes/:id**

**Endpoint:**

```
localhost:8080/v1/notes/:id
```

**Authorization:**

- Bearer Token

**Path Variables:**

```json
{
  "id": "67962474e457b1e28fc60304"
}
```

---

### **PUT /v1/notes/:id**

**Endpoint:**

```
localhost:8080/v1/notes/:id
```

**Authorization:**

- Bearer Token

**Path Variables:**

```json
{
  "id": "67962474e457b1e28fc60304"
}
```

**Request Body:**

```json
{
  "title": "abc4321",
  "content": "def123"
}
```

---

### **DELETE /v1/notes/:id**

**Endpoint:**

```
localhost:8080/v1/notes/:id
```

**Authorization:**

- Bearer Token

**Path Variables:**

```json
{
  "id": "67962474e457b1e28fc60304"
}
```

---

### **POST /v1/notes**

**Endpoint:**

```
localhost:8080/v1/notes
```

**Authorization:**

- Bearer Token

**Request Body:**

```json
{
  "title": "abc",
  "content": "abc123",
  "isAudio": true,
  "audioDuration": 10,
  "isNew": true,
  "isFavorite": true,
  "images": ["abc.jpg"]
}
```
