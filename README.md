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
}
```

## GET /videos

Return all videos

- Query Params
  - search\
    required: false\
    example: http://localhost:3000/videos?search=godofwartrailer
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
      "id": "VideoID01",
      "title": "God OF War Trailer",
      "imgUrl": "https://localhost:3000/images/god-of-war-trailer.jpg",
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

## Products

Schema for Products

```
{
    id: ObjectId
    video_id: ObjectId
    title: string
    imgUrl: string
    price: number
    price_format: string
    links: [
        product_detail: string
    ]
}
```

## GET /products/{videoID}

Return all products

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/videoID01
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
      "id": "ProductID01",
      "video_id": "VideoID01",
      "title": "Monitor MSI",
      "imgUrl": "https://localhost:3000/images/monitor-msi.jpg",
      "price": 20000,
      "price_format": "Rp. 20.000",
      "links": [
        {
          "product_detail": "https://localhost:3000/api/videos/asodiuhjas890u123"
        }
      ]
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

## Comments

Schema for Comments

```
{
    id: ObjectId
    video_id: ObjectId
    username: string
    message: string
    timestamp: string
}
```

## GET /comments/{videoID}

Return all products

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/videoID01
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
      "id": "CommentID01",
      "video_id": "VideoID01",
      "username": "samy",
      "text": "bagus productnya",
      "timestamp": "1 jam lalu"
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

Return all products

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/videoID01
- Headers\
  Content-Type: application/json
- Request Body

```
{
    "text": "Bagus banget product nya"
}
```

- Responses

##### ✅ 200 Success Get All Comments

```
{
  "status": true,
  "code": 200,
  "message": "Success Get All Comments",
  "data": [
    {
      "id": "CommentID01",
      "video_id": "VideoID01",
      "username": "samy",
      "message": "Bagus banget product nya",
      "timestamp": "1 jam lalu"
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