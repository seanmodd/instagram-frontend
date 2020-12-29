// @flow
import * as React from 'react';

const post = {{
    "id": 1,
    "description": "Driver-side picture with schedule of deliveries!",
    "likes": 20,
    "author": null,
    "published_at": "2020-12-29T01:59:30.324Z",
    "created_at": "2020-12-29T01:59:29.166Z",
    "updated_at": "2020-12-29T01:59:30.360Z",
    "image": [
        {
            "id": 1,
            "name": "IMG_5674.PNG",
            "alternativeText": "",
            "caption": "",
            "width": 828,
            "height": 1792,
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_IMG_5674.PNG",
                    "hash": "thumbnail_IMG_5674_cfa4616c3b",
                    "ext": ".PNG",
                    "mime": "image/png",
                    "width": 72,
                    "height": 156,
                    "size": 6.26,
                    "path": null,
                    "url": "/uploads/thumbnail_IMG_5674_cfa4616c3b.PNG"
                },
                "large": {
                    "name": "large_IMG_5674.PNG",
                    "hash": "large_IMG_5674_cfa4616c3b",
                    "ext": ".PNG",
                    "mime": "image/png",
                    "width": 462,
                    "height": 1000,
                    "size": 68.21,
                    "path": null,
                    "url": "/uploads/large_IMG_5674_cfa4616c3b.PNG"
                },
                "medium": {
                    "name": "medium_IMG_5674.PNG",
                    "hash": "medium_IMG_5674_cfa4616c3b",
                    "ext": ".PNG",
                    "mime": "image/png",
                    "width": 347,
                    "height": 750,
                    "size": 47.03,
                    "path": null,
                    "url": "/uploads/medium_IMG_5674_cfa4616c3b.PNG"
                },
                "small": {
                    "name": "small_IMG_5674.PNG",
                    "hash": "small_IMG_5674_cfa4616c3b",
                    "ext": ".PNG",
                    "mime": "image/png",
                    "width": 231,
                    "height": 500,
                    "size": 27.61,
                    "path": null,
                    "url": "/uploads/small_IMG_5674_cfa4616c3b.PNG"
                }
            },
            "hash": "IMG_5674_cfa4616c3b",
            "ext": ".PNG",
            "mime": "image/png",
            "size": 71.28,
            "url": "/uploads/IMG_5674_cfa4616c3b.PNG",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "created_at": "2020-12-29T01:59:01.550Z",
            "updated_at": "2020-12-29T01:59:01.563Z"
        }
    ]
}}

export default () => {
const url = post.image && post.image.url
const description = post.description
const likes = post.likes
<div className='Post'>This is a Post

</div>;
