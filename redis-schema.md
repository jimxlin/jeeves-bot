# Redis Schema

The structure for storing user data is as follows, based on [this guide](https://redis.io/topics/twitter-clone):

```JAVASCRIPT
"DB": {
  "users": {
    "abcd1234": "1",
    "defg5678": "2",
    ...
    "hijk9012": "50"
  },
  "next_user_id": "51",
  "user:1": {
    discord_id: "abcd1234",
    updated_at: "1519211809934",
    nickname: "adam aardvark",
    initials: "AA",
    balance: "10000"
  },
  "user:2": {
    discord_id: "defg5678",
    updated_at: "1519211217538",
    nickname: "brian bardum",
    initials: "BB",
    balance: "10000"
  },
  ...
  "user:50": {
    discord_id: "hijk9012",
    updated_at: "1519211863492",
    nickname: "caleb cassowary",
    initials: "CC"
    balance: "10000",
  }
}
```