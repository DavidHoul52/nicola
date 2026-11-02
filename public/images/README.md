# Images

Images sit inside a `.img-placeholder` box, which shows a striped placeholder
until a real image is set. Each one is already an `<img>` with a blank `src` and
descriptive `alt` text:

```html
<div class="img-placeholder lnd-hero-bg">
  <img src="" alt="Calm landscape at first light" />
</div>
```

To drop in a real image, add the file to this folder and fill in `src` — files
are served from the site root, so reference them as `images/<filename>`:

```html
<img src="images/hero.jpg" alt="Calm landscape at first light" />
```

Check the `alt` text still describes the chosen photo.
