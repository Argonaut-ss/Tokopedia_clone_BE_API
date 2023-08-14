# Tokopedia Play Clone API

## Table Of Content

- [Database Schema](#database-schema)
- [API List](#api-list)
  - [Video](#videos)
  - [Product](#products)
  - [Comment](#comments)
- [How To Run](#how-to-run)
- [API Documentation](#api-documentation)
- [LICENSE](#license)

## Database Schema

Tokopedia Play Clone Database Schema

## Videos

| Field           | Type     |
| --------------- | -------- |
| id              | ObjectId |
| title           | String   |
| url_video       | String   |
| url_thumbnail   | String   |
| store_name      | String   |
| total_view      | Number   |
| discount_coupon | Boolean  |
| only_at_live    | Boolean  |
| createdAt       | Date     |
| updatedAt       | Date     |
| Categories      | Array    |

## Product

| Field       | Type     |
| ----------- | -------- |
| id          | ObjectId |
| videoId     | ObjectId |
| title       | String   |
| url_product | String   |
| url_image   | String   |
| price       | Number   |
| createdAt   | Date     |
| updatedAt   | Date     |

## Comment

| Field          | Type     |
| -------------- | -------- |
| id             | ObjectId |
| videoId        | ObjectId |
| username       | String   |
| commentMessage | String   |
| createdAt      | Date     |
| updatedAt      | Date     |

## API List

## Videos

Schema for videos

```
{
    id: ObjectId
    title: string
    storeName: string
    thumbnailUrl: string
    videoUrl: string
    totalView: number
    discountCoupon: boolean
    onlyAtLive: boolean
    timestamps: timestamps
    categories: array
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
      "id": "64d9010cd949bea26dfc9744",
      "title": "Furniture",
      "thumbnailUrl": "https://i.ytimg.com/vi/aZApJcnukIw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNfKXzFeMHK9qnyQtcEtGsLJTg2Q",
      "videoUrl": "https://youtu.be/aZApJcnukIw",
      "totalView": 329,
      "storeName": "Fur Store",
      "discountCoupon": false,
      "onlyAtLive": true,
      "timestamps": "2023-08-13T16:13:00.377Z",
      "categories": [
          "home & design"
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

## POST /videos

Return Added Video

- Headers\
  Content-Type: application/json
- Request Body

```
{
   "title": "Games",
    "url_video": "https://youtu.be/8wS1Icnlkko",
    "url_thumbnail": "https://localhost:3000/images/god-of-war.jpg",
    "store_name": "The Games Store",
    "total_view": 600,
    "discount_coupon": true,
    "only_at_live": false,
    "categories": ["games"]
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
    "id": "64d901ddd949bea26dfc974a",
    "title": "Games",
    "thumbnailUrl": "https://localhost:3000/images/god-of-war.jpg",
    "totalView": 600,
    "storeName": "The Games Store",
    "discountCoupon": true,
    "onlyAtLive": false,
    "timestamps": "2023-08-13T16:16:29.598Z",
    "categories": [
        "games"
    ]
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
    imageUrl: string
    productUrl: string
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
      "url_product": "https://google.com/monitormsi",
      "url_image": "https://localhost:3000/images/mouse-gaming-murah.jpg",
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
      "imageUrl": "https://localhost:3000/images/mouse-gaming-murah.jpg",
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
    commentMessage: string
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
      "commentMessage": "bagus banget",
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

## How To Run

Prerequisite

- Node^20.0.0
- NPM^9.6.7
- MongoDB^6.0.6

1. Clone This Repo
2. Install Node Packages

```
npm install
```

3. Install MongoDB Community
4. Setup The Environment or Rename .env.example to .env
5. Run The Project

```
npm start
```

## API Documentation

API documentation at [localhost:3000/docs/api](http://localhost:3000/docs/api)

## LICENSE

[MIT LICENSE](./LICENSE)
