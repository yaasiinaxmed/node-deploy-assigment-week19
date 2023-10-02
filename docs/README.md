# API Documentation for Bookstore 

## Introduction
This document provides a guide on how to use the Sign up and Login API for Owner. The API is hosted at `https://bookstore-0axz.onrender.com/`

### Authentication
Most endpoints in the API require authentication using JSON Web Tokens (JWT). To authenticate, include the `Authorization` header in the request with the JWT. The header should be in the format: Bearer `<token>`, where `<token>` is the JWT obtained during the login process.

## Endpoints
The API has four endpoints:

### Owner Registration
**Endpoint**: `POST /api/owners`

`/signup`: This endpoint is used to create a new owner account. The request should be a POST request with the following parameters:

### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| name        | String | Yes      | The name of the owner.      |
| email       | String | Yes      | The email of the owner.     |
| Password    | String | Yes      | The password of the owner.  |

#### Response :

```json
{
  "status": 201,
  "message": "Owner created successFully",
  "newOwner": {
    "id": 2,
    "name": "Yaasiin Ahmed",
    "email": "yaskaassoy@gmail.com",
    "password": "$2b$10$XrCBl8L/VETAz1ZoNfqMxuBd3alzGRzoBOy9yx5Kgeved83NYYc1W",
    "created": "2023-10-02T03:47:42.765Z",
    "updated": "2023-10-02T03:47:42.765Z"
  }
}
```

If the owner already exists, a `409 Conflict` response will be returned. If the request is successful, a `201 Created` response will be returned with the new owner’s details.

#### Owner Login 
**Endpoint**: `POST /api/owners/login`
This endpoint is used to log in an existing owner. The request should be a POST request with the following parameters:

### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| email       | String | Yes      | The email of the owner.     |
| Password    | String | Yes      | The password of the owner.  |

### Response :
``` json 
{
  "status": 200,
  "message": "Owner logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ5YXNrYWFzc28zeUBnbWFpbC5jb20iLCJpYXQiOjE2OTYyMjE4MDgsImV4cCI6MTY5NjIyNTQwOH0.13JEak-uRxX-9x2Wf15Otwee4NJvBwaxXZWsUwhv0sg"
}
```

If the owner does not exist, a `404 Not Found` response will be returned. If the password is incorrect, a` 401 Unauthorized` response will be returned. If the request is successful, a `200 OK` response will be returned with a JSON Web Token (JWT) that can be used to authenticate future requests.

### Bookstore Endpoints: 
#### Create BookStore 
**EndPoint:** `POST /api/bookstore/create_bookStore`

This endpoint is used to create a new bookstore. The request should be a POST request with the following parameters:

### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| ownerId       | Number | Yes      | The OwnerId of the bookstore.     |
| name       | String | Yes      | The name of the bookstore.     |
| location    | String | Yes      | The location of the bookstore.  |

### Response

``` json 
{
  "status": 200,
  "message": "BookStore successFully created!"
}
```

If the bookstore was not created, a `400 Bad Request` response will be returned. If the request is successful, a `200 OK` response will be returned with a message indicating that the bookstore was created successfully.

### Bookstore Update
**EndPoint:** `PUT /api/bookstore/update_bookStore/:id`

This endpoint is used to update an existing bookstore. The request should be a PUT request with the following parameters:
### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| ownerId       | Number | Yes      | The OwnerId of the bookstore.     |
| name       | String | Yes      | The name of the bookstore.     |
| location    | String | Yes      | The location of the bookstore.  |

If the bookstore does not exist, a `404 Not Found `response will be returned. If the update was not successful, a `500 Internal Server` Error response will be returned. If the request is successful, a `200 OK` response will be returned with a message indicating that the bookstore was updated successfully.

### Response :

``` json
{
  "status": 200,
  "message": "BookStore successFully updated!"
}
```

### Bookstore Delete
**EndPoint:** `DELETE /api/bookstore/delete_bookStore/:id`
This endpoint is used to delete an existing bookstore. The request should be a DELETE request with the following parameter:

### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| id       | Number | Yes      | The ID of the bookstore.     |


