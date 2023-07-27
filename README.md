# Tokopedia Play Clone API

## Table Of Content
- [Database Schema](#database-schema)
- [API List](#api-list)
    - [Video](#videos)
    - [Product](#products)
    - [Comment](#comments)
- [API Documentation](#api-documentation)
- [LICENSE](#license)

## Database Schema

Tokopedia Play Clone Database Schema

![Table Videos](./docs/images/table_video_schema.png) ![Table product](./docs/images/table_product_schema.png) ![Table comment](./docs/images/table_comment_schema.png)

## API List

## Videos

Schema for videos

```
{
    id: ObjectId
    title: string
    imgUrl: string
    videoUrl: string
}
```

## GET /videos

Return All Videos

- Query Params
  - search\
    required: false\
    example: http://localhost:3000/videos?search=gebyardiskon

- Headers\
  Content-Type: application/json
- Responses

##### ✅ 200 Success Get All Videos

```
{
  "status": true,
  "code": 200,
  "message": "Success Get All Videos",
  "data": [
    {
      "id": "64c28a13380224e9df0392f1",
      "title": "God Of War Trailer",
      "imgUrl": "https://localhost:3000/images/god-of-war.jpg",
      "videoUrl": "https://localhost:3000/api/videos/godofwar"
    }
  ]
}
```

##### ❌ 404 Data Not Found

```
{
  "status": false,
  "code": 404,
  "message": "Data Not Found",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## POST /videos

Return Added Video
- Headers\
  Content-Type: application/json
- Request Body

```
{
  "title": "God Of War Trailer",
  "url_video": "https://localhost:3000/images/god-of-war.jpg",
  "url_image": "https://localhost:3000/videos/bjabsd8b234jhbs"
}
```

- Responses

##### ✅ 200 Success Added Video

```
{
  "status": true,
  "code": 200,
  "message": "Success Added Video",
  "data": {
    "id": "64c28a13380224e9df0392f1",
    "title": "God Of War Trailer",
    "imgUrl": "https://localhost:3000/images/god-of-war.jpg",
    "videoUrl": "https://localhost:3000/api/videos/bjabsd8b234jhbs"
  }
}
```

##### ❌ 400 Failed to Add Video

```
{
  "status": false,
  "code": 400,
  "message": "Failed to Add Video",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## Products

Schema for Products

```
{
    id: ObjectId
    videoId: ObjectId
    title: string
    imgUrl: string
    price: number
    priceFormat: string
}
```

## GET /products/{videoID}

Return All Products

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/64c28a13380224e9df0392f1
- Headers\
  Content-Type: application/json
- Responses

##### ✅ 200 Success Get All Products

```
{
  "status": true,
  "code": 200,
  "message": "Success Get All Products",
  "data": [
    {
      "id": "64c28a13380224e9df03452d",
      "videoId": "64c28a13380224e9df0392f1",
      "title": "Mouse Gaming Murah",
      "productUrl": "https://google.com/monitormsi",
      "imgUrl": "https://localhost:3000/images/mouse-gaming-murah.jpg",
      "price": 20000,
      "priceFormat": "Rp. 20.000",
    }
  ]
}
```

##### ❌ 404 Data Not Found

```
{
  "status": false,
  "code": 404,
  "message": "Data Not Found",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## POST /products/{videoID}

Return Added Product

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/videoID01
- Headers\
  Content-Type: application/json
- Request Body

```
{
  "title": "Monitor MSI",
  "url_image": "https://localhost:3000/images/monitor-msi.jpg",
  "url_product": "https://google.com/monitormsi",
  "price": 1000000
}
```

- Responses

##### ✅ 200 Success Added Product

```
{
  "status": true,
  "code": 200,
  "message": "Success Added Product",
  "data": [
    {
      "id": "64c28a13380224e9df8238t2",
      "videoId": "64c28a13380224e9df0392f1",
      "title": "Mouse Gaming Murah",
      "imgUrl": "https://localhost:3000/images/mouse-gaming-murah.jpg",
      "productUrl": "https://google.com/monitormsi",
      "price": 20000,
      "priceFormat": "Rp. 20.000",
    }
  ]
}
```

##### ❌ 400 Failed to Add Video

```
{
  "status": false,
  "code": 400,
  "message": "Failed to Add Product",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## Comments

Schema for Comments

```
{
    id: ObjectId
    videoId: ObjectId
    username: string
    text: string
    timestamp: string
}
```

## GET /comments/{videoID}

Return All Comments

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/64c28a13380224e9df0392f1
- Headers\
  Content-Type: application/json
- Responses

##### ✅ 200 Success Get All Comments

```
{
  "status": true,
  "code": 200,
  "message": "Success Get All Comments",
  "data": [
    {
      "id": "64c28a13380224e9df03934t3",
      "videoId": "64c28a13380224e9df0392f1",
      "username": "samy",
      "text": "bagus banget",
      "timestamp": "2023-07-26T12:03:18.273Z"
    }
  ]
}
```

##### ❌ 404 Data Not Found

```
{
  "status": false,
  "code": 404,
  "message": "Data Not Found",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## POST /comments/{videoID}

Return Posted Comment

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/videoID01
- Headers\
  Content-Type: application/json
- Request Body

```
{
    "username": "samy",
    "comment_message": "bagus banget"
}
```

- Responses

##### ✅ 200 Success Added Comment

```
{
  "status": true,
  "code": 200,
  "message": "Success Added Comment",
  "data": [
    {
      "id": "64c28a13380224e9df0395t5",
      "videoId": "64c28a13380224e9df0392f1",
      "username": "samy",
      "commentMessage": "bagus banget",
      "timestamp": "2023-07-26T12:03:18.273Z"
    }
  ]
}
```

##### ❌ 400 Failed to Post Comment

```
{
  "status": false,
  "code": 400,
  "message": "Failed to Post Comment",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## API Documentation

API documentation at [localhost:3000/docs/api](http://localhost:3000/docs/api)

## LICENSE

[MIT LICENSE](./LICENSE)