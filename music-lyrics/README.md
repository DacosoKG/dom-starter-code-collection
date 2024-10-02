# Music Lyrics DOM Project

## Main API endpoint

```js
const apiUrl1 = "https://api.lyrics.ovh";
```

## GET Songs (search query text can be either Artist name or Song name)

### By Artist name

```js
const queryText1 = "Eminem";
const apiUrl2 = `${apiUrl1}/suggest/${queryText1}`;
```

### By Song name

```js
const queryText2 = "tell me you love me";
const apiUrl3 = `${apiUrl1}/suggest/${queryText2}`;
```

### Displaying Song Lyrics in Modal

```html
<span
    dangerouslySetInnerHTML={{
    __html: lyrics
        ? lyrics.replace(/(\r\n|\r|\n)/g, "<br />")
        : "No lyrics found.",
    }}
></span>
```
