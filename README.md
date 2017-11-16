# control-loader
The `control-loader` is json loader moudle for webpack. It works for yigo2.0 in Boke Corp.
## Feature
From
```json
{
    "Login":"yes-native/Login"
}
```

to

```javascript
import { Login as Login } from 'yes-native';

export default { Login };
```



## Contribute

```
npm install
```

```
npm run test
```