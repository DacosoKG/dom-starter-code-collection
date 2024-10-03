# Music Lyrics DOM Project

## Main API endpoint

```js
const apiUrl = "https://api.lyrics.ovh";
```

## GET Songs (search query text can be either Artist name or Song name)

### By Artist name

```js
const artistName = "Eminem";
const apiUrl = `${apiUrl}/suggest/${artistName}`;
```

### By Song name

```js
const songTitle = "tell me you love me";
const apiUrl = `${apiUrl}/suggest/${songTitle}`;
```

## GET Lyrics (we need artistName and songTitle for this)

```js
const artistName = "Eminem";
const songTitle = "tell me you love me";
const apiUrl = `${apiUrl}/v1/${artistName}/${songTitle}`;
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