### Response : 

``` json
{
  "status": 200,
  "message": "BookStore successFully deleted!"
}
```

If the bookstore does not exist, a `404 Not Found` response will be returned. If deletion was not successful, a `500 Internal Server` Error response will be returned. If deletion was successful, a `200 OK` response will be returned with a message indicating that the bookstore was deleted successfully.


#### Create Author
**EndPoint:** `POST /api/authors/create_author`

This endpoint is used to create a new author. The request should be a POST request with the following parameters:

### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| name       | String | Yes      | The name of the author.     |

### Response

``` json 
{
  "status": 200,
  "message": "Author successFully created!"
}
```

If the author was not created, a `400 Bad Request` response will be returned. If the request is successful, a `200 OK` response will be returned with a message indicating that the author was created successfully.

### Author Update
**EndPoint:** `PUT /api/authors/update_author/:id`

This endpoint is used to update an existing author. The request should be a PUT request with the following parameters:
### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| id       | Number | Yes      | The ID of the author.     |
| name       | String | Yes      | The name of the author.     |

If the author does not exist, a `404 Not Found `response will be returned. If the update was not successful, a `500 Internal Server` Error response will be returned. If the request is successful, a `200 OK` response will be returned with a message indicating that the author was updated successfully.

### Response :

``` json
{
  "status": 200,
  "message": "Author successFully updated!"
}
```

### Author Delete
**EndPoint:** `PUT /api/authors/delete_author/:id`
This endpoint is used to delete an existing author. The request should be a DELETE request with the following parameter:

### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| id       | Number | Yes      | The ID of the author.     |


### Response : 

``` json
{
  "status": 200,
  "message": "Author successFully deleted!"
}
```

If the author does not exist, a `404 Not Found` response will be returned. If deletion was not successful, a `500 Internal Server` Error response will be returned. If deletion was successful, a `200 OK` response will be returned with a message indicating that the author was deleted successfully.

#### Create book
**EndPoint:** `POST /api/books/create_book`

This endpoint is used to create a new book. The request should be a POST request with the following parameters:

### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| authorId       | String | Yes      | The authorId of the book.     |
| bookstoreId       | String | Yes      | The bookstoreId of the book.     |
| title       | String | Yes      | The title of the book.     |
| price       | Number | Yes      | The price of the book.     |
| image       | String | Yes      | The image of the book.     |

### Response

``` json 
{
  "status": 200,
  "message": "Book successFully created!"
}
```

If the book was not created, a `400 Bad Request` response will be returned. If the request is successful, a `200 OK` response will be returned with a message indicating that the book was created successfully.

### book Update
**EndPoint:** `PUT /api/books/update_book/:id`

This endpoint is used to update an existing book. The request should be a PUT request with the following parameters:
### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| id       | Number | Yes      | The ID of the book.     |
| authorId       | String | Yes      | The authorId of the book.     |
| bookstoreId       | String | Yes      | The bookstoreId of the book.     |
| title       | String | Yes      | The title of the book.     |
| price       | Number | Yes      | The price of the book.     |
| image       | String | Yes      | The image of the book.     |

If the book does not exist, a `404 Not Found `response will be returned. If the update was not successful, a `500 Internal Server` Error response will be returned. If the request is successful, a `200 OK` response will be returned with a message indicating that the book was updated successfully.

### Response :

``` json
{
  "status": 200,
  "message": "Book successFully updated!"
}
```

### Book Delete
**EndPoint:** `PUT /api/books/delete_book/:id`
This endpoint is used to delete an existing book. The request should be a DELETE request with the following parameter:

### Request body :

| Parameter   | Type   | Required | Description                 |
| ----------- | ------ | -------- | ----------------------------|
| id       | Number | Yes      | The ID of the book.     |


### Response : 

``` json
{
  "status": 200,
  "message": "Book successFully deleted!"
}
```

If the book does not exist, a `404 Not Found` response will be returned. If deletion was not successful, a `500 Internal Server` Error response will be returned. If deletion was successful, a `200 OK` response will be returned with a message indicating that the book was deleted successfully.