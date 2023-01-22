# My Portfolio - BackEnd

Here you can find the APIs I have made for my portfolio website!

## Made with

<hr>

- Node JS

## API Documentation

<hr>
<br>

**Domain URL :** *https://anuva-portfolio.onrender.com*

**APIs For :**

1. [Get All Comments](#get-all-comments)
2. [Add a new Comment](#add-a-new-comment)
3. [Delete All Comments](#delete-all-comments)

<br>
<hr>

### Get All Comments

<br>

**Endpoint :** _/api/v1/comments_

**Success Status Code :** 200 OK

**Response :**

```
{
    "status": "Success",
    "count": 2,
    "data": {
        "comments": [
            {
                "_id": "63cd3cc3cd148179887884c7",
                "name": "Anu",
                "comment": "First comment from UI",
                "email": "anu@gmail.com",
                "createdTime": "2023-01-22T13:40:19.730Z",
                "__v": 0
            },
            {
                "_id": "63cd6d435f3dd163c0bd11bd",
                "name": "Anusree",
                "comment": "hii everyone, this is a test comment",
                "email": "anu@gmail.com",
                "createdTime": "2023-01-22T17:07:15.092Z",
                "__v": 0
            }
        ]
    }
}
```

### Add a new Comment

<br>

**Endpoint :** _/api/v1/comments_

**Success Status Code :** 201 Created

**Body :**

```
{
    "name":"Anu",
    "email":"anu@gmail.com",
    "comment":"hii everyone, this is a test comment"
}
```

**Response :**

```
{
    "message": "Comment added Successfully",
    "data": {
        "name": "Anusree",
        "comment": "hii everyone, this is a test comment",
        "email": "anu@gmail.com",
        "createdTime": "2023-01-22T17:07:15.092Z",
        "_id": "63cd6d435f3dd163c0bd11bd",
        "__v": 0
    }
}
```

### Delete All Comments

<br>

**Endpoint :** _/api/v1/comments_

**Success Status Code :** 204 No Content

**Response :** _-_

<hr>
