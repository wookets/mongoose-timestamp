
A simple timestamper for mongoose models.

## Install

In package.json,

```"mongoose-timestamp": "https://github.com/wookets/mongoose-timestamp/0.1.0"```

## Usage

```
var timestamp = require('mongoose-timestamp');
schema.plugin(timestamp);
```

Adds:

* createdOn
* modifiedOn