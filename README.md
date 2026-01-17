## bypass-id

A Discord/[Shelter](https://shelter.uwu.network/) plugin intended to bypass the ID verification on age-gated channels, with the intention to protect the users privacy.

### How to install

1. Install [Shelter](https://shelter.uwu.network/install).
2. Go to **User Settings -> (Shelter) Settings -> Add Plugin**.
3. Fill out the fields (`name`, `author`, `description`), they do not have to be correct.
4. Paste the file contents from `./plugins/bypass-id/index.jsx` into the `code` field.
5. Click `Add`.
6. ???
7. Profit.

### Notes

> [!CAUTION]
> The plugin currently has a hardcoded header `X-Super-Properties` value, which is documented [here](https://docs.discord.food/reference#client-properties).
> To prevent getting flagged/banned I suggest to at least replace this with one of your own `X-Super-Properties` value from the
> Network inspector of your client/browser by looking at discord requests, and checking the request headers for the header.

Due to the nature of the data stored inside the header this value should change on each request, but fuck it.
